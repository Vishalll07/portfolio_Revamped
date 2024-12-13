import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg';
import { SectionProps } from "@/app/page";
export const ContactSection = ({ id }: SectionProps) => {
  return ( 
    <section id={id}>
  <div className='py-16 pt-12 lg:py-24 lg:pt-20'>
    <div className='container'>
      <div className='bg-gradient-to-r from-emerald-400 to bg-sky-400 text-gray-900 py-8 px-10 rounded-3xl 
      text-center md:text-left relative overflow-hidden z-0'>
        <div className='absolute inset-0 opacity-5 -z-10'
        style={{
          backgroundImage: `url{${grainImage.src}}`
        }}
        ></div>
        <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
          <div>
              <h2 className='font-serif text-2xl md:text-3xl'>Lets create something amazing together</h2>
              <p className='text-sm  md:text-base mt-2'>Ready to bring your next project to life ? Lets connect and discuss about it , 
                will love to collaborate and achieve goals</p>
          </div>
          <div>
          <a href="https://docs.google.com/document/d/10yTgx-K6t-IebggFjGzL5bCw-gUHflD0wJ_y8pAt7BQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950'>
            <span className='font-semibold'> My Resume</span>
            <ArrowUpRightIcon className="size-4" />
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> 
  </section>
  );
};
