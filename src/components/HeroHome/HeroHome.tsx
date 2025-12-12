import type { TitleProp } from "../../interfaces"

const HeroHome = ({title}:TitleProp) => {
    return (
        <div className="pt-[92px] md:pt-[110px] lg:pt-[140px]">
            <h1 className="dark:text-white font-bold uppercase text-7xl md:text-[160.8px] lg:text-[243.8px] text-center 
            border-y border-[#00000057] dark:border-white">{title}</h1>
        </div>
    )
}

export default HeroHome
