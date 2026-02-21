"use client";

import { useState } from "react";

export default function ImageFadeMask() {
    const [fadeAmount, setFadeAmount] = useState(25);

    const maskGradient = `
    linear-gradient(to right,  transparent 0%, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent 100%)
  `.trim();

    return (
        <div className="demo-container" style={{ flexDirection: "column", gap: 0 }}>
            <div
                style={{
                    width: "100%",
                    maxWidth: 420,
                    aspectRatio: "16/10",
                    borderRadius: 12,
                    overflow: "hidden",
                    position: "relative",
                    background:
                        "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                }}
            >
                {/* Decorative background pattern */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.4) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.4) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, rgba(217, 70, 239, 0.3) 0%, transparent 50%),
              repeating-conic-gradient(from 0deg, rgba(255,255,255,0.03) 0deg 10deg, transparent 10deg 20deg)
            `,
                    }}
                />
                {/* Text content to mask */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        maskImage: maskGradient,
                        WebkitMaskImage: maskGradient,
                        maskComposite: "intersect",
                        WebkitMaskComposite: "source-in" as React.CSSProperties["WebkitMaskComposite"],
                        transition: "all 0.3s ease",
                    }}
                >
                    <div
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            background:
                                "linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 28,
                        }}
                    >
                        🏔️
                    </div>
                    <h4
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.4rem",
                            fontWeight: 700,
                        }}
                    >
                        Mountain Vista
                    </h4>
                    <p
                        style={{
                            fontSize: "0.85rem",
                            color: "var(--text-secondary)",
                            maxWidth: 260,
                            textAlign: "center",
                        }}
                    >
                        Edges fade smoothly to transparency using intersecting mask gradients
                    </p>
                </div>
            </div>

            {/* Slider control */}
            <div className="controls" style={{ width: "100%", maxWidth: 420 }}>
                <div className="slider-control">
                    <label>Fade: {fadeAmount}%</label>
                    <input
                        type="range"
                        min={0}
                        max={48}
                        value={fadeAmount}
                        onChange={(e) => setFadeAmount(Number(e.target.value))}
                    />
                </div>
            </div>
        </div>
    );
}
