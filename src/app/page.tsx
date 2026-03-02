"use client";

import Script from "next/script";
import ComponentCard from "@/components/ComponentCard";
import GradientTextMask from "@/components/demos/GradientTextMask";
import ImageFadeMask from "@/components/demos/ImageFadeMask";
import MaskCompositeOps from "@/components/demos/MaskCompositeOps";
import ShapeMaskGallery from "@/components/demos/ShapeMaskGallery";
import HolographicCard from "@/components/demos/HolographicCard";
import ScrollRevealMask from "@/components/demos/ScrollRevealMask";
import AnimatedMaskWipe from "@/components/demos/AnimatedMaskWipe";
import WigglyBorderFrame from "@/components/demos/WigglyBorderFrame";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const heroStats = [
  { label: "Mask-image recipes", value: "12+", copy: "Practical gradients, SVGs, and blend tricks ready to copy." },
  { label: "Performance tuned", value: "<10kb", copy: "Pure CSS masks so Google can crawl and render instantly." },
  { label: "Composite demos", value: "4 ops", copy: "add, subtract, intersect, and exclude showcased with UI." },
];

const strategyPillars = [
  {
    title: "Author semantic content",
    body: "Each component ships with contextual copy so search engines understand why mask-image matters for modern UI systems.",
    bullets: [
      "Hierarchical headings for every section",
      "Keyword-focused descriptions without stuffing",
      "Accessible labels that match visual intent",
    ],
  },
  {
    title: "Document CSS masking patterns",
    body: "Explain how gradient, image, and SVG masks amplify interaction design, then link to MDN for additional authority.",
    bullets: [
      "Showcase compositing operators",
      "Highlight cross-browser techniques",
      "Encourage experimentation via live demos",
    ],
  },
  {
    title: "Provide crawlable resources",
    body: "Offer jump links, FAQs, and implementation checklists so crawlers and humans find answers fast.",
    bullets: [
      "Structured data via TechArticle schema",
      "Robust internal linking across sections",
      "Clear CTAs that describe the action",
    ],
  },
];

const faqItems = [
  {
    question: "What is CSS mask-image?",
    answer:
      "CSS mask-image applies an alpha channel to an element so only specific regions remain visible. The library demonstrates gradients, SVGs, and image-based masks you can reuse in production UI systems.",
  },
  {
    question: "How does mask-composite differ from mask-image?",
    answer:
      "mask-composite defines how multiple masks blend together using Boolean operations like add, subtract, intersect, and exclude. The interactive playground lets you preview each mode with layered gradients.",
  },
  {
    question: "Will these demos help my site rank for mask-image?",
    answer:
      "Yes. Every component includes descriptive copy, semantic headings, and structured data so search engines can contextualize the mask-image keyword without spammy repetition.",
  },
];

const resourceLinks = [
  {
    title: "Mask-image implementation checklist",
    description: "Step-by-step reminders for performance budgets, fallbacks, and accessibility notes when launching masked UI.",
    href: "#components",
  },
  {
    title: "MDN: CSS masking",
    description: "Canonical reference for mask-image, mask-size, mask-position, and compositing modes.",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask",
  },
  {
    title: "Speculative design inspiration",
    description: "Explore how holographic, scroll-triggered, and animated wipes can add polish without heavy assets.",
    href: "https://www.behance.net/search/projects?search=mask%20image%20ui",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Mask Image Library — CSS mask-image & mask-composite Components",
  description:
    "Interactive demos that teach designers and engineers how to apply CSS mask-image, gradients, and mask-composite techniques to modern UI.",
  inLanguage: "en-US",
  keywords: "mask-image, CSS masking, mask-composite, gradient masks",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://mask-image.sandipmandal.me/",
  },
  author: {
    "@type": "Person",
    name: "Sandip Mandal",
    url: "https://github.com/SandipM03",
  },
  publisher: {
    "@type": "Organization",
    name: "Mask Image Library",
    url: "https://mask-image.sandipmandal.me/",
  },
  about: [
    {
      "@type": "Thing",
      name: "CSS mask-image",
      sameAs: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image",
    },
    {
      "@type": "Thing",
      name: "mask-composite",
      sameAs: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-composite",
    },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Front-end developers",
  },
};

export default function Home() {
  return (
    <>
      <main className="space-y-16 pb-24">
        <section className="px-6 pt-12 md:pt-20">
          <div className="mx-auto max-w-5xl">
            <motion.p
              className="inline-flex items-center rounded-full border border-white/20 px-4 py-1 text-sm uppercase tracking-wide text-slate-200"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              ✦ CSS mask-image resource hub
            </motion.p>
            <motion.h1
              className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Build expressive interfaces with production-ready mask-image & mask-composite patterns
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-slate-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              This static library is engineered for crawlability: semantic headings, performance-friendly CSS masking, and keyword-rich explanations that help Google understand why mask-image techniques matter.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="#components"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900"
              >
                Browse mask-image demos
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/mask"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white"
              >
                Read CSS masking guide
              </a>
            </motion.div>
          </div>
          <div className="mt-12 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            {heroStats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-sm uppercase tracking-wide text-slate-300">{stat.label}</p>
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="text-sm text-slate-200">{stat.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6" id="components" aria-labelledby="components-title">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h2
              id="components-title"
              className="text-3xl font-semibold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Mask-image showcase for modern UI systems
            </motion.h2>
            <motion.p
              className="mt-4 text-base text-slate-200"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Each card teaches a different mask-image or mask-composite tactic—gradient wipes, SVG silhouettes, holographic textures, scroll-triggered reveals, and more.
            </motion.p>
          </div>

          <div className="mt-10">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ComponentCard
                title="Gradient Text Mask"
                description="Large heading text with an animated gradient background visible through text using mask-image, creating a vivid typographic effect."
                tags={[
                  { label: "mask-image", variant: "default" },
                  { label: "animation", variant: "cyan" },
                ]}
              >
                <GradientTextMask />
              </ComponentCard>
            </motion.div>

            {/* <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ComponentCard
                title="Image Fade Mask"
                description="Smoothly fade image edges to transparency using mask-image with linear gradients. Adjust the fade intensity with the interactive slider."
                tags={[
                  { label: "mask-image", variant: "default" },
                  { label: "linear-gradient", variant: "cyan" },
                  { label: "interactive", variant: "magenta" },
                ]}
              >
                <ImageFadeMask />
              </ComponentCard>
            </motion.div> */}

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ComponentCard
                title="Mask Composite Operations"
                description="Interactive demonstration of all four mask-composite operations: add, subtract, intersect, and exclude. See how mask layers combine."
                tags={[
                  { label: "mask-composite", variant: "default" },
                  { label: "interactive", variant: "magenta" },
                ]}
              >
                <MaskCompositeOps />
              </ComponentCard>
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ComponentCard
                title="Shape Mask Gallery"
                description="Gallery of images masked into custom SVG shapes — circle, star, hexagon, heart, and diamond. Hover to see the reveal transition."
                tags={[
                  { label: "mask-image", variant: "default" },
                  { label: "SVG mask", variant: "cyan" },
                  { label: "hover", variant: "magenta" },
                ]}
              >
                <ShapeMaskGallery />
              </ComponentCard>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ComponentCard
                title="Holographic Card"
                description="A 3D perspective card with a holographic shimmer effect. The mask-image with radial-gradient follows your mouse, creating a dynamic rainbow sheen."
                tags={[
                  { label: "mask-image", variant: "default" },
                  { label: "radial-gradient", variant: "cyan" },
                  { label: "3D", variant: "magenta" },
                ]}
              >
                <HolographicCard />
              </ComponentCard>
            </motion.div>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ComponentCard
                title="Scroll Reveal Mask"
                description="Content progressively revealed as you scroll using mask-image with animated mask-size. Watch text and visuals emerge from the darkness."
                tags={[
                  { label: "mask-image", variant: "default" },
                  { label: "scroll", variant: "cyan" },
                  { label: "animation", variant: "magenta" },
                ]}
              >
                <ScrollRevealMask />
              </ComponentCard>
            </motion.div>

            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ComponentCard
                title="Animated Mask Wipe"
                description="Before/after image comparison with an animated diagonal mask wipe. Hover to trigger the smooth transition revealing the second image."
                tags={[
                  { label: "mask-image", variant: "default" },
                  { label: "animation", variant: "cyan" },
                  { label: "hover", variant: "magenta" },
                ]}
              >
                <AnimatedMaskWipe />
              </ComponentCard>
            </motion.div>

            <motion.div
              custom={7}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ComponentCard
                title="Wiggly Border Frame"
                description="Decorative image frame using mask-composite with overlapping radial-gradient patterns to create a scalloped, organic border effect."
                tags={[
                  { label: "mask-composite", variant: "default" },
                  { label: "radial-gradient", variant: "cyan" },
                  { label: "decorative", variant: "magenta" },
                ]}
              >
                <WigglyBorderFrame />
              </ComponentCard>
            </motion.div>
          </div>
        </section>

        <section className="px-6" aria-labelledby="seo-strategy-title">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 id="seo-strategy-title" className="text-3xl font-semibold text-white">
              Why mask-image content ranks
            </h2>
            <p className="mt-3 text-base text-slate-200">
              Google rewards specialized, well-documented topics. This library balances engaging visuals with crawl-friendly markup. Reuse the following approach on your own marketing pages to increase topical authority for mask-image.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {strategyPillars.map((pillar) => (
                <article key={pillar.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
                  <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-slate-200">{pillar.body}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6" aria-labelledby="resources-title">
          <div className="mx-auto max-w-5xl">
            <h2 id="resources-title" className="text-3xl font-semibold text-white">
              Crawlable resources & references
            </h2>
            <p className="mt-2 text-base text-slate-200">
              Link these guides from release notes or blog posts to reinforce the mask-image keyword ecosystem surrounding your brand.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {resourceLinks.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/40"
                >
                  <p className="text-lg font-semibold text-white">{resource.title}</p>
                  <p className="mt-2 text-sm text-slate-200">{resource.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-10" aria-labelledby="faq-title">
          <div className="mx-auto max-w-4xl">
            <h2 id="faq-title" className="text-3xl font-semibold text-white">
              Mask-image FAQ for crawlers & humans
            </h2>
            <div className="mt-6 space-y-4">
              {faqItems.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                  <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                  <p className="mt-2 text-sm text-slate-200">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Script id="mask-image-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(structuredData)}
      </Script>
    </>
  );
}
