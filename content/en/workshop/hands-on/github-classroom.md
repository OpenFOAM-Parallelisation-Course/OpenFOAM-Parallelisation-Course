---
title: "Github classroom for the exercises"
description: ""
lead: ""
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  workshop:
    parent: "hands-on"
    identifier: "github-classroom"
weight: 204
toc: true
---

All activities during the workshop's hands-on sessions will be prepared as assignments. This page holds the complete list
of offered activities/exercises.

{{< alert icon="👉" >}}
Each assignment will create a separate **private repository** for you at this [Github organisation](https://github.com/OpenFOAM-Parallelisation-Course)
{{< /alert >}}

First, let's start by the introductory ones:

{{< assignment-card "Git & Github Fundamentals" "https://classroom.github.com/a/etAdxF2O" "Optional" "btn-toggle" >}}
A basic fast-paced course to get you familiarized with Git and Github in general - Provided by Github Classrooms. Please
go through the README.md file after you accept this assignment if it's your first time using Git/Github.
{{< /assignment-card >}}

{{< assignment-card "Introducing foamUT to solve future exercises" "https://classroom.github.com/a/gGMBZaVh" >}}
A basic exercise to get you familiarized with the recommended workflow of solving future exercises.
It'll walk you through changing exercise code and making all of its tests pass in serial and parallel.
{{< /assignment-card >}}

<div class="card-bar"></div><br>

At this point, you've completed all preparation tasks and you're ready for the hands-on sessions!

0. [x] Register to the [Workshop's event](https://eveeno.com/parallelization_in_openfoam)
1. [x] Set up a Text Editor or an IDE for OpenFOAM development.
2. [x] Have a working OpenFOAM installation.
2. [x] Clone our unit-testing framework and make sure it works for you.
3. [x] Solve a demo exercise so you get familiarized with the typical workflow during the hands-on sessions (You'll need no knowledge from the workshop for this).

{{< downloads title="Description of all activities" url-name="Get activity descriptions" url="slides/SDLEC-parallelization-workshop-hands-on-activities.pdf" >}}

## Introductory activities

{{< assignment-card "Activity 01: Blocking P2P Comms - A first look" "https://classroom.github.com/a/l5LX1WJK" >}}
Explore how to do basic blocking P2P communication by collecting a list of values from all processes on the master
process.
{{< /assignment-card >}}

{{< assignment-card "Activity 02: Collective Comms - A first look" "https://classroom.github.com/a/6SrE_GYg" >}}
Understand the concepts of collective comms, away of the complexity of OpenFOAM code; by checking for prime numbers!
{{< /assignment-card >}}

{{< assignment-card "Activity 03: Blocking P2P Comms are not good for your health" "https://classroom.github.com/a/80kgkuI2" >}}
Identify deadlocking when you see it; and try to fix the code.
{{< /assignment-card >}}

{{< assignment-card "Activity 04: Non-Blocking P2P comms for swapping operations" "https://classroom.github.com/a/hOHbIyDQ" >}}
Process-to-neighbour communication made easy! Send data over processor boundaries.
{{< /assignment-card >}}

{{< assignment-card "Activity 05: Collective comms - Reference cells" "https://classroom.github.com/a/ySuEzsEK" >}}
Which processor has the reference cell? Not really that important, but nice to know!
{{< /assignment-card >}}

{{< assignment-card "Activity 06: Parallel comms for custom data types" "https://classroom.github.com/a/kWTwrahL" >}}
Introducing how to send lists of custom data objects which fit into random-access lists.
{{< /assignment-card >}}

{{< assignment-card "Activity 07: Special comms for custom data types" "https://classroom.github.com/a/OI4GWWEy" >}}
Advanced communication of custom types which have references as data members with the help of linked lists.
{{< /assignment-card >}}

## Tiny projects

{{< assignment-card "Project 01: Parallelizing a coded fvOptions source" "https://classroom.github.com/a/jad3TjtJ" >}}
Apply a lot of what you learned in this workshop in a real-world setup. From the ground up; your task is to figure out what's
wrong with the code and fix it in your own way!

Note that this is a group project, up to 3 people can collaborate to work on this thing.
{{< /assignment-card >}}
