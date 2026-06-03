"use client";
import { UnitConverter } from "./Converter";
import type { Dictionary } from "@/i18n/types";

const units = [
  { name: "Byte (B)", factor: 1 },
  { name: "Kilobyte (KB)", factor: 1024 },
  { name: "Megabyte (MB)", factor: 1024 ** 2 },
  { name: "Gigabyte (GB)", factor: 1024 ** 3 },
  { name: "Terabyte (TB)", factor: 1024 ** 4 },
  { name: "Petabyte (PB)", factor: 1024 ** 5 },
  { name: "Kilobit (Kb)", factor: 128 },
  { name: "Megabit (Mb)", factor: 128 * 1024 },
  { name: "Gigabit (Gb)", factor: 128 * 1024 ** 2 },
];

export default function Data({ dict }: { dict: Dictionary }) {
  return <UnitConverter units={units} dict={dict} />;
}
