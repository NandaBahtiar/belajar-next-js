import React from 'react'
import Footer from "@/app/components/Footer";
type PortfolioLayoutProps = {
    children: React.ReactNode
}
const Layout = ({children}: PortfolioLayoutProps) => {
    return (
     <section className={"bg-sky-100 p-4 sm:p-8"}>
         <div className={"max-w-4xl mx-auto"}>
             <div className={"text-center mb-4"}>
                 <h2 className="text-2xl font-semibold text-sky-800">
                     My Portfolio
                 </h2>
                 <p className="text-gray-500">
                     This is a shared layout for About and Project pages.
                 </p>
                 <main className={"bg-white p-4 sm:p-6 rounded-lg shadow-inner"}>
                     {children}
                 </main>
             </div>

         </div>
     </section>
    )
}
export default Layout
