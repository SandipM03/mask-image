"use client";

import { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className="header"
            style={{
                boxShadow: scrolled ? "var(--shadow-glow)" : "none",
            }}
        >
            <div className="header-logo">Mask Image Library</div>
            <nav>
                <ul className="header-nav">
                    <li>
                        <a href="#components">Components</a>
                    </li>
                    <li>
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Docs
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
