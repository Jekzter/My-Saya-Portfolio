import { useState } from "react"
import { ProjectItem } from "../../constants"
import { useScroll, useTransform, motion, AnimatePresence } from "motion/react"

export default function HeroSection({ id }: { id: number }) {
     const { scrollYProgress } = useScroll()
     const y = useTransform(scrollYProgress, [0, 1], [0, 150])

     const filteredData = ProjectItem.find((idOfData) => idOfData.id === id)
     const [activeIndex, setActiveIndex] = useState(0)

     const totalProjects = ProjectItem.length
     const currentPosition = String(id).padStart(2, "0")
     const total = String(totalProjects).padStart(2, "0")

     if (!filteredData) return null

     return (
          <div className="flex flex-col items-center justify-center px-4 sm:px-6">
               <div className="flex w-full max-w-7xl flex-col">

                    {/* TITLE PROJECT */}
                    <div className="flex flex-col gap-4 py-8 items-end sm:flex-row sm:items-end sm:justify-between sm:py-12">
                         <div className="flex flex-col gap-1 text-start">
                              <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                                   / project /
                              </span>
                              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                                   {filteredData.name}
                              </h2>
                         </div>
                         <span className="text-sm font-medium tabular-nums text-gray-500">
                              {currentPosition} / {total}
                         </span>
                    </div>
                    {/* END TITLE PROJECT */}

                    {/* HERO IMAGES */}
                    <motion.div
                         className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/40"
                         style={{ y }}
                    >
                         <div className="relative aspect-4/3 w-full sm:aspect-video">
                              <AnimatePresence mode="wait">
                                   <motion.img
                                        key={activeIndex}
                                        src={filteredData.img[activeIndex]}
                                        alt={`${filteredData.name} preview ${activeIndex + 1}`}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.96 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute inset-0 h-full w-full object-cover"
                                   />
                              </AnimatePresence>

                              {/* Subtle gradient for depth */}
                              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                         </div>
                    </motion.div>
                    {/* END HERO IMAGES */}

                    {/* THUMBNAIL LIST */}
                    <div className="mt-4 flex flex-col gap-3 sm:mt-6">
                         <div className="flex snap-x gap-3 overflow-x-auto pb-2 sm:gap-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                              {filteredData.img.map((img, index) => (
                                   <motion.button
                                        key={index}
                                        type="button"
                                        onClick={() => setActiveIndex(index)}
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.96 }}
                                        className={`relative shrink-0 snap-start overflow-hidden rounded-lg sm:rounded-xl border-2 transition-colors duration-300 ${
                                             activeIndex === index
                                                  ? "border-lime-500"
                                                  : "border-transparent opacity-50 hover:opacity-90"
                                        }`}
                                   >
                                        <img
                                             src={img}
                                             className="h-14 w-20 object-cover sm:h-20 sm:w-28"
                                             alt={`Thumbnail ${index + 1}`}
                                        />
                                   </motion.button>
                              ))}
                         </div>

                         {/* Progress dots (mobile-friendly indicator) */}
                         <div className="flex items-center gap-1.5">
                              {filteredData.img.map((_, index) => (
                                   <motion.span
                                        key={index}
                                        animate={{
                                             width: activeIndex === index ? 20 : 6,
                                             backgroundColor: activeIndex === index ? "#a3e635" : "rgba(255,255,255,0.2)",
                                        }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="h-1.5 rounded-full"
                                   />
                              ))}
                         </div>
                    </div>
                    {/* END THUMBNAIL LIST */}
               </div>
          </div>
     )
}