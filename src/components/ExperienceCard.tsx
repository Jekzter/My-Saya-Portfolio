import { motion, useInView } from "../lib/motion"
import { useRef } from "react";
import experiences from "../json/ExperienceContent.json";

const ExperienceCard = ({
    exp,
    index,
    isLast,
}: {
    exp: (typeof experiences)[0];
    index: number;
    isLast: boolean;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative grid grid-cols-[1rem_1fr] gap-8"
        >
            {/* Timeline spine */}
            <div className="flex flex-col items-center pt-1">
                <span className="relative z-10 h-3 w-3 shrink-0 rounded-full bg-lime-400 ring-4 ring-lime-400/20 transition-shadow group-hover:ring-lime-400/40" />
                {!isLast && <span className="mt-2 w-px flex-1 bg-white/10" />}
            </div>

            {/* Content */}
            <div className={`${isLast ? "pb-0" : "pb-12"}`}>
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                    <div className="text-start">
                        <h3 className="text-5xl font-semibold text-white">{exp.role}</h3>
                        <p className="mt-0.5 text-sm text-white/50">
                            <span className="font-medium text-lime-400">{exp.company}</span>
                            {" · "}
                            {exp.type}
                        </p>
                    </div>
                    <span className="text-2xl font-semibold italic text-white">{exp.period}</span>
                </div>

                <p className="mb-4 max-w-lg text-sm text-start leading-relaxed text-white/55">
                    {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                        <span
                            key={tag}
                            className="border border-lime-400/20 bg-lime-400/5 px-3 py-1 text-xs text-lime-300/80 transition-colors hover:border-lime-400/40 hover:bg-lime-400/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default ExperienceCard;