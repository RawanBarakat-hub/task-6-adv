import type { LinkProp } from "../interfaces";

export const navItems: Array<LinkProp> = [
        { url: "/", text: "Blog" },
        { url: "/projects", text: "Projects" },
        { url: "/news", text: "Newsletter" }
    ];

export const footerItems: Array<LinkProp> = [
        { url: "https://x.com", text: "Twitter " },
        { url: "https://www.linkedin.com", text: "LinkedIn" },
        { url: "mailto:blog@gmail.com", text: "Email" },
        { url: "#", text: "RSS feed" },
        { url: "#", text: "Add to Feedly" }
    ];