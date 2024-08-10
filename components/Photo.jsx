"use client";

import Image from 'next/image';
import MyPhoto from '../public/assets/me2.png';

const Photo = () => {
    return (
        <div className='w-full h-full relative'>
            <div
                className='w-[350px] h-[350px] xl:w-[498px] xl:h-[498px] border-2 border-white/75 rounded-full'
                style={{
                    boxShadow: 'inset 0 0 25px 10px rgba(187, 134, 252, 0.5)'
                }}
            >
                <Image src={MyPhoto} priority quality={100} fill alt='' className='object-contain rounded-full p-6' />
            </div>
        </div>
    );
};

export default Photo;