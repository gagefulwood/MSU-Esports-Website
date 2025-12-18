import Link from 'next/link';

export function Navbar() {
    return (
        <nav className="w-full border-b bg-white">
            <div className="max-w-6xl mx-auto flex justify-between px-4">
                {/* Logo */}
                <Link href="/" className="font-bold">
                    MSU Esports
                </Link>
        
                {/* Navigation */}
                <div className="flex gap-4">
                    <Link href="/teams">Teams</Link>
                    <Link href="/staff">Staff</Link>
                </div>
            </div>
        </nav>
    );
}