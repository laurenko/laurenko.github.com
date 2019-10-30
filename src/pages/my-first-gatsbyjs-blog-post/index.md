---
title: My First Gatsbyjs Blog Post
date: '2019-10-30'
spoiler: How I Setup gatsbyjs to make a blog
---

If you played with [React Hooks](https://reactjs.org/docs/hooks-intro.html) for more than a few hours, you probably ran into an intriguing problem: using `setInterval` just [doesn’t work](https://stackoverflow.com/questions/53024496/state-not-updating-when-using-react-state-hook-within-setinterval) as you’d expect.

In the [words](https://mobile.twitter.com/ryanflorence/status/1088606583637061634) of Ryan Florence:

>I’ve had a lot of people point to setInterval with hooks as some sort of egg on React’s face

Honestly, I think these people have a point. It *is* confusing at first.

But I’ve also come to see it not as a flaw of Hooks but as a mismatch between the [React programming model](/react-as-a-ui-runtime/) and `setInterval`. Hooks, being closer to the React programming model than classes, make that mismatch more prominent.

**There _is_ a way to get them working together very well but it’s a bit unintuitive.**

In this post, we’ll look at _how_ to make intervals and Hooks play well together, _why_ this solution makes sense, and which *new* capabilities it can give you.

-----

**Disclaimer: this post focuses on a _pathological case_. Even if an API simplifies a hundred use cases, the discussion will always focus on the one that got harder.**

If you’re new to Hooks and don’t understand what the fuss is about, check out [this introduction](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889) and the [documentation](https://reactjs.org/docs/hooks-intro.html) instead. This post assumes that you worked with Hooks for more than an hour.