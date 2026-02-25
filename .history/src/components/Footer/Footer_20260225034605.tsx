import type { FooterProps } from "../../interfaces"

const Footer = ({info,items}:FooterProps) => {
    return (
        <footer className="pt-[30px] pb-[23px] md:pb-[30px]
        flex justify-center items-center flex-col-reverse md:flex-row md:justify-start gap-3.5">
            <span className="text-[20px] text-text-color dark:text-white">{info}</span>
            <ul className="flex justify-center items-center flex-col md:flex-row gap-3.5">
                {
                    items.map((item)=>{
                        return <li><a className="text-[20px] text-text-color hover:text-[#6941C6]
                        dark:text-white" href={item.url}>{item.text}</a></li>
                    })
                }
            </ul>
        </footer>
    )
}

export default Footer