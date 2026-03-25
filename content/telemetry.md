---
title: "2026.03.25 - Telemetry"
date: 2026.03.25
tags:
  - telemetry
  - guide
---

This is a two-part series talking about the telemetry system that Jacky and I built.

Objective:

- Build a live telemetry system so that home base and spectators can follow along with what the driver is seeing real time
- Build a review system so that drivers can review and improve their on track performance
- Build a system for to relay car state so that mechanics and technicans can track realtime

Requirements:

- Multiple camera feeds with reliable video transmission
- Driver inputs and engine state tapped from vehicle electrical harnesses
- Reliable, and extensible, and cooked up for an OBD1 system
- Built in 3 days.

These objectives and requirements drove us build a custom solution. In the first part of this blog, we’ll talk about the hardware BOM and build out. In the second part we’ll talk about the software stack. In the third part we’ll talk about the live system performance as a whole.

## Hardware BOM

<div style="overflow-x: auto;">
<table style="min-width: 900px; border-collapse: collapse; width: 100%; font-size: 0.8em;">
  <thead>
    <tr>
      <th style="white-space: nowrap; padding: 6px 12px; text-align: left;">Component</th>
      <th style="white-space: nowrap; padding: 6px 12px; text-align: left;">Model</th>
      <th style="white-space: nowrap; padding: 6px 12px; text-align: left;">Specs</th>
      <th style="white-space: nowrap; padding: 6px 12px; text-align: left;">Power</th>
      <th style="white-space: nowrap; padding: 6px 12px; text-align: left;">Cost</th>
      <th style="white-space: nowrap; padding: 6px 12px; text-align: left;">Category</th>
      <th style="padding: 6px 12px; text-align: left; min-width: 200px;">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="white-space: nowrap; padding: 6px 12px;">Forward Wide Camera</td>
      <td style="white-space: nowrap; padding: 6px 12px;"><a href="https://www.amazon.com/Logitech-C920x-Pro-HD-Webcam/dp/B085TFF7M1">Logitech C920x</a></td>
      <td style="white-space: nowrap; padding: 6px 12px;">1080p x 30fps</td>
      <td style="white-space: nowrap; padding: 6px 12px;">USB - 2.5W</td>
      <td style="white-space: nowrap; padding: 6px 12px;">$70</td>
      <td style="padding: 6px 12px;"><span style="background: #fde8d0; color: #b85c00; border-radius: 4px; padding: 2px 8px; white-space: nowrap;">Video</span></td>
      <td style="padding: 6px 12px;">Driver POV</td>
    </tr>
    <tr>
      <td style="white-space: nowrap; padding: 6px 12px;">Driver Camera</td>
      <td style="white-space: nowrap; padding: 6px 12px;"><a href="https://www.amazon.com/Logitech-C920x-Pro-HD-Webcam/dp/B085TFF7M1">Logitech C920x</a></td>
      <td style="white-space: nowrap; padding: 6px 12px;">1080p x 30fps</td>
      <td style="white-space: nowrap; padding: 6px 12px;">USB - 2.5W</td>
      <td style="white-space: nowrap; padding: 6px 12px;">$70</td>
      <td style="padding: 6px 12px;"><span style="background: #fde8d0; color: #b85c00; border-radius: 4px; padding: 2px 8px; white-space: nowrap;">Video</span></td>
      <td style="padding: 6px 12px;">Being able to see the shifting and pedal movements is cool</td>
    </tr>
    <tr>
      <td style="white-space: nowrap; padding: 6px 12px;">On Board Compute</td>
      <td style="white-space: nowrap; padding: 6px 12px;"><a href="https://www.amazon.com/seeed-studio-reComputer-J4012-Edge-Pre-Installed/dp/B0C88V4CB7/">Jetson Orin NX</a></td>
      <td style="white-space: nowrap; padding: 6px 12px;">16GB RAM, NVENC Accelerator</td>
      <td style="white-space: nowrap; padding: 6px 12px;">12V/5A → 60W Max</td>
      <td style="white-space: nowrap; padding: 6px 12px;">$1150</td>
      <td style="padding: 6px 12px;"><span style="background: #ead5f9; color: #6b2fa0; border-radius: 4px; padding: 2px 8px; white-space: nowrap;">Compute</span></td>
      <td style="padding: 6px 12px;">We don’t ever want video encoding to be the bottleneck, so we wanted a hardware encoding accelerator</td>
    </tr>
    <tr>
      <td style="white-space: nowrap; padding: 6px 12px;">5G Modem</td>
      <td style="white-space: nowrap; padding: 6px 12px;"><a href="https://www.amazon.com/GL-iNet-GL-X3000-Multi-WAN-Detachable-WireGuard/dp/B0C5RCQ8N5">GL-X3000</a></td>
      <td style="white-space: nowrap; padding: 6px 12px;">5G Compatible, physical SIM</td>
      <td style="white-space: nowrap; padding: 6px 12px;">12V/2.5A → 30W Max</td>
      <td style="white-space: nowrap; padding: 6px 12px;">$323</td>
      <td style="padding: 6px 12px;"><span style="background: #d3f5e3; color: #1a6640; border-radius: 4px; padding: 2px 8px; white-space: nowrap;">Connectivity</span></td>
      <td style="padding: 6px 12px;">5G is likely overkill, but the bandwidth headroom is nice</td>
    </tr>
    <tr>
      <td style="white-space: nowrap; padding: 6px 12px;">SIM Card + Plan</td>
      <td style="white-space: nowrap; padding: 6px 12px;"><a href="https://www.visible.com/plans">Visible+</a></td>
      <td style="white-space: nowrap; padding: 6px 12px;">Unlimited data</td>
      <td style="white-space: nowrap; padding: 6px 12px;">—</td>
      <td style="white-space: nowrap; padding: 6px 12px;">$45/mo</td>
      <td style="padding: 6px 12px;"><span style="background: #d3f5e3; color: #1a6640; border-radius: 4px; padding: 2px 8px; white-space: nowrap;">Connectivity</span></td>
      <td style="padding: 6px 12px;">Verizon generally works well at TH and Sonoma</td>
    </tr>
    <tr>
      <td style="white-space: nowrap; padding: 6px 12px;">GPS/Accel</td>
      <td style="white-space: nowrap; padding: 6px 12px;"><a href="https://www.amazon.com/RACEBOX-Micro-25Hz-GPS-Accelerometer/dp/B0DF5PX5X9/">Racebox Micro</a></td>
      <td style="white-space: nowrap; padding: 6px 12px;">25Hz, &lt;1m accuracy</td>
      <td style="white-space: nowrap; padding: 6px 12px;">12V, 0.2W Max</td>
      <td style="white-space: nowrap; padding: 6px 12px;">$125</td>
      <td style="padding: 6px 12px;"><span style="background: #d0e8fd; color: #0a4a8a; border-radius: 4px; padding: 2px 8px; white-space: nowrap;">Telemetry</span></td>
      <td style="padding: 6px 12px;">Also works standalone with your phone</td>
    </tr>
    <tr>
      <td style="white-space: nowrap; padding: 6px 12px;">Bluetooth Dongle</td>
      <td style="white-space: nowrap; padding: 6px 12px;"><a href="https://www.amazon.com/dp/B0161B5ATM">UD100-G03</a></td>
      <td style="white-space: nowrap; padding: 6px 12px;">BLE</td>
      <td style="white-space: nowrap; padding: 6px 12px;">USB, 2.5W Max</td>
      <td style="white-space: nowrap; padding: 6px 12px;">$39</td>
      <td style="padding: 6px 12px;"><span style="background: #d0e8fd; color: #0a4a8a; border-radius: 4px; padding: 2px 8px; white-space: nowrap;">Telemetry</span></td>
      <td style="padding: 6px 12px;">Jetson doesn’t have built-in BT; Racebox relays over BLE</td>
    </tr>
    <tr>
      <td style="white-space: nowrap; padding: 6px 12px;">Microcontroller</td>
      <td style="white-space: nowrap; padding: 6px 12px;"><a href="https://www.amazon.com/Arduino-ATmega2560-Compatible-Advanced-Projects/dp/B0046AMGW0/">Arduino Mega 2560</a></td>
      <td style="white-space: nowrap; padding: 6px 12px;">54 Digital IO, 16 Analog Inputs</td>
      <td style="white-space: nowrap; padding: 6px 12px;">USB, 1W Max</td>
      <td style="white-space: nowrap; padding: 6px 12px;">$49</td>
      <td style="padding: 6px 12px;"><span style="background: #d0e8fd; color: #0a4a8a; border-radius: 4px; padding: 2px 8px; white-space: nowrap;">Telemetry</span></td>
      <td style="padding: 6px 12px;">Bit overkill — a smaller 5V Arduino would be plenty</td>
    </tr>
  </tbody>
</table>
</div>

### Totals
- Total cost: \~1850 for listed parts. **~$2000** when including random wires, resistors/diodes, butt joints, t splices, small wires, solder, perfboard, zipties, etc.
- Total power: `~100W` max theoretical, in practice steady state power draw was likely closer to `20/30W maximum`