import type { BlogDetailBlock, CardDetailedProps } from "../../interfaces"

const CardDetailed = ({author,title,image,details,category1,category2,category3}:CardDetailedProps) => {
    const detailsCard=(block: BlogDetailBlock, index: number)=>{
        switch(block.type){
            case "paragraph":
                return (
                    <div>
                        <p className="leading-6 text-[#667085] dark:text-[#C0C5D0]
                        my-3">{block.text}</p>
                        {block.items && (
                            <ul className="">
                                {block.items.map((item, i) => (
                                    <li key={i}>{item.text}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                )
            case "title" :
                return (
                    <h3 className="font-bold text-center text-[#667085] leading-6
                    dark:text-[#C0C5D0] my-3">{block.text}</h3>
                ) 
            case "subtitle" :
                return (
                    <h4 className="font-bold text-[18px] my-3 text-[#667085]
                    dark:text-[#C0C5D0]">{block.text}</h4>
                )  
            case "definition": 
                return (
                    <p className="leading-6 text-[#667085] dark:text-[#C0C5D0]
                        my-3">
                        <span className="font-bold text-[18px]">{block.title}</span>
                        {block.text}
                    </p>
                )
            case "image" :
                return (
                    <div>
                        <img className="w-full" src={block.source} alt={block.alternative} />
                    </div>
                )
            default :
                return null            
        }
    }
    return (
        <div>
            <p className="font-semibold text-[14px] text-my-primary ">{author}</p>
            <h3 className="font-bold text-4xl leading-8 text-text-color my-8
            dark:text-white">{title}</h3>
            <div>
                <img className="w-full" src={image.source} alt={image.alternative} />
            </div>
            {details?.map((block, index) => detailsCard(block, index))}
            <div className="flex gap-2 mt-6">
                    <span className="bg-[#F0F9FF] text-[#026AA2] py-0.5 px-2.5 rounded-2xl">{category1}</span>
                    <span className="bg-[#FDF2FA] text-[#C11574] py-0.5 px-2.5 rounded-2xl">{category2}</span>
                    {
                        category3 && <span className="bg-[#ECFDF3] text-[#027A48] py-0.5 px-2.5 rounded-2xl">{category3}</span>
                    }
                </div>
        </div>
    )
}

export default CardDetailed