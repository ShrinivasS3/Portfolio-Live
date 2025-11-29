import React from "react";
import { useTheme } from "../theme-provider"; // Assuming this is your theme provider hook

const ContactBackground: React.FC = () => {
    // 1. Call the useTheme hook to get the current theme
    const { theme } = useTheme();

    // 2. Define the gradient color classes based on the current theme
    const gradientColors = theme === 'dark'
        ? "from-[#12141c]/50 via-[#12141c]/20 to-transparent"
        : "from-white/30 via-white/10 to-transparent";

    return (
        <div className="absolute inset-0 -z-10">
            {/* Video Background */}
            <video className="h-full w-full object-cover" autoPlay loop playsInline muted preload="auto">
                <source src="/web-contact.mov" type="video/mp4" />
            </video>

            {/* Top Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-b ${gradientColors}`} />

            {/* Bottom Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${gradientColors}`} />
        </div>
    );
};

export default ContactBackground;