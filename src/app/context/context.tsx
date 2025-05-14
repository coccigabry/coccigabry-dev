"use client"

import { createContext, useEffect, useState } from "react";
import { Labels, LabelsResponse } from "../types";

interface LabelsContextType {
    labels: Labels;
    setLang: (lang: string) => void;
}

export const LabelsContext = createContext<LabelsContextType | undefined>(undefined)

export const LabelsProvider = ({ children }) => {
    const [lang, setLang] = useState<string | null>(null);
    const [labels, setLabels] = useState<Labels | null>(null)

    useEffect(() => {
        if (!lang) return;

        const fetchLabels = async () => {
            try {
                const res = await fetch("/content.json");
                const data: LabelsResponse = await res.json();
                setLabels(data.labels.lang[lang]);
            } catch (err) {
                console.warn(err);
            }
        };

        fetchLabels();
    }, [lang]);

    return (
        <LabelsContext.Provider value={{ labels, setLang  }}>
            {children}
        </LabelsContext.Provider>
    )
}