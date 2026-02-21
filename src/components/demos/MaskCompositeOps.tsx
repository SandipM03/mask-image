"use client";

import { useState } from "react";

type CompositeOp = "add" | "subtract" | "intersect" | "exclude";

const OP_DESCRIPTIONS: Record<CompositeOp, string> = {
    add: "Both mask layers are combined — visible everywhere either mask exists.",
    subtract: "The second mask is removed from the first — only non-overlapping areas of first mask remain.",
    intersect: "Only the overlapping region of both masks is visible.",
    exclude: "Everything except the overlap is visible — the opposite of intersect.",
};

const WEBKIT_MAP: Record<CompositeOp, string> = {
    add: "source-over",
    subtract: "source-out",
    intersect: "source-in",
    exclude: "xor",
};

export default function MaskCompositeOps() {
    const [op, setOp] = useState<CompositeOp>("add");

    const maskImageValue = `
    radial-gradient(circle at 38% 50%, black 80px, transparent 80px),
    radial-gradient(circle at 62% 50%, black 80px, transparent 80px)
  `.trim();

    return (
        <div className="demo-container" style={{ flexDirection: "column", gap: 0 }}>
            <div
                style={{
                    width: 340,
                    height: 220,
                    borderRadius: 16,
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                {/* Background pattern */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: `
              linear-gradient(135deg, #06b6d4, #8b5cf6, #d946ef),
              repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px)
            `,
                        backgroundBlendMode: "normal, overlay",
                        maskImage: maskImageValue,
                        WebkitMaskImage: maskImageValue,
                        maskComposite: op,
                        WebkitMaskComposite: WEBKIT_MAP[op] as React.CSSProperties["WebkitMaskComposite"],
                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                />
                {/* Circle outlines for reference */}
                <svg
                    width="340"
                    height="220"
                    viewBox="0 0 340 220"
                    style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
                >
                    <circle
                        cx="129"
                        cy="110"
                        r="80"
                        fill="none"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                    />
                    <circle
                        cx="211"
                        cy="110"
                        r="80"
                        fill="none"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                    />
                    <text
                        x="100"
                        y="195"
                        fill="rgba(255,255,255,0.3)"
                        fontSize="11"
                        fontFamily="var(--font-body)"
                    >
                        A
                    </text>
                    <text
                        x="230"
                        y="195"
                        fill="rgba(255,255,255,0.3)"
                        fontSize="11"
                        fontFamily="var(--font-body)"
                    >
                        B
                    </text>
                </svg>
            </div>

            {/* Operation selector */}
            <div className="controls" style={{ flexDirection: "column", gap: 12, width: "100%" }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                    {(["add", "subtract", "intersect", "exclude"] as CompositeOp[]).map(
                        (operation) => (
                            <button
                                key={operation}
                                className={`control-btn ${op === operation ? "active" : ""}`}
                                onClick={() => setOp(operation)}
                            >
                                {operation}
                            </button>
                        )
                    )}
                </div>
                <p
                    style={{
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        textAlign: "center",
                        maxWidth: 380,
                        lineHeight: 1.5,
                    }}
                >
                    {OP_DESCRIPTIONS[op]}
                </p>
            </div>
        </div>
    );
}
