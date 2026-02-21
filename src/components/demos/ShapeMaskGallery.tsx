"use client";

import { useState } from "react";

interface ShapeConfig {
    name: string;
    emoji: string;
    mask: string;
    color1: string;
    color2: string;
}

const SHAPES: ShapeConfig[] = [
    {
        name: "Circle",
        emoji: "🟣",
        mask: "radial-gradient(circle at center, black 45%, transparent 45%)",
        color1: "#06b6d4",
        color2: "#3b82f6",
    },
    {
        name: "Star",
        emoji: "⭐",
        mask: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 125,75 195,80 140,130 158,195 100,160 42,195 60,130 5,80 75,75' fill='white'/%3E%3C/svg%3E")`,
        color1: "#f59e0b",
        color2: "#ef4444",
    },
    {
        name: "Hexagon",
        emoji: "⬡",
        mask: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 185,55 185,145 100,190 15,145 15,55' fill='white'/%3E%3C/svg%3E")`,
        color1: "#8b5cf6",
        color2: "#d946ef",
    },
    {
        name: "Heart",
        emoji: "❤️",
        mask: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath d='M100,180 C55,140 10,110 10,70 C10,35 35,15 65,15 C80,15 95,25 100,40 C105,25 120,15 135,15 C165,15 190,35 190,70 C190,110 145,140 100,180Z' fill='white'/%3E%3C/svg%3E")`,
        color1: "#ec4899",
        color2: "#f43f5e",
    },
    {
        name: "Diamond",
        emoji: "💎",
        mask: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='white'/%3E%3C/svg%3E")`,
        color1: "#06b6d4",
        color2: "#10b981",
    },
];

export default function ShapeMaskGallery() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="demo-container">
            <div
                style={{
                    display: "flex",
                    gap: 16,
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {SHAPES.map((shape, i) => (
                    <div
                        key={shape.name}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 12,
                            overflow: "hidden",
                            position: "relative",
                            cursor: "pointer",
                            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            transform: hoveredIndex === i ? "scale(1.12)" : "scale(1)",
                        }}
                    >
                        {/* Gradient background */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: `linear-gradient(135deg, ${shape.color1}, ${shape.color2})`,
                                maskImage: hoveredIndex === i ? "none" : shape.mask,
                                WebkitMaskImage: hoveredIndex === i ? "none" : shape.mask,
                                maskSize: "contain",
                                WebkitMaskSize: "contain",
                                maskRepeat: "no-repeat",
                                WebkitMaskRepeat: "no-repeat",
                                maskPosition: "center",
                                WebkitMaskPosition: "center",
                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                        />
                        {/* Subtle grid pattern */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                backgroundImage:
                                    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                                backgroundSize: "12px 12px",
                                maskImage: hoveredIndex === i ? "none" : shape.mask,
                                WebkitMaskImage: hoveredIndex === i ? "none" : shape.mask,
                                maskSize: "contain",
                                WebkitMaskSize: "contain",
                                maskRepeat: "no-repeat",
                                WebkitMaskRepeat: "no-repeat",
                                maskPosition: "center",
                                WebkitMaskPosition: "center",
                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                        />
                        {/* Shape label */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: 6,
                                left: 0,
                                right: 0,
                                textAlign: "center",
                                fontSize: "0.65rem",
                                fontWeight: 600,
                                color: "white",
                                opacity: hoveredIndex === i ? 1 : 0,
                                transition: "opacity 0.3s",
                                textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                            }}
                        >
                            {shape.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
