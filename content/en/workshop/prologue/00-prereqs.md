---
title: "Prerequisites for optimal experience"
description: "Prerequisites for optimal experience during the learning process offered by the OpenFOAM parallelization workshop."
lead: "Before we start this short OpenFOAM course, let me outline the most important prerequisites for optimal experience during the learning process offered by the OpenFOAM parallelization workshop."
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  workshop:
    parent: "prologue"
    identifier: "prereqs"
weight: 1
toc: true
lecture: true
mermaid: true
quiz: true
url: "/workshop/prologue/prereqs"
---

Please make sure you are familiar with the following concepts before you start (it's not a lot if I can fit it in a single diagram) so you
don't feel overwhelmed during the hands-on sessions. Watching someone else coding in a live session with their own environment and
workflow can be confusing.

{{< mermaid class="bg-light text-center" >}}
%%{init: {'theme':'dark'}}%%
flowchart LR
    A(("&nbsp; &nbsp; &nbsp; "))
    B("OpenFOAM build system")
    C("C++")
    D("MPI")
    E("CMD")
    F("Bash")
    G("Git")
    H("HPC Environment")
    I("Make/files")
    J("Make/options")
    K("wmake")
    L("Github account")
    M("IDE")
    N("VSCode")
    O("Vim...")

    A --- C & B & E
    E --- F & G & H
    B -.- I & J & K
    D & L & M --- A
    O & N -.- M

    classDef graphDate fill-opacity:0.15,color:#E1B028
    classDef date fill-opacity:0.85,color:#FFFFFF,fill:#1d0e4e
    class A,B,C,E,F,G,L date
{{< /mermaid >}}

## Required skills and knowledge

- Basic C++ programming knowledge (This is a **must**, at least you've worked with templates before).
- Being familiar with OpenFOAM environment and build system (At least, you've compiled a solver or a library before).
- MPI knowledge is optional.

## Required tools

- An OpenFOAM installation on a recent Linux distribution (refer to [OpenFOAM Environment 101](/workshop/hands-on/openfoam-env-101/)
  for recommended setup).
- Knowledge of the common command line interface (Bash, Git) is recommended.
- A Github Account (needed to view video content on this website).
- An IDE (configured for C++ development) is optional but recommended (or use Github CodeSpaces).

## A quick test

{{< quizdown >}}

---
primary_color: cyan
secondary_color: lightgray
text_color: black
shuffle_questions: false
shuffle_answers: true
---

## Understanding of templated code

Assume we have a templated function defined in a *.C file like this:
```typescript
template&#60;class T&#62;
T::componentType globalMax(const T& v) {
    return returnReduce(max(v),  maxOp&#60;T::componentType&#62;());
}
```

How would you use it on a `const volScalarField& vf;`?

> Two answers are correct. max() is itself a templated function!

- [x] `globalMax(vf)`
- [ ] `globalMax&#60;scalar&#62;(vf)`
- [x] `globalMax&#60;volScalarField&#62;(vf)`
- [ ] Not usable

## Basic object orientation

Assume we have the following class declaration:

```java
class MyClass
{
    //- Data members
    scalar m1_;
public:
    scalar m1() const {
        return m1_;
    }
};
```

How would you access `m1` for reading outside of `MyClass` (Assume: `MyClass  obj;`)?

> Pay attention to access specifiers

- [ ] `obj.m1_`
- [x] `obj.m1()`
- [ ] Not easily possible

## Basic object orientation

Assume we have the following class declaration:

```java
class MyClass
{
    //- Data members
    scalar m1_;
public:
    scalar m1() const {
        return m1_;
    }
};
```

How would you access `m1` for writing outside of `MyClass` (Assume: `MyClass  obj;`)?

> Pay attention to access specifiers

- [ ] `obj.m1_`
- [ ] `obj.m1()`
- [x] Not easily possible

## OpenFOAM compilation workflow

Which of these environment variables you think are usually used as destinations for library/binary compilation
when it comes to OpenFOAM shared libs and solvers?

> Maybe the ones which end with *BIN?!

- [x] `$FOAM_USER_LIBBIN`
- [x] `$FOAM_LIBBIN`
- [x] `$FOAM_APPBIN`
- [ ] `$FOAM_APP`
- [ ] `$WM_PROJECT`
- [x] `$FOAM_USER_APPBIN`
- [ ] `$FOAM_SITE_DIR`

## OpenFOAM compilation workflow

When you `wmake libso`, you're compiling your

> The hint is in the command!

- [ ] solver or utility binary
- [x] library as a shared object
- [ ] library as a static library

{{< /quizdown >}}
