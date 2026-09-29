import { EnvelopeOpen, Whatsapp, Github, Linkedin, Send } from "@boxicons/react"
import { motion, type Variants } from "motion/react"
import { useState } from "react"

const quickLinks = ["Introduction", "Services", "Project", "Contact"]

const services = ["Web Development", "UI/UX Design", "Mobile App", "Consulting"]

const contacts = [
     { icon: EnvelopeOpen, label: "mochzackyfa@gmail.com", href: "mailto:mochzackyfa@gmail.com" },
     { icon: Whatsapp, label: "+62 877-0357-7988", href: "https://wa.me/6287703577988" },
]

const socials = [
     { icon: Github, href: "https://github.com/jekzter", label: "Github" },
     { icon: Linkedin, href: "https://linkedin.com/in/mzackyfa", label: "LinkedIn" },
]

const legalLinks = ["Privacy Policy", "Terms of Service"]

const containerVariants: Variants = {
     hidden: {},
     show: {
          transition: { staggerChildren: 0.1, delayChildren: 0.1 },
     },
}

const itemVariants: Variants = {
     hidden: { opacity: 0, y: 20 },
     show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
     },
}

export function Footer() {
     const [email, setEmail] = useState("")
     const [subscribed, setSubscribed] = useState(false)

     const handleSubscribe = (e: React.FormEvent) => {
          e.preventDefault()
          if (!email) return
          setSubscribed(true)
          setEmail("")
          setTimeout(() => setSubscribed(false), 3000)
     }

     return (
          <footer className="relative mt-8 overflow-hidden bg-linear-to-b from-lime-950 via-lime-900 to-lime-950 pb-12 sm:pb-16" id="contact">
               {/* Decorative glow blobs (footer content area) */}
               <motion.div
                    className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-lime-500/20 blur-3xl sm:h-72 sm:w-72"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               />
               <motion.div
                    className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-lime-400/10 blur-3xl sm:h-72 sm:w-72"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               />

               {/* ===================== CTA SECTION ===================== */}
               <div className="relative overflow-hidden px-4 py-16 sm:py-20 md:py-28">
                    {/* Drifting cloud-like blobs */}
                    <motion.div
                         aria-hidden
                         className="pointer-events-none absolute left-1/4 top-0 h-48 w-48 rounded-full bg-lime-300/10 blur-3xl sm:h-80 sm:w-80"
                         animate={{ x: [0, 60, 0], y: [0, 20, 0] }}
                         transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                         aria-hidden
                         className="pointer-events-none absolute right-1/4 bottom-0 h-56 w-56 rounded-full bg-lime-500/10 blur-3xl sm:h-96 sm:w-96"
                         animate={{ x: [0, -50, 0], y: [0, -25, 0] }}
                         transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    />

                    <motion.div
                         variants={containerVariants}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true, amount: 0.15 }}
                         className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
                    >
                         {/* Availability badge */}
                         <motion.div
                              variants={itemVariants}
                              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-gray-300 backdrop-blur-sm sm:mb-6 sm:px-4 sm:text-xs"
                         >
                              <span className="relative flex h-2 w-2">
                                   <motion.span
                                        className="absolute inline-flex h-full w-full rounded-full bg-lime-400"
                                        animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                                   />
                                   <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
                              </span>
                              Available for New Project
                         </motion.div>

                         {/* Big heading */}
                         <motion.h2
                              variants={itemVariants}
                              className="text-2xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
                         >
                              Have a project in{" "}
                              <span className="bg-linear-to-r from-lime-300 to-lime-500 bg-clip-text text-transparent">
                                   mind?
                              </span>
                         </motion.h2>

                         <motion.p variants={itemVariants} className="mt-3 max-w-xl text-xs text-gray-400 sm:mt-4 sm:text-sm md:text-base">
                              Together, we can create something clear and impactful. Let's collaborate to bring our
                              ideas to life in a way that resonates with everyone.
                         </motion.p>

                         {/* Contact Me button */}
                         <motion.a
                              variants={itemVariants}
                              href="mailto:mochzackyfa@gmail.com"
                              whileHover="hover"
                              whileTap={{ scale: 0.96 }}
                              className="group relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-lime-400 px-5 py-2.5 text-xs font-semibold text-lime-950 sm:mt-8 sm:px-6 sm:py-3 sm:text-sm"
                         >
                              <motion.span
                                   variants={{ hover: { scale: 20 } }}
                                   transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                   className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30"
                              />
                              <span className="relative z-10">Contact Me</span>
                              <motion.span
                                   variants={{ hover: { x: 3, y: -3 } }}
                                   transition={{ duration: 0.25, ease: "easeOut" }}
                                   className="relative z-10"
                              >
                                   ↗
                              </motion.span>
                         </motion.a>

                         {/* Pills row: avatar + socials */}
                         <motion.div
                              variants={containerVariants}
                              className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-3"
                         >
                              <motion.div
                                   variants={itemVariants}
                                   whileHover={{ y: -3 }}
                                   className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-3 text-[11px] font-medium text-gray-200 backdrop-blur-sm sm:pr-4 sm:text-xs"
                              >
                                   <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400 text-[10px] font-bold text-lime-950">
                                        JD
                                   </span>
                                   Jaki Dev
                              </motion.div>

                              {socials.map(({ icon: Icon, href, label }) => (
                                   <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variants={itemVariants}
                                        whileHover={{ y: -3, borderColor: "rgba(163,230,53,0.5)" }}
                                        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-gray-300 backdrop-blur-sm transition-colors hover:text-lime-300 sm:px-4 sm:text-xs"
                                   >
                                        <Icon size="xs" pack="filled" />
                                        {label}
                                   </motion.a>
                              ))}
                         </motion.div>
                    </motion.div>
               </div>
               {/* ===================== END CTA SECTION ===================== */}

               <div className="relative z-10 flex flex-col items-center justify-center px-4">
                    {/* Big brand title */}
                    <motion.h2
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, amount: 0.3 }}
                         transition={{ duration: 0.7, ease: "easeOut" }}
                         className="italianno text-[3.5rem] font-bold italic leading-none sm:text-[6rem] md:text-[8rem] lg:text-[10rem]"
                    >
                         <span className="bg-linear-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                              Jaki
                         </span>
                         <span className="bg-linear-to-r from-lime-300 to-lime-500 bg-clip-text text-transparent">
                              Dev
                         </span>
                         <span className="text-lime-700">.</span>
                    </motion.h2>

                    {/* FOOTER CONTENT CONTAINER */}
                    <motion.div
                         variants={containerVariants}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true, amount: 0.1 }}
                         className="mt-6 grid w-full max-w-7xl grid-cols-1 gap-8 rounded-2xl border border-white/10 bg-white/5 px-5 py-8 backdrop-blur-md sm:grid-cols-2 sm:gap-10 sm:px-8 lg:grid-cols-5 lg:gap-6 lg:px-12"
                    >
                         {/* ABOUT / BRAND */}
                         <motion.div variants={itemVariants} className="flex flex-col text-start sm:col-span-2 lg:col-span-2">
                              <h3 className="text-lg font-semibold text-white sm:text-xl">JakiDev</h3>
                              <p className="py-2 text-sm font-medium text-gray-400 sm:text-base">
                                   Thank you for visiting this portfolio website. Connect with me on
                                   LinkedIn, Github and Others.
                              </p>

                              {/* Social icons */}
                              <div className="mt-3 flex gap-3">
                                   {socials.map(({ icon: Icon, href, label }) => (
                                        <motion.a
                                             key={label}
                                             href={href}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             aria-label={label}
                                             whileHover={{ y: -4, scale: 1.1, backgroundColor: "#a3e635" }}
                                             whileTap={{ scale: 0.95 }}
                                             transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                             className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-800/60 text-gray-200 hover:text-lime-950 sm:h-10 sm:w-10"
                                        >
                                             <Icon size="sm" pack="filled" />
                                        </motion.a>
                                   ))}
                              </div>
                         </motion.div>

                         {/* QUICK LINKS */}
                         <motion.div variants={itemVariants} className="flex flex-col text-start">
                              <h3 className="text-lg font-semibold text-white sm:text-xl">Quick Links</h3>
                              <ul className="flex flex-col gap-1 py-2 text-sm font-medium text-gray-400 sm:text-base">
                                   {quickLinks.map((link) => (
                                        <motion.li
                                             key={link}
                                             whileHover={{ x: 6, color: "#a3e635" }}
                                             transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                             className="w-fit cursor-pointer transition-colors"
                                        >
                                             {link}
                                        </motion.li>
                                   ))}
                              </ul>
                         </motion.div>

                         {/* SERVICES */}
                         <motion.div variants={itemVariants} className="flex flex-col text-start">
                              <h3 className="text-lg font-semibold text-white sm:text-xl">Services</h3>
                              <ul className="flex flex-col gap-1 py-2 text-sm font-medium text-gray-400 sm:text-base">
                                   {services.map((service) => (
                                        <motion.li
                                             key={service}
                                             whileHover={{ x: 6, color: "#a3e635" }}
                                             transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                             className="w-fit cursor-pointer transition-colors"
                                        >
                                             {service}
                                        </motion.li>
                                   ))}
                              </ul>
                         </motion.div>

                         {/* CONTACT + NEWSLETTER */}
                         <motion.div variants={itemVariants} className="flex flex-col text-start sm:col-span-2 lg:col-span-1">
                              <h3 className="text-lg font-semibold text-white sm:text-xl">Contact</h3>
                              <ul className="flex flex-col gap-2 py-2 text-sm font-medium text-gray-400 sm:text-base">
                                   {contacts.map(({ icon: Icon, label, href }) => (
                                        <li key={label}>
                                             <motion.a
                                                  href={href}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  whileHover={{ x: 6, color: "#a3e635" }}
                                                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                  className="flex w-fit flex-row items-center gap-2 break-all transition-colors"
                                             >
                                                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-800/50">
                                                       <Icon size="xs" pack="filled" />
                                                  </span>
                                                  {label}
                                             </motion.a>
                                        </li>
                                   ))}
                              </ul>

                              {/* Newsletter */}
                              <form onSubmit={handleSubscribe} className="mt-2 flex flex-col gap-2">
                                   <p className="text-sm font-medium text-gray-400">Subscribe to updates</p>
                                   <div className="flex overflow-hidden rounded-full border border-white/10 bg-black/20">
                                        <input
                                             type="email"
                                             value={email}
                                             onChange={(e) => setEmail(e.target.value)}
                                             placeholder="Your email"
                                             className="w-full min-w-0 bg-transparent px-4 py-2 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none"
                                        />
                                        <motion.button
                                             type="submit"
                                             whileHover={{ backgroundColor: "#a3e635" }}
                                             whileTap={{ scale: 0.9 }}
                                             className="flex shrink-0 items-center justify-center px-4 text-gray-200 hover:text-lime-950"
                                        >
                                             <Send size="sm" pack="filled" />
                                        </motion.button>
                                   </div>
                                   {subscribed && (
                                        <motion.p
                                             initial={{ opacity: 0, y: -5 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             className="text-xs text-lime-400"
                                        >
                                             Thanks for subscribing! 🎉
                                        </motion.p>
                                   )}
                              </form>
                         </motion.div>
                    </motion.div>

                    {/* Bottom bar */}
                    <motion.div
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         viewport={{ once: true, amount: 0.5 }}
                         transition={{ duration: 0.6, delay: 0.4 }}
                         className="mt-8 flex w-full max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:text-sm"
                    >
                         <p>© {new Date().getFullYear()} JakiDev. All rights reserved.</p>
                         <div className="flex gap-4">
                              {legalLinks.map((link) => (
                                   <motion.span
                                        key={link}
                                        whileHover={{ color: "#a3e635" }}
                                        className="cursor-pointer transition-colors"
                                   >
                                        {link}
                                   </motion.span>
                              ))}
                         </div>
                    </motion.div>
               </div>
          </footer>
     )
}