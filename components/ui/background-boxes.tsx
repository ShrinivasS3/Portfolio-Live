"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1)
  const cols = new Array(100).fill(1)

  // Theme-aware colors that will work with both light and dark themes
  const colors = [
    "rgba(125, 211, 252, 0.5)", // sky-300 with opacity
    "rgba(249, 168, 212, 0.5)", // pink-300 with opacity
    "rgba(134, 239, 172, 0.5)", // green-300 with opacity
    "rgba(253, 224, 71, 0.5)", // yellow-300 with opacity
    "rgba(252, 165, 165, 0.5)", // red-300 with opacity
    "rgba(216, 180, 254, 0.5)", // purple-300 with opacity
    "rgba(147, 197, 253, 0.5)", // blue-300 with opacity
    "rgba(165, 180, 252, 0.5)", // indigo-300 with opacity
    "rgba(196, 181, 253, 0.5)", // violet-300 with opacity
  ]

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8 border-l relative"
          style={{ borderColor: "var(--border-color)" }}
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-16 h-8 border-r border-t relative"
              style={{ borderColor: "var(--border-color)" }}
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] stroke-[1px] pointer-events-none opacity-20"
                  style={{ color: "var(--text-color)" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

export const Boxes = React.memo(BoxesCore)
