import { NavLink } from "react-router-dom"
import type { NavBarProps } from "../../interfaces"
import { DarkContext } from "../../context/DarkContext";
import { useContext, useEffect, useState } from "react";

const NavBar = ({name,items,image1,image2,image3,image4}:NavBarProps) => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 640)
    const [showMenu,setShowMenu]=useState<boolean>(false)
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 640)
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    const { dark, setDark } = useContext(DarkContext)
    return (
        <nav className="py-5 lg:py-10 flex justify-between items-center fixed top-0 w-[calc(100%-40px)] lg:w-[calc(100%-224px)] z-20
        bg-white dark:bg-dark">
            <p className={`${dark&&"dark"} dark:text-white text-text-color text-lg lg:text-xl font-semibold`}>{name}</p>
            {
                !isMobile && 
                <div className="flex items-center gap-3.5">
                    <ul className="flex gap-[22px]">
                        {items.map((item, index) => (
                            <li key={index}>
                            <NavLink
                                to={item.url}
                                className={({ isActive }) =>
                                `pb-[5px]
                                text-[18px] lg:text-[20px]
                                text-text-color
                                dark:text-white 
                                ${isActive && "border-b border-[text-color] dark:border-white"}
                                `
                                }
                            >
                                {item.text}
                            </NavLink>
                            </li>
                        ))}
                        </ul>

                    <div className={` dark:bg-white bg-dark
                        rounded-[29px] px-4 py-2 flex gap-4` }>
                        <button onClick={() => setDark(false)} 
                        className="relative cursor-pointer"><img src={image1.source} alt={image1.alternative} />
                        {dark&&<div className="absolute z-10 bg-dark w-full h-full top-0 left-0 rounded-full"></div>}
                        </button>
                        <button  onClick={() => setDark(true)}
                        className="relative cursor-pointer"><img src={image2.source} alt={image2.alternative} />
                        {!dark&&<div className="absolute z-10 bg-white w-full h-full top-0 left-0 rounded-full"></div>}
                        </button>
                    </div>
                </div>
            }
            {
                isMobile && (
                    <>
                        <button onClick={()=>setShowMenu(!showMenu)}><img src={dark?image3.source_mode:image3.source} alt={image3.alternative} /></button>
                        {
                            showMenu && (
                                <div className={`
                                dark:bg-dark bg-white flex flex-col justify-center items-center gap-5 absolute top-0 left-0 h-screen w-screen`}>
                                    <p className={`dark:text-white text-text-color
                                    text-lg font-semibold
                                    mb-[26px]`}
                                    >{name}</p>
                                    <ul className="flex flex-col items-center gap-7">
                                        {
                                        items.map((item,index)=>{
                                            return  <li><NavLink
                                            className={({ isActive }) =>`dark:text-white text-text-color text-[18px]
                                            pb-[5px]
                                            ${isActive && "border-b border-[text-color] dark:border-white"}`}
                                            key={index} to={item.url}>{item.text}</NavLink></li>
                                        })
                                        }
                                    </ul>
                                    <div className={` dark:bg-white bg-dark
                                        rounded-[29px] px-4 py-2 flex gap-4`}>
                                        <button onClick={() => setDark(false)} 
                                        className="relative cursor-pointer"><img src={image1.source} alt={image1.alternative} />
                                        {dark&&<div className="absolute z-10 bg-dark w-full h-full top-0 left-0 rounded-full"></div>}
                                        </button>
                                        <button  onClick={() => setDark(true)}
                                        className="relative cursor-pointer"><img src={image2.source} alt={image2.alternative} />
                                        {!dark&&<div className="absolute z-10 bg-white w-full h-full top-0 left-0 rounded-full"></div>}
                                        </button>
                                    </div>
                                    <button
                                    onClick={()=>setShowMenu(false)} className="absolute bottom-5"><img src={dark?image4.source:image4.source_mode} alt={image4.alternative} /></button>
                                </div>
                            )
                        }
                    </>
                )
            }
        </nav>
    )
}

export default NavBar
/*const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 640)
    const [showMenu,setShowMenu]=useState<boolean>(false)
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 640)
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    {
                isMobile && (
                    <>
                        <button onClick={()=>setShowMenu(!showMenu)}><img src={dark?image3.source_mode:image3.source} alt={image3.alternative} /></button>
                        {
                            showMenu && (
                                <div className={`
                                dark:bg-dark bg-white flex flex-col justify-center items-center gap-5 absolute top-0 left-0 h-screen w-screen`}>
                                    <p className={`dark:text-white text-text-color
                                    text-lg font-semibold
                                    mb-[26px]`}
                                    >{name}</p>
                                    <ul className="flex flex-col items-center gap-7">
                                        {
                                        items.map((item,index)=>{
                                            return  <li><NavLink
                                            className={({ isActive }) =>`dark:text-white text-text-color text-[18px]
                                            pb-[5px]
                                            ${isActive && "border-b border-[text-color] dark:border-white"}`}
                                            key={index} to={item.url}>{item.text}</NavLink></li>
                                        })
                                        }
                                    </ul>
                                    <div className={` dark:bg-white bg-dark
                                        rounded-[29px] px-4 py-2 flex gap-4`}>
                                        <button onClick={() => setDark(false)} 
                                        className="relative cursor-pointer"><img src={image1.source} alt={image1.alternative} />
                                        {dark&&<div className="absolute z-10 bg-dark w-full h-full top-0 left-0 rounded-full"></div>}
                                        </button>
                                        <button  onClick={() => setDark(true)}
                                        className="relative cursor-pointer"><img src={image2.source} alt={image2.alternative} />
                                        {!dark&&<div className="absolute z-10 bg-white w-full h-full top-0 left-0 rounded-full"></div>}
                                        </button>
                                    </div>
                                    <button
                                    onClick={()=>setShowMenu(false)} className="absolute bottom-5"><img src={dark?image4.source:image4.source_mode} alt={image4.alternative} /></button>
                                </div>
                            )
                        }
                    </>
                )
            }*/