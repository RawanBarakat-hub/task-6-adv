import { useParams } from "react-router-dom"
import SectionBlogDetails from "../components/SectionBlogDetails/SectionBlogDetails"
import NewsLetterForm from "../components/NewsLetterForm/NewsLetterForm"

const Blog = () => {
    const params=useParams()
    const id=Number(params.id)
    return (
        <div>
            <SectionBlogDetails id={id} />
            <NewsLetterForm/>
        </div>
    )
}

export default Blog