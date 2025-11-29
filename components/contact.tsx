'use client'

import Link from "next/link";
import "@/components/animations/animate.css";
import AnimatedBody from "@/components/animations/AnimatedBody";
import AnimatedTitle from "@/components/animations/AnimatedTitle";
import AnimatedWords from "@/components/animations/AnimatedWords";
import { motion } from "framer-motion";
import ContactBackground from "@/components/ui/ContactBackground";
import React from "react";
import { useTheme } from "@/components/theme-provider";
import {Playfair_Display} from "next/font/google";

const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700"],
})

const Contact = () => {
    const { theme } = useTheme();

    // The theme-dependent color variable for standard text
    const textColor = theme === 'dark' ? "#e2e6f3" : "#1f1f1f";

    return (
        <div className="flex flex-col w-full">
            <motion.div
                className="relative z-10 flex flex-col h-[85vh] w-full items-center justify-center overflow-hidden py-16 md:h-[80vh] md:py-20 lg:h-[100vh] lg:pt-0 lg:pb-28 pb-10"
                id="contact"
                initial="initial"
                animate="animate"
            >
                <ContactBackground />
                <div
                    className="absolute top-20 right-6 z-20 text-sm font-mono opacity-50"
                    style={{ color: textColor }}
                >
                    Made in Blender
                </div>
                <div className="z-20 mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0 ">
                    <div
                        className="flex flex-col items-start justify-center font-inter relative w-full sm:items-center lg:max-w-[1440px]"
                        style={{ color: textColor }} // Apply base text color to the container
                    >
                        <AnimatedWords
                            title={"contact"}
                            style={`flex max-w-[250px] flex-col items-start text-left text-7xl font-extrabold uppercase leading-[0.9em] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[150px] md:text-[150px] lg:text-center lg:text-[120px] xl:text-[250px] ${playfairDisplay.className}`}
                        />
                    </div>
                    <div className="mt-20 z-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
                        <div
                            className="flex z-20 w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-2xl"
                            style={{ color: textColor }} // Apply base text color
                        >
                            <AnimatedBody
                                text={"Got a question, proposal, project, or want to work together on something?"}
                                className={"-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"}
                            />
                            {/* Primary CTA with hardcoded accent gradient */}
                            <Link
                                href="mailto:shrini1908@gmail.com"
                                target="_blank"
                                aria-label="Send me an email"
                                className="mt-4 w-fit flex-1 bg-gradient-to-r from-[#fdba74] to-[#fb923c] bg-clip-text text-transparent underline-offset-2 transition-all duration-300 hover:opacity-80 md:w-auto"
                            >
                                Send me an email
                                <AnimatedBody text={"shrini1908@gmail.com"} className={"lowercase"} />
                            </Link>
                        </div>

                        <div className="flex gap-10 text-[16px] font-bold sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
                            {/* Secondary links with hardcoded accent gradient on hover */}
                            <Link
                                href="https://github.com/ShrinivasS3"
                                target="_blank"
                                aria-label="View GitHub Profile"
                                className="transition-colors duration-300"
                                style={{ color: textColor }}
                            >
                                <AnimatedTitle
                                    text={"GITHUB"}
                                    className={"hover:bg-gradient-to-r hover:from-[#fdba74] hover:to-[#fb923c] hover:bg-clip-text hover:text-transparent sm:text-2xl md:text-5xl "}
                                    wordSpace={"mr-[0.25em]"}
                                    charSpace={"mr-[0.01em]"}
                                />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/shrinivassesadri/"
                                target="_blank"
                                aria-label="View LinkedIn Profile"
                                className="transition-colors duration-300"
                                style={{ color: textColor }}
                            >
                                <AnimatedTitle
                                    text={"LINKEDIN"}
                                    className={"hover:bg-gradient-to-r hover:from-[#fdba74] hover:to-[#fb923c] hover:bg-clip-text hover:text-transparent sm:text-2xl md:text-5xl"}
                                    wordSpace={"mr-[0.25em]"}
                                    charSpace={"mr-[0.01em]"}
                                />
                            </Link>
                            <Link
                                href="https://shrinivassesadri.in/"
                                target="_blank"
                                aria-label="View My Profiles"
                                className="transition-colors duration-300"
                                style={{ color: textColor }}
                            >
                                <AnimatedTitle
                                    text={"PROFILE HUB"}
                                    className={"bg-gradient-to-r from-[#fdba74] to-[#fb923c] bg-clip-text text-transparent sm:text-2xl md:text-5xl"}
                                    wordSpace={"mr-[0.25em]"}
                                    charSpace={"mr-[0.01em]"}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute bottom-4 left-0 right-0 z-20 mx-auto flex w-[90%] max-w-[1440px] items-center justify-between text-sm text-center opacity-75"
                    style={{ color: textColor }}
                >
                    <p>© Shrinivas Sesadri 2025</p>
                    <p className="font-mono">Created by Shrinivas Sesadri</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;