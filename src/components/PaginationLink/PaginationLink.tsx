import { Link } from "react-router-dom"
import type { PaginationLinkProps } from "../../interfaces"
import { useContext } from "react"
import { DarkContext } from "../../context/DarkContext"

const PaginationLink = ({className,image,text,onClick}:PaginationLinkProps) => {
    const {dark}=useContext(DarkContext)
    return (
        <Link  onClick={onClick}
        className={`flex gap-2 items-center font-medium text-[14px] 
        text-[#667085] dark:text-[#EFEFEF]
        ${className=="next"&&"flex-row-reverse"}`} to="">
            <img src={dark?image.source_mode:image.source} alt={image.alternative} />
            {text}
        </Link>
    )
}

export default PaginationLink