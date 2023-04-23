---
title: "How do I send my own data?"
description: "Beyond basic data types: Writing communication-ready classes for the MPI/OpenFOAM parallel programming workshop"
lead: "Beyond basic data types: Writing communication-ready classes!"
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  workshop:
    parent: "chapters"
    identifier: "send-custom-data"
weight: 115
toc: true
lecture: true
---

## Lecture video

{{< placeholder date="the next training day" >}}

{{< details  "Module transcript" >}}
Welcome again to this module where we finally move from simple types like
booleans and integers to our own data structures and types.

We've actually touched on this topic in the general introduction to the
point-to-point communication where we said OpenFOAM avoids the burden of MPI
data types by choking everything through stream objects.

This is true for both types from the standard library or from OpenFOAM
libraries, as well as our custom ones. All we need is a way to serialize and
deserialize our data structures.

---

So, let's start out by learning how to send out a simple object.

In this example, we have an edge object, with two simple members. On each
process, we create an edge object but change its members only on the master
process.

---

On line 14 we try to scatter the edge object through the default communicator.
Well, as things stand, this piece of code won't compile and the compiler will
complain about missing stream operators. These are:

- the serialization operator, which takes in an output parallel stream and an
  edge
- and the deserialization operator, which takes in an input parallel stream
  and an edge

---

If we were to provide implementations for these operators, the scatter
statement will compile and work as expected.

Note that it's usually recommended to provide operators to base stream classes
instead of the parallel-specific ones, because then, you can feed edge objects
to any stream object, including Info, which prints its contents to standard
output.

---

Okay, that wasn't so hard to achieve, but then we will want to communicate a
list of edges as part of a graph.

We'll have to implement some methods and operators for Edge so we can put into
a list, but that's not related to the parallelization aspect hence we're
skipping it.

Assuming Edge objects can be put into lists, we can define a graph to be a list
of list of edges.

The outer list is for the parallel communications where each process acts only
on the element whose index is the process's rank and the inner list is there
because each process needs a local list of edges, not just one edge object.

---

On lines 5 and 6 we gather and scatter the graph elements respectively and
this works out of the box.

Because the Edge type can be serialized to a generic
output stream, the Pout statement on line 9 also works and will print the
lists as expected.

---

This is troublesome though; It might be better to base
Edge class off one of OpenFOAM's types. And then call the serialization
operators from the base class if we have to add members to edge class.

---

The next issue we need to worry about is that if our type to be communicated
keeps a pointer as member data.

The pointer stores a local memory address and it doesn't make sense to use it
on another process, because the other process will not have access to that
portion of the local memory.

In fact, these two processes can be running on two different machines with
completely different Operating Systems.

---

Back to our Edge example, we're replacing our integer member with a
pointer. Note that you won't be usually using raw pointers, as OpenFOAM
provides a smart pointer class called autoPtr, but I'm using raw pointers
here to reduce clutter and make things shorter.

---

Now; the simplest solution will be to follow all pointers, so the
serialization operator will have to dereference the pointer and stream in
its pointed-to-value.

The pointer might also point to a custom type, in which case we assume that
it also can be serialized and deserialized. So it's usually recommended to
keep a consistent style in implementing serialization operators.

---

It remains to discuss the case where we have a reference to a type as a
member data.

What makes this situation particularly difficult to deal with
is the fact that C++ references need to be initialized on declaration,
unlike pointers which can be initialized to null pointers and changed
later.

---

Moreover, having at least a const reference to the mesh object is actually
good practice because the mesh acts as an object database which you can
fetch all important simulation variables from.

The mesh also is special because we know it's partitioned and distributed over
all processes, and we want our objects to use the local mesh once we send them
instead of the mesh from the original process.

---

OpenFOAM actually provides a clean solution to this issue which involves
using Linked lists instead of random-access ones, because they allow for
passing custom constructor arguments.

Random-access lists require the empty constructor to be implemented which is
not suitable for types which have references as members.

---

Also, your custom type will have a new construction function, usually
nested in a subclass, traditionally called iNew.

We will discuss this particular topic in more details in the hands-on sessions
after we get familiarized with the simpler concepts after we get familiarized
with the simpler concepts.
{{< /details >}}

## Downloads

{{< downloads title="Lecture slides" url-name="Get Lecture slides" url="slides/SDLEC-parallelization-workshop-presentation-slides.pdf" >}}
