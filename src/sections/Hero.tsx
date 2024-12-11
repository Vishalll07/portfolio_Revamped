
import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from  '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import { SectionProps } from "@/app/page";


export const HeroSection = ({ id }: SectionProps ) => {

  return (
    <section id={id} className="relative z-10">
    <div className='py-32 md:py-48 lg:py-50 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        
          <div className='absolute inset-0 -z-30 opacity-5' style={{
            backgroundImage: `url(${grainImage.src})`}}>
          </div>
          <div className='size-[630px] hero-ring '></div>
          <div className='size-[830px] hero-ring '></div>
          <div className='size-[1080px] hero-ring '></div>
          <div className='size-[1380px] hero-ring '></div>

            <HeroOrbit size={440} rotation={80} shouldOrbit orbitDuration='30s'>
                <SparkleIcon className="size-7 text-emerald-300/10" />
            </HeroOrbit>
            <HeroOrbit size={440} rotation={-30} shouldOrbit orbitDuration='34s'>
                <SparkleIcon className="size-7 text-emerald-300/5" />
            </HeroOrbit>
            <HeroOrbit size={450} rotation={150} shouldOrbit orbitDuration='36s'>
                <SparkleIcon className="size-5 text-emerald-300/5" />
            </HeroOrbit>
            <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='40s'>
                <SparkleIcon className="size-10 text-emerald-300/10" />
            </HeroOrbit>
            <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='44s'shouldSpin spinDuration='8s'>
                <StarIcon className="size-12 text-emerald-300" />
            </HeroOrbit>
            <HeroOrbit size={560} rotation={-80} shouldOrbit orbitDuration='47s'>
                <div className="size-2 rounded-full bg-emerald-300/10" />
            </HeroOrbit>
            <HeroOrbit size={610} rotation={98} shouldOrbit orbitDuration='42s'shouldSpin spinDuration='4s'>
                <StarIcon className="size-8 text-emerald-300" />
            </HeroOrbit>
            <HeroOrbit size={630} rotation={190} shouldOrbit orbitDuration='46s'>                
              <div className="size-3 rounded-full bg-emerald-300/10" />
            </HeroOrbit>
            <HeroOrbit size={710} rotation={-14} shouldOrbit orbitDuration='48s'shouldSpin spinDuration='8s'>
                <SparkleIcon className="size-8 text-emerald-300/10" />
            </HeroOrbit>
            <HeroOrbit size={760} rotation={130} shouldOrbit orbitDuration='49s'shouldSpin spinDuration='8s'>
                <SparkleIcon className="size-14 text-emerald-300/5" />
            </HeroOrbit>
            <HeroOrbit size={830} rotation={-72} shouldOrbit orbitDuration='54s' shouldSpin spinDuration='8s'>
                <StarIcon className="size-28 text-emerald-300" />
            </HeroOrbit>  
            <HeroOrbit size={810} rotation={160} shouldOrbit orbitDuration='50s'shouldSpin spinDuration='6s'>
                <StarIcon className="size-8 text-emerald-300" />
            </HeroOrbit>
            <HeroOrbit size={800} rotation={-40} shouldOrbit orbitDuration='58s'>
                <div className="size-3 rounded-full bg-emerald-300/10" />
            </HeroOrbit>
            <HeroOrbit size={890} rotation={0} shouldOrbit orbitDuration='52s'>
                <div className="size-4 rounded-full bg-emerald-300/5" />
            </HeroOrbit>
            <HeroOrbit size={880} rotation={100} shouldOrbit orbitDuration='56s'>
                <div className="size-5 rounded-full bg-emerald-300/5" />
            </HeroOrbit>
            <HeroOrbit size={930} rotation={150} shouldOrbit orbitDuration='54s'>
                <div className="size-4 rounded-full bg-emerald-300/10" />
            </HeroOrbit>
      </div>  

      <div className='container'>
        <div className='flex flex-col items-center'>
          <Image src={memojiImage} className='size-[140px]' alt = "person behind laptop" />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
            </div>
            <div className='text-sm font-medium'>Available for new projects
            </div>
          </div>
        </div> 
        <div className='max-w-lg mx-auto'> 
            <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
              Building Exceptional user experiences
            </h1>
            <p className='mt-4 text-center text-white/60 md:text-lg'>
              I specialize in transforming designs into functional, high-performing web applications.
              Lets discuss your next project.
            </p>
        </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4 relative z-20'>
       <a href='https://github.com/Vishalll07' target="_blank" rel="noopener noreferrer">
        <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
          <span className='font-semibold'>My Work</span>
          <ArrowDown className="size-4"/>
        </button>
        </a>
         <a href='https://www.linkedin.com/in/vishalgagansahoo/' target="_blank" rel="noopener noreferrer">
        <button 
        className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl relative z-30' 
        >
          <span>👋</span>
          <span className='font-semibold'>Lets Connect</span>
          
        </button>
        </a>
        
      </div>
     </div>    
  </div>
  </section>
  );
  
};
