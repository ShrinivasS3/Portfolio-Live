import {Boxes} from "@/components/ui/background-boxes";
import {Particles} from "@/components/ui/particles";
import {useTheme} from "@/components/theme-provider";
import { useEffect, useState } from "react"
import {Playfair_Display} from "next/font/google";

const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
})


export default function HeroSection() {
    const { mounted, theme } = useTheme()
    const [animationStarted, setAnimationStarted] = useState(false)

    useEffect(() => {
        if (mounted) {
            // Small delay to ensure smooth animation start
            const timer = setTimeout(() => {
                setAnimationStarted(true)
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [mounted])

    // Show a loading state until the theme is mounted
    if (!mounted || !animationStarted) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <div className="animate-pulse">
                        <div className="h-20 bg-gray-300 rounded mb-4 w-96"></div>
                        <div className="h-20 bg-gray-300 rounded mb-8 w-80"></div>
                        <div className="h-4 bg-gray-300 rounded w-64 mx-auto"></div>
                    </div>
                </div>
            </main>
        )
    }

    // Dynamic particle color based on theme
    const particleColor = theme === "dark" ? "#fdba74" : "#fb923c" // Orange colors from your theme

    return(
        <>
            {/* Hero Section with Background Boxes and Particles */}
            <main
                className="min-h-screen flex items-center justify-center transition-colors duration-300 overflow-hidden pt-8 relative"
                style={{ backgroundColor: "var(--bg-color)" }}
            >
                {/* Background Boxes */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <Boxes />
                    {/* Gradient overlay to blend with theme */}
                    <div
                        className="absolute inset-0 z-10 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle at center, transparent 0%, var(--bg-color) 70%)`,
                            maskImage: "radial-gradient(transparent, white)",
                            WebkitMaskImage: "radial-gradient(transparent, white)",
                        }}
                    />
                </div>

                {/* Particles Overlay */}
                <Particles
                    className="absolute inset-0 z-15"
                    quantity={80}
                    ease={80}
                    color={particleColor}
                    staticity={50}
                    size={1.2}
                />

                {/* Hero Content */}
                <div className="text-center relative px-4 z-20">
                    {/* Decorative Script Element */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 translate-x-8 z-10 animate-hello-entrance">
                    <span
                        className="text-4xl md:text-5xl font-bold italic transform -rotate-12 inline-block transition-colors duration-300"
                        style={{
                            color: "var(--accent-secondary-start)",
                            fontFamily: "Brush Script MT, cursive",
                        }}
                    >
                      Hi, I'm
                    </span>
                    </div>

                    {/* Main Heading */}
                    <div className="mb-8">
                        <h1
                            className={`text-6xl md:text-8xl lg:text-9xl font-bold leading-none transition-colors duration-300 ${playfairDisplay.className}`}
                        >
                            <div
                                className="block animate-slide-up-1"
                                style={{
                                    color: "var(--text-color)",
                                }}
                            >
                                SHRINIVAS
                            </div>
                            <div
                                className="block bg-gradient-to-r bg-clip-text text-transparent animate-slide-up-2"
                                style={{
                                    backgroundImage: "var(--gradient-primary)",
                                }}
                            >
                                SESADRI
                            </div>
                        </h1>
                    </div>

                    {/* Subheading */}
                    <div className="mt-12 animate-fade-in-up-3">
                        <p
                            className="text-sm md:text-base font-medium uppercase tracking-widest transition-colors duration-300"
                            style={{
                                color: "var(--text-color)",
                                opacity: 0.7,
                                letterSpacing: "0.3em",
                            }}
                        >
                            a Creative Technologist
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}