+++
title = "Windows Installation"
date = 2024-06-30T08:00:00+00:00
updated = 2024-06-30T08:00:00+00:00
draft = false
weight = 9999
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

## Installation Instructions

### 1. Install and Run the Luzid Backend

Open a WSL terminal in admin mode as shown in the below screenshot:

<img width="380" alt="wsl-as-admin" src="https://github.com/luzid-app/luzid-sdk/assets/192891/a1d25dab-a449-4ea6-9c05-df388ee5550d">

Then run the script provided on the [main installation page](/docs/getting-started/installation) in order to install the Linux version.

Now launch it via `luzid`.

NOTE: this will also install the `/usr/local/bin/luzidui` and `/usr/local/lib/luzidui/` which
only works on Linux. You can remove that if you want.

* * *

### 2. Download and Extract the LuzidUI

Next download the LuzidUI from [here](https://github.com/luzid-app/luzid-sdk/releases/download/windows-v0.0.3/luzidui.zip),
extract it to a directory of your choice and launch the `luzidui.exe` from inside the extracted
`luzidui` directory.

### 3. Run the LuzidUI and work through Windows Warning Dialog

The very first time you'll most likely see a below warning, which you can work around by clicking
`More Info` and then `Run Anyway` as shown in the screenshots below:
<br>

<img width="250" alt="windows-defender-01" src="https://github.com/luzid-app/luzid-sdk/assets/192891/62c6b90f-2edd-46b0-a727-59a93ecf4222"><img width="250" alt="windows-defender-02" src="https://github.com/luzid-app/luzid-sdk/assets/192891/f026623a-ceef-4d32-a8f8-dd4d7e6ff9f3">

#### Install Missing Dependencies

In case you're missing Windows developer tools you'll see the following prompt:

<img width="371" alt="missing-dotnet-dll" src="https://github.com/luzid-app/luzid-sdk/assets/192891/a68006f0-2aed-4cd8-a5fd-19f0d92e7441">

If you encounter this install the [Latest Microsoft Visual C++ Redistributable Version](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) and make sure to select a downloadable that matches your architecture.

* * *

### 4. Run LuzidUI and Connect it to the Luzid Backend

Now try to start the UI again and it should connect to the backend running in the WSL terminal.
Go to _Transactions_ and click the _Anchor Tic Tac Toe_ link to play around with the app while
keeping an eye on Luzid.

<img width="600" alt="luzid-on-windows" src="https://github.com/luzid-app/luzid-sdk/assets/192891/98ee2bf6-b6a4-4200-bfc1-25c3160b51b6">

