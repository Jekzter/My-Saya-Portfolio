import { motion, type Variants } from "motion/react"
import { ProjectItem } from "../../constants"
import { ScrollContainer } from "../../components/reusable"
import { useNavigate } from "react-router"
import { encryptId } from "../../helper"

const container: Variants = {
     hidden: {},
     show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const fadeUp: Variants = {
     hidden: { opacity: 0, y: 32 },
     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const ProjectSection = () => {
     const navigate = useNavigate()

     async function handleProjectClick(id: string) {
          try {
               const encryptedId = await encryptId(id)
               navigate(`/project/${encryptedId}`)
          } catch (err) {
               console.error("Gagal navigasi ke project:", err)
          }
     }

     return (
          <section className="flex flex-col items-center justify-center gap-12 mt-12" id="project">
               <div className="flex flex-col w-[90vw] mt-16 sm:mt-24">
                    <motion.div
                         variants={container}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true, amount: 0.2 }}
                         className="flex flex-col-reverse gap-6 text-start sm:gap-8"
                    >
                         <motion.h2 variants={fadeUp} className="mb-2 text-3xl font-medium sm:text-4xl md:mb-4 md:text-5xl">
                              Recent already projects
                         </motion.h2>
                         <motion.p variants={fadeUp} className="text-sm font-medium text-gray-700">
                              We move forward with a focus on innovation and excellence.
                         </motion.p>
                    </motion.div>

                    {/* ------------- CONTAINER */}
                    <motion.div
                         variants={container}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true, amount: 0.1 }}
                         className="mt-12 grid grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:mt-24 lg:grid-cols-3 lg:gap-12"
                    >
                         {/* ----------- CARD ITEMS */}
                         {ProjectItem.map((project, index) => (
                              <motion.div
                                   variants={fadeUp}
                                   whileHover="hover"
                                   initial="rest"
                                   animate="rest"
                                   whileTap={{ scale: 0.98 }}
                                   className="relative z-0 flex cursor-pointer touch-manipulation flex-col items-start gap-4"
                                   key={index}
                                   onClick={() => handleProjectClick(String(project.id))}
                              >
                                   {/* Invisible full-card click layer — memastikan seluruh area card
                                        selalu bisa ditap, tidak peduli elemen anak mana yang tertimpa */}
                                   <span className="absolute inset-0 z-10" aria-hidden="true" />

                                   <div className="relative z-0 w-full overflow-hidden rounded-xl">
                                        <motion.img
                                             src={project?.img[0]}
                                             alt={`${project?.name} Project`}
                                             variants={{
                                                  rest: { scale: 1 },
                                                  hover: { scale: 1.08 },
                                             }}
                                             transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                             className="aspect-4/3 w-full object-cover"
                                        />
                                   </div>

                                   <div className="relative z-0 flex w-full flex-col items-start justify-start gap-2">
                                        <div className="flex w-full flex-col-reverse items-start justify-between gap-2">
                                             <motion.h3
                                                  variants={{
                                                       rest: { x: 0, color: "#ffffff" },
                                                       hover: { x: 6, color: "#a3e635" },
                                                  }}
                                                  transition={{ duration: 0.3, ease: "easeOut" }}
                                                  className="mt-1 text-lg sm:text-xl"
                                             >
                                                  {project?.name}
                                             </motion.h3>

                                             <ScrollContainer className="relative z-20 flex w-full flex-row gap-2 text-xs font-bold text-gray-400 sm:text-sm">
                                                  {project?.category.map((category, catIndex) => (
                                                       <span className="shrink-0 bg-lime-800 px-3 py-1 text-white sm:px-4" key={catIndex}>
                                                            {category}
                                                       </span>
                                                  ))}
                                             </ScrollContainer>
                                        </div>
                                        <p className="text-start text-sm text-gray-400 sm:text-base">{project?.description}</p>
                                   </div>

                                   <motion.button
                                        onClick={(e) => {
                                             e.stopPropagation()
                                             handleProjectClick(String(project.id))
                                        }}
                                        className="group relative z-20 inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-gray-200 sm:text-base"
                                   >
                                        / see project
                                        <motion.span
                                             variants={{
                                                  rest: { x: 0, opacity: 0.6 },
                                                  hover: { x: 4, opacity: 1 },
                                             }}
                                             transition={{ duration: 0.3, ease: "easeOut" }}
                                        >
                                             →
                                        </motion.span>
                                   </motion.button>
                              </motion.div>
                         ))}
                         {/* ----------- END CARD ITEMS */}
                    </motion.div>
                    {/* ------------- END CONTAINER */}
               </div>
          </section>
     )
}

export default ProjectSection