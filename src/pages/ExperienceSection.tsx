import { useRef } from "react";
import ExperienceCard from "../components/ExperienceCard";
import experiences from "../json/ExperienceContent.json";
import { motion, useTransform, useScroll, useInView } from "../lib/motion";



const ExperienceSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const isHeadingInView = useInView(headingRef, { once: true });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

    return (
        <section
            ref={sectionRef}
            className="relative mt-32 overflow-hidden bg-lime-900 px-6 py-24 md:px-16 md:py-32"
        >
            {/* Subtle parallax background text */}
            <motion.div
                style={{ y: bgY }}
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 select-none text-[20rem] font-black leading-none text-white/[0.025]"
            >
                XP
            </motion.div>

            <div className="relative mx-auto max-w-8xl">
                {/* Heading */}
                <div ref={headingRef} className="mb-16 overflow-hidden">
                    <motion.h2
                        initial={{ y: "105%" }}
                        animate={isHeadingInView ? { y: "0%" } : {}}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="text-7xl font-medium leading-none tracking-tight text-white md:text-8xl"
                    >
                        My <em className="not-italic text-lime-400">Experience</em>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isHeadingInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.45, duration: 0.5 }}
                        className="mt-4 text-sm text-white/40"
                    >
                        Products, teams, and technologies that shaped my craft.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div>
                    {experiences.map((exp, i) => (
                        <ExperienceCard
                            key={exp.id}
                            exp={exp}
                            index={i}
                            isLast={i === experiences.length - 1}
                        />
                    ))}
                </div>

                {/* CTA */}
                <motion.a
                    href="#"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-2 inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-5 py-2.5 text-sm font-medium text-lime-300 transition-colors hover:bg-lime-400/20"
                >
                    Download CV <span>→</span>
                </motion.a>
            </div>
        </section>
    );
};

export default ExperienceSection;