export interface ImageProps{
    source:string;
    source_mode?:string;
    alternative:string;
}
export interface LinkProp{
    url:string;
    text:string;
}
export interface NavBarProps{
    name:string;
    items:Array<LinkProp>;
    image1:ImageProps;
    image2:ImageProps;
    image3:ImageProps;
    image4:ImageProps;
}
export interface TitleProp{
    title:string;
}
export interface CardProps{
    className?:string;
    id:number;
    image:ImageProps;
    author:string;
    title:string;
    description:string;
    category1:string;
    category2:string;
    category3?:string;
    details?:Array<BlogDetailBlock>;
}
export interface BlogsState{
    blogs:Array<CardProps>;
    currentPage: number;
}
export interface ContainerGridProps{
    className?:string;
    children:React.ReactNode;
}
export interface FooterProps{
    info:string;
    items:Array<LinkProp>;
}
export interface PaginationLinkProps{
    className?:string;
    image:ImageProps;
    text:string;
    onClick?: () => void;
}
export interface NewsLetterFormProps{
    className?:string;
} 
export interface SectionBlogDetailsProp{
    id:number;
} 
export interface ImageBlock {
    type: "image";
    source: string;
    alternative: string;
}
export interface ParagraphBlock {
    type: "paragraph";
    text: React.ReactNode;
    items?: Array<{ text: React.ReactNode }>;
}
export interface TitleBlock {
    type: "title";
    text: string;
}
export interface SubTitleBlock {
    type: "subtitle";
    text: string;
}
export interface DefinitionBlock {
    type: "definition";
    title: string;             
    text: React.ReactNode;     
}

export type BlogDetailBlock =
    | ImageBlock
    | ParagraphBlock
    | TitleBlock
    | SubTitleBlock
    | DefinitionBlock;
export interface CardDetailedProps {
    author: string;
    title: string;
    image: ImageProps;
    details: BlogDetailBlock[];  
    category1: string;
    category2: string;
    category3?: string;
}
