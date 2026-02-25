import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { useContext, useEffect, useState } from "react";
import { DarkContext } from "../context/DarkContext";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScollToTop";
import { motion, AnimatePresence } from "framer-motion";
import { footerItems, navItems } from "../data";
import Loader from "../components/Loader";

const Root = () => {
    const { dark } = useContext(DarkContext);
    const location = useLocation();

    const [showLoader, setShowLoader] = useState(false);

    // 🔥 يظهر اللودر عند تغيير الصفحة لمدة 0.5 ثانية
    useEffect(() => {
    let timer: NodeJS.Timeout;

    requestAnimationFrame(() => {
        setShowLoader(true);

        timer = setTimeout(() => {
            setShowLoader(false);
        }, 1200);
    });

    return () => clearTimeout(timer);
}, [location.pathname]);
    return (
        <div
            className={`
                ${dark && "dark"}
                px-5 lg:px-28 font-inter
                bg-white dark:bg-dark
                transition-colors duration-500 ease-in-out
            `}
        >

            {/* 🔥 Loader */}
            <AnimatePresence>
                {showLoader && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="fixed inset-0 z-50"
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

            {/* Page Transition */}
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