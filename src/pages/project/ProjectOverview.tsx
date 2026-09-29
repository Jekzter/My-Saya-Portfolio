import { motion, type Variants } from "motion/react"

const container: Variants = {
     hidden: {},
     show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const fadeUp: Variants = {
     hidden: { opacity: 0, y: 24 },
     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

type OverviewItem = {
     label: string
     value: string
}

type ProjectOverviewProps = {
     challenge: string
     solution: string
     details: OverviewItem[]
}

export default function ProjectOverview({ challenge, solution, details }: ProjectOverviewProps) {
     return (
          <section className="flex items-center justify-center flex-col mt-16 sm:mt-24">
               <div className="flex w-[90vw] max-w-6xl flex-col">
                    <motion.div
                         variants={container}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true, amount: 0.1 }}
                         className="grid grid-cols-1 gap-10 border-t border-white/10 pt-16 lg:grid-cols-3 lg:gap-12"
                    >
                         {/* CHALLENGE & SOLUTION */}
                         <div className="flex flex-col gap-8 sm:gap-10 lg:col-span-2">
                              <motion.div variants={fadeUp} className="flex flex-col gap-3 text-start">
                                   <span className="text-xs font-bold uppercase tracking-widest text-lime-500">
                                        The Challenge
                                   </span>
                                   <p className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
                                        {challenge}
                                   </p>
                              </motion.div>

                              <motion.div variants={fadeUp} className="flex flex-col gap-3 text-start">
                                   <span className="text-xs font-bold uppercase tracking-widest text-lime-500">
                                        The Solution
                                   </span>
                                   <p className="leading-relaxed text-gray-400">{solution}</p>
                              </motion.div>
                         </div>

                         {/* DETAILS SIDEBAR */}
                         <motion.div variants={fadeUp} className="flex flex-col gap-5 text-start sm:gap-6">
                              {details.map((item, i) => (
                                   <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                                        className="flex flex-col gap-1 border-b border-white/10 pb-4"
                                   >
                                        <span className="text-xs font-medium text-gray-500">{item.label}</span>
                                        <span className="font-semibold text-white">{item.value}</span>
                                   </motion.div>
                              ))}
                         </motion.div>
                    </motion.div>
               </div>
          </section>
     )
}