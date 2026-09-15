import { Avatar } from "../constants/images"
import Slider from "../components/reusable/Slider";
import { motion } from "../lib/motion";
// import { useYScrollTransformDown } from "../helper/ScrollTransform";

const HomeSection = () => {

    // const { ySection } = useYScrollTransformDown();

    return (
        <>
            <motion.section className="flex items-center justify-center h-[90vh] flex-col gap-12 z-[-99]" id="home-section"
            // initial="offscreen" whileInView="onscreen" style={{ y: ySection }}
            >
                <div className="flex flex-col w-full h-full justify-between items-center">
                    <div className="flex justify-center items-center flex-col h-full gap-24">
                        <div className="w-[90vw] flex justify-between">
                            <div className="text-start z-99 w-full flex flex-row items-center">
                                <div className="flex flex-col-reverse gap-8">
                                    <h1 className="text-8xl font-bold mb-4 w-full">Technology isn't an expense—<span className="text-gray-400">it’s an investment in efficiency</span></h1>

                                    <span className="text-lime-900 font-semibold italic">{"<Quotes of the year>"}</span>
                                </div>
                                <div className="flex flex-col gap-2 w-full justify-center">
                                    <img src={Avatar} alt="Avatar" className="w-[60%]" />
                                    <h3 className="text-xl text-start"><span className="text-lime-900">// </span>Mochamad Zacky Fachrur Azizi</h3>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 items-start justify-between w-[90vw]">
                            <div className="text-start flex flex-col gap-1 w-full">
                                <ul className="flex flex-row gap-6">
                                    <li className="font-semibold text-gray-400"><span>/ </span> WhatsApp</li>
                                    <li className="font-semibold text-gray-400"><span>/ </span> LinkedIn</li>
                                    <li className="font-semibold text-gray-400"><span>/ </span> Github</li>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center text-start items-start gap-4 font-medium">
                                <h3 className="text-lime-800">{"<"}About Me {">"}</h3>
                                <p className="text-justify">I'am a Developer & UI Designer, Experienced in web, desktop, and mobile application development, with over 2 year of experience and involvement in several IT projects. Able to adapt quickly in both team and individual work environments.</p>
                            </div>
                        </div>
                    </div>
                    <motion.div className="w-full">
                        <Slider className="w-full rotate-1 text-xl self-end pl-5 bg-lime-900 h-[6vh] flex justify-center items-center" Item={["Software Solutions", "Digitalization", "Custom Software", "E-commerce", "Mobile Apps", "Web Development"]} />
                    </motion.div>
                </div>
            </motion.section>

        </>
    );
}

export default HomeSection;

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
