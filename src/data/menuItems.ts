import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Salons", url: "/chatbot" },
            { text: "Voice AI voor Salons", url: "/voice-ai" },
            { text: "SEO voor Salons", url: "/seo" },
            { text: "Social Media voor Salons", url: "/social-media" },
            { text: "Reviews voor Salons", url: "/reviews" },
            { text: "Review Pakket", url: "/review-pakket" },
        ]
    },
    {
        text: "Tarieven",
        url: "/tarieven"
    },
    {
        text: "Gratis Scan",
        url: "/gratis-scan"
    },
    {
        text: "Gratis Website",
        url: "/gratis-website"
    },
    {
        text: "Blog",
        url: "/blog"
    }
];
