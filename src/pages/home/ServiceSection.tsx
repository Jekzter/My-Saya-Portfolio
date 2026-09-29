import { motion, type Variants } from "motion/react"

type Service = {
     number: string
     title: string
     description: string
}

const SERVICES: Service[] = [
     {
          number: "01",
          title: "Web Development",
          description: "I help UMKM business to establish a strong online presence with modern, responsive websites.",
     },
     {
          number: "02",
          title: "Mobile Development",
          description: "I help Startup to build scalable and efficient software solutions.",
     },
     {
          number: "03",
          title: "AI Integration",
          description: "I help businesses integrate AI technologies into their operations for enhanced efficiency and innovation.",
     },
     {
          number: "04",
          title: "Websites Application",
          description: "I help businesses create dynamic and user-friendly websites that drive engagement and conversions.",
     },
]

const container: Variants = {
     hidden: {},
     show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const fadeUp: Variants = {
     hidden: { opacity: 0, y: 40 },
     show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

export default function ServiceSection() {
     return (
          <section className="flex justify-center mt-16 sm:mt-24" id="services">
               <div className="w-[90vw]">
                    <motion.div
                         variants={container}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true, amount: 0.2 }}
                         className="flex flex-col-reverse gap-6 text-start sm:gap-8"
                    >
                         <motion.h2 variants={fadeUp} className="mb-2 text-4xl font-medium sm:text-6xl md:mb-4 md:text-7xl lg:text-8xl">
                              Selected Services
                         </motion.h2>
                         <motion.p variants={fadeUp} className="text-sm font-medium text-gray-700">
                              I help brands, startup, and teams turn ideas into digital solutions.
                         </motion.p>
                    </motion.div>

                    <motion.div
                         variants={container}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true, amount: 0.1 }}
                         className="mt-12 sm:mt-16 lg:mt-24"
                    >
                         <ul className="flex flex-col gap-6 sm:gap-8 lg:gap-12">
                              {SERVICES.map((service) => (
                                   <motion.li key={service.number} variants={fadeUp}>
                                        <motion.div
                                             initial="rest"
                                             whileHover="hover"
                                             animate="rest"
                                             className="relative overflow-hidden border-b-2 border-white py-6 cursor-pointer sm:py-8 lg:py-12"
                                        >
                                             {/* Background slide fill */}
                                             <motion.div
                                                  variants={{
                                                       rest: { scaleX: 0 },
                                                       hover: { scaleX: 1 },
                                                  }}
                                                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                                  style={{ originX: 0 }}
                                                  className="absolute inset-0 -mx-4 rounded-2xl bg-white/5 sm:-mx-6"
                                             />

                                             <div className="relative z-10 flex flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:px-6">
                                                  <div className="flex flex-row items-center gap-4 sm:gap-8 md:gap-16 lg:gap-32 xl:gap-52">
                                                       <motion.span
                                                            variants={{
                                                                 rest: { color: "rgba(255,255,255,0.4)" },
                                                                 hover: { color: "rgba(163,230,53,1)" },
                                                            }}
                                                            transition={{ duration: 0.3 }}
                                                            className="text-sm font-semibold"
                                                       >
                                                            {service.number}
                                                       </motion.span>

                                                       <motion.h3
                                                            variants={{
                                                                 rest: { x: 0 },
                                                                 hover: { x: 16 },
                                                            }}
                                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                                            className="text-2xl font-bold text-start sm:text-3xl lg:text-4xl"
                                                       >
                                                            {service.title}
                                                       </motion.h3>
                                                  </div>

                                                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
                                                       <motion.p
                                                            variants={{
                                                                 rest: { opacity: 0.7 },
                                                                 hover: { opacity: 1 },
                                                            }}
                                                            transition={{ duration: 0.3 }}
                                                            className="max-w-md text-start text-sm sm:text-end sm:text-base"
                                                       >
                                                            {service.description}
                                                       </motion.p>

                                                       <motion.span
                                                            variants={{
                                                                 rest: { opacity: 0, x: -10, rotate: -45 },
                                                                 hover: { opacity: 1, x: 0, rotate: 0 },
                                                            }}
                                                            transition={{ duration: 0.35, ease: "easeOut" }}
                                                            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-500 text-black sm:flex"
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
                                                       </motion.span>
                                                  </div>
                                             </div>
                                        </motion.div>
                                   </motion.li>
                              ))}
                         </ul>
                    </motion.div>
               </div>
          </section>
     )
}