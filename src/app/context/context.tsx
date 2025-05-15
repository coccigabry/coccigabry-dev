"use client"

import { createContext, useEffect, useState } from "react";
import { Labels, LabelsResponse } from "../types";

interface LabelsContextType {
    labels: Labels;
    setLang: (lang: string) => void;
}

export const LabelsContext = createContext<LabelsContextType | undefined>(undefined)

export const LabelsProvider = ({ children }) => {
    const [lang, setLangState] = useState<string | null>(null);
    const [labels, setLabels] = useState<Labels | null>(null)

    const setLang = (newLang: string) => {
        localStorage.setItem("lang", newLang);
        setLangState(newLang);
    };

    useEffect(() => {
        const storedLang = localStorage.getItem("lang");
        if (storedLang) {
            setLangState(storedLang);
        }
    }, []);

    useEffect(() => {
        if (!lang) return

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
        <LabelsContext.Provider value={{ labels, setLang }}>
            {children}
        </LabelsContext.Provider>
    )
}