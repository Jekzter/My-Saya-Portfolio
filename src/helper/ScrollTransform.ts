import { useRef } from "react";
import { useScroll, useTransform } from "../lib/motion";

export const useYScrollTransformDown = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const ySection = useTransform(scrollYProgress, [0, 0.6], ["-35%%", "300%"]);

    return { ref, ySection };
}

export const useYScrollTransformUp = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const ySection = useTransform(scrollYProgress, [0, 0.6], ["0%", "0%"]);

    return { ref, ySection };
}

export const useXScrollTransform = () => {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const xSection = useTransform(scrollXProgress, [0, 1], ["-30%", "100%"]);

    return { ref, xSection };
}