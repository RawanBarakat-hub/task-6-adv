import { useSelector } from "react-redux"
import TitleSection from "../TitleSection/TitleSection"
import type { BlogsState, SectionBlogDetailsProp } from "../../interfaces"
import ContainerGrid from "../ContainerGrid/ContainerGrid"
import Card from "../Card/Card"
import CardDetailed from "../CardDetailed/CardDetailed"

const SectionBlogDetails = ({id}:SectionBlogDetailsProp) => {
    const blogs = useSelector((state: { blogs: BlogsState }) => state.blogs.blogs);

    const recentBlogs = blogs.slice(-9)
    const blogDetaild=blogs.find((blog)=>{
        return blog.id==id
    })
    return (
            <section className="pt-[92px] md:pt-[103px] lg:pt-[150px] mb-[72px] md:mb-8 flex flex-col-reverse md:flex-row
            justify-between gap-4">
                <div className="md:w-[342]">
                    <TitleSection title="Recent blog posts" />
                    <ContainerGrid className="details">
                        {
                            recentBlogs.map((recentBlog)=>{
                                return <Card key={recentBlog.id}
                                id={recentBlog.id}
                                image={recentBlog.image} 
                                author={recentBlog.author}
                                title={recentBlog.title}
                                description={recentBlog.description}
                                category1={recentBlog.category1}
                                category2={recentBlog.category2}
                                category3={recentBlog.category3} />
                                })
                        }
                    </ContainerGrid>
                </div>
                {blogDetaild && (
                    <CardDetailed author={blogDetaild.author}
                    title={blogDetaild.title}
                    image={blogDetaild.image}
                    details={blogDetaild.details}
                    category1={blogDetaild.category1}
                    category2={blogDetaild.category2}
                    category3={blogDetaild.category3} />
                )}
            </section>
    )
}

export default SectionBlogDetails