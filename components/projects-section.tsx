"use client"

import { Playfair_Display } from "next/font/google"
import { useTheme } from "./theme-provider"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import { ExternalLink, Github } from "lucide-react"
import React from "react"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
})

// 1. Define the new props for ProjectContent
const ProjectContent = ({
                            description,
                            technologies,
                            features,
                            links, // Changed from githubUrl and liveUrl
                        }: {
    description: string
    technologies: string[]
    features: (string | React.ReactNode)[] // Allow string or JSX features
    links?: { url: string; text: string }[] // New links array
}) => {
    return (
        <div className="space-y-8">
            <div
                className="p-8 md:p-14 rounded-3xl backdrop-blur-md border"
                style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                }}
            >
                {/* Description, Technologies, and Features sections remain the same */}
                <p
                    className="text-base md:text-xl leading-relaxed mb-6 transition-colors duration-300"
                    style={{ color: "var(--text-color)", opacity: 0.9 }}
                >
                    {description}
                </p>

                <div className="mb-6">
                    <h4
                        className="text-lg font-semibold mb-3 transition-colors duration-300"
                        style={{ color: "var(--text-color)" }}
                    >
                        Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 rounded-full text-sm font-medium backdrop-blur-md border transition-colors duration-300"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                    color: "var(--accent-primary-start)",
                                }}
                            >
                {tech}
              </span>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <h4
                        className="text-lg font-semibold mb-3 transition-colors duration-300"
                        style={{ color: "var(--text-color)" }}
                    >
                        Key Features
                    </h4>
                    <ul className="space-y-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div
                                    className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                                    style={{ backgroundColor: "var(--accent-primary-start)" }}
                                />
                                <span
                                    className="text-sm md:text-base leading-relaxed transition-colors duration-300"
                                    style={{ color: "var(--text-color)", opacity: 0.9 }}
                                >
                  {feature}
                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 2. Render links by mapping over the new 'links' array */}
                {links && links.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                        {links.map((link, index) => {
                            // Simple logic to style GitHub/Code links differently
                            const isPrimary = !/github|code/i.test(link.text)

                            return (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-md border transition-all duration-300 hover:scale-105"
                                    style={
                                        isPrimary
                                            ? {
                                                backgroundColor: "var(--accent-primary-start)",
                                                borderColor: "var(--accent-primary-start)",
                                                color: "white",
                                            }
                                            : {
                                                backgroundColor: "var(--card-bg)",
                                                borderColor: "var(--border-color)",
                                                color: "var(--text-color)",
                                            }
                                    }
                                >
                                    {isPrimary ? <ExternalLink className="w-4 h-4" /> : <Github className="w-4 h-4" />}
                                    <span className="text-sm font-medium">{link.text}</span>
                                </a>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

const projectsData = [
    {
        category: "Deep Learning & Healthcare",
        title: "Is Deep Learning Enough For Handling X-Ray",
        src: "/projectimg/medical.jpg",
        content: (
            <ProjectContent
                description="A comprehensive analysis of deep learning models on the Chest X-Ray dataset of 14 common diseases, focusing on the impact of data augmentation and hyper-parameter tuning to improve diagnostic accuracy."
                technologies={["Deep Learning", "PyTorch", "VGG19", "DarkNet19", "AlexNet", "CLAHE", "Computer Vision"]}
                features={[
                    "Explored the impact of Data Augmentation and Hyper-Parameter Tuning.",
                    "Utilized the Chest X-Ray dataset of 14 Common Thorax Disease Categories.",
                    "Evaluated the performance of various models like VGG19, DarkNet19, and AlexNet.",
                    "Implemented Data Augmentation techniques like Contrast Limited Adaptive Histogram Equalization (CLAHE).",
                    "Tuned Hyper-Parameters such as Learning Rate and Batch Size to improve performance.",
                ]}
            />
        ),
    },
    {
        category: "AI in Law & NLP",
        title: "An Efficient LLM For Indian Judicial System",
        src: "/projectimg/lawbot.jpg",
        content: (
            <ProjectContent
                description="Development of 'LawBot', a novel Large Language Model tailored for the Indian judicial system, designed to overcome the limitations of existing legal tech solutions through custom data scraping and efficient fine-tuning."
                technologies={["LLM", "Mistral 7B", "LoRA", "Data Scraping", "Python", "Fine-Tuning"]}
                features={[
                    "Developed a novel 'LawBot' to address limitations of existing legal tech solutions.",
                    "Scraped data from the internet for domain augmentation and classification tasks.",
                    "Employed the Mistral 7B Instruct v0.2, quantised with LoRA adaptors for efficiency.",
                    "Fine-tuned the model sequentially on pre-processed data to enhance legal proceedings.",
                ]}
            />
        ),
    },
    {
        category: "Generative AI & Music",
        title: "Generating Music From Text",
        src: "/projectimg/music.jpg",
        content: (
            <ProjectContent
                description="An ambitious project to generate high-fidelity music directly from text prompts, leveraging the MusicLM architecture and a diverse range of audio datasets for training advanced models."
                technologies={["MusicLM", "MuLan", "Soundstream", "word2vec BERT", "Generative AI"]}
                features={[
                    "Embarking on a project to create music directly from text input.",
                    "Leveraging datasets like AudioSet, AudioCaps, and MusicCaps for training.",
                    "Utilizing advanced models such as MuLan, Soundstream, and word2vec BERT.",
                    "Trained the model and got results that were comparable to the original paper.",
                ]}
            />
        ),
    },
    {
        category: "AI in Healthcare & Multimodal AI",
        title: "Interactive Medical Image Captioning System",
        src: "/projectimg/x-ray.jpg",
        content: (
            <ProjectContent
                description="A system for generating descriptive captions and answering questions about medical images to expedite patient diagnosis and treatment, utilizing the BLIP model on diverse medical datasets."
                technologies={["Image Captioning", "VQA", "BLIP Model", "PyTorch", "AI in Healthcare"]}
                features={[
                    "Developing a system for medical image captioning and question answering.",
                    "Integrating datasets such as MediCat, Path VQA, MIMIC-CXR, and Open-I.",
                    "Incorporating the BLIP Model for accurate captioning and responsive question answering.",
                    "Utilizing advanced multimodal AI techniques such as LLaVa - Vision Language Model.",
                    "Got SOTA results in certain benchmarks",
                ]}
            />
        ),
    },
    {
        category: "3D Animation",
        title: "Dawn Of Innovatia: An Animated Short",
        src: "/projectimg/innovation.jpg",
        content: (
            <ProjectContent
                description="A captivating 1-minute animated film created in Blender that illustrates the transformative journey of an entrepreneur and highlights the impact of innovation on global progress."
                technologies={["Blender", "3D Animation", "Storytelling", "Video Production"]}
                features={[
                    "Produced a captivating 1-minute animated film using Blender.",
                    "Illustrated the transformative journey of an entrepreneur.",
                    "Highlighted the impact of innovation on global progress.",
                ]}
                links={[
                    { url: "https://www.instagram.com/reel/CyaREiaxY7o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", text: "View Reel" }
                ]}
            />
        ),
    },
    {
        category: "Motion Graphics & Event Branding",
        title: "ESummit-Kairos: Dynamic Motion Posters",
        src: "/projectimg/kairos.jpg",
        content: (
            <ProjectContent
                description="A series of dynamic motion posters designed to encapsulate the essence and theme of the ESummit-Kairos event, contributing to its branding and promotional campaign."
                technologies={["Motion Graphics", "After Effects", "Event Branding", "Design"]}
                features={[
                    "Engaged in crafting the theme reveal for the ESummit-Kairos event.",
                    "Creating a series of motion posters to encapsulate the essence of the event.",
                ]}
            />
        ),
    },
    {
        category: "Web Development",
        title: "Live and Interactive Portfolio Website",
        src: "/projectimg/resume.jpg",
        content: (
            <ProjectContent
                description="A live and responsive personal portfolio engineered with Next.js, featuring dynamic elements from AceternityUI and smooth animations from Framer Motion to showcase my professional journey."
                technologies={["Next.js", "React", "TypeScript", "AceternityUI", "Framer Motion"]}
                features={[
                    "Engineered a live and responsive CV using NextJS and JavaScript.",
                    "Incorporated various dynamic elements using AceternityUI.",
                    "Enhanced user experience with smooth animations using Framer Motion.",
                ]}
                links={[
                    { url: "https://github.com/shrinivas/portfolio", text: "GitHub" }, // Example GitHub link
                    { url: "https://veroneportfolio.vercel.app/", text: "Version 1" },
                    { url: "https://vertwoportfolio.vercel.app/", text: "Version 2" },
                ]}
            />
        ),
    },
];

export function ProjectsSection() {
  const { mounted } = useTheme()

  if (!mounted) {
    return (
      <section className="py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="animate-pulse">
          <div className="h-16 bg-gray-300 rounded mb-16 w-64 mx-auto"></div>
          <div className="flex gap-6 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-56 md:w-96 h-80 md:h-[40rem] bg-gray-300 rounded-3xl flex-shrink-0"></div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  const cards = projectsData.map((card, index) => <Card key={card.src} card={card} index={index} />)

  return (
    <section className="py-20 transition-colors duration-300" style={{ backgroundColor: "var(--bg-color)" }} id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4 transition-colors duration-300 ${playfairDisplay.className}`}
          style={{ color: "var(--text-color)" }}
        >
          My{" "}
          <span
            className="bg-gradient-to-r bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            Projects
          </span>
        </h2>
        <p
          className="text-center text-lg md:text-xl mb-4 max-w-3xl mx-auto transition-colors duration-300"
          style={{ color: "var(--text-color)", opacity: 0.8 }}
        >
          Explore my journey through AI, machine learning, and web development projects.
        </p>
      </div>
      <Carousel items={cards} />
    </section>
  )
}
