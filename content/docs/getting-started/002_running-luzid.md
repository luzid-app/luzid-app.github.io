+++
title = "Running Luzid"
date = 2024-06-30T08:00:00+00:00
updated = 2024-06-30T08:00:00+00:00
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

The [Installation](../001-installation) script will install two pieces on your machine

- `luzid` executable which embedds the MagicBlock validator and is all you need to run tests
- the luzid UI which can be started optionally to interact with the `luzid` backend

### Running the Backend

There are numerous ways to start up the backend.

#### Start with Workspace Discovery

This is the recommended way to start the backend as it will automatically find all the programs
the workspace contained in the current directory.

```bash
luzid .
```

It will clone all the programs into the validator and watch them for changes, which means all
that's need to refresh them in the validator is to compile them via `cargo build-sbf`.

Running `luzid` with that `.` is essentially the same as running it with the below
configuration.

```toml
[[workspace]]
path = "."
```

#### Start Without any Configuration

The simplest way to start the backend is to run the `luzid` command in your terminal.

```bash
luzid
```

However no local programs will be loaded by default and you'll have to either add a workspace
manually or depend on all programs being available on `devnet`.

Alternatively you can of course also deploy your programs as usual, but are then loosing out on
Luzid's _hot swap_ feature.

### Running the UI

In order to gain insight into your transactions and interact with the luzid backend you
will most likely want to lauch the UI as well.

- on MacOS open the `LuzidUI.app`to do that
- on Linux run the `luzidui` command in your terminal

If the backend is not running yet then it will wait for you to start it.

You can stop and start the backend as many times as you like, the UI will reconnect to it.
