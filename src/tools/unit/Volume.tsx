"use client";
import { UnitConverter } from "./Converter";
import type { Dictionary } from "@/i18n/types";

const units = [
  { name: "Liter (L)", factor: 1 },
  { name: "Milliliter (mL)", factor: 0.001 },
  { name: "Cubic meter (m³)", factor: 1000 },
  { name: "Cubic foot (ft³)", factor: 28.316846592 },
  { name: "Cubic inch (in³)", factor: 0.016387064 },
  { name: "US gallon", factor: 3.785411784 },
  { name: "US cup", factor: 0.2365882365 },
  { name: "US fluid ounce", factor: 0.0295735295625 },
  { name: "UK gallon", factor: 4.54609 },
  { name: "UK fluid ounce", factor: 0.0284130625 },
];

export default function Volume({ dict }: { dict: Dictionary }) {
  return <UnitConverter units={units} dict={dict} />;
}
