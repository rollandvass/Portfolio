"use client";

import Image from 'next/image';
import MyPhoto from '../public/assets/me.jpeg';

const Photo = () => {
    return (
        <div className='w-full h-full relative'>
            <div className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]'>
                <Image src={MyPhoto} priority quality={100} fill alt='' className='object-contain rounded-full' />
            </div>
        </div>
    );
};

export default Photo;