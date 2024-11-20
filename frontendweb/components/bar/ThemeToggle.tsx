"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Pastikan komponen hanya dirender setelah client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Hindari render di server

  return (
    <ToggleGroup
      variant={"default"}
      type="single"
      size={"sm"}
      className="bg-secondary border-border rounded-lg w-fit p-1"
      value={theme}
      onValueChange={(value) => {
        if (value) setTheme(value);
      }}
    >
      <ToggleGroupItem value="light" size={"sm"}>
        <Sun />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" size={"sm"}>
        <Moon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
