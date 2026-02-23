/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Mute Behavior - How mute actions behave when state may be stale. */
  "muteBehavior": "optimistic-toggle" | "refresh-then-toggle" | "explicit-idempotent",
  /** Undo TTL (seconds) - Undo availability window in seconds. */
  "undoTtlSeconds": string,
  /** Voicemeeter Executable Path - Absolute path to voicemeeter executable for launch actions. */
  "voicemeeterExecutablePath"?: string,
  /** Volume Increase Step (dB) - dB to add when increasing volume. */
  "increaseStep": string,
  /** Volume Decrease Step (dB) - dB to subtract when decreasing volume. */
  "decreaseStep": string,
  /** Primary Hotkey (Enter) - Which action gets the Enter key. Secondary gets Ctrl+Enter. */
  "volumePrimaryAction": "increase" | "decrease",
  /** Section Order - Which section appears first in lists. */
  "sectionOrder": "strips-first" | "buses-first"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `mute` command */
  export type Mute = ExtensionPreferences & {}
  /** Preferences accessible in the `volume` command */
  export type Volume = ExtensionPreferences & {}
  /** Preferences accessible in the `profiles` command */
  export type Profiles = ExtensionPreferences & {}
  /** Preferences accessible in the `status` command */
  export type Status = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `mute` command */
  export type Mute = {}
  /** Arguments passed to the `volume` command */
  export type Volume = {}
  /** Arguments passed to the `profiles` command */
  export type Profiles = {}
  /** Arguments passed to the `status` command */
  export type Status = {}
}

