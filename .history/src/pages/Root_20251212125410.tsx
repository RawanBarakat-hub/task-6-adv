import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import type { LinkProp } from "../interfaces"
import { useContext } from "react"
import { DarkContext } from "../context/DarkContext"
import Footer from "../components/Footer/Footer"

const Root = () => {
    const { dark } = useContext(DarkContext)
    const navItems:Array<LinkProp>=[
        {
            url:"/blog",
            text:"Blog"
        },
        {
            url:"/",
            text:"Projects"
        },
        {
            url:"/about",
            text:"About"
        },
        {
            url:"/news",
            text:"Newsletter"
        }
    ]
    const footerItems:Array<LinkProp>=[
        {
            url:"https://x.com",
            text:"Twitter "
        },
        {
            url:"https://www.linkedin.com",
            text:"LinkedIn"
        },
        {
            url:"#",
            text:"Email"
        },
        {
            url:"#",
            text:"RSS feed"
        },
        {
            url:"#",
            text:"Add to Feedly"
        }
    ]
    return (
        <div className={`${dark&&"dark"} px-5 lg:px-28 font-inter bg-white dark:bg-dark`}>
            <NavBar name="Your name" items={navItems} image1={{source:"/assets/sun.svg",alternative:"sun icon"}}
            image2={{source:"/assets/moon.svg",alternative:"moon icon"}}
            image3={{source:"/assets/bars.svg"
            ,source_mode:"/assets/bars-white.svg",alternative:"bars icon"}}
            image4={{source:"/assets/xmenu.svg"
            ,source_mode:"/assets/xblack.svg",alternative:"x icon"}}/>
            <Outlet/>
            <Footer info="&copy; 2023" items={footerItems}/>
        </div>
    )
}

export default Root