"use client";
import { UnitConverter } from "./Converter";
import type { Dictionary } from "@/i18n/types";

const units = [
  { name: "Meter (m)", factor: 1 },
  { name: "Kilometer (km)", factor: 1000 },
  { name: "Centimeter (cm)", factor: 0.01 },
  { name: "Millimeter (mm)", factor: 0.001 },
  { name: "Mile (mi)", factor: 1609.344 },
  { name: "Yard (yd)", factor: 0.9144 },
  { name: "Foot (ft)", factor: 0.3048 },
  { name: "Inch (in)", factor: 0.0254 },
  { name: "Nautical mile", factor: 1852 },
];

export default function Length({ dict }: { dict: Dictionary }) {
  return <UnitConverter units={units} dict={dict} />;
}
