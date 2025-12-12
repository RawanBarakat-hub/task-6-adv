import HeroHome from "../HeroHome/HeroHome"
import Pagination from "../Pagination/Pagination"
import SectionHomeAllBlogs from "../SectionHomeAllBlogs/SectionHomeAllBlogs"
import SectionHomeRecentBlogs from "../SectionHomeRecentBlogs/SectionHomeRecentBlogs"

const MainHome = () => {
    return (
        <main>
            <HeroHome title="The Blog"/>
            <SectionHomeRecentBlogs/>
            <SectionHomeAllBlogs/>
            <Pagination/>
        </main>
    )
}

export default MainHome