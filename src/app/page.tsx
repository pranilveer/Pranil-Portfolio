import Navbar from "@/components/Navbar";
import CustomeText from "@/components/ui/CustomeText";
import DualToggleButtons from "@/components/ui/DualButtons";
import Image from "next/image";
import { Star } from "lucide-react";
import PortfolioSection from "@/components/PortfolioSection";
import { SendMessageButton } from "@/components/ui/ActionButtons";
import { hero, buttons, iconAndText, skills, portfolioData, reviews } from '../data/data';
import { GenericSlider } from "@/components/ui/GenericSlider";
import ClientOnly from "@/components/ui/ClientOnly";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import HireMeSection from "@/components/HireMeSection";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white py-2 flex flex-col items-center justify-start">
      <Navbar />

      {/* Hero Section */}
      <div id="home" className="group flex flex-col md:flex-row w-full min-h-[calc(100svh-58px)] sm:min-h-[calc(100svh-64px)] md:h-screen px-4 sm:px-6 md:px-8 gap-6 sm:gap-8 md:gap-[71px] items-stretch justify-center">
        <div className="hidden lg:flex flex-col w-[200px] items-start justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-[250px]">
          <div className="text-[#344054] text-[36px] leading-none">&quot;</div>
          <p className="text-[#344054] text-[16px] font-medium leading-snug">
            {hero.quoteLine1}
            <br />
            {hero.quoteLine2}
          </p>
        </div>

        <div className="relative w-full flex-1 flex flex-col items-center justify-start">
          <div className="flex w-full max-w-[952px] flex-col items-center justify-center  transition-all duration-300 ease-in-out group-hover:translate-y-[280px] group-hover:opacity-0 px-4 sm:px-6">
            <ClientOnly>
              <button className="h-[40px] px-[16px] py-[2px] rounded-full border border-[#171717] flex items-center justify-center bg-white mt-1 mb-3 lg:mb-0">
                {hero.badge}
              </button>
            </ClientOnly>
            <div className="flex flex-col sm:flex-row sm:gap-2 items-center sm:items-end lg:-mt-4">
              <CustomeText title={hero.prefix} className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[70px]" />
              <div className="flex items-end gap-2 sm:gap-1">
                <CustomeText title={hero.name} className="text-[#FD853A] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[70px]" />
                <CustomeText title={ hero.lastName} className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[70px]" />
              </div>
            </div>
            <CustomeText title={hero.headline} className="text-[#171717] font-semibold text-lg sm:text-2xl md:text-3xl xl:text-4xl xl:whitespace-nowrap text-center -mt-1" />
            <p className="mt-3 w-full min-w-0 text-center text-[#344054] text-sm md:text-base lg:text-lg leading-relaxed">
              {hero.intro}
            </p>

            <div className="lg:hidden flex flex-col items-center justify-center mt-6 w-full">
              <div className="text-[#344054] text-[36px] leading-none">&quot;</div>
              <p className="text-[#344054] text-[14px] font-medium leading-snug text-center max-w-[320px]">
                {hero.quoteLine1}
                <br />
                {hero.quoteLine2}
              </p>
            </div>

            <div className="lg:hidden flex flex-col items-center justify-center gap-1 mt-5">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill="#FD853A" stroke="#FD853A" />
                ))}
              </div>
              <h1 className="text-[24px] font-bold text-[#171717] leading-none mt-1">{hero.years}</h1>
              <p className="text-sm text-[#171717]">{hero.experienceLabel}</p>
            </div>
          </div>

          <div className="relative w-full max-w-[952px] flex-1 md:flex-none md:aspect-[3/2] flex flex-col items-center justify-center translate-y-0 md:-translate-y-[20%] mx-auto px-4">
            <div className="absolute bottom-0 z-0 w-[90%] max-w-[812px] aspect-[2/1] overflow-hidden flex items-center justify-center pointer-events-auto">
              <div className="absolute w-full h-full bg-[#FEB273] rounded-t-full" />
            </div>

            <div className="absolute z-10 transition-all duration-500 ease-in-out opacity-100 scale-100 lg:opacity-0 lg:scale-0 lg:group-hover:opacity-100 lg:group-hover:scale-105">
              <Image
                src="/Frame 68.svg"
                alt="Frame Decoration"
                width={1017}
                height={688}
                className="object-contain w-full h-auto"
                priority
              />
            </div>

            <Image
              src="/boy.svg"
              alt="abhiruchi"
              width={1254}
              height={1254}
              className="absolute inset-0 z-20 w-full h-full object-cover object-top md:static md:h-auto md:object-contain md:mt-5 md:max-w-[460px]"
              priority
            />

            <div className="absolute bottom-[10%] z-30 w-full hidden md:flex justify-center">
              <DualToggleButtons />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-[200px] flex-col items-end justify-center gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-[250px]">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} fill="#FD853A" stroke="#FD853A" />
            ))}
          </div>
          <h1 className="text-[32px] font-bold text-[#171717] leading-none whitespace-nowrap">
            {hero.years}
          </h1>
          <p className="text-sm text-[#171717]">{hero.experienceLabel}</p>
        </div>
      </div>

      {/* Services */}
      <ServicesSection />

      {/* Work Experience */}
      <ExperienceSection />

      {/* Hire Me */}
      <HireMeSection />

      {/* Portfolio */}
      <PortfolioSection buttons={buttons} portfolioData={portfolioData} />

      {/* Testimonials */}
      <div className="relative flex flex-col w-full items-center px-4 sm:px-6 lg:px-[71px] py-12 sm:py-[96px] gap-12 bg-[#171717] overflow-hidden">
        <Image
          src="/Frame 77.svg"
          alt="image"
          fill
          className="object-cover absolute opacity-50"
        />

        <div className="flex flex-col w-full max-w-[1299px] items-center gap-4 z-10 px-2">
          <div className="flex flex-col items-center max-w-full sm:max-w-[448px]">
            <CustomeText
              title="Testimonials That"
              className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-[#FCFCFD] text-center"
            />
            <div className="flex flex-wrap gap-2.5 justify-center">
              <CustomeText
                title="Speak to"
                className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-[#FCFCFD]"
              />
              <CustomeText
                title="My Result"
                className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-[#FD853A]"
              />
            </div>
          </div>
          <p className="w-full max-w-[742px] text-[16px] sm:text-[18px] lg:text-[20px] text-[#F9FAFB] text-center leading-[1.6] px-2">
            Here&apos;s what teams and founders say about working with me across
            production AI platforms, e-commerce and product development.
          </p>
        </div>

        <div className="w-full z-10">
          <GenericSlider
            data={reviews}
            slidesPerView={3}
            heightClass=""
            cardType="review"
          />
        </div>
      </div>


      {/* Contact */}
      <div id="contact" className="w-full bg-white flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-[71px] gap-10">
        <div className="w-full max-w-4xl text-center flex flex-col items-center gap-4">
          <CustomeText
            title="Let's Build Something"
            className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-[#344054]"
          />
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <CustomeText
              title="Amazing"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-[#344054]"
            />
            <CustomeText
              title="Together"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-[#FD853A]"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl lg:max-w-xl rounded-[28px] md:rounded-full border border-[#E4E7EC] bg-white px-3 py-3 md:px-5 md:py-3">
          <ClientOnly>
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
              <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                <div className="w-10 h-10 md:w-11 md:h-11 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-[#FFEAD5] shrink-0">
                  <Image
                    src="/sms.svg"
                    alt="message icon"
                    width={24}
                    height={24}
                  />
                </div>
                <input
                  id="contact-email"
                  type="text"
                  placeholder="Enter Email Address"
                  className="w-full flex-1 min-w-0 bg-transparent outline-none text-base text-center md:text-left text-[#1D2939] placeholder:text-[#667085]"
                />
              </div>
              <SendMessageButton className="w-full md:w-auto shrink-0 px-6 md:px-8 py-2.5 rounded-full bg-[#FD853A] hover:bg-[#e4752f] text-white text-base md:text-sm font-semibold transition duration-300">
                Send Message
              </SendMessageButton>
            </div>
          </ClientOnly>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base font-medium text-[#000000]">
          {iconAndText.map((data, index) => {
            const Icon = data.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <Icon size={20} />
                {data.name}
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills Slider */}
      <div id="skills" className="relative w-full h-[110px] sm:h-[130px] md:h-[147px] bg-[#FB6514] rounded-tl-4xl rounded-br-4xl overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5000px] h-[46px] sm:h-[54px] md:h-[63px] bg-white -rotate-2 md:-rotate-[1.9deg] z-10 flex items-center">
          <div className="marquee flex gap-6 sm:gap-8 w-max">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 md:gap-5 text-[#000000] text-[28px] sm:text-[36px] md:text-[48px] whitespace-nowrap"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 sm:w-[30px] sm:h-[30px] md:w-[34px] md:h-[34px] shrink-0"
                >
                  <path
                    d="M16.4828 0.257982L21.715 12.3411L34.2082 16.5003L22.1251 21.7324L17.9659 34.2256L12.7337 22.1425L0.240553 17.9833L12.3237 12.7512L16.4828 0.257982Z"
                    fill="#FD853A"
                  />
                </svg>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog */}
      {/* 
      <div className="flex flex-col w-full h-fit items-center gap-10 sm:gap-12 px-4 sm:px-6 lg:px-[71px] py-12 sm:py-20 lg:py-[97px]">
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <h1 className="text-[#344054] text-center sm:text-left font-bold text-4xl sm:text-5xl lg:text-6xl">From my blog post</h1>
          <OrangeButton title="See All" />
        </div>
        <GenericSlider
          data={blogs}
          slidesPerView={3}
          heightClass=""
          cardType="blog"
        />
      </div>
      */}

    </div>
  );
}