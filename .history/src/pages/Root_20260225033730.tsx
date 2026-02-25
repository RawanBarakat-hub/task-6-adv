import { Outlet, useLocation, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { useContext, useEffect, useState, useRef } from "react";
import { DarkContext } from "../context/DarkContext";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScollToTop";
import { motion, AnimatePresence } from "framer-motion";
import { footerItems, navItems } from "../data";
import Loader from "../components/Loader";

const Root = () => {
    const { dark } = useContext(DarkContext);
    const location = useLocation();
    const navigation = useNavigation();

    const [showLoader, setShowLoader] = useState(false);
    const startTimeRef = useRef<number | null>(null);

    const isLoading = navigation.state === "loading";

    useEffect(() => {
        if (isLoading) {
            startTimeRef.current = Date.now();
            setShowLoader(true);
        } else if (startTimeRef.current) {
            const elapsed = Date.now() - startTimeRef.current;
            const remaining = 500 - elapsed; // نصف ثانية

            if (remaining > 0) {
                setTimeout(() => {
                    setShowLoader(false);
                    startTimeRef.current = null;
                }, remaining);
            } else {
                setShowLoader(false);
                startTimeRef.current = null;
            }
        }
    }, [isLoading]);

    return (
        <div
            className={`
                ${dark && "dark"}
                px-5 lg:px-28 font-inter
                bg-white dark:bg-dark
                transition-colors duration-500 ease-in-out
            `}
        >

            {/* 🔥 Loader لمدة لا تقل عن 0.5 ثانية */}
            <AnimatePresence>
                {showLoader && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Loader />
                    </motion.div>
                )}
            </AnimatePresence>

            <NavBar
                name="Your name"
                items={navItems}
                image1={{ source: "/assets/sun.svg", alternative: "sun icon" }}
                image2={{ source: "/assets/moon.svg", alternative: "moon icon" }}
                image3={{
                    source: "/assets/bars.svg",
                    source_mode: "/assets/bars-white.svg",
                    alternative: "bars icon"
                }}
                image4={{
                    source: "/assets/xmenu.svg",
                    source_mode: "/assets/xblack.svg",
                    alternative: "x icon"
                }}
            />

            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <Outlet />
                </motion.div>
            </AnimatePresence>

            <Footer info="© 2023" items={footerItems} />
            <ScrollToTop />
        </div>
    );
};

export default Root;