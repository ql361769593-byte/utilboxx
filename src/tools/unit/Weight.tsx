"use client";
import { UnitConverter } from "./Converter";
import type { Dictionary } from "@/i18n/types";

const units = [
  { name: "Kilogram (kg)", factor: 1 },
  { name: "Gram (g)", factor: 0.001 },
  { name: "Milligram (mg)", factor: 0.000001 },
  { name: "Pound (lb)", factor: 0.45359237 },
  { name: "Ounce (oz)", factor: 0.028349523125 },
  { name: "Ton (metric)", factor: 1000 },
  { name: "Stone", factor: 6.35029318 },
];

export default function Weight({ dict }: { dict: Dictionary }) {
  return <UnitConverter units={units} dict={dict} />;
}
