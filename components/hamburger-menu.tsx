"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom" // 1. Import createPortal
import { Menu, X } from "lucide-react"
import { useTheme } from "./theme-provider"
import { SplitText } from "@/components/ui/split-text";
import Link from "next/link";


const handleAnimationComplete = () => {
    console.log('All letters have animated!');

};

const navigationItems = [
  { name: "Home", url: "/" },
  { name: "About", url: "#aboutme" },
  { name: "Journey", url: "#journey" },
  { name: "Projects", url: "#projects" },
  { name: "Creative Showcase", url: "#creative-showcase" },
  { name: "Analog Pursuits", url: "#analog-pursuits" },
  { name: "Contact", url: "#contact" },
]

export function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false)
    // We need to ensure we're on the client before creating the portal
    const [isClient, setIsClient] = useState(false)
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)

    useEffect(() => {
        setIsClient(true)
    }, [])


    useEffect(() => {
    setIsClient(true) // Will be true only on the client-side
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.addEventListener("keydown", handleEscape)
    }
    return () => {
      document.body.style.overflow = "unset"
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  // Your button logic remains mostly the same
  const toggleMenu = () => setIsOpen(!isOpen)
  const handleLinkClick = () => setIsOpen(false)

  return (
      <>
        {/* The button stays in its original place (e.g., the header) */}
        <button
            onClick={toggleMenu}
            className="relative z-50 p-2 rounded-full border backdrop-blur-md transition-all duration-500 hover:scale-110"
            // Note: The button no longer needs to be `fixed` if its parent is already positioned in the header
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--border-color)",
              color: "var(--text-color)",
            }}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
        >
          {/* ... Menu and X icons ... */}
            <div className="relative w-5 h-5">
                <Menu
                    className={`w-5 h-5 absolute transition-all duration-500 ease-in-out ${
                    isOpen ? "opacity-0 rotate-45 scale-75" : "opacity-100 rotate-0 scale-100"
                    }`}
                />
                <X
                    className={`w-5 h-5 absolute transition-all duration-500 ease-in-out ${
                    isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-45 scale-75"
                    }`}
            />
           </div>
        </button>

        {/* 2. Use the portal to render the overlay */}
          {/* Portal for the Menu Overlay */}
          {isClient && isOpen && createPortal(
              <div
                  className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-lg animate-fade-in"
                  onClick={() => setIsOpen(false)}
              >
                  <div className="flex flex-col items-center h-full" onClick={(e) => e.stopPropagation()}>
                      <nav className={`flex-1 flex items-center h-full justify-center `}>
                          <ul className="sm:space-x-4 md:space-y-16 text-center lg:justify-between">
                              {navigationItems.map((item) => (
                                  <li
                                      key={item.name}
                                      // 3. Set the hovered item on mouse enter/leave
                                      onMouseEnter={() => setHoveredItem(item.name)}
                                      onMouseLeave={() => setHoveredItem(null)}
                                  >
                                      <Link
                                          href={item.url}
                                          onClick={handleLinkClick}
                                          className={`block my-8 md:my-4 text-3xl md:text-4xl lg:text-5xl font-bold transition-colors duration-300 ${
                                              item.name === "Contact" ? "bg-gradient-to-r bg-clip-text text-transparent" : "text-white"
                                          }`}
                                          style={item.name === "Contact" ? { backgroundImage: "var(--gradient-primary)" } : {}}
                                      >
                                          {/* 4. Use the HoverableSplitText component */}
                                          <SplitText
                                              text={item.name}
                                              startAnimation={hoveredItem === item.name}
                                          />
                                      </Link>
                                  </li>
                              ))}
                          </ul>
                      </nav>
                      <footer className="absolute bottom-10 text-center">
                          <p className="text-sm text-neutral-400">© 2025 Shrinivas Sesadri</p>
                      </footer>
                  </div>
              </div>,
              document.body
          )}
      </>
  )
}