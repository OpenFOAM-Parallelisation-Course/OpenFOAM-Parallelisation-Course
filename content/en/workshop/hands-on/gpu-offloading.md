---
title: "GPU offloading with OpenMP"
description: ""
lead: "A quick guide to outline the most important aspects of GPU offloading with OpenMP in OpenFOAM context."
date: 2023-11-12T14:41:39+01:00
lastmod: 2023-11-12T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  workshop:
    parent: "hands-on"
    identifier: "gpu-offloading-with-openmp"
weight: 206
mermaid: true
toc: true
---

In this optional section, we'll explore the use of GPUs with OpenFOAM and OpenMP.

<div class="card-bar"></div><br>

{{< alert icon="👉" context="warning" >}}
This article is incomplete, and it only supports NVIDIA GPUs.
{{< /alert >}}

## Base benchmarks

The [OpenMP-OpenFOAM-benchmarks](https://github.com/FoamScience/OpenMP-OpenFOAM-benchmarks) repository provides a set of quick benchmarks
to showcase the possible benefits of using OpenMP constructs on OpenFOAM loops. The test case is a simple computation pattern
that is popular in meshless methods where a kernel function is usually used as a weight for a set of sample points to approximate a
target value at a particular position.

The benchmarks feature the following speedups on Github machines (You can always consult reports from CI jobs for updated information):
```
benchmark name                       samples       iterations    estimated
                                     mean          low mean      high mean
                                     std dev       low std dev   high std dev
-------------------------------------------------------------------------------

Original looping                               100             1    856.051 ms
                                        8.60526 ms    8.58056 ms    8.63656 ms
                                        141.078 us    116.117 us    201.586 us

CPU openMP looping                             100             1    471.849 ms
                                        4.72523 ms    4.70228 ms    4.77649 ms
                                        166.204 us    94.5203 us     334.01 us
```

The performance benefits of adding `#pragma omp parallel for` (check the difference of implementing [openMPLoop()](https://github.com/FoamScience/OpenMP-OpenFOAM-benchmarks/blob/5945d5aa564b38e63354d0b4347cc8e4cfa52b94/openmpTests.C#L37) and [originalLoop()](https://github.com/FoamScience/OpenMP-OpenFOAM-benchmarks/blob/5945d5aa564b38e63354d0b4347cc8e4cfa52b94/openmpTests.C#L19)) come basically for **free**. All you have to do is

Github machines provide no accelerators, so the code that is supposed to run on the GPU will just run on the CPU.

A few tasks are left to the reader:
1. Try to run the benchmarks locally and evaluate how good the GPU offloading is on your system.
2. Add `-O0` to [Make/options](https://github.com/FoamScience/OpenMP-OpenFOAM-benchmarks/blob/5945d5aa564b38e63354d0b4347cc8e4cfa52b94/Make/options#L2) to disable filling of compile-time values and observe the difference in speedup.
3. Adapt [openmpTests.C](https://github.com/FoamScience/OpenMP-OpenFOAM-benchmarks/blob/main/openmpTests.C) to work for vector operations too.
4. Increase [the number of field elements](https://github.com/FoamScience/OpenMP-OpenFOAM-benchmarks/blob/5945d5aa564b38e63354d0b4347cc8e4cfa52b94/openmpTests.C#L15) (maybe by 10x fold) and see what happens!
