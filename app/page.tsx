"use client"

import { Playfair_Display } from "next/font/google"
import { Header } from "@/components/header"
import { AboutmeSection } from "@/components/aboutme-section"
import { JourneySection } from "@/components/journey-section"
import { ProjectsSection } from "@/components/projects-section"
import { CreativeShowcase } from "@/components/creative-showcase"
import { AnalogPursuits } from "@/components/analog-pursuits"
import HeroSection from "@/components/hero-section";
import Contact from "@/components/contact";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
})

export default function Portfolio() {
  return (
    <>
      <Header />

      {/*/!* Hero Section with Background Boxes and Particles *!/*/}
      <HeroSection />

      {/* Bento Grid Section */}
      <AboutmeSection />

      {/* Journey Section */}
      <JourneySection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Creative Showcase Section */}
      <CreativeShowcase />

      {/* Analog Pursuits Section */}
      <AnalogPursuits />

      {/* Contact Section */}
      <Contact />
    </>
  )
}
