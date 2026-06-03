"use client";
import { UnitConverter } from "./Converter";
import type { Dictionary } from "@/i18n/types";

const units = [
  { name: "Square meter (m²)", factor: 1 },
  { name: "Square kilometer (km²)", factor: 1_000_000 },
  { name: "Square centimeter (cm²)", factor: 0.0001 },
  { name: "Square mile (mi²)", factor: 2_589_988.110336 },
  { name: "Square foot (ft²)", factor: 0.09290304 },
  { name: "Square inch (in²)", factor: 0.00064516 },
  { name: "Hectare (ha)", factor: 10_000 },
  { name: "Acre", factor: 4046.8564224 },
];

export default function Area({ dict }: { dict: Dictionary }) {
  return <UnitConverter units={units} dict={dict} />;
}
