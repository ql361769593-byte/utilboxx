"use client";
import { UnitConverter } from "./Converter";
import type { Dictionary } from "@/i18n/types";

const units = [
  { name: "Second (s)", factor: 1 },
  { name: "Millisecond (ms)", factor: 0.001 },
  { name: "Microsecond (μs)", factor: 0.000001 },
  { name: "Nanosecond (ns)", factor: 1e-9 },
  { name: "Minute (min)", factor: 60 },
  { name: "Hour (h)", factor: 3600 },
  { name: "Day (d)", factor: 86400 },
  { name: "Week", factor: 604800 },
  { name: "Month (30d)", factor: 2592000 },
  { name: "Year (365d)", factor: 31536000 },
];

export default function Time({ dict }: { dict: Dictionary }) {
  return <UnitConverter units={units} dict={dict} />;
}
