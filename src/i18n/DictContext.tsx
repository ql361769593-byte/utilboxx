"use client";
import { createContext, useContext } from "react";
import type { Dictionary } from "@/i18n/types";
import { defaultDict } from "@/i18n/default-dict";

export const DictContext = createContext<Dictionary>(defaultDict);
export const useDict = () => useContext(DictContext);
