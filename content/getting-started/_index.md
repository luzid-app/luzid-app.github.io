+++
title = "Getting Started"
description = "Getting Started"
date = 2024-06-09T15:00:00+00:00
updated = 2024-06-09T15:00:00+00:00
draft =  false
template = "getting-started/section.html"

[taxonomies]
authors = ["Thorsten Lorenz"]

[extra]
lead = "🎉 A more modular Luzid!"

[page]
toc = true
+++

## Installation

### MacOS and Linux Users

<html>
<style>
.pre {
  padding: 20px 10px;
  white-space: no-wrap;
  width: 620px;
}
</style>

Run the below script in your terminal to install Luzid.

<pre id="install-text" class="pre">
sh -c "$(curl -sSfL http://luzid.app/getting-started/install-luzid.sh)"
</pre>

<button type="button" class="copy-btn btn btn-primary" data-clipboard-target="#install-text">
    Copy
</button>
<script>new ClipboardJS('.copy-btn');</script>
</html>

### Windows Users

Installation on Windows is a bit more hands-on.

You can run the above script inside a WSL terminal which will install the Linux parts.
Then please follow the [release notes](https://github.com/luzid-app/luzid-sdk/releases/tag/windows-v0.0.4) in order to get the
UI setup and connecting to the `luzid` running in the WSL environment.

## Running Luzid

The above script will install two pieces on your machine

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
- on Linux run the `luzid-ui` command in your terminal

If the backend is not running yet then it will wait for you to start it.

You can stop and start the backend as many times as you like, the UI will reconnect to it.
