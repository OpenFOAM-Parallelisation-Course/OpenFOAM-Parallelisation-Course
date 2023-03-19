---
title: "P2P comms - Quiz"
description: "Put what you have learned about Point-to-Point communication in OpenFOAM to the test."
lead: "Put what you have learned about Point-to-Point communication in OpenFOAM to the test."
date: 2023-01-25T14:41:39+01:00
lastmod: 2023-01-25T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  workshop:
    parent: "chapters"
    identifier: "p2p-quiz"
weight: 103
toc: true
quiz: true
url: "/workshop/chapters/01-p2p-comms-quiz"
---

{{< quizdown >}}

---
primary_color: cyan
secondary_color: lightgray
text_color: black
shuffle_questions: false
shuffle_answers: true
---

## Basic P2P comms

Consider the following code snippet, featuring a short communication between two
processes:

```java
if (Pstream::master())
{
    IPstream fromSlave (Pstream::commsTypes::blocking, 1);
    label i = readLabel(fromSlave);
} else if (Pstream::myProcNo() == 1) {
    OPstream toMaster (Pstream::commsTypes::blocking, Pstream::masterNo());
    toMaster << 5;
}
```

The value of `i` on **master** process will be:

- [ ] 0
- [x] 5
- [ ] The master process never defines `i`

## Careful, not to run into issues!

Consider the following code snippet:

```java
if (Pstream::master())
{
    IPstream fromSlave (Pstream::commsTypes::blocking, 1);
    label i = readLabel(fromSlave);
} else {
    OPstream toMaster (Pstream::commsTypes::blocking, Pstream::masterNo());
    toMaster << 5;
}
```

> Pay attention to the else statement, might trigger deadlocks all over the place!

Choose the correct statement:

- [ ] This code is fine.
- [x] This code is fine only and only if there are 2 processes running it.
- [ ] This code will always segfault.

## Overlapping computation and communication

Consider the following code snippet, featuring non-blocking comms between two processes:

```java
PstreamBuffers pBufs (Pstream::commsTypes::nonBlocking);
if (Pstream::master()) {
    UOPstream toOne(1, pBufs);
    toOne << aVeryLargeArray;
}
pBufs.finishedSends();
if (Pstream::myProcNo() == 1) {
{
    UIPstream fromMaster(0, pBufs);
    auto TheVeryLargeArray(fromMaster);
}
computeOnAnotherLargeArray();
```

`computeOnAnotherLargeArray()` will run:

- [x] While the communication on both processes is running.
- [ ] While the sending is happening (only on master).
- [ ] While the receiving is happening (only on the other process).
- [ ] only after all communication has gone through.

{{< /quizdown >}}
