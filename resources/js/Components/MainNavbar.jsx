import { useEffect, useState } from "react";
import { Link } from '@inertiajs/react';

export default function MainNavbar() {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (

        <div className="relative ">
            <nav className="bg-[#A00000] fixed z-50 top-0 w-full">
                <div className="max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative flex justify-between items-center h-24">
                        <Link className="text-3xl font-bold leading-none" href="#">
                            <img src="/assets/images/logo-white.png"></img>
                        </Link>
                        <div className="lg:hidden">
                            <button onClick={toggleMobileMenu} className="navbar-burger flex items-center text-white p-3">
                                <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                        <ul className={`hidden lg:flex lg:items-center lg:w-auto lg:space-x-6 ${isMobileMenuOpen ? '' : 'hidden'}`}>
                            <li><Link className="text-sm text-white hover:text-white" href="/">Home</Link></li>
                            <li><Link className="text-sm text-white hover:text-white" href="/profil">Profile</Link></li>
                            <li><Link className="text-sm text-white hover:text-white" href="/menu">Menu</Link></li>
                            <li><Link className="text-sm text-white hover:text-white" href="/kemitraan">Kemitraan</Link></li>
                            <li><Link className="text-sm text-white hover:text-white" href="/kontak">Kontak</Link></li>
                            <li><Link className="text-sm text-white hover:text-white" href="#">Loker</Link></li>
                            <li><Link className="text-sm text-white hover:text-white" href="#">Gabung Kemitraan</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className={`navbar-menu relative z-50 ${isMobileMenuOpen ? '' : 'hidden'}`}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={toggleMobileMenu}></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <Link className="mr-auto text-3xl font-bold leading-none" href="#">
                            <img className="h-24" src="/assets/images/logo.png"></img>
                        </Link>
                        <button className="navbar-close" onClick={toggleMobileMenu}>
                            <svg className="h-6 w-6 text-white-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-[#A00000] rounded" href="/">Home</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-[#A00000] rounded" href="/profil">Profil</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-[#A00000] rounded" href="/menu">Menu</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-[#A00000] rounded" href="/kemitraan">Kemitraan</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-[#A00000] rounded" href="/kontak">Kotak</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-[#A00000] rounded" href="/loker">Loker</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-semibold text-white bg-[#A00000] rounded" href="/">Gabung Kemitraan</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <div className="flex flex-col gap-4 items-center justify-center ">
                            <div className="flex gap-4 items-center bg-white">
                                <img className="h-8" src="assets/icons/ig.png" alt="" />
                                <img className="h-8" src="assets/icons/wa.png" alt="" />
                                <img className="h-6" src="assets/icons/yt.png" alt="" />
                                <img className="h-8" src="assets/icons/tk.png" alt="" />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}