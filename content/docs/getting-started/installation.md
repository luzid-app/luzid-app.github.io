+++
title = "Installation"
date = 2024-06-30T08:00:00+00:00
updated = 2024-06-30T08:00:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"
aliases = [ "/docs/getting-started/001-installation" ]

[extra]
toc = true
top = false
+++

### MacOS and Linux Users

<html>
<style>
.pre {
  padding: 20px 20px;
  white-space: no-wrap;
  width: 460px;
}
</style>

Run the below script in your terminal to install Luzid.

<pre id="install-text" class="pre">
sh -c "$(curl -sSfL https://luzid.app/install.sh)"
</pre>

<button type="button" class="copy-btn btn btn-primary" data-clipboard-target="#install-text">
    Copy
</button>
<script>new ClipboardJS('.copy-btn');</script>
</html>

### Windows Users

Installation on Windows is a bit more hands-on.

You can run the above script inside a WSL terminal which will install the Linux parts.
Then please follow these [detailed notes](../windows-installation) in order to get the
UI setup and connecting to the `luzid` running in the WSL environment.
