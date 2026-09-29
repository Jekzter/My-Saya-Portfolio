import { useRef } from "react"
import { ExperienceCard } from "../../components"
import experiences from "../../json/ExperienceContent.json"
import { motion, useTransform, useScroll, useInView, type Variants } from "../../lib/motion"

const container: Variants = {
     hidden: {},
     show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const fadeUp: Variants = {
     hidden: { opacity: 0, y: 32 },
     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const ExperienceSection = () => {
     const sectionRef = useRef(null)
     const headingRef = useRef(null)
     const timelineRef = useRef(null)
     const isHeadingInView = useInView(headingRef, { once: true })

     const { scrollYProgress } = useScroll({
          target: sectionRef,
          offset: ["start end", "end start"],
     })
     const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])
     const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95])
     const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3])

     const { scrollYProgress: timelineProgress } = useScroll({
          target: timelineRef,
          offset: ["start 80%", "end 60%"],
     })
     const lineHeight = useTransform(timelineProgress, [0, 1], ["0%", "100%"])

     return (
          <section
               ref={sectionRef}
               className="relative mt-20 overflow-hidden bg-lime-900 px-4 py-16 sm:mt-24 sm:px-6 sm:py-20 md:mt-32 md:px-16 md:py-32"
               id="experiences"
          >
               {/* Subtle parallax background text — hidden on mobile, too large to fit meaningfully */}
               <motion.div
                    style={{ y: bgY, scale: bgScale, opacity: bgOpacity }}
                    aria-hidden
                    className="pointer-events-none absolute right-0 top-0 hidden select-none text-[12rem] font-black leading-none text-white/2.5 sm:block md:text-[16rem] lg:text-[20rem]"
               >
                    XP
               </motion.div>

               {/* Ambient glow that drifts */}
               <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -left-32 top-1/3 h-64 w-64 rounded-full bg-lime-400/10 blur-3xl sm:h-96 sm:w-96"
                    animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
               />

               <div className="relative mx-auto max-w-8xl">
                    {/* Heading */}
                    <div ref={headingRef} className="mb-10 overflow-hidden sm:mb-12 md:mb-16">
                         <motion.h2
                              initial={{ y: "105%" }}
                              animate={isHeadingInView ? { y: "0%" } : {}}
                              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                              className="text-4xl font-medium leading-none tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl"
                         >
                              My{" "}
                              <motion.em
                                   initial={{ color: "#ffffff" }}
                                   animate={isHeadingInView ? { color: "#a3e635" } : {}}
                                   transition={{ delay: 0.3, duration: 0.6 }}
                                   className="not-italic"
                              >
                                   Experience
                              </motion.em>
                         </motion.h2>

                         <motion.p
                              initial={{ opacity: 0, y: 10 }}
                              animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
                              transition={{ delay: 0.45, duration: 0.5 }}
                              className="mt-3 text-xs text-white/40 sm:mt-4 sm:text-sm"
                         >
                              Products, teams, and technologies that shaped my craft.
                         </motion.p>
                    </div>

                    {/* Timeline */}
                    <div ref={timelineRef} className="relative">
                         {/* Animated vertical line */}
                         <div className="absolute left-0 top-0 h-full w-px bg-white/10 md:left-2">
                              <motion.div
                                   style={{ height: lineHeight }}
                                   className="w-px bg-linear-to-b from-lime-400 to-lime-400/20"
                              />
                         </div>

                         <motion.div
                              variants={container}
                              initial="hidden"
                              whileInView="show"
                              viewport={{ once: true, amount: 0.1 }}
                         >
                              {experiences.map((exp, i) => (
                                   <motion.div key={exp.id} variants={fadeUp}>
                                        <ExperienceCard
                                             exp={exp}
                                             index={i}
                                             isLast={i === experiences.length - 1}
                                        />
                                   </motion.div>
                              ))}
                         </motion.div>
                    </div>

                    {/* CTA */}
                    <motion.a
                         href="#"
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, amount: 0.3 }}
                         transition={{ duration: 0.5 }}
                         whileHover="hover"
                         whileTap={{ scale: 0.96 }}
                         className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-xs font-medium text-lime-300 sm:mt-2 sm:px-5 sm:py-2.5 sm:text-sm"
                    >
                         <motion.span
                              variants={{
                                   hover: { scale: 18 },
                              }}
                              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                              className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/20"
                         />
                         <span className="relative z-10">Download CV</span>
                         <motion.span
                              variants={{
                                   hover: { x: 4 },
                              }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="relative z-10"
                         >
                              →
                         </motion.span>
                    </motion.a>
               </div>
          </section>
     )
}

export default ExperienceSection