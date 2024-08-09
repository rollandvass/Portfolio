"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Photo from '@/components/Photo';

const links = [
    {
        name: 'Get Started',
        path: '/aboutme'
    },
]

const Home = () => {
    const pathname = usePathname();

    return (
        <section className='h-full'>
            <div className="container mx-auto h-full">
                <div className='flex flex-col lg:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
                    <div className='flex flex-col items-center text-center xl:text-left'>
                        <h1 className='h1 mb-6'>
                            Hello there! I'm <br /><span className='text-accent'>Rolland Vass</span>
                        </h1>
                        <span className='text-xl'>Senior Undergraduate in Computer Science</span>
                        <>
                            {
                                links.map((link, index) => {
                                    return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-accent"
                                        } mt-16 px-3 p-2 border-2 border-solid border-white text-white rounded-full capitalize font-medium hover:text-accent hover:border-accent transition-all`}>{link.name}
                                    </Link>
                                })
                            }
                        </>
                        {/* <Button variant='outline' size='lg' className='w-[150px] mt-[60px]'>
                            Get Started
                        </Button> */}
                    </div>

                    <span>
                        <Photo />
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Home;