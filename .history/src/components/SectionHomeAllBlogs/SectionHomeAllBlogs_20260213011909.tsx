import { useSelector } from "react-redux"
import TitleSection from "../TitleSection/TitleSection"
import type { BlogsState } from "../../interfaces"
import ContainerGrid from "../ContainerGrid/ContainerGrid"
import Card from "../Card/Card"

const SectionHomeAllBlogs = () => {
    const { blogs, currentPage } = useSelector((state: { blogs: BlogsState }) => state.blogs);

    const cardsPerPage = 6;
    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage
    const paginatedBlogs = blogs.slice(start, end);
    return (
        <section className="mt-8 pb-[30px] lg:border-b border-[#EAECF0] dark:border-[#EAECF057]">
            <TitleSection title="All blog posts" />
            <ContainerGrid>
                {
                    paginatedBlogs.map((blog)=>{
                        return <Card key={blog.id}
                        id={blog.id}
                        image={blog.image} author={blog.author}
                        title={blog.title}
                        description={blog.description}
                        category1={blog.category1}
                        category2={blog.category2}
                        category3={blog.category3}/>
                    })
                }
            </ContainerGrid>
            
        </section>
    )
}

export default SectionHomeAllBlogs