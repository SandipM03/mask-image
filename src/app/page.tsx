"use client";

// import Header from "@/components/Header";
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

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-end items-end p-4 mr-16">
    <h1 className="text-3xl font-bold p-4">
     mask-image & mask-composite Library
    </h1>
     <p className="text-sm text-gray-400 p-4 ">Components built by 
       
       <a href="https://github.com/SandipM03" target="_blank" rel="noopener noreferrer">
      <span className="text-violet-400 " > Sandip Mandal</span></a></p>
    </div>
     

      {/* Hero Section */}
      {/* <section className="hero">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ✦ CSS Mask Image & Mask Composite
        </motion.div>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Mask Image{" "}
          <span className="hero-title-gradient">Library</span>
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A curated collection of beautiful, interactive components showcasing
          the power of CSS <code>mask-image</code> &{" "}
          <code>mask-composite</code>. Built with React, TypeScript & Framer
          Motion.
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#components" className="btn-primary">
            Explore Components ↓
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Learn mask-image →
          </a>
        </motion.div>
      </section> */}

      {/* Components Section */}
      <section className="section" id="components">
        {/* <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Component Showcase
          </motion.h2>
          <motion.p
            className="section-desc"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Each component demonstrates a unique technique. Hover, click, and
            interact to see them in action.
          </motion.p>
        </div> */}

        <div className="">
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

          {/* <motion.div
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
          </motion.div> */}

          {/* <motion.div
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
          </motion.div> */}

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

          
        </div>
      </section>

      
    </>
  );
}
