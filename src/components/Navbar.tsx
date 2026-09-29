// import BrandLogo from "/public/assets/images/brand-logo.png";
import { useEffect, useState } from "react";
import { motion } from "../lib/motion";
import { useLocation, useNavigate } from "react-router";

// Each path must match the id of a section on the home page,
// e.g. <section id="about">...</section>
const navLinks = [
    { label: "About", path: "#about" },
    { label: "Services", path: "#services" },
    { label: "Experiences", path: "#experiences" },
    { label: "Project", path: "#project" },
    { label: "Contact", path: "#contact" },
];

export function Navbar() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);

    // Smooth-scroll to a section id (or to the top when no hash is given).
    // The short delay lets the menu close and the page scroll-lock release first.
    const goTo = (hash?: string) => {
        setOpen(false);

        const scroll = () => {
            if (!hash) {
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
            }
            document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.replaceState(null, "", hash); // keep the URL in sync
        };

        if (pathname !== "/") {
            // Coming from another page: go home first, then scroll once it has rendered
            navigate("/");
            setTimeout(scroll, 150);
        } else {
            setTimeout(scroll, 60);
        }
    };

    // Close with Esc + lock page scroll while the menu is open
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [open]);

    return (
        <motion.nav
            className="relative w-full flex items-center justify-center py-3 sm:py-4 z-99"
            variants={navbarVariants}
            initial="offscreen"
            whileInView="onscreen"
        >
            <div className="w-[90vw] flex items-center justify-between">
                <button
                    onClick={() => goTo()}
                    aria-label="Back to top"
                    className="flex items-center justify-center cursor-pointer"
                >
                    <h2 className="italianno text-xl sm:text-2xl font-bold italic">
                        <span className="text-gray-300">Jaki</span>Dev
                        <span className="text-lime-900">.</span>
                    </h2>
                </button>

                <div className="flex items-center justify-center gap-2 sm:gap-4">
                    {/* Hidden on phones — it lives inside the menu panel there */}
                    <button
                        onClick={() => goTo("#contact")}
                        className="hidden sm:flex font-medium px-5 lg:px-8 py-2 gap-2 items-center bg-lime-900 cursor-pointer"
                    >
                        Let's Talk <i className="ri-chat-3-line"></i>
                    </button>

                    <button
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        className="w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center rounded-full cursor-pointer hover:scale-95 transition-transform"
                    >
                        <i className={`${open ? "ri-close-line" : "ri-menu-4-line"} text-xl font-bold`}></i>
                    </button>
                </div>
            </div>

            {/* Click-outside backdrop */}
            <button
                tabIndex={-1}
                aria-hidden="true"
                onClick={() => setOpen(false)}
                className={`fixed inset-0 -z-10 bg-black/50 backdrop-blur-sm transition-opacity duration-300
                    ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            />

            {/* Menu panel: full-width dropdown on phones, compact card on larger screens */}
            <div
                id="mobile-menu"
                className={`absolute top-full inset-x-[5vw] sm:inset-x-auto sm:right-[5vw] sm:w-72
                    rounded-2xl border border-white/10 bg-neutral-900/95 p-3 backdrop-blur-md
                    transition-all duration-300 origin-top
                    ${open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible pointer-events-none"}`}
            >
                <ul className="flex flex-col">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <a
                                href={link.path}
                                onClick={(e) => {
                                    e.preventDefault();
                                    goTo(link.path);
                                }}
                                className="block w-full text-left px-4 py-3 rounded-xl text-lg font-medium cursor-pointer hover:bg-white/10 transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Phones only: the CTA that is hidden in the bar */}
                <button
                    onClick={() => goTo("#contact")}
                    className="sm:hidden mt-2 w-full font-medium px-8 py-3 flex gap-2 items-center justify-center bg-lime-900 cursor-pointer"
                >
                    Let's Talk <i className="ri-chat-3-line"></i>
                </button>
            </div>
        </motion.nav>
    );
}

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
        },
    },
};