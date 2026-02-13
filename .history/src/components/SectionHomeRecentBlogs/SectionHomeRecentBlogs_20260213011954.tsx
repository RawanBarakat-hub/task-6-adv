import { useSelector } from "react-redux"
import TitleSection from "../TitleSection/TitleSection"
import type { BlogsState } from "../../interfaces"
import ContainerGrid from "../ContainerGrid/ContainerGrid"
import Card from "../Card/Card"

const SectionHomeRecentBlogs = () => {
    const blogs = useSelector(
  (state: { blogs: BlogsState }) => state.blogs.blogs
);

    const homeBlogs = blogs.slice(-4)
    return (
        <section className="mt-[50px] md:mt-[60px] mb-[30px]">
            <TitleSection title="Recent blog posts" />
            <ContainerGrid className="recent">
                {
                homeBlogs?.map((homeBlog,index:number)=>{
                    const flexClass = (index === 1 || index === 2) ? "md:flex md:gap-6" : ""
                    let gridClass = ""
                    if (index === 0) gridClass = "lg:row-span-2"
                    if (index === 1) gridClass = "lg:row-start-1 lg:row-span-1 lg:col-start-2 image"
                    if (index === 2) gridClass = "lg:row-span-1 lg:col-start-2 image"
                    if (index === 3) gridClass = "lg:col-span-2 lg:gap-8 lg:box image"                               
                    return <Card key={homeBlog.id}
                    className={`${flexClass} ${gridClass}`}
                    id={homeBlog.id}
                    image={homeBlog.image} author={homeBlog.author}
                    title={homeBlog.title} description={homeBlog.description}
                    category1={homeBlog.category1}
                    category2={homeBlog.category2}
                    category3={homeBlog.category3} />
                })
            }
            </ContainerGrid>
        </section>
    )
}

export default SectionHomeRecentBlogs