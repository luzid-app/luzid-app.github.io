+++
title = "Getting Started"
description = "Getting Started"
template = "getting-started/section.html"
+++

## Installation

### MacOS and Linux Users

<html>
<style>
.pre {
  padding: 20px 5px;
  white-space: no-wrap;
  width: 650px;
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
