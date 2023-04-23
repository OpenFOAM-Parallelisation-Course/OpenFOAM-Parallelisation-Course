---
title: "Application examples and advanced topics"
description: "Sneaking into real-world applications of parallel communication in OpenFOAM"
lead: "Sneaking into real-world applications of parallel communication in OpenFOAM"
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  workshop:
    parent: "chapters"
    identifier: "advanced-topics"
weight: 120
toc: true
lecture: true
---

## Lecture video

{{< placeholder date="the next training day" >}}

{{< details  "Module transcript" >}}
Welcome to the last module of this workshop. We will conclude by
studying some application examples which employ the concepts we
have talked about, and expose some the most common issues you will
encounter.

---

Our first application lies in the heart of any CFD software package:
Solving PDEs over a decomposed mesh.

If we consider a simple transport
equation, we can say that the temporal term won't really care if the
simulation is running in parallel.

---

For divergence and diffusion terms though, they will end up discretized
as a sum of values at face centers, and we will need to treat the faces
at the processor boundary in special manner.

Basically, we need to transfer the information on the other side of the
boundary so we can interpolate fields correctly. Meaning, we'll have to
use some form of point-to-point communication!

---

Well, to be honest, the source term can also get affected by whether
the simulation is running in parallel if it depends on mesh-related
information. But let's just leave it at that for now.

I have prepared a small project for us to play around with, demonstrating how
to deal with such issues.

---

The second advanced application example I want to discuss is actually
something we've talked about before.

Consider the case where we want to refine the mesh. The optimal solution
would be for each process to refine its own mesh, but we want to keep
the global number of cells in check.

---

Let me quickly walk you through this piece of code.

In the first three lines, we define counters, then we go into
a while loop to refine the cells.

We keep refining until nAddedCells becomes strictly positive.

---

As you can see nAddCells is reset on each loop iteration to the
number of cells added through the face consistent refinement
function.

The value of nAddCells is summed up from all processes in the
reduce statement so it represents the total number of cells
added on all processors in that particular loop iteration.

---

This value is also added to the total count of cells added in the whole
timestep.

Now, my question is: can we just reduce the total count of cells instead
of nAddCells?

It turns out doing so is problematic.

---

Assume our reduce statement reduced the total count of cells.
Because our while loop has its condition on nAddCells, some processes
might leave the loop earlier than other. Meaning, some processes
will have less or no cells to refine and they will loop immediately.

---

Now, the next time a process which wants to refine some cells calls
reduce, it will stagnate.

Remember that collective communication requires that all processes in the
communicator actually call the reduce function with the same arguments, and
because they already left the loop, they no longer call this function.

---

Well, while we're at it, let's take a look at another example from the same
topic.

First, we create a list of values at boundary faces. Then, we can use a very
convenient function to swap boundary face values between neighbouring processes.

This results in the calling process getting access to all neighbouring values
conveniently and it significantly reduces the amount of code you have to write
to get things right.

---

Note that, in essence, this is nothing more than point-to-point comms, hidden
away behind a more specialized function. We will implement something very
similar in the hands-on activities.

---

If you dive deeper into the idea of adaptive mesh refinement, you will find
out that, by its nature, create imbalance between processes.

And if your code has some blocking comms, the last thing you want is waiting
your CPU time on waiting for processes to finish communicating.

As non-blocking comms are not always suitable, the only other viable solution
is to spend more time on rebalancing the mesh between processes.

Naturally, this rebalancing operation will also rely on parallel communications
extensively.

---

Well, we have actually reached the end line of this short lecture part. If you
have survived so far, I would be happy to meet you in the hands-on activities.
{{< /details >}}

## Downloads

{{< downloads title="Lecture slides" url-name="Get Lecture slides" url="slides/SDLEC-parallelization-workshop-presentation-slides.pdf" >}}
