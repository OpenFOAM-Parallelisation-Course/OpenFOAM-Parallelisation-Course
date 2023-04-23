---
title: "Point-to-Point communications - general introdution"
description: "Introducing basic concepts around MPI point-to-point communication"
lead: "Introducing basic concepts around MPI point-to-point communication"
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  workshop:
    parent: "chapters"
    identifier: "p2p-comms"
weight: 100
toc: true
lecture: true
---

## Lecture video

{{< placeholder date="the next training day" >}}

{{< details  "Module transcript" >}}
Welcome again to this section where we discuss some concepts concerning
point-to-point communication in MPI protocols.

The first thing we need to take care of is: how can we identify the different
processes which participate in any type of communication?

---

To this end, MPI defines two types of objects; the first one is called "a
communicator", which basically groups processes, and identifies the
communications between its members. Think of it as a communication channel. Note
that two processes can communicate through more than one communicator.

---

Traditionally, the default communicator is used in OpenFOAM, but the foundation
version and Foam-Extend 5 have moved to a dedicated communicator, called MPI
COMM FOAM. This has the effect of easing up coupling OpenFOAM with other
MPI-based code as it allows for keeping internal OpenFOAM communications
isolated from the communications on other software packages.

---

As we will see a bit later, the Pstream class provides most of the interface
needed to interact with MPI in OpenFOAM. One of its most important methods is
called nProcs, which returns the number of processes in the default
communicator.

---

Each process in that communicator is identified by a rank, which is an integer
value, starting usually at 0 for the root process. There is also a member
method "my proc number" of the Pstream class which returns the rank of the
calling process.

---

Now, because we'll be sending data to different processes, which might be
running on a different machine, we need a simple and coherent way to send our
types as binary data and resurrect the objects on the other end. This process
is called serialization and de-serialization, well, the fact that it might
be done on different machines is actually irrelevant for us.

---

In the C++ world, this is still not so trivial to do actually; and we have two
options:

- First, we might provide implementations of stream operators to represent our
  types as standard streams. This is the chosen way for OpenFOAM
  code but know that newer languages now provide mature automatic
  serialization at, or very close to, language level.
- The other option is to rely on third party libraries for a feeling of
  automatic serialization. Examples include, of course, a dedicated
  Boost library and as lighter alternative, a library called cereal which has
  been around for some time now.

---

All good, but how is it related to MPI communications? You see, in order to be
cross-platform, MPI implementations define their own data types, it doesn't
send a raw integer but deals with an integer type only MPI libraries know
about.

This immediately puts us at a disadvantage because it basically means we
have to write MPI-compatible types for all of our classes. You can see how
that can go out of hand very quickly.

And that's where the serialization can help. We can simply represent as streams
of data; either in text or binary form, and let MPI protocols send the stream
contents around.

---

OpenFOAM provides two types of streams specifically for this. OPstream is
output stream, that's where you put your data to be sent, and IPstream is
the input variant, which receives the data and you can then read it off of
it.

The topic of serialization is kind of vast, we will be visiting it again
towards the end of the workshop.

---

Going back to our F1 pit stops analogy, you can think of the operation of
mounting the tyre by the worker on the car as a point-to-point communication,
meaning, there are exactly two parties, one sending and one receiving. And
this is very important, each send must be matched by a receive. We can't
have the worker mount the tyre somewhere else and call it a successful
operation.

---

We can look at an example code snippet which shows how these
Point-to-Point communications are carried out between OpenFOAM processes.

Note that the master process, here, engages in a point-to-point
communication with each slave process. Receiving a list of values from each
of the slave processes, and each slave processor in turn initiates a
corresponding send.

---

Okay, now that we got the hang of it, there is one more important aspect we
should discuss.

Should the worker check for correct placement of the tyre
after mounting it? And, can more operations be carried out on the car while
that check is in progress?

The following two modules discuss these questions.
Welcome again to this section where we discuss some concepts concerning
point-to-point communication in MPI protocols.

The first thing we need to take care of is: how can we identify the different
processes which participate in any type of communication?

---

To this end, MPI defines two types of objects; the first one is called "a
communicator", which basically groups processes, and identifies the
communications between its members. Think of it as a communication channel. Note
that two processes can communicate through more than one communicator.

---

Traditionally, the default communicator is used in OpenFOAM, but the foundation
version and Foam-Extend 5 have moved to a dedicated communicator, called MPI
COMM FOAM. This has the effect of easing up coupling OpenFOAM with other
MPI-based code as it allows for keeping internal OpenFOAM communications
isolated from the communications on other software packages.

---

As we will see a bit later, the Pstream class provides most of the interface
needed to interact with MPI in OpenFOAM. One of its most important methods is
called nProcs, which returns the number of processes in the default
communicator.

---

Each process in that communicator is identified by a rank, which is an integer
value, starting usually at 0 for the root process. There is also a member
method "my proc number" of the Pstream class which returns the rank of the
calling process.

---

Now, because we'll be sending data to different processes, which might be
running on a different machine, we need a simple and coherent way to send our
types as binary data and resurrect the objects on the other end. This process
is called serialization and de-serialization, well, the fact that it might
be done on different machines is actually irrelevant for us.

---

In the C++ world, this is still not so trivial to do actually; and we have two
options:

- First, we might provide implementations of stream operators to represent our
  types as standard streams. This is the chosen way for OpenFOAM
  code but know that newer languages now provide mature automatic
  serialization at, or very close to, language level.
- The other option is to rely on third party libraries for a feeling of
  automatic serialization. Examples include, of course, a dedicated
  Boost library and as lighter alternative, a library called cereal which has
  been around for some time now.

---

All good, but how is it related to MPI communications? You see, in order to be
cross-platform, MPI implementations define their own data types, it doesn't
send a raw integer but deals with an integer type only MPI libraries know
about.

This immediately puts us at a disadvantage because it basically means we
have to write MPI-compatible types for all of our classes. You can see how
that can go out of hand very quickly.

And that's where the serialization can help. We can simply represent as streams
of data; either in text or binary form, and let MPI protocols send the stream
contents around.

---

OpenFOAM provides two types of streams specifically for this. OPstream is
output stream, that's where you put your data to be sent, and IPstream is
the input variant, which receives the data and you can then read it off of
it.

The topic of serialization is kind of vast, we will be visiting it again
towards the end of the workshop.

---

Going back to our F1 pit stops analogy, you can think of the operation of
mounting the tyre by the worker on the car as a point-to-point communication,
meaning, there are exactly two parties, one sending and one receiving. And
this is very important, each send must be matched by a receive. We can't
have the worker mount the tyre somewhere else and call it a successful
operation.

---

We can look at an example code snippet which shows how these
Point-to-Point communications are carried out between OpenFOAM processes.

Note that the master process, here, engages in a point-to-point
communication with each slave process. Receiving a list of values from each
of the slave processes, and each slave processor in turn initiates a
corresponding send.

---

Okay, now that we got the hang of it, there is one more important aspect we
should discuss.

Should the worker check for correct placement of the tyre
after mounting it? And, can more operations be carried out on the car while
that check is in progress?

The following two modules discuss these questions.
{{< /details >}}

## Downloads

{{< downloads title="Lecture slides" url-name="Get Lecture slides" url="slides/SDLEC-parallelization-workshop-presentation-slides.pdf" >}}
