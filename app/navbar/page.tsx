import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='bg-zinc-700 text-white font-mono justify-items-end h-14'>
        <nav className='space-x-4 p-4'>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/project">Projects</Link>
                <Link href="/contact">Contact</Link>
        </nav>
        </div>
    );
};

export default Navbar;