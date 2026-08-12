import Image from 'next/image';
import React from 'react';
import ArrowButton from './ArrowButton';
import { Blog as BlogType } from '../../data/data'; 
import ClientOnly from './ClientOnly';

interface BlogProps extends BlogType {
  priority?: boolean;
}

const Blog: React.FC<BlogProps> = ({ image, button, name, date, title, priority = false }) => {
  return (
    <div className="flex flex-col w-full max-w-[416px] items-start gap-5">
      <div className="relative w-full h-[300px] sm:h-[300px] group overflow-hidden rounded-[20px]">
        <Image
          src={image}
          alt="image"
          width={416}
          height={432}
          className="w-full h-full object-cover cursor-pointer"
          priority={priority}
        />
        <div className="absolute -bottom-[12px] right-[2px] w-[114px] h-[114px] rounded-full bg-[#1D2939] group-hover:bg-[#FD853A] flex items-center justify-center transition-all duration-300">
          <ArrowButton
            className="transition-all duration-300 stroke-white -rotate-45"
            height={114}
            width={114}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 items-start">
        <ClientOnly>
          <button className="w-[196px] h-[54px] rounded-3xl flex items-center justify-center px-[32px] py-[15px] bg-[#F2F4F7] text-[#000000] text-[20px]">
            {button}
          </button>
        </ClientOnly>

        <div className="flex flex-wrap items-start gap-x-4 gap-y-2 sm:gap-[35px]">
          <div className="flex items-center gap-2.5">
            <span className="bg-[#FD853A] w-[9px] h-[9px] rounded-full"></span>
            <span className="text-[#344054] text-base sm:text-[20px]">{name}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="bg-[#FD853A] w-[9px] h-[9px] rounded-full"></span>
            <span className="text-[#344054] text-base sm:text-[20px]">{date}</span>
          </div>
        </div>

        <h3 className="w-full text-2xl sm:text-[32px] leading-snug text-[#344054]">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Blog;
