import {cn} from '@/lib/utils';
import { Menu, X } from "lucide-react";
import { useEffect, useState } from 'react';

const NavItems = [
    {name: "About", href: "/"},
    {name: "CTF", href: "/ctf"},
    {name: "Fun Stuff", href: "/funstuff"},
    {name: "Contact", href: "#contact"}
]
export const Navbar = () => {
    const [isScrolled, SetIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            SetIsScrolled(window.scrollY > 10)

            window.addEventListener("scroll", handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return <nav className={cn("fixed w-full z-40 transition-all duration-300 font-stix",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}
    >
        <div className='container flex items-center justify-between'>
            {/* Name */}
            <a className='text-xl font-bold text-primary flex items-center hover:italic' href='/'>
                <span>
                    Elizabeth Kushelevsky
                </span>
            </a>

            {/* Computer navbar*/}
            <div className='hidden md:flex space-x-8'>
                {NavItems.map((item, key) => (
                    <a key={key} href={item.href} className='text-primary hover:italic'>
                        {item.name}
                    </a>
                ))}
            </div>

            {/* Toggle button (outside mobile nav) */}
            <button
                onClick={() => setIsMenuOpen(prev => !prev)}
                className="md:hidden p-2 text-primary z-50"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

                {/* Mobile navbar */}
            <div
                className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                )}
            >
                <div className="flex flex-col items-center space-y-8 text-xl">
                    {NavItems.map((item, key) => (
                    <a
                        key={key}
                        href={item.href}
                        className="text-primary/80"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item.name}
                    </a>
                    ))}
                </div>
            </div>
        </div>
    </nav>;
}