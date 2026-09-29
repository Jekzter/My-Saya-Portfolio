import { Whatsapp, Linkedin, Github } from "@boxicons/react"
import { Avatar } from "../../constants/images"
import { motion, type Variants } from "../../lib/motion"
// import { useYScrollTransformDown } from "../helper/ScrollTransform";

const container: Variants = {
     hidden: {},
     show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const fadeUp: Variants = {
     hidden: { opacity: 0, y: 24 },
     show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const socials = [
     { icon: Whatsapp, label: "WhatsApp", href: "https://wa.me/6287703577988" },
     { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/mzackyfa" },
     { icon: Github, label: "Github", href: "https://github.com/jekzter" },
]

const HomeSection = () => {
     // const { ySection } = useYScrollTransformDown();

     return (
          <>
               <motion.section
                    className="relative z-[-99] flex min-h-dvh flex-col items-center justify-center gap-8 overflow-hidden sm:gap-12 sm:py-24 lg:h-[90vh] lg:min-h-0 lg:py-0"
                    id="about"
               // initial="offscreen" whileInView="onscreen" style={{ y: ySection }}
               >
                    {/* Ambient glow background */}
                    <motion.div
                         aria-hidden
                         className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-lime-500/10 blur-3xl sm:h-80 sm:w-80"
                         animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
                         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                         aria-hidden
                         className="pointer-events-none absolute -right-20 bottom-20 h-56 w-56 rounded-full bg-lime-400/10 blur-3xl sm:h-96 sm:w-96"
                         animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
                         transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    />

                    <div className="flex h-full w-full flex-col items-center justify-between gap-16 lg:gap-0">
                         <motion.div
                              variants={container}
                              initial="hidden"
                              animate="show"
                              className="flex h-full flex-col items-center justify-center gap-12 lg:gap-24"
                         >
                              {/* HEADLINE + AVATAR */}
                              <div className="relative flex w-[90vw] flex-col justify-between gap-10 lg:flex-row lg:items-center">
                                   <div className="z-10 flex w-full flex-col text-start lg:flex-row lg:justify-between lg:items-center">
                                        <div className="flex w-full flex-col-reverse gap-4 sm:gap-6 lg:gap-8">
                                             {/* Availability badge */}
                                             <motion.div
                                                  variants={fadeUp}
                                                  className="mb-1 inline-flex w-fit items-center gap-2 rounded-full border border-lime-500/20 bg-lime-500/5 px-3 py-1.5 text-[11px] font-medium text-lime-700 backdrop-blur-sm sm:text-xs lg:text-lime-800"
                                             >
                                                  <span className="relative flex h-2 w-2">
                                                       <motion.span
                                                            className="absolute inline-flex h-full w-full rounded-full bg-lime-600 lg:bg-lime-800"
                                                            animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                                                            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                                                       />
                                                       <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-600 lg:bg-lime-800" />
                                                  </span>
                                                  Available for New Project
                                             </motion.div>

                                             <motion.h1
                                                  variants={fadeUp}
                                                  className="mb-2 w-full text-3xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:mb-4 lg:text-8xl"
                                             >
                                                  Technology isn't an expense—
                                                  <span className="bg-linear-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent">
                                                       it's an investment in efficiency
                                                  </span>
                                             </motion.h1>

                                             <motion.span
                                                  variants={fadeUp}
                                                  className="text-sm font-semibold italic text-lime-700 sm:text-base lg:text-lg lg:text-lime-900"
                                             >
                                                  {"<Quotes of the year>"}
                                             </motion.span>
                                        </div>

                                        <motion.div
                                             variants={fadeUp}
                                             className="mt-8 flex w-fit flex-col justify-center items-center gap-3 lg:mt-0 lg:items-center lg:justify-end"
                                        >
                                             {/* Avatar with glow ring */}
                                             <div className="relative flex justify-center items-center">
                                                  <img
                                                       src={Avatar}
                                                       alt="Avatar"
                                                       className="self-center max-w-72 border border-white/10 lg:w-[50%] lg:max-w-none"
                                                  />
                                             </div>
                                             <h3 className="text-center text-base sm:text-lg lg:text-start lg:text-xl">
                                                  <span className="text-lime-700 lg:text-lime-900">{"// "}</span>
                                                  Mochamad Zacky Fachrur Azizi
                                             </h3>
                                        </motion.div>
                                   </div>
                              </div>

                              {/* LINKS + ABOUT */}
                              <motion.div
                                   variants={fadeUp}
                                   className="grid w-[90vw] grid-cols-1 items-start justify-between gap-8 sm:gap-10 lg:grid-cols-2"
                              >
                                   <div className="flex w-full flex-col gap-3 text-start">
                                        <div className="flex flex-row flex-wrap gap-2.5 sm:gap-3">
                                             {socials.map(({ icon: Icon, label, href }) => (
                                                  <motion.a
                                                       key={label}
                                                       href={href}
                                                       target="_blank"
                                                       rel="noopener noreferrer"
                                                       whileHover={{ y: -3, borderColor: "rgba(163,230,53,0.5)" }}
                                                       whileTap={{ scale: 0.96 }}
                                                       className="flex items-center gap-1.5 rounded-full border border-black/10 bg-black/5 px-3.5 py-1.5 text-xs font-semibold text-gray-500 backdrop-blur-sm transition-colors hover:text-lime-800 sm:text-sm lg:border-white/10 lg:bg-white/5 lg:text-gray-400 lg:hover:text-lime-600"
                                                  >
                                                       <Icon size="xs" pack="filled" />
                                                       {label}
                                                  </motion.a>
                                             ))}
                                        </div>
                                   </div>
                                   <div className="flex w-full flex-col items-start justify-center gap-3 text-start font-medium">
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-lime-700 lg:text-lime-800">
                                             {"<"}About Me{">"}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-justify text-gray-500 sm:text-base lg:text-gray-400">
                                             I'am a Developer & UI Designer, Experienced in web, desktop, and mobile
                                             application development, with over 2 year of experience and involvement
                                             in several IT projects. Able to adapt quickly in both team and individual
                                             work environments.
                                        </p>
                                   </div>
                              </motion.div>
                         </motion.div>

                    </div>
               </motion.section>
          </>
     )
}

export default HomeSection

// const sectionVariants: any = {
//     offscreen: {
//         x: 100,
//         opacity: 0,
//     },
//     onscreen: {
//         x: 0,
//         opacity: 1,
//         transition: {
//             type: "spring",
//             duration: 2,
//         },
//     }
// };