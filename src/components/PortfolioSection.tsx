'use client';

import { useState } from 'react';
import CustomeText from '@/components/ui/CustomeText';
import OrangeButton from '@/components/ui/OrangeButton';
import { GenericSlider } from '@/components/ui/GenericSlider';
import { PortfolioItem, contact } from '@/data/data';

interface PortfolioSectionProps {
  buttons: string[];
  portfolioData: PortfolioItem[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  buttons,
  portfolioData,
}) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredData =
    activeFilter === 'All'
      ? portfolioData
      : portfolioData.filter((item) => item.category?.includes(activeFilter));

  return (
    <div id="projects" className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-[71px] py-12 sm:py-20 gap-10 lg:gap-12">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex flex-col items-start max-w-full lg:max-w-[643px]">
          <CustomeText
            title="Lets Have a look at"
            className="font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-[#344054]"
          />
          <div className="flex items-start justify-start gap-4 flex-wrap">
            <CustomeText
              title="my"
              className="font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-[#344054]"
            />
            <CustomeText
              title="Portfolio"
              className="font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-[#FD853A]"
            />
          </div>
        </div>

        <div className="shrink-0">
          <OrangeButton
            title="See All"
            onClick={() => window.open(contact.github, '_blank', 'noopener,noreferrer')}
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-10 lg:gap-12 max-w-[1290px]">
        <GenericSlider
          key={activeFilter}
          data={filteredData}
          slidesPerView={2}
          heightClass="h-auto"
          cardType="portfolio"
        />

        <div className="w-full max-w-[947px] flex flex-wrap justify-center gap-4 sm:gap-[14px] items-center">
          {buttons.map((text) => (
            <button
              key={text}
              onClick={() => setActiveFilter(text)}
              className={`px-6 sm:px-8 py-3 rounded-[24px] text-sm sm:text-base transition-colors duration-300 ${
                activeFilter === text
                  ? 'bg-[#FD853A] text-white'
                  : 'bg-[#F2F4F7] text-[#000000] hover:bg-[#FD853A] hover:text-white'
              }`}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
