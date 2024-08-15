+++
title = "Transactions"
date = 2024-06-30T08:00:00+00:00
updated = 2024-06-30T08:00:00+00:00
draft = false
weight = 30
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

## Summary

- list of transactions sorted by most recent
- updated live
- access to transaction details and account inspection

<iframe width="560" height="315" src="https://www.youtube.com/embed/FUSRulei09o?si=CSgQsBhC2k0arN9a&amp;start=147" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Sections

### List of Transactions

On the left a list of processed transactions is shown ordered by most recent. The list is
updated live and shows the following information for each transaction:

- slot in which the transaction was processed
- label/signature of the transaction
- number of accounts involved in the transaction (signer/writable/readonly)

<iframe width="560" height="315" src="https://www.youtube.com/embed/yyVF_fgHonQ?si=7YKrYD2jbOYcX2b7&amp;start=52" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Transaction Details and Shortcuts

On the upper upper left we can see details for each selected transaction including a toolbar
with support for the following actions:

- quick open transaction logs `[o]`
- quick open transaction in explorer `[e]`

<iframe width="560" height="315" src="https://www.youtube.com/embed/yyVF_fgHonQ?si=oEmUc1w6Ac4cDjEX&amp;start=230" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Transaction Accounts

Shows summary of each account that was involved in the transaction.

- account address/label
- lamport change incurred by the transaction
- _writable_, _signer_ or _program_ attributes

We can bring up the details of the account and how it was affected by the transaction by
clicking on an account row. This will open a diff view showing the following account properties
before and after the transaction:

- address
- balance
- owner
- data size
- executable flag
- rent epoch

For accounts holding data it provides the ability open the [Account Data Inspector](../04-accounts) in a
separate page.

Accounts can also be opened via a keyboard shortcut `[1]..[9]` or `[0]` for the 10th account.

<iframe width="560" height="315"
src="https://www.youtube.com/embed/yyVF_fgHonQ?si=EDtHDnDjvyXALYui&amp;start=274" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
