import Social from '@/components/Social';

const AboutMe = () => {
    return <section>
        <div className="mb-8 xl:mb-0">
            <Social containerStyles='flex gap-6' iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-150' />
        </div>
        <p className='max-w-[500px] mb-9 text-white/80'>So, I'm Rolland: A 3rd-year student who prefers coding and Stack Overflow over TikTok. Currently, I'm diving into React and Python, with a passion for tinkering with Raspberry Pis and scripts (no hacking, promise!). In my free time, I dabble in music production and explore CyberSecurity, IoT, and computer networking.</p>
    </section>
}

export default AboutMe