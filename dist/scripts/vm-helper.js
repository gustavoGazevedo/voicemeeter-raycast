"use strict";

const path = require("path");
const koffi = require("koffi");

const args = process.argv.slice(2);
const setIdx = args.indexOf("--set");
if (setIdx === -1 || !args[setIdx + 1]) {
  process.exit(2);
}

const paramStr = args[setIdx + 1];
const eq = paramStr.indexOf("=");
if (eq === -1) {
  process.exit(2);
}

const paramName = paramStr.slice(0, eq);
const paramValue = parseFloat(paramStr.slice(eq + 1));

const dllDir = args.indexOf("--dll-dir") !== -1 ? args[args.indexOf("--dll-dir") + 1] : null;

const dllPaths = [
  dllDir ? path.join(dllDir, "VoicemeeterRemote64.dll") : null,
  "VoicemeeterRemote64",
  path.join(process.env["ProgramFiles(x86)"] || "C:\\Program Files (x86)", "VB", "Voicemeeter", "VoicemeeterRemote64.dll"),
  path.join(process.env.ProgramFiles || "C:\\Program Files", "VB", "Voicemeeter", "VoicemeeterRemote64.dll"),
].filter(Boolean);

let lib;
for (const dllPath of dllPaths) {
  try {
    lib = koffi.load(dllPath);
    break;
  } catch {}
}

if (!lib) {
  try {
    lib = koffi.load("VoicemeeterRemote");
  } catch {}
}

if (!lib) {
  process.exit(3);
}

const VBVMR_Login = lib.func("long VBVMR_Login()");
const VBVMR_Logout = lib.func("long VBVMR_Logout()");
const VBVMR_SetParameterFloat = lib.func("long VBVMR_SetParameterFloat(const char *name, float value)");

let setParams;
try {
  setParams = lib.func("long VBVMR_SetParameters(const char *params)");
} catch {
  setParams = null;
}

const rc = VBVMR_Login();
if (rc < 0) {
  process.exit(4);
}

try {
  let ok = false;
  if (setParams) {
    const r = setParams(`${paramName}=${paramValue}`);
    ok = r >= 0;
  }
  if (!ok) {
    const r = VBVMR_SetParameterFloat(paramName, paramValue);
    ok = r >= 0;
  }
  process.exit(ok ? 0 : 1);
} finally {
  VBVMR_Logout();
}
