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
        <div className=" flex flex-col lg:flex-row mx-4 my-6 md:mx-8 md:my-8">
            <div className="card-info flex-1 p-5 md:p-6 flex flex-col justify-center order-2 lg:order-1">
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
            <div className="flex-1 min-h-[200px] md:min-h-[280px] flex items-center justify-center p-4 order-1 ">
                {children}
            </div>
        </div>
    );
}
