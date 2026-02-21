"use client";

import { useEffect, useRef } from "react";

export default function GradientTextMask() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = 500;
        canvas.height = 200;

        let hue = 0;
        let animationId: number;

        const draw = () => {
            hue = (hue + 0.5) % 360;

            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, `hsl(${hue}, 90%, 65%)`);
            gradient.addColorStop(0.33, `hsl(${(hue + 60) % 360}, 85%, 60%)`);
            gradient.addColorStop(0.66, `hsl(${(hue + 120) % 360}, 90%, 65%)`);
            gradient.addColorStop(1, `hsl(${(hue + 180) % 360}, 85%, 60%)`);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            animationId = requestAnimationFrame(draw);
        };

        draw();
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className="demo-container" style={{ flexDirection: "column", gap: 8 }}>
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: 460,
                    height: 160,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {/* Canvas as background */}
                <canvas
                    ref={canvasRef}
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: 12,
                        maskImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='460' height='160'%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-family='Outfit,sans-serif' font-weight='900' font-size='86' fill='white'%3EMASK IT%3C/text%3E%3C/svg%3E\")",
                        WebkitMaskImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='460' height='160'%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-family='Outfit,sans-serif' font-weight='900' font-size='86' fill='white'%3EMASK IT%3C/text%3E%3C/svg%3E\")",
                        maskSize: "100% 100%",
                        WebkitMaskSize: "100% 100%",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                    }}
                />
                {/* Ghost text for layout sizing */}
                <span
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 86,
                        fontWeight: 900,
                        opacity: 0,
                        userSelect: "none",
                        pointerEvents: "none",
                    }}
                >
                    MASK IT
                </span>
            </div>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "center" }}>
                Animated gradient visible through text via mask-image SVG text mask
            </p>
        </div>
    );
}
