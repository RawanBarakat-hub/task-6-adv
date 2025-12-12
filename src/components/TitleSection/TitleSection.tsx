import type { TitleProp } from "../../interfaces"

const TitleSection = ({title}:TitleProp) => {
    return (
        <h2 className="text-text-color font-semibold text-2xl dark:text-white
        mb-8">{title}</h2>
    )
}

export default TitleSection