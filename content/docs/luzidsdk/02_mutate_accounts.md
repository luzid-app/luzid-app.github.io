+++
title = "Mutatator"
date = 2024-06-30T08:00:00+00:00
updated = 2024-06-30T08:00:00+00:00
draft = false
weight = 10
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

The Luzid `mutator` API allows you to mutate accounts by setting their state directly or by
cloning them from a remote cluster.

## Mutate Account

In the below example we prepate the mutation we want to apply via the
[`AccountModification`](https://luzid.app/luzid-sdk/docs/ts/classes/api_mutator.AccountModification.html) class. We then call `modifyAccount` on the `mutator` instance to apply the mutation.

```ts
import { AccountModification, LuzidSdk } from '@luzid/sdk'

const luzid = new LuzidSdk()

await luzid.mutator.modifyAccount(
  AccountModification.forAddr(accountAddr).setData(
    Buffer.from('Hello world! Hola mundo! Hallo Welt!', 'utf8')
  )
)
```

We can modify each property of an account via the relevant `set` methods, namely:

- [`setLamports`](https://luzid.app/luzid-sdk/docs/ts/classes/api_mutator.AccountModification.html#setLamports)
- [`setOwner`](https://luzid.app/luzid-sdk/docs/ts/classes/api_mutator.AccountModification.html#setOwner)
- [`setData`](https://luzid.app/luzid-sdk/docs/ts/classes/api_mutator.AccountModification.html#setData)
- [`setExecutable`](https://luzid.app/luzid-sdk/docs/ts/classes/api_mutator.AccountModification.html#setExecutable)


<details>
<summary>Full Example</summary>
<p class="codepen" data-height="600" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="oNrpjgp" data-pen-title="Luzid: Mutate Account" data-preview="true" data-editable="true" data-user="thlorenz" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/thlorenz/pen/oNrpjgp">
  Luzid: Mutate Account</a> by Thorsten Lorenz (<a href="https://codepen.io/thlorenz">@thlorenz</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
</details>

## Clone Account

In order to clone an account into the Luzid validator you provide the remote cluster as well as
the address of the account to clone. Optionally you can provide a `commitment` level of that
the account must have reached on the remote cluster.

```ts
import { Cluster, LuzidSdk } from '@luzid/sdk'

const luzid = new LuzidSdk()
const postAddr = '5ZspQX4nw95meJHpXBF425NytnNTDgtLBBGVDK9EWmRy'

await luzid.mutator.cloneAccount(Cluster.Devnet, postAddr, {
  commitment: 'confirmed',
})
```

<details>
<summary>Full Example</summary>
<p class="codepen" data-height="600" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="VwJyeoa" data-pen-title="Luzid: Clone Account" data-preview="true" data-editable="true" data-user="thlorenz" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/thlorenz/pen/VwJyeoa">
  Luzid: Clone Account</a> by Thorsten Lorenz (<a href="https://codepen.io/thlorenz">@thlorenz</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
</details>

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
