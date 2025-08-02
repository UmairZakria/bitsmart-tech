"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent SSR mismatches
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false} >
      {children}
    </NextThemesProvider>
  );
}
