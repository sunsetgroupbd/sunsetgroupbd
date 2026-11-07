"use client";

import { createContext, useContext, useSyncExternalStore, ReactNode } from "react";
import { en } from "@/content/en";
import { bn } from "@/content/bn";

type Locale = "en" | "bn";
type Content = typeof en;

interface LangContextType {
  locale: Locale;
  t: Content;
  toggle: () => void;
  isBn: boolean;
}

const LangContext = createContext<LangContextType | null>(null);

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("sg-locale");
  return stored === "en" || stored === "bn" ? stored : "en";
}

function getServerSnapshot(): Locale {
  return "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = getSnapshot() === "bn" ? "en" : "bn";
    window.localStorage.setItem("sg-locale", next);
    document.documentElement.lang = next;
    listeners.forEach((listener) => listener());
  };

  const t = locale === "bn" ? (bn as unknown as Content) : en;

  return (
    <LangContext.Provider value={{ locale, t, toggle, isBn: locale === "bn" }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextType {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
