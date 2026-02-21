"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollRevealMask() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [revealPercent, setRevealPercent] = useState(10);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Calculate how far into view the element is (0 to 1)
            const visibleRatio = Math.max(
                0,
                Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height))
            );
            setRevealPercent(Math.max(10, visibleRatio * 120));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="demo-container"
            ref={containerRef}
            style={{
                flexDirection: "column",
                gap: 16,
                minHeight: 280,
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: 420,
                    padding: "32px 28px",
                    borderRadius: 16,
                    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    maskImage: `linear-gradient(to bottom, black 0%, black ${revealPercent}%, transparent ${revealPercent + 15}%)`,
                    WebkitMaskImage: `linear-gradient(to bottom, black 0%, black ${revealPercent}%, transparent ${revealPercent + 15}%)`,
                    transition: "mask-image 0.1s ease-out, -webkit-mask-image 0.1s ease-out",
                }}
            >
                <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                    <div
                        style={{
                            width: 56,
                            height: 56,
                            borderRadius: 14,
                            background:
                                "linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 28,
                            flexShrink: 0,
                        }}
                    >
                        👁️
                    </div>
                    <div>
                        <h4
                            style={{
                                fontFamily: "var(--font-display)",
                                fontWeight: 700,
                                marginBottom: 4,
                            }}
                        >
                            Scroll to Reveal
                        </h4>
                        <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                            Watch this content emerge as you scroll
                        </p>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                    }}
                >
                    {[
                        { label: "mask-image", value: "70%", color: "var(--accent-cyan)" },
                        { label: "mask-size", value: "85%", color: "var(--accent-violet)" },
                        { label: "mask-position", value: "60%", color: "var(--accent-magenta)" },
                    ].map((item) => (
                        <div key={item.label}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontSize: "0.8rem",
                                    marginBottom: 6,
                                }}
                            >
                                <span style={{ color: "var(--text-secondary)" }}>
                                    {item.label}
                                </span>
                                <span style={{ color: item.color, fontWeight: 600 }}>
                                    {item.value}
                                </span>
                            </div>
                            <div
                                style={{
                                    height: 6,
                                    borderRadius: 3,
                                    background: "rgba(255,255,255,0.06)",
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        height: "100%",
                                        width: item.value,
                                        borderRadius: 3,
                                        background: `linear-gradient(90deg, ${item.color}, transparent)`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <p
                    style={{
                        marginTop: 20,
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.7,
                    }}
                >
                    This demo uses a linear-gradient mask that expands as the element
                    enters your viewport. The mask-image property progressively reveals
                    more content from top to bottom as you scroll down the page.
                </p>
            </div>

            <p
                style={{
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                    textAlign: "center",
                }}
            >
                Reveal: {Math.round(revealPercent)}%
            </p>
        </div>
    );
}
