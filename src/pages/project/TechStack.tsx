import { motion, type Variants } from "motion/react"

const container: Variants = {
     hidden: {},
     show: { transition: { staggerChildren: 0.06 } },
}

const popIn: Variants = {
     hidden: { opacity: 0, scale: 0.8, y: 10 },
     show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

type TechStackProps = {
     stacks: string[]
}

export default function TechStack({ stacks }: TechStackProps) {
     if (!stacks || stacks.length === 0) return null

     return (
          <section className="flex items-center justify-center flex-col mt-16 sm:mt-24">
               <div className="flex w-[90vw] max-w-6xl flex-col border-t border-white/10 pt-16">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, amount: 0.2 }}
                         transition={{ duration: 0.5, ease: "easeOut" }}
                         className="mb-8 text-start"
                    >
                         <span className="text-xs font-bold uppercase tracking-widest text-lime-500">
                              Tech Stack
                         </span>
                         <h3 className="mt-2 text-2xl font-medium text-white sm:text-3xl">
                              Tools behind this project
                         </h3>
                    </motion.div>

                    <motion.div
                         variants={container}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true, amount: 0.1 }}
                         className="flex flex-wrap gap-2.5 sm:gap-3"
                    >
                         {stacks.map((tech) => (
                              <motion.span
                                   key={tech}
                                   variants={popIn}
                                   whileHover={{ y: -4, backgroundColor: "#a3e635", color: "#1a2e05" }}
                                   whileTap={{ scale: 0.95 }}
                                   className="cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-sm transition-colors sm:px-5 sm:py-2 sm:text-sm"
                              >
                                   {tech}
                              </motion.span>
                         ))}
                    </motion.div>
               </div>
          </section>
     )
}