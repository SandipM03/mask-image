import React from "react";

interface Tag {
    label: string;
    variant?: "default" | "cyan" | "magenta";
}

interface ComponentCardProps {
    title: string;
    description: string;
    tags?: Tag[];
    children: React.ReactNode;
}

export default function ComponentCard({
    title,
    description,
    tags = [],
    children,
}: ComponentCardProps) {
    return (
        <div className="component-card">
            <div className="card-preview">{children}</div>
            <div className="card-info">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                {tags.length > 0 && (
                    <div className="card-tags">
                        {tags.map((tag) => (
                            <span
                                key={tag.label}
                                className={`card-tag ${tag.variant === "cyan" ? "cyan" : tag.variant === "magenta" ? "magenta" : ""}`}
                            >
                                {tag.label}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
