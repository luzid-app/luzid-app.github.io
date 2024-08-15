+++
title = "Saving and Restoring Snapshots"
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

The Luzid `snapshot` API allows you to save snapshots, restore and delete them. It also
supports grouping multiple snapshots to perform operations on them in batch.

Here we go through all methods to manage snapshots first and provide a full example leveraging
all of them at the bottom of this doc.

## Save Account Snapshot

In the below we create a snapshot with the following properties:

- **name**: `'Luzid Snapshot Example'`
- **description**: `'Snapshotting the account we just cloned'`

We include the following accounts:

- `[accAddr]` (an array of account addresses)

Finally we add the snapshot to the`'example:snapshot'` group.

```ts
import { LuzidSdk } from '@luzid/sdk'
const luzid = new LuzidSdk()

const res = await luzid.snapshot.createSnapshot(
  'Luzid Snapshot Example',
  [accAddr],
  {
    group: 'example:snapshot',
    description: 'Snapshotting the account we just cloned'
  }
)
console.log('\nCreated snapshot', res)
const snapshotId = res.snapshotId
```

## Listing Snapshots

We can then obtain a list of snapshots we saved as follows:

```ts
const snapshots = await luzid.snapshot.listSnapshots()
console.log('\nSnapshots:', snapshots)
```

## Getting List of snapshotable Accounts

In order to get the addresses of all accounts we can snapshot we can use the following method:

```ts
const accounts = await luzid.snapshot.getSnaphotableAccounts({ includeProgramAccounts: true })
console.log('\nAccounts we can snapshot:', accounts)
```

the result includes information about each account like pubkey, modified slot and balance.

## Restoring a Snapshot

In order to restore accounts from a snapshot we provide the `snapshotId` and the addresses of
the accounts we want to restore.

```ts
const res = await luzid.snapshot.restoreAccountsFromSnapshot(snapshotId, {
  accounts: [accAddr]
})
```

## Deleting Snapshots

We can delete one specific snapshot by providing its `snapshotId`:

```ts
const deletedSnapshotId = await luzid.snapshot.deleteSnapshot(snapshotId)
```

Alternatively we can delete all snapshots in a group:

```ts
const deletedSnasphotIds = await deleteSnapshotsMatching({ group: 'example:snapshot' })
```

## Full Example

The below lists snapshotable accounts, saves and restores a snapshot and finally deletes it.

<details>
<summary>Full Example</summary>
<p class="codepen" data-height="600" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="poXpyqM" data-pen-title="Luzid: Snapshots" data-preview="true" data-editable="true" data-user="thlorenz" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/thlorenz/pen/poXpyqM">
  Luzid: Snapshots</a> by Thorsten Lorenz (<a href="https://codepen.io/thlorenz">@thlorenz</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
</detils>
