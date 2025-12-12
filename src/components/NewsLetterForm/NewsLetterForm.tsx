import { Link } from "react-router-dom"
import type { NewsLetterFormProps } from "../../interfaces"

const NewsLetterForm = ({className}:NewsLetterFormProps) => {
    return (
        <div className={`${className=="news"&&"pt-[92px] md:pt-[152px] lg:pt-[150px]"} md:flex md:flex-col justify-center items-center`}>
            <p className="font-semibold text-my-primary text-center">Newlatters</p>
            <h2 className="font-semibold text-5xl leading-[60px] text-text-color
            mt-3 mb-6 dark:text-white">Stories and interviews</h2>
            <p className="text-[20px] text-[#667085] leading-[30px]
            mb-10 dark:text-[#C0C5D0]">Subscribe to learn about new product features, the latest in technology, solutions, 
            and updates.</p>
            <form className="mb-2 flex flex-col gap-3 md:flex-row md:gap-4">
                <input type="email" placeholder="Enter your email" className="py-3 px-4 rounded-lg border border-[#D0D5DD]
                shadow-[0px_1px_2px_0px_#1018280D] outline-0
                placeholder:text-[#667085]
                dark:bg-white" />
                <input type="submit" value="Subscribe"
                className="bg-my-primary text-white font-medium py-3 px-5 rounded-lg cursor-pointer
                hover:bg-[#996ef8]" />
            </form>
            <p className="text-[14px] text-[#667085]
            dark:text-[#C0C5D0]">We care about your data in our <Link className="underline" to="#">privacy policy</Link></p>
        </div>
    )
}

export default NewsLetterForm