"use client"

import type React from "react"
import { Playfair_Display } from "next/font/google"
import { Camera, Code, Gamepad, Music, Palette, Dumbbell, Brain, Star } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useTheme } from "./theme-provider"
import type { ReactNode } from "react"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const FloatingElement = ({ children }: { children: ReactNode }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    x.set(mouseX - rect.width / 2)
    y.set(mouseY - rect.height / 2)
  }

  return (
    <motion.div onMouseMove={handleMouseMove} className="relative w-full h-full">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 opacity-20"
          style={{
            x: useTransform(mouseXSpring, (x) => x * 0.3),
            y: useTransform(mouseYSpring, (y) => y * 0.3),
            color: "var(--accent-secondary-start)",
          }}
        >
          <Brain size={40} />
        </motion.div>

        <motion.div
          className="absolute top-20 right-20 opacity-40"
          style={{
            x: useTransform(mouseXSpring, (x) => x * -0.3),
            y: useTransform(mouseYSpring, (y) => y * 0.3),
            color: "var(--accent-primary-start)",
          }}
        >
          <Code size={40} />
        </motion.div>

        <motion.div
          className="absolute top-10 right-1/2 opacity-40"
          style={{
            x: useTransform(mouseXSpring, (x) => x * 0.1),
            y: useTransform(mouseYSpring, (y) => y * 0.2),
            color: "var(--accent-secondary-end)",
          }}
        >
          <Palette size={40} />
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-20 opacity-40"
          style={{
            x: useTransform(mouseXSpring, (x) => x * 0.3),
            y: useTransform(mouseYSpring, (y) => y * -0.3),
            color: "var(--accent-primary-end)",
          }}
        >
          <Gamepad size={40} />
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-10 opacity-40"
          style={{
            x: useTransform(mouseXSpring, (x) => x * -0.3),
            y: useTransform(mouseYSpring, (y) => y * -0.3),
            color: "var(--accent-secondary-start)",
          }}
        >
          <Music size={40} />
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-1/2 opacity-40"
          style={{
            x: useTransform(mouseXSpring, (x) => x * 0.1),
            y: useTransform(mouseYSpring, (y) => y * -0.2),
            color: "var(--accent-primary-start)",
          }}
        >
          <Camera size={40} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center">{children}</div>
    </motion.div>
  )
}

export function AboutmeSection() {
  const { mounted } = useTheme()

  if (!mounted) {
    return (
      <section className="px-6 md:px-12 lg:px-20 py-20" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="animate-pulse">
          <div className="h-16 bg-gray-300 rounded mb-12 w-64 mx-auto"></div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-3">
            <div className="md:col-span-6 md:row-span-2 h-80 bg-gray-300 rounded-3xl"></div>
            <div className="md:col-span-6 md:row-span-1 h-40 bg-gray-300 rounded-3xl"></div>
            <div className="md:col-span-6 md:row-span-1 h-40 bg-gray-300 rounded-3xl"></div>
            <div className="md:col-span-4 h-60 bg-gray-300 rounded-3xl"></div>
            <div className="md:col-span-4 h-60 bg-gray-300 rounded-3xl"></div>
            <div className="md:col-span-4 h-60 bg-gray-300 rounded-3xl"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-20 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-color)" }}
      id="aboutme"
    >
      <div className="w-full flex text-center justify-center align-middle mb-16">
        <h2
          className={`text-5xl md:text-6xl lg:text-7xl font-bold transition-colors duration-300 ${playfairDisplay.className}`}
          style={{ color: "var(--text-color)" }}
        >
          About{" "}
          <span
            className="bg-gradient-to-r bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            Me
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-3">
        {/* Main Introduction - Largest Card */}
        <GridItem
          id="intro"
          area="md:col-span-6 md:row-span-2"
          icon={<Code className="h-5 w-5" style={{ color: "var(--accent-primary-start)" }} />}
          title="Hello, I'm Shrinivas"
          description="I'm an AI Architect at Neurogati, passionate about creating brain-inspired intelligent systems by uniting AI with computational neuroscience. I apply this to solve challenges in health-tech, spatial reasoning and computer vision, always exploring the intersection of engineering and my creative pursuits in 3D art, photography, and music. Ultimately, I believe this synthesis of technology and art is key to paving the way toward artificial general intelligence."
          isMain={true}
        />

        {/* 3D Worlds & Photography - Right Column */}
        <GridItem
          id="photography"
          area="md:col-span-6 md:row-span-1"
          icon={<Camera className="h-5 w-5" style={{ color: "var(--accent-secondary-start)" }} />}
          title="Through the Lens"
          description="My camera is my passport to capturing the world's magic, from sunrise hues to cityscapes bustling with life."
        />

        <GridItem
          id="3ddevelopment"
          area="md:col-span-6 md:row-span-1"
          icon={<Gamepad className="h-5 w-5" style={{ color: "var(--accent-primary-end)" }} />}
          title="3D Worlds"
          description="My playgrounds are Blender and Unreal Engine, where I create interactive experiences and bring futuristic concepts to life."
        />

        {/* Bottom Row - Three Equal Cards */}
        <GridItem
          id="design"
          area="md:col-span-4"
          icon={<Palette className="h-5 w-5" style={{ color: "var(--accent-secondary-end)" }} />}
          title="Drawing Dreams"
          description="My preferred tools are pencil, brushes and computer tools. They help me create an imaginative and passionate world out of blank canvases."
        />

        <GridItem
          id="music"
          area="md:col-span-4"
          icon={<Music className="h-5 w-5" style={{ color: "var(--accent-primary-start)" }} />}
          title="Musical Journey"
          description="My fingers dance across the piano keys, weaving tales through classical pieces and my compositions. Completed 8 Grades | Trinity College London"
        />

        <GridItem
          id="fitness"
          area="md:col-span-4"
          icon={<Dumbbell className="h-5 w-5" style={{ color: "var(--accent-secondary-start)" }} />}
          title="Beyond the Code"
          description="When I'm not conquering algorithms, you'll find me ace-ing smashes on the badminton court, keeping my competitive spirit alive."
        />
      </div>
    </section>
  )
}

interface GridItemProps {
  id: string
  area?: string
  icon: React.ReactNode
  title: string
  description: string
  isMain?: boolean
}

const GridItem = ({ id, area, icon, title, description, isMain = false }: GridItemProps) => {
  return (
    <motion.div
      id={id}
      className={`${area} group`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <div
        className="relative h-full rounded-3xl border backdrop-blur-md transition-all duration-300 hover:scale-[1.02] overflow-hidden text-justify"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-color)",
        }}
      >
        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl"
          style={{
            background: isMain ? "var(--gradient-primary)" : "var(--gradient-secondary)",
          }}
        />

        {isMain ? (
          <FloatingElement>
            <div className="flex flex-col gap-6 p-8 justify-center h-full min-h-[320px]">
              <div
                className="w-12 h-12 rounded-xl border p-3 flex items-center justify-center backdrop-blur-sm"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                {icon}
              </div>
              <div>
                <h3
                  className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 transition-colors duration-300"
                  style={{ color: "var(--text-color)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-base md:text-lg lg:text-xl leading-relaxed transition-colors duration-300"
                  style={{ color: "var(--text-color)", opacity: 0.8 }}
                >
                  {description}
                </p>
              </div>
            </div>
          </FloatingElement>
        ) : (
          <div className="relative z-10 flex h-full flex-col gap-6 justify-center p-6 md:p-8 min-h-[240px]">
            <div
              className="w-12 h-12 rounded-xl border p-3 flex items-center justify-center backdrop-blur-sm"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              {icon}
            </div>
            <div>
              <h3
                className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight mb-3 transition-colors duration-300"
                style={{ color: "var(--text-color)" }}
              >
                {title}
              </h3>
              <p
                className="text-sm md:text-base lg:text-lg leading-relaxed transition-colors duration-300"
                style={{ color: "var(--text-color)", opacity: 0.8 }}
              >
                {description}
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
