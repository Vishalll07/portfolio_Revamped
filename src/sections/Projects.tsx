
import Image from "next/image";
import project1image from "@/assets/images/project1.png";
import project2image from "@/assets/images/project2.png";
import project3image from "@/assets/images/project3.png";
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { SectionProps } from "@/app/page";

const portfolioProjects = [
  {
    company: "Collaborative Editor",
    year: "March 2024",
    title: "Live collaboration for docs",
    results: [
      { title: "Two person can collab on same editor" },
      { title: "Improved site for team member mentions" },
      { title: "Authentication on clerk" },
    ],
    link: "https://collaborative-editor-5vu5.vercel.app/sign-in",
    image: project1image,
  },
  {
    company: "CoinLatch",
    year: "August 2024",
    title: "Web3 Wallet Adapter for Solana",
    results: [
      { title: "Mint Tokens,Send Tokens,connect wallets " },
      { title: "Solana based for checking balance" },
      { title: "Create private keys, generate mnemonics" },
    ],
    link: "https://wallet-adapter-two.vercel.app/",
    image: project2image,
  },
  {
    company: "Github and Prev Portfolio",
    year: " September 2024",
    title: "Next js Portfolio",
    results: [
      { title: "Check out my github for more Code bases" },
      { title: "I love to work on backends ,Nextjs and Web3" },
      { title: "Improving my Frontend" },
    ],
    link: "https://portfolio-website-sepia-nine-45.vercel.app/",
    image: project3image,
  },
];

export const ProjectsSection = ({ id }: SectionProps) => {
  return (
    <section  id={id} className="pb-16 lg:py-24">
      <div className="container">
        
        <SectionHeader 
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into digital experiences"
        />
            
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project , projectIndex ) => (
            
            <Card key={project.title} className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20  sticky" 
            style={{
              top: `calc(64px + ${projectIndex * 20}px)`
            }}>
              
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm 
                    text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                    </div>
                  
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl ">{project.title}</h3>
                  <hr className="border-t-2 border-white mt-4  md:mt-5 " />              
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) =>(
                    
                      <li className="flex gap-2 text-sm md:text-base text-white/50" key={result.title}>
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                        </li>
                    ))}
                  </ul>
                  <a href={project.link} >
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6
                  rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <span>Live site</span>
                    <ArrowUpRightIcon className="size-4"/>
                  </button>
                  </a>
                  </div>
                  <div className="relative">
                  <Image 
                  src={project.image} 
                  alt={project.title} 
                  className="mt-8 -mb-4 md:-mb-0 lg:mt-0 
                  lg:absolute lg:h-full lg:w-auto lg:max-w-none" 
                  />
                  </div>
                </div>  
            </Card>
          ))}
        </div>
      </div>      
    </section>
  ); 
};
