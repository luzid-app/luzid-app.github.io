+++
title = "Luzid Beta Release v0.1"
description = "Introducing the first Luzid Beta v0.1"
date = 2024-08-19T15:00:00+00:00
updated = 2024-08-19T15:00:00+00:00
draft =  false
template = "blog/page.html"

[taxonomies]
authors = ["Thorsten Lorenz"]

[extra]
lead = "Luzid Beta v0.1 is out<br>changing forever how we develop Solana Programs!"

[page]
toc = true
+++

## Features

Many features were added to Luzid since the [last release](luzid-alpha-release-separate-binary)
thus Luzid now provides the following:

- blazing fast validator 🚀
- clones _remote_ programs on demand
- clones/watches _local_ programs via the workspace feature
- watches transactions live
- multiple ways to inspect transactions and account data including how account data changed
over time
- direct account mutation
- saving/restoring snapshots of account data

Particularly the workspace feature which allows you to _hotswap_ programs everytime changes are
saved to disk is a game changer and has everyone I show this quite impressed.

I created a playlist on YouTube with each video going into a particular feature one by one:

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=QZ1UAMMdrhCKnCUn&amp;list=PL4k64WemroGnAZEDS9yWvLraXQw8TsA9h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>

## Docs

### Luzid App

In order to help you get started with Luzid we now have detailed documentation. You can start
with the [features section](../../docs/luzidapp/01-features/) and then work your way through
the Luzid pages, one by one, i.e. the [transactions](../../docs/luzidapp/03-transactions/)
page.

Each refers to videos that demonstrate the documented feature.

### SDK Docs

In order to control Luzid from within your tests an SDK is provided. Aside from the [SDK API
docs](http://luzid.app/luzid-sdk/docs/ts/classes/luzid_sdk.LuzidSdk.html) a section for each
commonly SDK feature is included as well.

Start by reading [the SDK docs overview](../../docs/luzidsdk/01-sdk-intro) carefully.
Many docs include live examples which allow you to try out the SDK right from your browser.

## Streamed Luzid Updates

Finally if you want to learn more details about this release, how things work under the hood
and future plans for Luzid, I recommend to watch the below stream recording I did with the
Solana DevRel team.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ucw3halF1Nc?si=JQYAPjI8XOR6kOhX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Installing the new Version

The docs provide [detailed installation instructions](../../docs/getting-started/installation/),
including a simple script that performs all installation steps for you.

This Luzid version also detects new versions automatically and will alert you when you should
run that script again in the future in order to get the latest and greatest Luzid.

If you run into any issues please post them inside the
`🪲 ︱luzid-issues` channel in the [MagicBlock Discord](https://discord.com/invite/MBkdC3gxcv).

