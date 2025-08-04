import React from 'react'
interface GreetingProps{
    name: string,
    title: string,
}
const Greeting:React.FC<GreetingProps> = ({name,title}) => {
    return (
        <div className={"text-center"}>
            <h1 className="text-4xl font-bold">
               Halo, saya <span className={"text-blue-500"}>{name}</span>
            </h1>
            <p className={"text-xl font-bold mt-2"}>
                Saya seorang {title}
            </p>
        </div>
    )
}
export default Greeting
