+++
title = "Accounts"
date = 2024-06-30T08:00:00+00:00
updated = 2024-06-30T08:00:00+00:00
draft = false
weight = 40
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

## Summary

The account inspector allows us to inspect account states over time. For each transaction the
account was involved in a diff is available that compares the state of the account before and
after the transaction respectively.

## Details

We can open the diff of an account in the following ways:

- by selecting _Inspect Account Data_ from the details view of a transaction account
- by selecting _Inspect_ from the account data view of a _Development Account_ or _Snapshot Account_

The diff has three sections:

- the top showing only the properties that changed
- the middle showing the complete JSON of the account state before and after the transaction
- the bottom toolbar allowing us to cycle through the history of the account state

Additionally the toolbar on the top right provides us with the following actions (from left to
right):

- `[o]` quick open logs of the transaction in which the account state was updated
- `[e]` quick open transaction in which the account state was updated in the explorer
- `[n]` navigate to the transaction in which the account state was updated
- `[a]` quick open account in explorer which will show its current state
- toggle to switch between _raw_ and _parsed_ data view
- x button to close the diff view

<iframe width="560" height="315" src="https://www.youtube.com/embed/yyVF_fgHonQ?si=VCZggjXwc4eI4IpX&amp;start=340" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
