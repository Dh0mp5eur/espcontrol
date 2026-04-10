---
title: Home Assistant Actions
description:
  How to allow your Espcontrol touchscreen to perform Home Assistant actions so it can control lights, switches, and other devices.
---

# Home Assistant Actions

Espcontrol needs permission to call Home Assistant actions (like toggling lights or switches) on your behalf. Without this, the touchscreen can display the time and screensaver but **buttons won't be able to control your devices**.

Your display will prompt you to do this during first-time setup. Follow the steps below.

## Enable actions

1. **Open Home Assistant** and go to **Settings > Devices & Services**.

2. **Find the ESPHome integration** and click on it.

![ESPHome integration showing connected devices](/ha-actions-step-2.png)

3. **Find your Espcontrol device** in the list. Click the **Configure** button (gear icon) next to it.

![Espcontrol device entry with configure button](/ha-actions-step-3.png)

4. **Check "Allow the device to perform Home Assistant actions"** and click **Submit**.

![Options dialog with the actions checkbox enabled](/ha-actions-step-4.png)

5. **Go back to your display** and tap **Done** on the setup screen. Your buttons will now be able to control Home Assistant devices.

::: tip One-time setup
You only need to do this once per device. The setting persists across firmware updates and device restarts.
:::

## What if I skip this?

The display will still work — it will show the time, screensaver, and backlight schedule as normal. However, any buttons you configure to control Home Assistant entities (lights, switches, scenes, etc.) won't do anything when tapped.

You can enable this setting at any time by following the steps above.

## Device not showing up?

If you don't see your Espcontrol device in the ESPHome integration, it may not have been added to Home Assistant yet. Head back to the [Install](/install#add-to-home-assistant) guide to add it first.

![Home Assistant discovering the Espcontrol device](/ha-actions-step-1.png)
