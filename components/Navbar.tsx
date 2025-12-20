import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
    return (
        <nav className="w-full border-b border-gray-800 bg-black backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
                
                {/* Logo */}
                <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
                    <Image 
                        src="/images/navLogo.png"
                        alt="MSU Esports Logo"
                        width={50}
                        height={50}
                        className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                </Link>
        
                {/* Navigation */}
                <div className="flex gap-6 sm:gap-8 items-center">
                    <Link 
                        href="/teams" 
                        className="text-white text-sm sm:text-base font-semibold hover:text-[#DAC79D] transition-colors duration-200"
                    >
                        Teams
                    </Link>
                    <Link 
                        href="/staff" 
                        className="text-white text-sm sm:text-base font-semibold hover:text-[#DAC79D] transition-colors duration-200"
                    >
                        Staff
                    </Link>
                </div>
            </div>
        </nav>
    );
}