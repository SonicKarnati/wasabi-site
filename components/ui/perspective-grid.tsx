"use client";

import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

interface PerspectiveGridProps {
    /** Additional CSS classes for the grid container */
    className?: string;
    /** Number of tiles per row/column (default: 40) */
    gridSize?: number;
    /** Whether to show the gradient overlay (default: true) */
    showOverlay?: boolean;
    /** Fade radius percentage for the gradient overlay (default: 80) */
    fadeRadius?: number;
    tileClassName?: string;
}


export function PerspectiveGrid({
    className,
    gridSize = 40,
    showOverlay = true,
    fadeRadius = 80,
    tileClassName,
}: PerspectiveGridProps) {
    const tiles = useMemo(() => Array.from({ length: gridSize * gridSize }), [gridSize]);

    return (
        <div
            className={cn(
                "relative w-full h-full overflow-hidden bg-white dark:bg-black",
                "[--fade-stop:#fff4e3]",
                className
            )}
            style={{
                perspective: "2000px",
                transformStyle: "preserve-3d",
            }}
        >
            <div
                className="absolute w-[80rem] aspect-square grid origin-center"
                style={{
                    left: "50%",
                    top: "50%",
                    transform:
                        "translate(-50%, -50%) rotateX(30deg) rotateY(-5deg) rotateZ(20deg) scale(2)",
                    transformStyle: "preserve-3d",
                    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                    gridTemplateRows: `repeat(${gridSize}, 1fr)`,
                }}
            >
                {tiles.map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                              "tile min-h-[1px] min-w-[1px] border border-wasabi/15 bg-transparent transition-colors duration-[1500ms] hover:border-terracotta/45 hover:bg-terracotta/10 hover:duration-0",
                              tileClassName,
                            )}
                        />
                    ))}
            </div>

            {/* Radial Gradient Mask (Overlay) */}
            {showOverlay && (
                <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                        background: `radial-gradient(circle, transparent 25%, var(--fade-stop) ${fadeRadius}%)`,
                    }}
                />
            )}
        </div>
    );
}

export default PerspectiveGrid;
