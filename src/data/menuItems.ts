import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Salons", url: "/chatbot-voor-salons" },
            { text: "Voice AI voor Salons", url: "/voice-ai-voor-salons" },
            { text: "SEO voor Salons", url: "/seo-voor-salons" },
            { text: "Social Media voor Salons", url: "/social-media-voor-salons" },
            { text: "Reviews voor Salons", url: "/reviews-voor-salons" },
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
