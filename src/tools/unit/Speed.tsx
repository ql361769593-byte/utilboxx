"use client";
import { UnitConverter } from "./Converter";
import type { Dictionary } from "@/i18n/types";

const units = [
  { name: "Meter/second (m/s)", factor: 1 },
  { name: "Kilometer/hour (km/h)", factor: 0.2777777778 },
  { name: "Mile/hour (mph)", factor: 0.44704 },
  { name: "Foot/second (ft/s)", factor: 0.3048 },
  { name: "Knot", factor: 0.5144444444 },
  { name: "Mach", factor: 343 },
];

export default function Speed({ dict }: { dict: Dictionary }) {
  return <UnitConverter units={units} dict={dict} />;
}
