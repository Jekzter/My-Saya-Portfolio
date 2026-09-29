import { Slider } from "../components/reusable"
import { motion } from "../lib/motion"

export const SliderServices = () => {
     return (
          <motion.section
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6, duration: 0.6 }}
               className="w-full pb-8"
          >
               <Slider
                    className="flex h-fit w-full -rotate-1 items-center overflow-hidden self-end bg-lime-900 text-sm font-medium text-lime-50 sm:h-[6vh] sm:text-lg lg:rotate-1 lg:text-xl"
                    Item={[
                         "Software Solutions",
                         "Digitalization",
                         "Custom Software",
                         "E-commerce",
                         "Mobile Apps",
                         "Web Development",
                    ]}
               />
          </motion.section>
     )
}