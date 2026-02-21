"use client";

import { useState } from "react";

type PatternType = "scallop" | "zigzag" | "dots";

const PATTERNS: Record<
    PatternType,
    { maskImage: string; label: string; description: string }
> = {
    scallop: {
        label: "Scalloped",
        description: "Overlapping radial gradients create a wavy, organic border",
        maskImage: `
      radial-gradient(circle at 0% 50%, transparent 12px, black 12px),
      radial-gradient(circle at 100% 50%, transparent 12px, black 12px),
      radial-gradient(circle at 50% 0%, transparent 12px, black 12px),
      radial-gradient(circle at 50% 100%, transparent 12px, black 12px),
      radial-gradient(circle at 0% 0%, transparent 12px, black 12px),
      radial-gradient(circle at 100% 0%, transparent 12px, black 12px),
      radial-gradient(circle at 0% 100%, transparent 12px, black 12px),
      radial-gradient(circle at 100% 100%, transparent 12px, black 12px),
      linear-gradient(black, black)
    `,
    },
    zigzag: {
        label: "Zigzag",
        description:
            "Repeating conic gradients combined with mask-composite for zigzag edges",
        maskImage: `
      repeating-linear-gradient(
        -45deg,
        black 0px,
        black 8px,
        transparent 8px,
        transparent 16px
      ),
      linear-gradient(to right, transparent 6px, black 6px, black calc(100% - 6px), transparent calc(100% - 6px)),
      linear-gradient(to bottom, transparent 6px, black 6px, black calc(100% - 6px), transparent calc(100% - 6px))
    `,
    },
    dots: {
        label: "Dot Matrix",
        description:
            "Radial-gradient dot pattern mask creates a halftone print-like border",
        maskImage: `
      radial-gradient(circle, black 3px, transparent 3px),
      linear-gradient(black, black)
    `,
    },
};

const PATTERN_STYLES: Record<PatternType, React.CSSProperties> = {
    scallop: {
        maskComposite: "intersect" as const,
        WebkitMaskComposite: "source-in" as React.CSSProperties["WebkitMaskComposite"],
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
    },
    zigzag: {
        maskComposite: "intersect" as const,
        WebkitMaskComposite: "source-in" as React.CSSProperties["WebkitMaskComposite"],
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
    },
    dots: {
        maskSize: "10px 10px, 100% 100%",
        WebkitMaskSize: "10px 10px, 100% 100%",
        maskComposite: "intersect" as const,
        WebkitMaskComposite: "source-in" as React.CSSProperties["WebkitMaskComposite"],
    },
};

export default function WigglyBorderFrame() {
    const [pattern, setPattern] = useState<PatternType>("scallop");

    const config = PATTERNS[pattern];
    const extraStyle = PATTERN_STYLES[pattern];

    return (
        <div className="demo-container" style={{ flexDirection: "column", gap: 0 }}>
            <div
                style={{
                    width: 260,
                    height: 260,
                    position: "relative",
                }}
            >
                {/* Gradient content masked with pattern */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 20,
                        background:
                            "linear-gradient(135deg, #06b6d4, #8b5cf6, #d946ef, #ec4899)",
                        maskImage: config.maskImage,
                        WebkitMaskImage: config.maskImage,
                        ...extraStyle,
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                />

                {/* Inner content */}
                <div
                    style={{
                        position: "absolute",
                        inset: 24,
                        borderRadius: 12,
                        background: "var(--bg-card)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        border: "1px solid var(--border-color)",
                    }}
                >
                    <span style={{ fontSize: 40 }}>🎨</span>
                    <h4
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "0.95rem",
                            fontWeight: 700,
                            textAlign: "center",
                        }}
                    >
                        Wiggly Frame
                    </h4>
                    <p
                        style={{
                            fontSize: "0.7rem",
                            color: "var(--text-muted)",
                            textAlign: "center",
                            padding: "0 12px",
                        }}
                    >
                        mask-composite shapes
                    </p>
                </div>
            </div>

            {/* Pattern selector */}
            <div className="controls" style={{ flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", gap: 8 }}>
                    {(Object.keys(PATTERNS) as PatternType[]).map((key) => (
                        <button
                            key={key}
                            className={`control-btn ${pattern === key ? "active" : ""}`}
                            onClick={() => setPattern(key)}
                        >
                            {PATTERNS[key].label}
                        </button>
                    ))}
                </div>
                <p
                    style={{
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        textAlign: "center",
                        maxWidth: 320,
                    }}
                >
                    {config.description}
                </p>
            </div>
        </div>
    );
}
