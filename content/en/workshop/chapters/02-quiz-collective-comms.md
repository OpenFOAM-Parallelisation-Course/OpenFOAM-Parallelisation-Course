---
title: "Collective comms - Quiz"
description: "Put what you have learned about Collective communication in OpenFOAM to the test."
lead: "Put what you have learned about Collective communication in OpenFOAM to the test."
date: 2023-01-25T14:41:39+01:00
lastmod: 2023-01-25T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  workshop:
    parent: "chapters"
    identifier: "collective-quiz"
weight: 108
toc: true
quiz: true
url: "/workshop/chapters/02-collective-comms-quiz"
---

{{< quizdown >}}

---
primary_color: cyan
secondary_color: lightgray
text_color: black
shuffle_questions: false
shuffle_answers: true
---

## Basic collective comms

Consider the following code snippet:

```java
// obj.update() returns a bool, whether obj was updated or not.
updated = Foam::returnReduce(obj.update(), andOp<bool>());
```

The value of `updated` will:

- [x] Be true if `obj` was updated on all processes.
- [ ] Be true if `obj` was updated on at least one process.
- [ ] Be always false, because `update()` is never called.

## Gathering values from processes

Consider the following code snippet:

```java
label i = random(0, 100); // Generate a random int locally
Pstream::gather(i, maxOp<label>());
```

The value of `i` will:

- [x] Be the greatest value of `i` on all processes, but gets stored only on master.
- [ ] Be the greatest value of `i` on all processes, stored on all processes.
- [ ] Be untouched on all processes.

{{< /quizdown >}}
