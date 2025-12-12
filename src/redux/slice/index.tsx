import { createSlice } from "@reduxjs/toolkit";
import type { BlogsState } from "../../interfaces";
const initialState:BlogsState={
    blogs:[
        {
            id:1,
            image:{source:"/assets/mountain.jpg",alternative:"Mountain photo"},
            author:"Alec Whitten • 1 Jan 2023",
            title:"Bill Walsh leadership lessons",
            description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
            category1:"Leadership",
            category2:"Management",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:2,
            image:{source:"/assets/meetingroom.jpg",alternative:"meeting photo"},
            author:"Demi WIlkinson • 1 Jan 2023",
            title:"PM mental models",
            description:"Mental models are simple expressions of complex processes or relationships.",
            category1:"Product",
            category2:"Research",
            category3:"Frameworks",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:3,
            image:{source:"/assets/headphones.jpg",alternative:"headphones photo"},
            author:"Candice Wu • 1 Jan 2023",
            title:"What is Wireframing?",
            description:"Introduction to Wireframing and its Principles. Learn from the best in the industry.",
            category1:"Design",
            category2:"Research",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:4,
            image:{source:"/assets/jon.jpg",alternative:"John photo"},
            author:"Natali Craig • 1 Jan 2023",
            title:"How collaboration makes us better designers",
            description:"Collaboration can make our teams stronger, and our individual designs better.",
            category1:"Design",
            category2:"Research",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:5,
            image:{source:"/assets/tony.jpg",alternative:"Tony photo"},
            author:"Drew Cano • 1 Jan 2023",
            title:"Our top 10 Javascript frameworks to use",
            description:"JavaScript frameworks make development easy with extensive features and functionalities.",
            category1:"Software Development",
            category2:"Tools",
            category3:"SaaS",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:6,
            image:{source:"/assets/lilia.jpg",alternative:"Lilia photo"},
            author:"Orlando Diggs • 1 Jan 2023",
            title:"Podcast: Creating a better CX Community",
            description:"Starting a community doesn’t need to be complicated, but how do you get started?",
            category1:"Podcasts",
            category2:"Customer Success",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:7,
            image:{source:"/assets/office.jpg",alternative:"Office photo"},
            author:"Olivia Rhye • 1 Jan 2023",
            title:"UX review presentations",
            description:"How do you create compelling presentations that wow your colleagues and impress your managers?",
            category1:"Design",
            category2:"Research",
            category3:"Presentation",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:8,
            image:{source:"/assets/employee.jpg",alternative:"Employee photo"},
            author:"Phoenix Baker • 1 Jan 2023",
            title:"Migrating to Linear 101",
            description:"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
            category1:"Design",
            category2:"Research",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:9,
            image:{source:"/assets/desktop.jpg",alternative:"Desktop photo"},
            author:"Lana Steiner • 1 Jan 2023",
            title:"Building your API Stack",
            description:"The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
            category1:"Design",
            category2:"Research",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:10,
            image:{source:"/assets/climate.jpg",alternative:"Climate photo"},
            author:"Olivia Rhye • 1 Jan 2023",
            title:"Grid system for better Design User Interface",
            description:"A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
            category1:"Design",
            category2:"Interface",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:11,
            image:{source:"/assets/mountain.jpg",alternative:"Mountain photo"},
            author:"Alec Whitten • 1 Jan 2023",
            title:"Bill Walsh leadership lessons",
            description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
            category1:"Leadership",
            category2:"Management",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:12,
            image:{source:"/assets/meetingroom.jpg",alternative:"meeting photo"},
            author:"Demi WIlkinson • 1 Jan 2023",
            title:"PM mental models",
            description:"Mental models are simple expressions of complex processes or relationships.",
            category1:"Product",
            category2:"Research",
            category3:"Frameworks",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:13,
            image:{source:"/assets/headphones.jpg",alternative:"headphones photo"},
            author:"Candice Wu • 1 Jan 2023",
            title:"What is Wireframing?",
            description:"Introduction to Wireframing and its Principles. Learn from the best in the industry.",
            category1:"Design",
            category2:"Research",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:14,
            image:{source:"/assets/jon.jpg",alternative:"John photo"},
            author:"Natali Craig • 1 Jan 2023",
            title:"How collaboration makes us better designers",
            description:"Collaboration can make our teams stronger, and our individual designs better.",
            category1:"Design",
            category2:"Research",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:15,
            image:{source:"/assets/tony.jpg",alternative:"Tony photo"},
            author:"Drew Cano • 1 Jan 2023",
            title:"Our top 10 Javascript frameworks to use",
            description:"JavaScript frameworks make development easy with extensive features and functionalities.",
            category1:"Software Development",
            category2:"Tools",
            category3:"SaaS",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:16,
            image:{source:"/assets/lilia.jpg",alternative:"Lilia photo"},
            author:"Orlando Diggs • 1 Jan 2023",
            title:"Podcast: Creating a better CX Community",
            description:"Starting a community doesn’t need to be complicated, but how do you get started?",
            category1:"Podcasts",
            category2:"Customer Success",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:17,
            image:{source:"/assets/office.jpg",alternative:"Office photo"},
            author:"Olivia Rhye • 1 Jan 2023",
            title:"UX review presentations",
            description:"How do you create compelling presentations that wow your colleagues and impress your managers?",
            category1:"Design",
            category2:"Research",
            category3:"Presentation",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:18,
            image:{source:"/assets/employee.jpg",alternative:"Employee photo"},
            author:"Phoenix Baker • 1 Jan 2023",
            title:"Migrating to Linear 101",
            description:"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
            category1:"Design",
            category2:"Research",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:19,
            image:{source:"/assets/desktop.jpg",alternative:"Desktop photo"},
            author:"Lana Steiner • 1 Jan 2023",
            title:"Building your API Stack",
            description:"The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
            category1:"Design",
            category2:"Research",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
        {
            id:20,
            image:{source:"/assets/climate.jpg",alternative:"Climate photo"},
            author:"Olivia Rhye • 1 Jan 2023",
            title:"Grid system for better Design User Interface",
            description:"A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
            category1:"Design",
            category2:"Interface",
            details:[
                {
                    type:"paragraph",
                    text:`If you’ve been to New York City and have 
                    walked the streets, it is easy to figure out how to 
                    get from one place to another because of the grid system 
                    that the city is built on. Just as the predictability of a city 
                    grid helps locals and tourists get around easily, so do webpage 
                    grids provide a structure that guides users and designers alike. 
                    Because of their consistent reference point, grids improve page 
                    readability and scannability and allow people to quickly get where they need to go.`
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"image",
                    source:"/assets/additional_image1.jpg",
                    alternative:"image"
                },
                {
                    type:"title",
                    text:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
                },
                {
                    type:"paragraph",
                    text:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                },
                {
                    type:"paragraph",
                    text:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                },
                {
                    type:"paragraph",
                    text:`Modular grid extends the column grid further by adding rows to it.
                    This intersection of columns and rows make up modules to which elements and 
                    content are aligned. Modular grids are great for ecommerce and listing pages,
                    as rows are repeatable to accommodate browsing.`
                },
                {
                    type:"paragraph",
                    text:`Hierarchical grid: Content is organized by importance using columns, 
                    rows, and modules. The most important elements and pieces of content take up 
                    the biggest pieces of the grid.`
                },
                {
                    type:"subtitle",
                    text:"Breaking Down the Grid"
                },
                {
                    type:"paragraph",
                    text:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                },
                {
                    type:"definition",
                    title:"Columns: ",
                    text:`Columns take up most of the real estate in a grid. 
                    Elements and content are placed in columns. To adapt to any screen 
                    size, column widths are generally defined with percentages rather than 
                    fixed values and the number of columns will vary. For example, a grid on a 
                    mobile device might have 4 columns and a grid on a desktop might have 12 columns.`
                },
                {
                    type:"definition",
                    title:"Gutters: ",
                    text:`The gutter is the space between columns that separates elements 
                    and content from different columns. Gutter widths are fixed values but can change 
                    based on different breakpoints. For example, wider gutters are appropriate for larger 
                    screens, whereas smaller gutters are appropriate for smaller screens like mobile.`
                    
                },
                {
                    type:"image",
                    source:"/assets/additional_image2.jpg",
                    alternative:"image2"
                },
                {
                    type:"title",
                    text:"Three elements make up any grid: (1) columns, (2) gutters, and (3) margins."
                },
                {
                    type:"subtitle",
                    text:"Examples of Grids in Use"
                },
                {
                    type:"subtitle",
                    text:"Example 1: Hierarchical Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our first example is from <span className="underline">The New York Times. </span>
                            This screen utilizes a hierarchical grid to create a 
                            newspaper-like reading experience. At desktop screen 
                            size, two main columns make up the hierarchical grid. 
                            The most important news story takes up the most space 
                            in the grid, the left column, followed by secondary and 
                            tertiary stories, which take up the smaller column and modules on the right.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image3.jpg",
                    alternative:"image3"
                },
                {
                    type:"title",
                    text:`The New York Times uses a hierarchical grid to achieve its newspaper-like 
                    reading experience. (We highlighted the columns in yellow, 
                    the gutters in blue, and the margins in purple.)`
                },
                {
                    type:"subtitle",
                    text:"Example 2: Column Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our second example is from <span className="underline">Ritual.com</span>, a vitamin company. 
                            This design uses a column grid to create an attractive visual experience. 
                            At this screen size, four consistently sized columns make up the grid structure 
                            and elements are aligned to and within these columns. The gutters, the spaces in 
                            between the columns, are also consistently sized and help the user visually separate 
                            the different products. The margins are independently sized and are the same between 
                            the left and right sides.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image4.jpg",
                    alternative:"image4"
                },
                {
                    type:"title",
                    text:"Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 3: Modular Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our third example is from <span className="underline">Behance</span>, a design library. 
                            The site’s design uses a modular grid to create a pleasant 
                            browsing experience. At desktop size, rows are made up of 4 
                            consistently sized modules. Horizontal gutters are slightly 
                            thicker than vertical gutters and the margins are consistently 
                            sized on the left and right of the design. Like in previous example, 
                            gutters visually separate each element.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image5.jpg",
                    alternative:"image5"
                },
                {
                    type:"title",
                    text:"Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Example 4: Breaking the Grid"
                },
                {
                    type:"paragraph",
                    text:(
                        <>
                            Our last example is <span className="underline">Shrine from Google’s Material Studies.</span>
                            This design uses a column grid, as we can see based on the left navigation, 
                            which is 2 columns wide. Look closely and you will see that some product 
                            images settle to the margins, while others do not. Breaking the grid like 
                            this makes it challenging to focus or quickly scan product images and calls
                            more attention to some products over others. It is okay to break the grid 
                            every so often, as long as you have a valid reason for it.
                        </>
                    )
                },
                {
                    type:"image",
                    source:"/assets/additional_image6.jpg",
                    alternative:"image6"
                },
                {
                    type:"title",
                    text:"Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
                },
                {
                    type:"subtitle",
                    text:"Benefits of the Grid"
                },
                {
                    type:"paragraph",
                    text:"Using a grid benefits both end users and the designers alike:"
                },
                {
                    type: "paragraph",
                    text: "Using a grid benefits both end users and designers alike:",
                    items: [
                        {
                        text: "Designers can quickly put together well-aligned interfaces."
                        },
                        {
                        text: "Users can easily scan predictable grid-based interfaces."
                        },
                        {
                        text: (
                            <>
                            A good grid is easy to adapt to various screen sizes and orientations.
                            In fact, grid layouts are an essential component of 
                            <span className="underline"> responsive web design.</span>
                            </>
                        )
                        }
                    ]
                },
                {
                    type:"image",
                    source:"/assets/additional_image7.jpg",
                    alternative:"image7"
                },
                {
                    type:"title",
                    text:"At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)."
                },
                {
                    type:"paragraph",
                    text:`Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure to communicate 
                    with your developers the grid structure used when creating the design, 
                    so they can implement it accordingly.`
                },
                {
                    type:"subtitle",
                    text:"Choosing and Setting Up Your Grid"
                },
                {
                    type:"paragraph",
                    text:"How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user."
                },
                {
                    type:"definition",
                    title:"Choose the right grid for your needs. ",
                    text:"Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                }, 
                {
                    type:"definition",
                    title:"Spend time setting up your grid. ",
                    text:"Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                },
                {
                    type:"image",
                    source:"/assets/additional_image8.jpg",
                    alternative:"image8"
                },
                {
                    type:"title",
                    text:"Easily set the number of columns, the gutter size, and margin size in Figma."
                },
                {
                    type:"subtitle",
                    text:"Always place content within columns, not gutters. "
                },
                {
                    type:"paragraph",
                    text:"The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                },
                {
                    type:"image",
                    source:"/assets/additional_image9.jpg",
                    alternative:"image9"
                },
                {
                    type:"title",
                    text:"Content or elements should be placed within and across columns, not gutters."
                },
                {
                    type:"definition",
                    title:"Consider using an 8px grid system.",
                    text:"For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                },
                {
                    type:"subtitle",
                    text:"Conclusion"
                },
                {
                    type:"paragraph",
                    text:"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                }
            ]
        },
    ],
    currentPage: 1
}
const blogSlice=createSlice({
    name:"blogs",
    initialState,
    reducers:{
        setPage: (state, action) => {
            state.currentPage = action.payload
        }
    }
})
export const { setPage } = blogSlice.actions
export default blogSlice.reducer