"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TestimonialItem {
    /** Unique identifier for the card */
    id: string | number;
    /** Title displayed for the card */
    title: string;
    /** Description text for the card */
    description: string;
    /** Image URL/path for the card */
    image: string;
}

interface TestimonialsCardProps {
    /** Array of testimonial items to display */
    items: TestimonialItem[];
    /** Additional CSS classes for the container */
    className?: string;
    /** Width of the card stack (default: 400) */
    width?: number;
    /** Whether to show navigation arrows (default: true) */
    showNavigation?: boolean;
    /** Whether to show the counter (default: true) */
    showCounter?: boolean;
    /** Whether to enable auto-play (default: false) */
    autoPlay?: boolean;
    /** Auto-play interval in ms (default: 3000) */
    autoPlayInterval?: number;
}

export function TestimonialsCard({
    items,
    className,
    width = 400,
    showNavigation = true,
    showCounter = true,
    autoPlay = false,
    autoPlayInterval = 3000,
}: TestimonialsCardProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const activeItem = items[activeIndex];

    // Auto-play effect
    React.useEffect(() => {
        if (!autoPlay || items.length <= 1) return;

        const interval = setInterval(() => {
            setDirection(1);
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, items.length]);

    const handleNext = () => {
        if (activeIndex < items.length - 1) {
            setDirection(1);
            setActiveIndex(activeIndex + 1);
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            setDirection(-1);
            setActiveIndex(activeIndex - 1);
        }
    };

    // Pre-calculate rotations for visual variety
    const rotations = useMemo(() => [4, -2, -9, 7], []);

    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div className={cn("flex items-center justify-center p-8", className)}>
            <div
                className="relative grid w-full grid-cols-[1fr] gap-x-8 gap-y-5 md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto_auto]"
                style={{ perspective: "1400px", maxWidth: `${width}px` }}
            >
                {/* Counter */}
                {showCounter && (
                    <div className="row-start-1 text-right font-mono text-sm font-bold text-wasabi md:col-start-2 md:row-start-1">
                        {activeIndex + 1} / {items.length}
                    </div>
                )}

                {/* Image Card Stack */}
                <div className="relative col-start-1 row-start-2 aspect-square w-full md:row-start-1 md:row-span-3">
                    <AnimatePresence custom={direction}>
                        {items.map((item, index) => {
                            const isActive = index === activeIndex;
                            const offset = index - activeIndex;

                            return (
                                <motion.div
                                    key={item.id}
                                    className="absolute inset-0 h-full w-full overflow-hidden rounded-lg border-[6px] border-white bg-cream shadow-2xl"
                                    initial={{
                                        x: offset * 15,
                                        y: Math.abs(offset) * 6,
                                        z: -150 * Math.abs(offset),
                                        scale: 0.85 - Math.abs(offset) * 0.04,
                                        rotateZ: rotations[index % 4],
                                        opacity: isActive ? 1 : 0.5,
                                        zIndex: 10 - Math.abs(offset),
                                    }}
                                    animate={
                                        isActive
                                            ? {
                                                x: [offset * 15, direction === 1 ? -200 : 200, 0],
                                                y: [Math.abs(offset) * 6, 0, 0],
                                                z: [-200, 150, 250],
                                                scale: [0.85, 1.05, 1],
                                                rotateZ: [rotations[index % 4], -5, 0],
                                                opacity: 1,
                                                zIndex: 100,
                                            }
                                            : {
                                                x: offset * 15,
                                                y: Math.abs(offset) * 6,
                                                z: -150 * Math.abs(offset),
                                                rotateZ: rotations[index % 4],
                                                scale: 0.85 - Math.abs(offset) * 0.04,
                                                opacity: 0.55,
                                                zIndex: 10 - Math.abs(offset),
                                            }
                                    }
                                    exit={{
                                        x: direction === 1 ? -250 : 250,
                                        z: -260,
                                        scale: 0.75,
                                        rotateZ: direction === 1 ? -10 : 10,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 0.75,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(min-width: 768px) 320px, 88vw"
                                        className="w-full h-full object-cover"
                                        draggable={false}
                                    />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Text Area */}
                <div className="col-start-1 flex min-h-[120px] flex-col justify-center md:col-start-2 md:row-start-1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeItem.id}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -25 }}
                            transition={{ duration: 0.35 }}
                        >
                            <h3 className="font-display text-3xl font-semibold leading-tight text-forest">
                                {activeItem.title}
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-ink/76">
                                {activeItem.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                {showNavigation && items.length > 1 && (
                    <div className="col-start-1 m-auto -mt-2 flex gap-2 md:col-start-2 md:row-start-3 md:m-0 md:mt-4">
                        <button
                            disabled={activeIndex === 0}
                            onClick={handlePrev}
                            className={cn(
                                "flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white transition-all",
                                activeIndex === 0
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:scale-105 hover:bg-cream"
                            )}
                            aria-label="Previous card"
                        >
                            <ArrowLeft className="h-4 w-4 text-forest" />
                        </button>
                        <button
                            disabled={activeIndex === items.length - 1}
                            onClick={handleNext}
                            className={cn(
                                "flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white transition-all",
                                activeIndex === items.length - 1
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:scale-105 hover:bg-cream"
                            )}
                            aria-label="Next card"
                        >
                            <ArrowRight className="h-4 w-4 text-forest" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TestimonialsCard;
