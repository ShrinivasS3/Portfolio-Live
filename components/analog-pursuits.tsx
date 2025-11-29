"use client"

import type React from "react"
import { Playfair_Display } from "next/font/google"
import { useTheme } from "./theme-provider"
import { motion } from "framer-motion"
import { PenTool, Clock, Headphones } from "lucide-react"
import {CometCard} from "@/components/ui/comet-card";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
})

interface Fascination {
  id: string
  title: string
  tagline: string
  image: string
  icon: React.ReactNode
  description: string
  accent: string
}

const fascinations: Fascination[] = [
  {
    id: "fountain-pens",
    title: "Ink & Imagination",
    tagline: "A tool that slows time.",
    image: "/fountain-pen.jpg",
    icon: <PenTool className="w-8 h-8" />,
    description:
      "There's something meditative about the slow glide of a nib across paper — how the ink spills in sync with your thoughts. For me, fountain pens aren't just writing instruments, they're machines of memory, preserving sparks of curiosity, ideas, and fragments of time. The tactile feedback, the choice of nibs, and even the ritual of refilling — it's all part of a conversation between hand and mind.",
    accent: "#5D3A00",
  },
  {
    id: "mechanical-watches",
    title: "Time as Craft",
    tagline: "Where precision meets poetry.",
    image: "/watch.jpg",
    icon: <Clock className="w-8 h-8" />,
    description:
      "I'm fascinated by the dance of cogs, gears, and escapements in a mechanical watch — systems engineered to perfection without code or electricity. They remind me that the most enduring systems are those that are self-contained, meticulously designed, and deeply human-centric. It's no coincidence that my obsession with computation overlaps with horology — both are about harnessing complexity to craft clarity over time.",
    accent: "#002B36",
  },
  {
    id: "audiophile-listening",
    title: "The Architecture of Sound",
    tagline: "Listening, not just hearing.",
    image: "/audiophile.jpg",
    icon: <Headphones className="w-8 h-8" />,
    description:
      "I'm deeply drawn to the sonic space — where sound becomes architecture. Whether it's the warmth of analog gear or the precise tuning of planar magnetic headphones, the audiophile world teaches me about attention to detail, intentional design, and the power of silence. As with code and music, there's beauty in how frequencies interact — how every system has a resonance. For me, listening is a way to think.",
    accent: "#8A0303",
  },
]

const FascinationCard = ({ fascination, index }: { fascination: Fascination; index: number }) => {
  return (
    <motion.div
        className="h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <CometCard className={"flex flex-col h-full"}>
            <div className="relative h-64 overflow-hidden rounded-t-xl">
              <img
                src={fascination.image}
                alt={fascination.title}
                className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Color Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  backgroundColor: `${fascination.accent}90`,
                }}
              />

              {/* Icon and Tagline */}
              <div className="absolute inset-0 flex flex-col items-start justify-end text-white p-6">
                <div
                  className="mb-4 transition-transform duration-300"
                >
                  {fascination.icon}
                </div>
                <div
                  className="text-justify text-lg font-medium italic leading-relaxed"
                >
                  {fascination.tagline}
                </div>
              </div>
            </div>
          {/*</CardItem>*/}

          {/* Bottom Content Half */}
          <div className="p-6 bg-white dark:bg-gray-50 rounded-b-xl flex-grow">
            <div
              className={`text-2xl font-bold mb-4 transition-colors duration-300`}
            >
              {fascination.title}
            </div>

            <div
              className="text-sm leading-relaxed transition-colors duration-300 text-justify"
            >
              {fascination.description}
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover/card:opacity-20 transition-opacity duration-500 pointer-events-none"
            style={{
              boxShadow: `0 0 40px ${fascination.accent}`,
            }}
          />
      </CometCard>
    </motion.div>
  )
}

export function AnalogPursuits() {
  const { mounted } = useTheme()

  if (!mounted) {
    return (
      <section className="py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-16 bg-gray-300 rounded mb-16 w-80 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-300 rounded-2xl h-96"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="py-20 px-6 md:px-12 lg:px-20 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-color)" }}
      id="analog-pursuits"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className={`text-4xl md:text-6xl lg:text-7xl font-bold transition-colors duration-300 ${playfairDisplay.className}`}
            style={{ color: "var(--text-color)" }}
          >
            Analog{" "}
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Pursuits
            </span>
          </h2>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mt-6 transition-colors duration-300"
            style={{ color: "var(--text-color)", opacity: 0.8 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Beyond the digital realm, I find inspiration in the tactile world of craftsmanship and precision.
          </motion.p>
        </motion.div>

        {/* Three-Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fascinations.map((fascination, index) => (
            <FascinationCard key={fascination.id} fascination={fascination} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
