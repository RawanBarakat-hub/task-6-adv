import { useSelector } from "react-redux"
import TitleSection from "../TitleSection/TitleSection"
import type { BlogsState } from "../../interfaces"
import ContainerGrid from "../ContainerGrid/ContainerGrid"
import Card from "../Card/Card"

const SectionNews = () => {
    const blogs = useSelector((state: { blogs: BlogsState }) => state.blogs.blogs);
    const blogNews = blogs.slice(0, 3);
    return (
        <section className="my-[50px] md:my-[72px] lg:mt-[60px] lg:mb-[30px]">
            <TitleSection title="All blog posts"/>
            <ContainerGrid>
                {
                    blogNews.map((blogNew)=>{
                        return <Card key={blogNew.id}
                        id={blogNew.id}
                        author={blogNew.author}
                        title={blogNew.title}
                        description={blogNew.description}
                        image={blogNew.image}
                        category1={blogNew.category1}
                        category2={blogNew.category2}
                        category3={blogNew.category3}/>
                    })
                }
            </ContainerGrid>
        </section>
    )
}

export default SectionNews