"use client"

import { useTheme } from "./theme-provider"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  // Don't render anything until the component is mounted on the client
  if (!mounted) {
    return (
      <div
        className="p-2 rounded-full backdrop-blur-md border transition-all duration-300"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-color)",
          opacity: 0.5,
        }}
      >
        <div className="w-5 h-5" />
      </div>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
        color: "var(--text-color)",
      }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  )
}
