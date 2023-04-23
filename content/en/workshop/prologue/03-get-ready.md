---
title: "Get ready"
description: "A recap of the most basic concepts around parallel programming in CFD Software."
lead: "A recap of the most basic concepts around parallel programming in CFD Software."
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  workshop:
    parent: "prologue"
    identifier: "get-ready"
weight: 4
toc: true
lecture: true
quiz: true
url: "/workshop/prologue/get-ready"
---

## Lecture video

{{< placeholder date="the next training day" >}}

{{< details  "Module transcript" >}}
Welcome back to the first section of this workshop, where I want to quickly
introduce the most basic concepts around parallel programming in CFD software.

---

First, let's start with my favorite analogy for parallel workers, which is the
formula 1 pit stops.

Those people can perform all pit-stop manoeuvres in under 2
seconds, by working effectively together; which would take a single worker minutes to
complete. 

It's quite impressive that they use almost all modes of working in
parallel to squeeze out the best speedup they can get - in the end it's a race!

---

We notice that there is a particular type of parallel work focusing on
splitting "the objects" between workers, which carry out the same set of operations
on these objects. More precisely, you can see how 4 workers are changing the 4 tyres.

---

So, this is our first type of parallelism and in CFD context, it is usually
applied to the discrete form of the simulated domain - eventually resulting in
partitioning your matrix systems across workers.

---

There are a couple of other types which we won't be focusing on such as:

- Parallel Tasks; in which workers execute different instructions on possibly
  different data - also known as multi-threading.
  In our example, you can think of the workers mounting the tyres on one hand 
  and the workers holding the stop marks on the other hand.

- There is also Parallel Pipelines, which is used extensively in GPU environments.
  It consists of splitting workers between producers and consumers if a task
  needs more than one phase to be completed. A good example is the operation of
  swapping tyres, one worker removes the tyre, another picks up a new one,
  hands it over to another worker which holds into place, and another worker
  plugs it in. Note that the last worker can be the same as the first one if
  his job was done by the time he's needed again.

---

Our primary focus will be data parallelism for this introductory workshop. The
basic idea is that you have a mesh, and you need to decompose it, along with any
important fields.

---

In OpenFOAM, this can be done through a number of "decomposition methods".
Simple and hierarchical decompose the domain geometrically. You can simply
precise the number of desired partitions in each direction.

---

On the other hand, metis-based and scotch methods rely less on geometry and try
to minimize processor-processor boundaries instead. Of course, your OpenFOAM
fork might provide more methods or improved versions of these ones - but these
are the most important families of decomposition methods, in addition to the
manual approach where each mesh cell can be allocated to a specific processor.

---

Now, traditionally, the handling of processor-to-processor communication relied
on the addition of ghost cells. This has two main drawbacks;

First, adding ghost cells involves calculations on adjoint fields which makes
the MPI calls in the code not self-adjoint. This basically means that different
processes will need to make different MPI calls - which makes the code more
difficult to maintain and extend.

The second drawback is, obviously, the artificial computational overhead caused
by adding ghost cells.

---

Well, OpenFOAM does things differently by handling communication across
processor boundaries as boundary conditions on boundary faces. This approach is
called "zero-halo", referring to the absence of ghost cells, and results in all
processors performing the same amount of work at the processor boundaries.

---

As a simple example, communicating a boundary-face based list across processor
boundaries usually is achieved by swapping the local lists between the
processors.

Note that this can be achieved seamlessly using standard API
calls which execute on all processors once the exchange has happened.

Subsequent local operations will usually be the same on all processors;
eliminating the need to check for processor IDs and preventing usage of any
spaghetti code that is related to processor ranks.

---

Okay, I feel this got technical very quickly, so let's take a step back and try
to look at the big picture again. Similar to the types of parallel work which
categorize the nature of the parallel operations, we can also characterize the
hardware configuration in a similar manner:

---

First, we have the distributed memory model, which exclusively relies on Message
Passing Interface to run programs on multiple machines. That's how HPC clusters
are built.

Next, multi-threading is usually used in shared memory settings, so one machine
with many CPU cores. OpenMP is the de-facto standard for this model - which we
won't focus on for now.

And of course, when using accelerator hardware, GPU programming frameworks are
popular which usually treat data as streams of some elements, and execute
kernels on them.

---

Well, we've talked a lot about this MPI framework, and I think it's about time
we try to run a command in parallel.

So, let's first start with 'echo'. Which does nothing but writing its input
string to the console. Note that if you plug the echo command into an mpirun
call with 3 processes, the input string gets output three times. That's not the
intended behaviour, as we most likely want to output only one string using the
3 processes; so, each process should write only a portion of the input string.

---

The same happens if you run an OpenFOAM solver just like that. Actually, that
works even if the case is not decomposed, and will duplicate the simulation on
the whole mesh for the three processes.

---

OK, 'echo' is a very basic command; so basic that it only links to the libc
shared library. Thus, we can understand that it can't possibly support MPI
protocols. OpenFOAM solvers are different though; if you check them out with the
ldd command, you'll see an mpi library among their linked libraries, which is
the one responsible for the implementation of MPI functions.

A little bit of research will reveal that, in order to run the solvers, and
other OpenFOAM utilities in parallel mode, you need to add the parallel flag.

---

This is important, because, if we take a look at the general anatomy of MPI
programs, we notice two important calls, the first one is an initialization of
the communications and the second one correctly shuts them down.

---

Well, in OpenFOAM solvers, this is all handled through the set root case header
which is usually included near the start of main. This header file declares and
initializes an argList object which processes the arguments list. If parallel
was provided, it calls MPI init in the constructor of its ParRunControl member,
and MPI finalize in its destructor. Because the header is included at main
scope, the solvers have the same anatomy as a simple MPI program, just hidden
away behind some Object Orientation constructs.

---

Note that when running in parallel, the time object is pointed to the processor
folder instead of the root case folder; this has the effect of needing at least
a controlDict in there, even if it's just a symlink to the global one.

As you can see, much of the MPI-specific code is hidden away to the point that
you don't really need to know MPI API to parallelize OpenFOAM code, but knowing
the related concepts will be beneficial.

---

Alright, we can now run cases in parallel, but our objective for this workshop
is not running cases; In fact I have a few objectives which are specific to the
rest of the lecture part:

- First, we will build a basic understanding of parallel communications in OpenFOAM.
- That level of understanding should allow us to send our own data types around. We
  might venture into advanced territory when it comes to this particular issue.
- The next important point is to raise our awareness of the most common issues that
  we will encounter while we attempt to code parallel OpenFOAM programs.

---

- Also, basically, you should be able to read through parallel code and understand it
  enough to learn more on your own, either from OpenFOAM's code itself, or from other
  MPI-based software.

By the end of this workshop, hands-on sessions and all, you should be able to
easily parallelize basic OpenFOAM code.

---

To achieve all of these goals in the short time frame we have, we will be focusing
only on the MPI aspects which OpenFOAM wraps and uses extensively. These are
point-to-point and collective comms. MPI also implements one-sided comms and
parallel IO, but we won't be exploring these topics.

{{< /details >}}

## Dive in deeper

- Check [setRootCase.H](https://github.com/OpenFOAM/OpenFOAM-dev/blob/master/src/OpenFOAM/include/setRootCase.H) header
- Here is where the MPI comms [are initialized](https://github.com/OpenFOAM/OpenFOAM-dev/blob/c5107bc42fa55e9ee7c26e0162f18d5434b2735e/src/OpenFOAM/global/argList/parRun.H#L71)
- And here is where they are [shut down](https://github.com/OpenFOAM/OpenFOAM-dev/blob/c5107bc42fa55e9ee7c26e0162f18d5434b2735e/src/OpenFOAM/global/argList/parRun.H#L63)


## A quick quiz

{{< quizdown >}}

---
primary_color: cyan
secondary_color: lightgray
text_color: black
shuffle_questions: false
shuffle_answers: true
---

## Data Parallelism

Data Parallelism is when:

- [x] Data is distributed, and the same set of operations are called on all the subsets.
- [ ] Data is distributed, and only a subset of operations will be performed on each data subset.
- [ ] Data is duplicated as a whole, and only a subset of operations will be performed on each data subset.

## Zero-Halo approach for boundary handling

In OpenFOAM, accounting for cells on the neighbouring process happens through:

- [x] A special boundary condition on boundary faces + MPI communication.
- [ ] Adding ghost cells
- [ ] Nothing, we don't need to account for those cells

## The anatomy of a simple MPI program

Reorder these steps to make up the correct work flow of an MPI program:

1. Include `mpi.h`
2. Initialize comms (communicator, rank)
3. Do parallel communications
4. Finalize comms

## Can I use MPI with everything?

Would the following command run in parallel?

```bash
mpirun -np 8 echo "$FOAM_USER_LIBBIN"
```

> Notice that this can be useful if the 8 processes will execute on different machines

- [ ] Yes, each of 8 processes will output a section of the input string.
- [x] Yes, 8 processes will be spawned, each outputting the full string.
- [ ] No, this command will error out.

{{< /quizdown >}}
