import Link from 'next/link';

import Nav from './Nav';

const Header = () => {
    return <header className='py-8 xl:py-12 text-white'>
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
                <h1 className='text-3xl font-semibold'>
                    Rolland Vass<span className='text-accent'>.</span>
                </h1>
            </Link>

            <div className="hidden md:flex items-center gap-8">
                <Nav />
            </div>

            <div className="md:hidden">Mobile Nav</div>
        </div>
    </header>
}

export default Header;