import { Variants } from "framer-motion";

/* Fade In */
    export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6 }
    }
    };

    /* Slide Up */
    export const slideUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
    };

    /* Slide From Left */
    export const slideLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6 }
    }
    };

    /* Stagger Container */
    export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
        staggerChildren: 0.2
        }
    }
    };

    /* Scale Animation */
    export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 }
    }
    };