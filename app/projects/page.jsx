import Image from 'next/image';
import UnderConstructionImage from '../../assets/under-construction.png';

const Projects = () => {
    return (
        <section className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-2xl font-bold mb-4'>Projects Section Is Under Construction!</h1>
            <Image src={UnderConstructionImage} alt='Website Under Construction' width={500} height={300} />
        </section>
    )
}

export default Projects