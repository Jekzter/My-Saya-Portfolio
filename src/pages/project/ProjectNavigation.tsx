import { motion, type Variants } from "motion/react"
import { useNavigate } from "react-router"
import { ProjectItem } from "../../constants"
import { encryptId } from "../../helper"

const fadeUp: Variants = {
     hidden: { opacity: 0, y: 24 },
     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

type ProjectNavigationProps = {
     currentId: number
}

export default function ProjectNavigation({ currentId }: ProjectNavigationProps) {
     const navigate = useNavigate()
     const currentIndex = ProjectItem.findIndex((p) => p.id === currentId)
     const prevProject = ProjectItem[(currentIndex - 1 + ProjectItem.length) % ProjectItem.length]
     const nextProject = ProjectItem[(currentIndex + 1) % ProjectItem.length]

     async function goTo(id: number) {
          const encryptedId = await encryptId(String(id))
          navigate(`/project/${encryptedId}`)
     }

     return (
          <section className="flex items-center justify-center flex-col mt-24 mb-12">
               <div className="flex flex-col w-[90vw]">
                    <motion.div
                         variants={fadeUp}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true, amount: 0.3 }}
                         className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/10 pt-16"
                    >
                         {/* PREV */}
                         <motion.button
                              onClick={() => goTo(prevProject.id)}
                              whileHover="hover"
                              initial="rest"
                              animate="rest"
                              className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-white/10 p-6 text-start"
                         >
                              <motion.img
                                   variants={{ rest: { scale: 1 }, hover: { scale: 1.1 } }}
                                   transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                   src={prevProject.img[0]}
                                   alt={prevProject.name}
                                   className="h-20 w-28 shrink-0 rounded-xl object-cover"
                              />
                              <div className="flex flex-col gap-1">
                                   <span className="text-xs font-medium text-gray-500">← Previous</span>
                                   <motion.span
                                        variants={{ rest: { color: "#ffffff" }, hover: { color: "#a3e635" } }}
                                        className="text-lg font-semibold"
                                   >
                                        {prevProject.name}
                                   </motion.span>
                              </div>
                         </motion.button>

                         {/* NEXT */}
                         <motion.button
                              onClick={() => goTo(nextProject.id)}
                              whileHover="hover"
                              initial="rest"
                              animate="rest"
                              className="group relative flex items-center justify-start gap-5 overflow-hidden w-full rounded-2xl border border-white/10 p-6 text-end sm:flex-row-reverse"
                         >
                              <motion.img
                                   variants={{ rest: { scale: 1 }, hover: { scale: 1.1 } }}
                                   transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                   src={nextProject.img[0]}
                                   alt={nextProject.name}
                                   className="h-20 w-28 shrink-0 rounded-xl object-cover"
                              />
                              <div className="flex flex-col gap-1">
                                   <span className="text-xs font-medium text-gray-500">Next →</span>
                                   <motion.span
                                        variants={{ rest: { color: "#ffffff" }, hover: { color: "#a3e675" } }}
                                        className="text-lg font-semibold"
                                   >
                                        {nextProject.name}
                                   </motion.span>
                              </div>
                         </motion.button>
                    </motion.div>
               </div>
          </section>
     )
}