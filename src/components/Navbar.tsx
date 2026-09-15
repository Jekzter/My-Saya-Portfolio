// import BrandLogo from "/public/assets/images/brand-logo.png";
import { motion } from "../lib/motion";

const Navbar = () => {
    return (
        <motion.nav className="w-full flex items-center justify-center py-4 z-99" variants={navbarVariants} initial="offscreen" whileInView="onscreen">
            <div className="w-[90vw]  flex items-center justify-between">
                <div className="flex items-center justify-center">
                    <h2 className="italianno text-2xl font-bold italic"><span className="text-gray-300">Jaki</span>Dev<span className="text-lime-900">.</span></h2>
                </div>

                {
                    /* <ul className="flex flex-row space-x-8 text-lg font-medium uppercase">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Projects</li>
                        <li className="cursor-pointer">Contact</li>
                        <li className="cursor-pointer">Resume</li>
                    </ul> */
                }

                <div className="flex items-center justify-center gap-4">
                    <button className="font-medium px-8 py-2 flex gap-2 items-center bg-lime-900">Let's Talk <i className="ri-chat-3-line"></i></button>
                    <button className="p-2 w-14 h-14 rounded-full cursor-pointer hover:scale-95">
                        <i className="ri-menu-4-line text-xl font-bold"></i>
                    </button>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar;

const navbarVariants: any = {
    offscreen: {
        y: -10,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 2,
        }
    }
}