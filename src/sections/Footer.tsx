import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    title: 'Twitter',
    link: 'https://x.com/Unowmeno_7',
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/vishalgagansahoo/',
  },
  {
    title: 'Github',
    link: 'https://github.com/Vishalll07',
  },
];

export const Footer = () => {
  return (
    <footer className='relative'>
      {/* Gradient background (positioned below the links) */}
      <div className='absolute inset-x-0 bottom-0 h-[400px] bg-lime-600/40 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
      
      <div className="container relative z-10"> {/* Make sure footer content is above the gradient */}
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
          <div className='text-white/40'>&copy; 2024. All rights reserved</div>
          
          <div>
            <nav className='flex flex-col md:flex-row items-center gap-8'>
              {footerLinks.map(flink => (
                <a
                  href={flink.link}
                  key={flink.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='inline-flex gap-1.5'
                >
                  <span className='font-semibold'>{flink.title}</span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
