import { NextResponse } from "next/server";

export interface Project {
    id:number;
    name:string;
    description:string;
    url:string;
}
export interface Anime{
    mal_id:number;
    name:string;
    about:string;
    name_kanji:string;
}
const projects:Project[]=[


    {
        id:1,
        name:"Personal Portofolio",
        description:"This is my personal portofolio website that i build using Next.js and TailwindCSS. This website is responsive and has a dark mode feature.",
        url:"https://my-portofolio-next.vercel.app/"
    },
    {
        id:2,
        name:"E-commerce Website",
        description:"This is an e-commerce website that I built using Next.js, TailwindCSS, and Zustand. This website has a cart feature and a checkout page.",
        url:"https://e-commerce-next-zustand.vercel.app/"
    },
    {
        id:3,
        name:"Realtime Chat App",
        description:"This is a realtime chat application that I built using Next.js, TailwindCSS, and Firebase. This application has a login feature and a chat room.",
        url:"https://next-chat-app-firebase.vercel.app/"
    }
]

export const GET = async () => {
    return NextResponse.json(projects)
}