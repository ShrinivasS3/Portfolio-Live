"use client"

import { Playfair_Display } from "next/font/google"
import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"
import { Briefcase, GraduationCap } from "lucide-react"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
})

interface JourneyItem {
  id: string
  type: "work" | "education"
  title: string
  company: string
  period: string
  description: string[]
}

const journeyData: JourneyItem[] = [
  {
    id: "ai-architect",
    type: "work",
    title: "AI Architect",
    company: "NeuroGati (Incubated at IIT Madras Research Park)",
    period: "June 2025 - Present",
    description: [
      "Developing brain-inspired intelligent systems by integrating AI and computational neuroscience.",
      "Creating novel solutions in spatial reasoning, computer vision, and scalable health-tech applications.",
    ],
  },
  {
    id: "research-intern",
    type: "work",
    title: "Research Intern, Spatial Navigation Team",
    company: "IIT Madras",
    period: "May 2024 - July 2024",
    description: [
      "Developed a system that uses Graph Database, Graph Neural Networks and Large Language Models(LLMs) to navigate a grid world, answer user queries, and provide relevant information about the environment.",
      "Processed the dataset to store it in a Neo4j graph database and for other downstream tasks.",
      "Used the LLM(Llama3) to question the graph database and generate Cypher queries for the questions asked by the user. The prompts were dynamically tuned using Langchain to improve query generation.",
      "Implemented Q-learning method to explore the grid world. Used the explored data to query the graph neural network using the LLM(Llama3).",
      "I presented this work in the 5th Annual",
    ],
  },
  {
    id: "ml-engineer",
    type: "work",
    title: "Machine Learning Engineer Intern",
    company: "Bungee Tech",
    period: "Jun 2023 - Jul 2023",
    description: [
        "The project involved matching retail pet and grocery products to market conditions for effective pricing.",
        "The project managed a substantial dataset of 5TB, featuring over 100 million products with comprehensive attributes such as titles, images, descriptions, sizes, flavours, model numbers, and UPCs.",
        "Exploratory analysis was conducted on text and string-based data utilising Python libraries and SQL queries via AWS Athena.",
        "A Transformer-based model architecture with Approximate KNN was developed, which was evaluated for its performance, achieving benchmark F1 scores of 96% against the WDC product matching benchmark and 91% against an internal evaluation dataset."
    ],
  },
  {
    id: "btech",
    type: "education",
    title: "B.Tech, Computer Science & Engineering",
    company: "SASTRA Deemed University",
    period: "2021 - 2025",
    description: ["Core coursework in Data Structures, Algorithms, and Machine Learning.", "CGPA: 7.60/10"],
  },
]

export function JourneySection() {
  const { mounted } = useTheme()

  if (!mounted) {
    return (
      <section className="py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-16 bg-gray-300 rounded mb-16 w-64"></div>
            <div className="space-y-12">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-8">
                  <div className="w-4 h-4 bg-gray-300 rounded-full mt-6"></div>
                  <div className="flex-1">
                    <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-4 w-1/2"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-300 rounded w-full"></div>
                      <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
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
      id="journey"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl font-bold transition-colors duration-300 ${playfairDisplay.className}`}
            style={{ color: "var(--text-color)" }}
          >
            My {" "}
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Journey
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 transition-colors duration-300"
            style={{ backgroundColor: "var(--border-color)" }}
          />

          {/* Timeline Items */}
          <div className="space-y-16">
            {journeyData.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative flex items-start gap-8 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Node */}
                <motion.div
                  className="relative z-10 w-4 h-4 rounded-full border-4 transition-all duration-300 group-hover:scale-125"
                  style={{
                    backgroundColor: "var(--bg-color)",
                    borderColor: "var(--accent-primary-start)",
                  }}
                  whileHover={{
                    boxShadow: `0 0 20px var(--accent-primary-start)`,
                  }}
                />

                {/* Timeline Card */}
                <motion.div
                  className="flex-1 group-hover:scale-[1.02] transition-all duration-300"
                  whileHover={{
                    y: -4,
                  }}
                >
                  <div
                    className="p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 group-hover:shadow-xl"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    {/* Title Line */}
                    <div className="flex items-center gap-3 mb-3">
                      <h3
                        className="text-xl md:text-2xl font-bold transition-colors duration-300"
                        style={{ color: "var(--text-color)" }}
                      >
                        {item.title}
                      </h3>
                      {item.type === "work" ? (
                        <Briefcase className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-primary-start)" }} />
                      ) : (
                        <GraduationCap
                          className="w-5 h-5 flex-shrink-0"
                          style={{ color: "var(--accent-secondary-start)" }}
                        />
                      )}
                    </div>

                    {/* Company & Date Line */}
                    <div className="mb-6">
                      <p
                        className="text-base md:text-lg font-medium italic transition-colors duration-300"
                        style={{ color: "var(--text-color)", opacity: 0.8 }}
                      >
                        {item.company} | {item.period}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="space-y-3">
                      {item.description.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                            style={{ backgroundColor: "var(--accent-primary-start)" }}
                          />
                          <p
                            className="text-sm md:text-base leading-relaxed transition-colors duration-300"
                            style={{ color: "var(--text-color)", opacity: 0.9 }}
                          >
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
