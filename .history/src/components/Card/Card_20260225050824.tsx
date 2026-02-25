import { Link } from "react-router-dom"
import type { CardProps } from "../../interfaces"
import { useContext } from "react"
import { DarkContext } from "../../context/DarkContext"
import { motion } from "framer-motion"

const Card = ({className,id,image,author,title,description,category1,category2,category3}:CardProps) => {
        const {dark}=useContext(DarkContext)
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`${className} ${className?.includes("box")&&"lg:grid lg:grid-cols-2"}`}
        >
            <div className={`mw-fit mb-6 ${
                className?.includes("image") ? "lg:mb-0" : "lg:mb-8"}`}>
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className={`w-full
                    ${className?.includes("image")&&"lg:h-full"}`}
                    src={image.source}
                    alt={image.alternative}
                />
            </div>
            <div>
                <p className="text-[#6941C6] font-semibold text-[14px]">{author}</p>
                <div className="my-3 flex justify-between items-center gap-4">
                    <h3 className="text-text-color font-semibold text-2xl 
                dark:text-white">{title}</h3>

                <Link to={`/projects/${id}`}>
                    <img src={dark?"/assets/arrowblogwhite.svg":"/assets/arrowblog.svg"} alt="arrow photo" />
                    </Link>

                </div>
                <p className="text-[#667085] mb-6 leading-6
                dark:text-[#C0C5D0]">{description}</p>
                <div className="flex gap-2">
                    <span className="bg-[#F0F9FF] text-[#026AA2] py-0.5 px-2.5 rounded-2xl">{category1}</span>
                    <span className="bg-[#FDF2FA] text-[#C11574] py-0.5 px-2.5 rounded-2xl">{category2}</span>
                    {
                        category3 && <span className="bg-[#ECFDF3] text-[#027A48] py-0.5 px-2.5 rounded-2xl">{category3}</span>
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Card