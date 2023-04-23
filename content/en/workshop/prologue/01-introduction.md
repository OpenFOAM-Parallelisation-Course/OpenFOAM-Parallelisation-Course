---
title: "Introduction"
description: "A few words motivating the 'parallelization in OpenFOAM' workshop and providing an overview of parallelization landscape in high performance computing."
lead: "A few words motivating the 'parallelization in OpenFOAM' workshop and providing an overview of parallelization landscape in high performance computing."
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  workshop:
    parent: "prologue"
    identifier: "introduction"
weight: 2
toc: true
lecture: true
url: "/workshop/prologue/introduction"
---

## Lecture video

{{< placeholder date="the next training day" >}}

{{< details  "Module transcript" >}}
Hi, my name is Elwardi and I'm happy to welcome you to this short workshop on
parallel programming in OpenFOAM.

Before we jump into the first module, I want to give a brief introduction to the
scope of the workshop and position ourselves on high performance computing
landscape.

Basically explain what it's all about and why we're doing this?

---

Well, essentially, the reason why this field exists is because simulating some
phenomena can be a bit hard as it may require more computing power than a
typical PC or a laptop can provide.

And the question is, well, what do you do when you hit such a problem?

The first step is of course, to try and optimize the problem, basically
attempting to rewrite your algorithms so they use the hardware resources more
efficiently.

But in some cases, whatever you do, the hardware you have locally on a single
system will be insufficient and you need to expand by using more hardware or by
using several machines at the same time.

So these are the kinds of approaches we're going to talk about.

---

In the context of a single core of execution, data vectorization plays an
important role in optimizing efficiency.

This is done mostly by the compiler these days, and goes along the lines of
optimizing number of operations and executing these operations on vectors
concurrently if possible.

---

Next up, of course, we have the situation that many CPUs now come with multiple
cores.

And so, here, what you can do is you can leverage multithreading.

There are actually different ways of leveraging it.

There is the declarative way using OpenMP and There's also the imperative way by
using threads explicitly or using some sort of thread abstraction that your
operating system or library provides you with.

---

For the purposes of this workshop we'll be assuming that this is done with
maximum efficiency, although multithreading is only used in OpenFOAM for IO and
system operations.

---

Now, the question is, what if a single machine is quite simply insufficient?

In this case, we look at building machine clusters, in essence, several machines
working together to solve a particular problem. 

And MPI, the message passing interface, is probably the most popular framework
for enabling us to do that.

In this workshop, we'll be focusing on learning this particular approach as it's
used extensively in OpenFOAM.

---

Finally, there's also custom parallelization hardware. The most popular form
being, of course, graphics accelerators and the idea of general purpose
computing on GPUs.

This lets you leverage the graphics device, not for rendering graphics, but
rather for solving particular mathematical problems which map onto the GPU
architecture well. And for this we have several frameworks like OpenCL and Cuda.

Although can be useful, We're considering hardware accelerators, like GPUs and
FPGAs to be out of scope for this particular workshop.

---

To give you a bit of an idea on who's running this workshop; I'm a PhD student
at TU Darmstadt and a member of the Energy Conversion SDL at the German NHR for
Computational Engineering Science.

The two PIs I'm in close contact with are:

Holger, who will be here with us hopefully in the hands-on sessions,

and professor Christian Hasse, the head of STFS institute.

The Energy Conversion group is much larger, working on multiple topics which
relate to the development of efficient HPC software and methods for reactive CFD.

---

In the next segment, we look at the general agenda for our workshop and will
provide you with a road-map so you can easily follow along.
{{< /details >}}
