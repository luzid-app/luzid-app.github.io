+++
title = "Interacting with Transactions"
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

The Luzid `transaction` API allows you to interact with transactions.

## Labeling Transactions

In order to identify transactions more easily we can label them. The label is any string and
will be used to show the transaction in the Luzid UI.

```ts
const signature = await conn.requestAirdrop( pubkey, web3.LAMPORTS_PER_SOL)
await luzid.transaction.labelTransaction(signature, '🪂 airdrop')
```

<details>
<summary>Full Example</summary>
<p class="codepen" data-height="600" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="vYqppLq" data-pen-title="Luzid: Transaction Labels" data-preview="true" data-editable="true" data-user="thlorenz" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/thlorenz/pen/vYqppLq">
  Luzid: Transaction Labels</a> by Thorsten Lorenz (<a href="https://codepen.io/thlorenz">@thlorenz</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
</details>
