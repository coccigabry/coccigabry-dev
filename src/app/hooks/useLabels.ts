"use client"

import { useContext } from "react";
import { LabelsContext } from "../context/context";

export const useLabels = () => {
  const context = useContext(LabelsContext);
  if (context === undefined) throw new Error("Error using LabelsContext");
  return context;
};
