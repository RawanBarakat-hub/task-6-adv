import { useEffect, useState } from "react"
import { motion, AnimatePresence, useScroll } from "framer-motion"

const ScrollToTop = () => {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 200) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    })

    return () => unsubscribe()
  }, [scrollY])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 40 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 w-15 h-15 flex
          justify-center items-center bg-primary-color
          rounded-full shadow-lg cursor-pointer"
        >
          <img
            src="/assets/images/icons/arrow-top.svg"
            alt="arrow"
            className="w-9"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop