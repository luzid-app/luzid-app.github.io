+++
title = "Accounts"
date = 2024-06-30T08:00:00+00:00
updated = 2024-06-30T08:00:00+00:00
draft = false
weight = 50
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

## Summary

The accounts page provides us with three tabs:

- Development Accounts: a list of _relevant_ accounts that are present in the validator
- Account Snapshots: allows managing snapshots we took previously
- Remote Accounts: allows to clone accounts from remote clusters like mainnet-beta or devnet

## Details

### Development Accounts

Lists of accounts with each showing the following information:

- a checkmark to select the account
- **Pubkey** of the account
- **SOL** balance of the account
- **Owner** of the account
- **Bytes** of data of the account
- **Slot** at which the account was last updated

If the account has data then the bytes of the account will be non-zero and <ins>underlined</ins> to
indicate that we can click on it to inspect in order to inspect its data.

#### Saving Snapshots

From the _Development Accounts_ tab follow the below steps to create a snapshot:

1. select any number of accounts by clicking on the checkmark next to it
2. click the _Create Snapshot_ button that will appear at the bottom of the page
3. provide a name and optional description for the snapshot
4. click _Create_ to save the snapshot

<iframe width="560" height="315" src="https://www.youtube.com/embed/icacXbm3pdo?si=6aGOh9x9G3D1CIi5&amp;start=60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Managing Snapshots

The _Account Snapshots_ tab shows a list of snapshots with the following information:

- **Name** of the snapshot
- **Description** of the snapshot
- number of **Accounts** in the snapshot
- **Created At** of the snapshot
- a recycle bin icon to delete the snapshot

We can select a snapshot row and the accounts that are part of the snapshot will be listed below.
We can then click on any of those accounts to inspect the data that it contained when the
snapshot was taken.

A _Restore_ button will appear at the bottom of the page when an account in the snapshot is
selected which allows us to restore the state of the account into the validator.

Each time we restore a snapshot a _Restore_ transaction is processed in the Luzid validator and
will appear in the list of transactions.

<iframe width="560" height="315" src="https://www.youtube.com/embed/icacXbm3pdo?si=Xvg70dTSLW2Jx_4G&amp;start=138" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Remote Accounts

The _Remote Accounts_ tab allows us to clone accounts from remote clusters like mainnet-beta or
devnet via the following steps:

1. Paste the pubkey of the account we want to clone into the _Account Address_ field
2. Luzid will retrieve the state of the account from each remote cluster and populate the
respective column
3. Click the _Clone_ button of the cluster we want to clone the account from

Each time we clone an account a _Clone_ transaction is processed in the Luzid validator and
will appear in the list of transactions.

<iframe width="560" height="315" src="https://www.youtube.com/embed/icacXbm3pdo?si=7xo9q7O2s3Ghwr2h&amp;start=335" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
