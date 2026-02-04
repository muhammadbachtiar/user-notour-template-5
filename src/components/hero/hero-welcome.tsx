"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useContent } from "@/hooks/useContent"

export default function HeroWelcome() {
    const { hero } = useContent();

    console.log(hero)

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75
        }
    }, [])

    // Helper function to check if the media is a video
    const isVideo = (url: string | undefined | null): boolean => {
        if (!url) return false;
        return url.toLowerCase().endsWith(".mp4");
    }

    // Helper function to display text with fallback
    const displayText = (value: string | undefined | null): string => {
        if (value === undefined || value === null) {
            return "belum diatur";
        }
        return value;
    }

    return (
        <section className="relative w-full">
            {/* Background Media Container - responsive height based on media */}
            <div className="relative w-full bg-gray-900">
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50 z-10" />
                
                {/* Media (Video or Image) - full width, height auto-adjusts to aspect ratio */}
                {isClient && hero?.image && (
                    <>
                        {isVideo(hero.image) ? (
                            <video
                                ref={videoRef}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-auto block"
                            >
                                <source src={hero.image} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img
                                src={hero.image}
                                alt={hero?.title || "Hero background"}
                                className="w-full h-auto block"
                            />
                        )}
                    </>
                )}

                {/* Fallback height when no media */}
                {(!isClient || !hero?.image) && (
                    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem]" />
                )}

                {/* Text Overlay - centered on top of media */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="px-6 sm:px-0 max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative max-w-7xl mx-auto"
                        >
                            <div className="px-0 max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl text-center text-white mb-12">

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 text-center text-white drop-shadow-lg"
                                >
                                    {displayText(hero?.title)}
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                    className="text-sm sm:text-lg md:text-xl mb-6 text-center text-white max-w-3xl mx-auto drop-shadow-md"
                                >
                                    {displayText(hero?.description)}
                                </motion.p>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

