"use client";

import { useState } from "react";

export default function AnimatedMaskWipe() {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <div className="demo-container" style={{ flexDirection: "column", gap: 0 }}>
            <div
                style={{
                    width: "100%",
                    maxWidth: 420,
                    aspectRatio: "16/10",
                    borderRadius: 16,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                }}
                onMouseEnter={() => setIsRevealed(true)}
                onMouseLeave={() => setIsRevealed(false)}
            >
                {/* Before image (grayscale/dark version) */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: `
              linear-gradient(135deg, #1a1a2e 0%, #0d0d15 100%)
            `,
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 12,
                        }}
                    >
                        <div
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.05)",
                                border: "2px solid rgba(255,255,255,0.1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 36,
                                filter: "grayscale(1)",
                            }}
                        >
                            🌙
                        </div>
                        <h4
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "1.5rem",
                                fontWeight: 800,
                                color: "var(--text-muted)",
                            }}
                        >
                            Before
                        </h4>
                        <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.2)" }}>
                            Hover to wipe reveal →
                        </p>
                    </div>
                </div>

                {/* After image (colorful version) — masked with wipe */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: `
              linear-gradient(135deg, #0f3460 0%, #16213e 30%, #1a1a2e 60%, #0f0f30 100%)
            `,
                        maskImage: isRevealed
                            ? "linear-gradient(135deg, black 0%, black 100%)"
                            : "linear-gradient(135deg, black 0%, black 0%, transparent 0%, transparent 100%)",
                        WebkitMaskImage: isRevealed
                            ? "linear-gradient(135deg, black 0%, black 100%)"
                            : "linear-gradient(135deg, black 0%, black 0%, transparent 0%, transparent 100%)",
                        transition: "mask-image 0.6s ease, -webkit-mask-image 0.6s ease",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage: `
                radial-gradient(circle at 25% 40%, rgba(6, 182, 212, 0.3) 0%, transparent 40%),
                radial-gradient(circle at 75% 60%, rgba(139, 92, 246, 0.3) 0%, transparent 40%),
                radial-gradient(circle at 50% 30%, rgba(217, 70, 239, 0.2) 0%, transparent 50%)
              `,
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 12,
                        }}
                    >
                        <div
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius: "50%",
                                background:
                                    "linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 36,
                                boxShadow: "0 0 30px rgba(139,92,246,0.4)",
                            }}
                        >
                            ☀️
                        </div>
                        <h4
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "1.5rem",
                                fontWeight: 800,
                                background: "var(--gradient-primary)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            After
                        </h4>
                        <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                             Mask wipe complete
                        </p>
                    </div>
                </div>
            </div>

            <div className="controls" style={{ width: "100%", maxWidth: 420 }}>
                <button
                    className={`control-btn ${isRevealed ? "active" : ""}`}
                    onClick={() => setIsRevealed(!isRevealed)}
                >
                    {isRevealed ? "Reset" : "Wipe Reveal"}
                </button>
                <span
                    style={{
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                    }}
                >
                    or hover over the card
                </span>
            </div>
        </div>
    );
}
