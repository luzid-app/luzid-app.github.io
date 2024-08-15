+++
title = "Workspaces"
date = 2024-06-30T08:00:00+00:00
updated = 2024-06-30T08:00:00+00:00
draft = false
weight = 60
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

## Summary

Luzid workspaces are designed to shorten the feedback loop for smart contract developers.
They allow cloning all programs of a project into the validator and repeat that step
automatically anytime the program is recompiled.

## Details

### Registering a Workspace Automatically

This is the quickest, easiest and therefore recommended way to register a workspace. Simply
launch Luzid from the root of your project with the trailing `.` as shown below:

```sh
luzid .
```

Luzid will then discover all programs and IDLs in that project, clone them into the validator
and start watching them for changes.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MxcOIiRVhvM?si=0B9HMBEvkoAotDi4&amp;start=116" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Registering a Workspace via the UI

You can also manually register a workspace as follow:

1. Navigate to the _Workspaces_ tab in the Luzid UI and click _Add_
2. Paste the path to the root of your project into the _Workspace Directory_ field
3. Review the programs and IDLs that Luzid discovered and click _Add_
4.
    a. Either click _Clone_ in order to clone all programs and IDLs of the workspace once

    b. Or click _Watch_ in order to clone all programs and IDLs of the workspace and watch them
      for changes afterwards
<iframe width="560" height="315" src="https://www.youtube.com/embed/MxcOIiRVhvM?si=T9O41tPfGuGUa4af&amp;start=28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
