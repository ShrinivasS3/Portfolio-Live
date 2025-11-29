"use client"

import { Playfair_Display } from "next/font/google"
import { ThemeToggle } from "./theme-toggle"
import { HamburgerMenu } from "./hamburger-menu"
import { useTheme } from "./theme-provider"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export function Header() {
  const { mounted } = useTheme()

  if (!mounted) {
    return (
      <header
        className="fixed top-0 left-0 right-0 z-[80] p-6 backdrop-blur-md border-b transition-all duration-300"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="h-8 w-32 bg-gray-300 rounded animate-pulse" />
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse" />
            <div className="h-8 w-8 bg-gray-300 rounded animate-pulse" />
          </div>
        </div>
      </header>
    )
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[80] px-8 py-2 backdrop-blur-md border-b transition-all duration-300 animate-header-slide-down"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo/Name */}
        <div className="flex items-center">
          <h1
            className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${playfairDisplay.className}`}
            style={{ color: "var(--text-color)" }}
          >
            Shrinivas Sesadri
          </h1>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <HamburgerMenu />
        </div>
      </div>
    </header>
  )
}
