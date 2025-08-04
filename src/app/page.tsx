import React from 'react'
import Greeting from "@/app/components/Greeting";
import Bio from "@/app/components/Bio";

const Home = () => {
    return (
        <main className={"flex min-h-screen flex-col items-center justify-center p-24"}>
            <Greeting name={"nanda"} title={"Web Developer"}/>
            <Bio description={"Saya adalah seorang web developer yang bersemangat dalam mempelajari teknologi baru seperti React dan Next.js"}/>
        </main>
    )
}
export default Home
