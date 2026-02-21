"use client";

import { useRef, useState, useCallback } from "react";

export default function HolographicCard() {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setMousePos({ x, y });
        },
        []
    );

    const rotateX = isHovered ? (mousePos.y - 50) * -0.2 : 0;
    const rotateY = isHovered ? (mousePos.x - 50) * 0.2 : 0;

    return (
        <div className="demo-container" style={{ perspective: 1000 }}>
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    width: 280,
                    height: 360,
                    borderRadius: 20,
                    position: "relative",
                    overflow: "hidden",
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    transition: isHovered
                        ? "transform 0.1s ease-out"
                        : "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    boxShadow: isHovered
                        ? `0 20px 60px rgba(139, 92, 246, 0.3), 0 0 30px rgba(6, 182, 212, 0.15)`
                        : "0 8px 30px rgba(0, 0, 0, 0.4)",
                }}
            >
                {/* Base card background */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(160deg, #1a1030 0%, #0f0f1a 50%, #1a0f2e 100%)",
                    }}
                />

                {/* Decorative grid */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />

                {/* Holographic shimmer layer — masked by radial-gradient following mouse */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: `
              linear-gradient(
                ${135 + (mousePos.x - 50) * 0.5}deg,
                rgba(6, 182, 212, 0.6) 0%,
                rgba(59, 130, 246, 0.5) 15%,
                rgba(139, 92, 246, 0.6) 30%,
                rgba(217, 70, 239, 0.5) 45%,
                rgba(236, 72, 153, 0.6) 60%,
                rgba(249, 115, 22, 0.5) 75%,
                rgba(6, 182, 212, 0.6) 100%
              )
            `,
                        maskImage: `radial-gradient(circle 160px at ${mousePos.x}% ${mousePos.y}%, black 0%, transparent 100%)`,
                        WebkitMaskImage: `radial-gradient(circle 160px at ${mousePos.x}% ${mousePos.y}%, black 0%, transparent 100%)`,
                        opacity: isHovered ? 1 : 0,
                        transition: "opacity 0.3s ease",
                    }}
                />

                {/* Specular highlight */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
                        opacity: isHovered ? 1 : 0,
                        transition: "opacity 0.3s",
                    }}
                />

                {/* Card content */}
                <div
                    style={{
                        position: "relative",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: 28,
                        zIndex: 2,
                    }}
                >
                    <div>
                        <div
                            style={{
                                width: 48,
                                height: 48,
                                borderRadius: 14,
                                background:
                                    "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(6,182,212,0.3))",
                                border: "1px solid rgba(255,255,255,0.1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 24,
                                marginBottom: 20,
                                backdropFilter: "blur(8px)",
                            }}
                        >
                            ✦
                        </div>
                        <h4
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "1.3rem",
                                fontWeight: 700,
                                marginBottom: 8,
                            }}
                        >
                            Holographic
                        </h4>
                        <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                            Move your mouse over the card to see the holographic shimmer
                            follow your cursor.
                        </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: 8,
                        }}
                    >
                        <span
                            style={{
                                padding: "4px 10px",
                                borderRadius: 100,
                                fontSize: "0.7rem",
                                background: "rgba(139,92,246,0.15)",
                                color: "var(--accent-violet)",
                                border: "1px solid rgba(139,92,246,0.2)",
                            }}
                        >
                            mask-image
                        </span>
                        <span
                            style={{
                                padding: "4px 10px",
                                borderRadius: 100,
                                fontSize: "0.7rem",
                                background: "rgba(6,182,212,0.15)",
                                color: "var(--accent-cyan)",
                                border: "1px solid rgba(6,182,212,0.2)",
                            }}
                        >
                            3D
                        </span>
                    </div>
                </div>

                {/* Border glow */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 20,
                        border: `1px solid ${isHovered ? "rgba(139,92,246,0.3)" : "rgba(255,255,255,0.06)"}`,
                        transition: "border-color 0.3s",
                        pointerEvents: "none",
                    }}
                />
            </div>
        </div>
    );
}
