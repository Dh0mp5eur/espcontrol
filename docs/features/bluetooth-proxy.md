---
title: Bluetooth Proxy
description:
  How to use EspControl as an optional Home Assistant Bluetooth proxy for nearby Bluetooth Low Energy devices.
---

# Bluetooth Proxy

EspControl panels with Bluetooth-capable ESP32 chips can act as a Home Assistant Bluetooth proxy for nearby Bluetooth Low Energy devices, such as many battery sensors, buttons, locks, and trackers.

The setting is off by default. Open the setup page, go to **Settings > Bluetooth Proxy**, and turn on **Bluetooth Proxy**. The panel starts Bluetooth after the setting is enabled and keeps it enabled after restarts.

When Bluetooth Proxy is off, the Bluetooth stack stays disabled on boot.

::: warning Memory and range
Bluetooth support uses extra memory and shares radio time with WiFi on WiFi panels. If a panel becomes unstable after enabling it, turn the setting off and restart the panel.
:::

## Notes

- Only Bluetooth Low Energy devices are supported.
- Home Assistant must be connected through the ESPHome integration.
- ESP32-P4 panels do not expose Bluetooth through ESPHome, so Bluetooth proxy is not available on those firmwares.
