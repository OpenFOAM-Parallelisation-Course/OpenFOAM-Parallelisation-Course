---
title: "Collective communications - general introdution"
description: "Introducing MPI group-wide communication: collective protocols."
lead: "Introducing MPI group-wide communication: collective protocols."
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  workshop:
    parent: "chapters"
    identifier: "collective-comms"
weight: 105
toc: true
lecture: true
---

## Lecture video

{{< placeholder date="the next training day" >}}

{{< details  "Module transcript" >}}
Welcome again to this module where we introduce an alternative communication
protocol for when many processes need to talk to each other at the same time:
Collective communication.

---

So, it's not about when two processes communicate with a send/receive pair, but
this is a completely different protocol, which has some requirements I want to
bring to your attention:

- First, all processes participating in a collective communication need to call
  the same function. This is a hard requirement. For example, a single
  process in the corresponding communicator cannot return before calling the
  communication method some other processes will call.

- The second requirement is that the called function needs to have the same
  set of arguments on all processes. The value of the arguments can be
  different, but they need to be the same symbols.

---

Also, OpenFOAM only wraps the blocking variants of MPI interface to collective
comms, even though non-blocking ones have been available since MPI-2.

When it comes to collective communication, there is no
send/receive calls, so it's not a simple wrapper around point-to-point comms.

Because the collective calls implement a different protocol, they are optimized
for group communication and usually have log n running time. N being the number of
processes participating in the communication.

---

The interface of collective calls is a set of static methods in Pstream
class which can be quite different between OpenFOAM forks.

These calls can be clustered into few categories:

We have Gather operations; all-to-one in MPI terminology,
Scatter operations, which represent one-to-all MPI calls and
all-to-all variants of all-to-one operations which OpenFOAM calls a reduce.

In OpenFOAM, a reduce is nothing more than a gather + a scatter, which
results in an all-to-all operation.

This is not the same as an MPI reduce which is an all-to-one operation. We will
discuss these differences in details in the next module.

---

OpenFOAM also doesn't use MPI's broadcast and barrier which are
considered to be "unnecessary" if the OpenFOAM API is employed correctly.

In the next module, we will take a look at the code interface we can exploit
to use this type of communication when needed.
{{< /details  >}}

## Downloads

{{< downloads title="Lecture slides" url-name="Get Lecture slides" url="slides/SDLEC-parallelization-workshop-presentation-slides.pdf" >}}
