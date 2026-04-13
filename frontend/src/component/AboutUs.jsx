"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutUs() {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const isInView = useInView(textRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const leftImageY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const rightImageY = useTransform(scrollYProgress, [0, 1], [50, -150])
  const textX = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-24 md:py-32 px-6 md:px-12 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Large Title */}
        <motion.div ref={textRef} className="mb-16 md:mb-24 overflow-hidden">
          <motion.h2
            initial={{ y: 150, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-none text-gray-200 "
          >
            Spring
          </motion.h2>
          <motion.h2
            initial={{ y: 150, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-none text-black"
          >
            Summer/26
          </motion.h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Image */}
          <motion.div
            style={{ y: leftImageY }}
            className="md:col-span-4 relative aspect-[3/4] overflow-hidden"
          >
            <motion.div
              initial={{ scale: 1.3, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="absolute inset-0"
            >
              <img
                src="https://images.pexels.com/photos/11142021/pexels-photo-11142021.jpeg"
                alt="Spring Summer collection"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:pt-32"
          >
            <p className="text-gray-500 font-sans text-sm leading-relaxed mb-8">
              Atelier invites you to embrace the sun-drenched elegance of
              Spring/Summer 2026. This season, our collection unfolds with a
              whisper of coastal breeze and the soft glow of golden hour.
            </p>
            <p className="text-gray-500 font-sans text-lg leading-relaxed mb-8">
              Discover flowing lines, intricate details, and a palette that captures
              the essence of coastal luxury, designed for the discerning individual
              who appreciates the art of understated opulence.
            </p>
            <button className="text-xs tracking-[0.2em] uppercase font-sans border-b border-black pb-1 hover:opacity-50 transition-opacity text-black">
              Find Out More
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            style={{ y: rightImageY }}
            className="md:col-span-4 relative w-[400px] md:w-[500px]  h-[600px] md:h-[700px] overflow-hidden md:mt-48"
          >
            <motion.div
              initial={{ scale: 1.3, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="absolute inset-0"
            >
              <img
                src="https://images.pexels.com/photos/30688606/pexels-photo-30688606.jpeg"
                alt="Summer fashion"
                className="w-full h-full  object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-right text-xs tracking-[0.3em] font-sans mt-16 text-black"
        >
     
        </motion.p>
      </div>
    </section>
  )
}
