import { motion, type Variants } from "motion/react"
import { useNavigate } from "react-router"
import { ProjectItem } from "../../constants"
import { encryptId } from "../../helper"

const container: Variants = {
     hidden: {},
     show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const fadeUp: Variants = {
     hidden: { opacity: 0, y: 32 },
     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

type RelatedProjectsProps = {
     currentId: number
     limit?: number
}

export default function RelatedProjects({ currentId, limit = 3 }: RelatedProjectsProps) {
     const navigate = useNavigate()

     const currentIndex = ProjectItem.findIndex((p) => p.id === currentId)
     const total = ProjectItem.length

     // Ambil `limit` project berikutnya setelah currentId, berputar dari awal kalau habis
     const otherProjects = Array.from({ length: Math.min(limit, total - 1) }).map((_, i) => {
          const index = (currentIndex + i + 1) % total
          return ProjectItem[index]
     })

     async function handleProjectClick(id: string) {
          const encryptedId = await encryptId(id)
          navigate(`/project/${encryptedId}`)
     }

     if (otherProjects.length === 0) return null


     return (
          <section className="flex items-center justify-center flex-col gap-12 mt-24 mb-24">
               <div className="flex flex-col w-[90vw]">
                    {/* HEADING */}
                    <motion.div
                         initial={{ opacity: 0, y: 24 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, amount: 0.3 }}
                         transition={{ duration: 0.6, ease: "easeOut" }}
                         className="flex flex-col-reverse gap-4 text-start"
                    >
                         <h2 className="text-4xl font-medium">More Projects</h2>
                         <p className="text-sm font-medium text-gray-500">
                              Explore other work I've built recently.
                         </p>
                    </motion.div>

                    {/* GRID */}
                    <motion.div
                         variants={container}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true, amount: 0.1 }}
                         className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                         {otherProjects.map((project) => (
                              <motion.div
                                   key={project.id}
                                   variants={fadeUp}
                                   whileHover="hover"
                                   initial="rest"
                                   animate="rest"
                                   onClick={() => handleProjectClick(String(project.id))}
                                   className="group flex flex-col gap-4 cursor-pointer"
                              >
                                   {/* IMAGE */}
                                   <div className="relative w-full overflow-hidden rounded-xl">
                                        <motion.img
                                             src={project.img[0]}
                                             alt={`${project.name} Project`}
                                             variants={{
                                                  rest: { scale: 1 },
                                                  hover: { scale: 1.08 },
                                             }}
                                             transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                             className="w-full aspect-4/3 object-cover"
                                        />

                                        {/* Overlay arrow button */}
                                        <motion.div
                                             variants={{
                                                  rest: { opacity: 0, scale: 0.8 },
                                                  hover: { opacity: 1, scale: 1 },
                                             }}
                                             transition={{ duration: 0.3, ease: "easeOut" }}
                                             className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-lime-400 text-lime-950"
                                        >
                                             <svg
                                                  viewBox="0 0 24 24"
                                                  className="h-4 w-4"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="2.5"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                             >
                                                  <path d="M7 17L17 7M7 7h10v10" />
                                             </svg>
                                        </motion.div>
                                   </div>

                                   {/* CONTENT */}
                                   <div className="flex flex-col gap-2 text-start">
                                        <div className="flex flex-wrap gap-2">
                                             {project.category.slice(0, 2).map((cat) => (
                                                  <span
                                                       key={cat}
                                                       className="bg-lime-800 text-white text-xs font-bold px-3 py-1 shrink-0"
                                                  >
                                                       {cat}
                                                  </span>
                                             ))}
                                        </div>

                                        <motion.h3
                                             variants={{
                                                  rest: { x: 0, color: "#ffffff" },
                                                  hover: { x: 6, color: "#a3e635" },
                                             }}
                                             transition={{ duration: 0.3, ease: "easeOut" }}
                                             className="text-xl font-semibold"
                                        >
                                             {project.name}
                                        </motion.h3>

                                        <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                                   </div>
                              </motion.div>
                         ))}
                    </motion.div>
               </div>
          </section>
     )
}