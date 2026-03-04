import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from '../utils/analytics';

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <>
            <header
                className={[
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md',
                    isScrolled
                        ? 'bg-white/95 border-b border-neutral-200 shadow-sm py-3'
                        : 'bg-white/80 border-b border-neutral-100 py-4',
                ].join(' ')}
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Logo */}
                    <NavLink to="/" className="text-2xl font-bold tracking-tighter z-50 relative text-neutral-900">
                        APPLIED KOREA
                    </NavLink>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        <NavLink to="/about" className={({ isActive }) => `text-sm font-medium transition-colors hover:text-black ${isActive ? 'text-black' : 'text-neutral-500'}`}>
                            About
                        </NavLink>

                        <NavLink to="/threads" className={({ isActive }) => `text-sm font-medium transition-colors hover:text-black ${isActive ? 'text-black' : 'text-neutral-500'}`}>
                            Service
                        </NavLink>

                        <NavLink to="/series" className={({ isActive }) => `text-sm font-bold transition-colors hover:text-black ${isActive ? 'text-black' : 'text-neutral-900'}`}>
                            Series
                        </NavLink>

                        {/* Partners Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors py-2 focus:outline-none">
                                Partners <ChevronDown size={14} />
                            </button>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-40">
                                <div className="bg-white border border-neutral-100 shadow-xl rounded-xl p-2 overflow-hidden flex flex-col">
                                    <NavLink to="/creators" className="px-4 py-3 text-sm hover:bg-neutral-50 rounded-lg text-left transition-colors font-medium text-neutral-900">
                                        Partners
                                    </NavLink>
                                    <NavLink to="/brands" className="px-4 py-3 text-sm hover:bg-neutral-50 rounded-lg text-left transition-colors font-medium text-neutral-900">
                                        Brands
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <NavLink to="/blog" className={({ isActive }) => `text-sm font-medium transition-colors hover:text-black ${isActive ? 'text-black' : 'text-neutral-500'}`}>
                            Blog
                        </NavLink>

                        <NavLink to="/visa-calculator" className={({ isActive }) => `text-[13px] font-bold tracking-wide transition-colors bg-[#EEF7FF] text-[#1E6EA1] hover:bg-[#D9F3FF] px-3 py-1.5 rounded-full ${isActive ? 'ring-2 ring-[#29AEE1]/50' : ''}`}>
                            Visa Form
                        </NavLink>

                        <NavLink to="/proxy" className={({ isActive }) => `text-[13px] font-bold tracking-wide transition-all bg-gradient-to-r from-[#29AEE1] to-[#112E51] text-white hover:shadow-lg hover:-translate-y-0.5 px-4 py-1.5 rounded-full ${isActive ? 'ring-2 ring-[#112E51]/30' : ''}`}>
                            Apply Proxy ⭐
                        </NavLink>

                        <NavLink to="/dashboard" className={({ isActive }) => `text-sm font-medium transition-colors hover:text-black ${isActive ? 'text-black' : 'text-neutral-500'}`}>
                            Dashboard
                        </NavLink>

                        <div className="h-4 w-px bg-neutral-200 mx-2" />

                        {/* Apply Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-sm font-medium text-black hover:text-neutral-600 transition-colors py-2 focus:outline-none">
                                Apply <ChevronDown size={14} />
                            </button>
                            <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-48">
                                <div className="bg-white border border-neutral-100 shadow-xl rounded-xl p-2 overflow-hidden flex flex-col">
                                    <NavLink to="/apply/creator" className="px-4 py-3 text-sm hover:bg-neutral-50 rounded-lg text-left transition-colors font-medium text-neutral-900">
                                        For Partners
                                    </NavLink>
                                    <NavLink to="/apply/brand" className="px-4 py-3 text-sm hover:bg-neutral-50 rounded-lg text-left transition-colors font-medium text-neutral-900">
                                        For Brands
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden z-50 p-2 -mr-2 text-neutral-900"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden overflow-y-auto"
                    >
                        <nav className="flex flex-col gap-6 text-2xl font-medium">
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-red-600' : 'text-neutral-900'}>About</NavLink>

                            <div className="flex flex-col gap-4 pl-4 border-l-2 border-neutral-100">
                                <span className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Apply</span>
                                <NavLink to="/apply/creator" className={({ isActive }) => isActive ? 'text-red-600' : 'text-neutral-900'}>Partner</NavLink>
                                <NavLink to="/apply/brand" className={({ isActive }) => isActive ? 'text-red-600' : 'text-neutral-900'}>Brand</NavLink>
                            </div>

                            <div className="flex flex-col gap-4 pl-4 border-l-2 border-neutral-100">
                                <span className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Partners</span>
                                <NavLink to="/creators" className={({ isActive }) => isActive ? 'text-red-600' : 'text-neutral-900'}>Partners</NavLink>
                                <NavLink to="/brands" className={({ isActive }) => isActive ? 'text-red-600' : 'text-neutral-900'}>Brands</NavLink>
                            </div>

                            <NavLink to="/threads" className={({ isActive }) => isActive ? 'text-red-600' : 'text-neutral-900'}>Service</NavLink>
                            <NavLink to="/series" className={({ isActive }) => isActive ? 'text-red-600' : 'text-neutral-900'}>Series</NavLink>

                            <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-red-600' : 'text-neutral-900'}>Blog</NavLink>
                            <NavLink to="/visa-calculator" className={({ isActive }) => isActive ? 'text-[#29AEE1]' : 'text-[#1E6EA1] font-extrabold'}>Visa Calculator</NavLink>
                            <NavLink to="/proxy" className={({ isActive }) => isActive ? 'text-[#29AEE1]' : 'text-[#112E51] font-extrabold'}>Apply Proxy ⭐</NavLink>
                            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-red-600' : 'text-neutral-900'}>Dashboard</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-red-600' : 'text-neutral-900'}>Contact</NavLink>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
