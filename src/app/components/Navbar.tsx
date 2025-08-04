'use client'
import {usePathname} from "next/navigation";
import Link from "next/link";

interface NavLink{
    href: string;
    label: string;
}
const navLinks:NavLink[] = [
    {href:'/',label:'Home'},
    {href:'/about',label:'about'},
    {href:'/projects',label:'Projects'},
    {href:'/contact',label:'Contact'}
]
const Navbar = () => {
    const pathname = usePathname(); // Hook untuk mendapatkan URL saat ini
    return (
        <nav className="bg-gray-800 p-4 sticky top-0 z-10">
            <div className="container mx-auto flex justify-center space-x-6">
                {/* 3. Mapping array ke komponen Link */}
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link href={link.href} key={link.label} className={`text-lg font-medium transition-colors ${isActive ? 'text-blue-400' : 'text-white hover:text-blue-300'  }`}>
                            {link.label}
                        </Link>
                    );
                })}
            </div>

        </nav>
    );
};
export default Navbar;
