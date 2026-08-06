"use client"
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/data/data'

const Navbar = () => {
    const [selected, setSelected] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="relative w-full max-w-[1298px] h-[50px] sm:h-[56px] lg:h-[60px] bg-[#171717] text-white px-10 lg:px-2.5 rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] backdrop-blur-[15px] border border-white mx-auto flex items-center justify-between z-50">
            {/* Left Menu (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-start gap-2.5">
                {navItems.slice(0, 3).map((item) => (
                    <button
                        key={item}
                        className={`w-[120px] h-[46px] flex items-center justify-center rounded-[60px] text-sm font-medium transition duration-300 ${selected === item ? 'bg-[#FD853A] font-bold' : 'bg-transparent hover:bg-[#232323]'}`}
                        onClick={() => setSelected(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
                <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-[#FD853A] rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <text x="4" y="18" fontSize="12" fontWeight="bold" fill="white">PV</text>
                    </svg>
                </div>
                <span className="font-bold text-xs sm:text-sm lg:text-base tracking-wide">PRANIL VEER</span>
            </div>

            {/* Right Menu (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-end items-center gap-4">
                {navItems.slice(3).map((item) => (
                    <button
                        key={item}
                        className={`w-[120px] h-[46px] flex items-center justify-center rounded-[60px] text-sm font-medium transition duration-300 ${selected === item ? 'bg-[#FD853A] font-bold' : 'bg-transparent hover:bg-[#232323]'}`}
                        onClick={() => setSelected(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-[#FD853A] hover:bg-[#e67a2e] transition-colors"
                onClick={toggleMobileMenu}
            >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-[100%] left-0 right-0 mt-2 bg-[#171717] rounded-[25px] border border-white backdrop-blur-[15px] lg:hidden z-40">
                    <div className="flex flex-col p-4 gap-2">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                className={`w-full h-[40px] flex items-center justify-center rounded-[25px] text-sm font-medium transition duration-300 ${selected === item ? 'bg-[#FD853A] font-bold' : 'bg-transparent hover:bg-[#232323]'}`}
                                onClick={() => {
                                    setSelected(item);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
