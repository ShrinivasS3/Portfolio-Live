"use client"

import { useState } from "react"
import { Playfair_Display } from "next/font/google"
import { useTheme } from "./theme-provider"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, Palette, Filter, Camera, Music, ExternalLink, ArrowRight, Brain, Code, Pencil } from "lucide-react"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
})

interface ShowcaseItem {
  id: number
  type: "image" | "blog"
  title: string
  description?: string
  excerpt?: string
  imageUrl?: string
  tags?: string[]
  articleUrl?: string
  externalUrl?: string
}

const showcaseItems: ShowcaseItem[] = [
  // Photography Items
  {
    id: 1,
    type: "image",
    title: "The Enchanted Canopy",
    description: "Created the wooden shrine in blender and used them in Unreal Engine along with some assets.",
    imageUrl: "/works/pic-1.webp",
    externalUrl: "https://www.artstation.com/artwork/PXvYyr",
    tags: ["3D Art"],
  },
  {
    id: 2,
    type: "image",
    title: "Subway at Night",
    description: "This is actually the opening scene of John Wick:Chapter 4, just thought it was a cool shot. Then tried recreating it in Blender and tried to get the lighting right",
    imageUrl: "/works/pic-3.webp",
    externalUrl: "https://www.artstation.com/artwork/9Eo63o",
    tags: ["3D Art"],
  },
  {
    id: 3,
    type: "image",
    title: "Crystalline Daisy",
    description: "This is a fantasy dream historic monument with well preserved daisies.",
    imageUrl: "/works/pic-6.webp",
    externalUrl: "https://www.artstation.com/artwork/OG9z6J",
    tags: ["3D Art"],
  },

  // 3D Art Items
  {
    id: 4,
    type: "image",
    title: "Brass on Stage",
    description: "Gleaming brass waiting to make music.",
    imageUrl: "/works/pic-7.webp",
    externalUrl: "https://artstation.com/neural-viz",
    tags: ["Photography"],
  },
  {
    id: 5,
    type: "blog",
    title: "Threads of Time",
    excerpt:
      "The Invisible Connection Between My Passions",
    tags: ["Blog", "AI", "Tech", "Chaos", "Creativity", "Journaling", "Writing", "Music", "Time", "Watches"],
    articleUrl: "https://blog.shrinivassesadri.in/threads-of-time-the-invisible-connection-between-my-assions/",
  },
  {
    id: 6,
    type: "blog",
    title: "Fur Elise Analysis: Beethoven’s Time Machine",
    excerpt:
      "Deep dive into Fur Elise That reveals the hidden structures and Beethoven’s timeless techniques.",
    tags: ["Blog", "Music", "Time"],
    articleUrl: "https://blog.shrinivassesadri.in/beethovens-time-machine-fur-elise-analysis/",
  },
  {
    id: 7,
    type: "blog",
    title: "The Fog of Automation: Rediscovering Human-Centered AI",
    excerpt:
      "Are we losing the battle of human intuition to machine’s precision.",
    tags: ["Blog", "AI", "Tech", "Creativity", "Chaos"],
    articleUrl: "https://blog.shrinivassesadri.in/the-fog-of-automation-rediscovering-human-centered-ai/",
  },
  {
    id: 8,
    type: "image",
    title: "Sparkling Dreams",
    description: "Celebrating Hope with Exploding Colors.",
    imageUrl: "/works/pic-17.webp",
    externalUrl: "https://www.behance.net/gallery/191752993/Sparkling-Dreams",
    tags: ["Photography"],
  },
  {
    id: 9,
    type: "image",
    title: "Where History Whispers",
    description: "Unraveling the Stories of Thirumalai Nayakkar Mahal",
    imageUrl: "/works/pic-20.webp",
    externalUrl: "https://www.behance.net/gallery/191751699/Where-History-Whispers",
    tags: ["Photography"],
  },
  {
    id: 10,
    type: "image",
    title: "Nature's Masterpiece",
    description: "Painted in Sunset Hues",
    imageUrl: "/works/pic-21.webp",
    externalUrl: "https://www.behance.net/gallery/191752495/Natures-Masterpiece-Painted-in-Sunset-Hues",
    tags: ["Photography"],
  },
  {
    id: 11,
    type: "image",
    title: "Pillars of Light",
    description: "A composition featuring an array of brilliant, amber-hued Diyas.",
    imageUrl: "/works/pic-23.webp",
    externalUrl: "https://www.reddit.com/r/Nikon/comments/s5769k/nikon_d60_55mm_nikon_55200mm_f4_bulb_iso_800/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
    tags: ["Photography"],
  },
  {
    id: 12,
    type: "image",
    title: "Icons of India",
    description: "The timeless, ethereal beauty of the Taj Mahal in Agra, an eternal monument to love",
    imageUrl: "/works/pic-28.webp",
    tags: ["Photography"],
  },
  {
    id: 13,
    type: "image",
    title: "Icons of India",
    description: "The solemn grandeur of the India Gate in New Delhi at twilight, a memorial to fallen soldiers.",
    imageUrl: "/works/pic-29.webp",
    tags: ["Photography"],
  },
  {
    id: 14,
    type: "image",
    title: "Dragon Ball Z Goku",
    description: "Kamehameha spirit unleashed, a manga masterpiece.",
    imageUrl: "/works/pic-30.webp",
    externalUrl: "https://www.deviantart.com/3ss123/art/Dragon-Ball-Z-Goku-1022060150",
    tags: ["Art"],
  },
  {
    id: 15,
    type: "image",
    title: "Timeskip Zoro",
    description: "Three blades whisper past the panels, Zoro's loyalty hidden in plain sight.",
    imageUrl: "/works/pic-31.webp",
    externalUrl: "https://www.deviantart.com/3ss123/art/Timeskip-Zoro-1022063775",
    tags: ["Art"],
  },
]

const ImageCard = ({ item }: { item: ShowcaseItem }) => {
  const handleClick = () => {
    if (item.externalUrl) {
      window.open(item.externalUrl, "_blank")
    }
  }

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid mb-6"
      onClick={handleClick}
    >
      <div className="relative">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
          <div className="mt-4 flex items-center text-white/60">
            <ExternalLink className="w-4 h-4 mr-2" />
            <span className="text-xs">View Project</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const BlogCard = ({ item }: { item: ShowcaseItem }) => {
  const handleClick = () => {
    if (item.articleUrl) {
      window.open(item.articleUrl, "_blank")
    }
  }

  const getIconForTag = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "ai":
      case "neuroscience":
        return <Brain className="w-3 h-3" />
      case "research":
        return <FileText className="w-3 h-3" />
      case "web dev":
      case "next.js":
        return <Code className="w-3 h-3" />
      default:
        return <Palette className="w-3 h-3" />
    }
  }

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-300 border break-inside-avoid mb-6"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
      }}
      onClick={handleClick}
    >
      <div className="p-6">
        {/* Icon */}
        <div className="mb-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm border"
            style={{
              backgroundColor: "var(--accent-primary-start)",
              borderColor: "var(--border-color)",
            }}
          >
            <FileText className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 transition-colors duration-300" style={{ color: "var(--text-color)" }}>
          {item.title}
        </h3>

        {/* Excerpt */}
        <p
          className="text-sm leading-relaxed mb-6 transition-colors duration-300"
          style={{ color: "var(--text-color)", opacity: 0.8 }}
        >
          {item.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags?.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border transition-colors duration-300"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
                color: "var(--accent-primary-start)",
              }}
            >
              {getIconForTag(tag)}
              {tag}
            </span>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 group-hover:translate-x-1"
            style={{ color: "var(--accent-primary-start)" }}
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>

      {/* Hover Border Glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 0 20px var(--accent-primary-start)`,
        }}
      />
    </div>
  )
}

const filterCategories = [
  { id: "all", label: "All Work", icon: Filter },
  { id: "Photography", label: "Photography", icon: Camera },
  { id: "3D Art", label: "3D Art", icon: Palette },
  { id: "Blog", label: "Blog", icon: FileText },
  { id: "Music", label: "Music", icon: Music },
  { id: "Art", label: "Art", icon: Pencil },
]

export function CreativeShowcase() {
  const { mounted } = useTheme()
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredItems =
    activeFilter === "all" ? showcaseItems : showcaseItems.filter((item) => item.tags?.includes(activeFilter))

  if (!mounted) {
    return (
      <section className="py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-16 bg-gray-300 rounded mb-4 w-80 mx-auto"></div>
            <div className="h-6 bg-gray-300 rounded mb-16 w-96 mx-auto"></div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-300 rounded-2xl mb-6 h-64 break-inside-avoid"></div>
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
      id="creative-showcase"
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
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-colors duration-300 ${playfairDisplay.className}`}
            style={{ color: "var(--text-color)" }}
          >
            Creative{" "}
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Showcase
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300"
            style={{ color: "var(--text-color)", opacity: 0.8 }}
          >
            A curated collection of my recent work in art, photography, and writing. Click to explore.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filterCategories.map((category) => {
            const IconComponent = category.icon
            const isActive = activeFilter === category.id

            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-105 ${
                  isActive ? "shadow-lg" : ""
                }`}
                style={{
                  backgroundColor: isActive ? "var(--accent-primary-start)" : "var(--card-bg)",
                  borderColor: isActive ? "var(--accent-primary-start)" : "var(--border-color)",
                  color: isActive ? "white" : "var(--text-color)",
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-4 h-4" />
                <span className="text-sm font-medium">{category.label}</span>
                {isActive && (
                  <motion.div
                    className="w-2 h-2 rounded-full bg-white"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Masonry Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="columns-1 md:columns-2 lg:columns-3 gap-6"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${activeFilter}-${item.id}`}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, delay: index * 0.1 },
                  },
                  exit: {
                    opacity: 0,
                    y: -20,
                    scale: 0.9,
                    transition: { duration: 0.3 },
                  },
                }}
              >
                {item.type === "image" ? <ImageCard item={item} /> : <BlogCard item={item} />}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-md border"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <Filter className="w-8 h-8" style={{ color: "var(--text-color)", opacity: 0.5 }} />
            </div>
            <p
              className="text-lg font-medium transition-colors duration-300"
              style={{ color: "var(--text-color)", opacity: 0.7 }}
            >
              No items found for this category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
