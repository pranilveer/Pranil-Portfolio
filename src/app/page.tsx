import Navbar from "@/components/Navbar";
import CustomeText from "@/components/ui/CustomeText";
import DualToggleButtons from "@/components/ui/DualButtons";
import Image from "next/image";
import { Star } from "lucide-react";
import OrangeButton from "@/components/ui/OrangeButton";
import ArrowButton from "@/components/ui/ArrowButton";
import { hero, servicesData, experiences, stats, buttons, iconAndText, skills, blogs, portfolioData, reviews } from '../data/data';
import { GenericSlider } from "@/components/ui/GenericSlider";
import ClientOnly from "@/components/ui/ClientOnly";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white py-2 flex flex-col items-center justify-start">
      <Navbar />

      {/* Hero Section */}
      <div id="home" className="group flex flex-col md:flex-row w-full min-h-[100vh] md:h-screen px-4 sm:px-6 md:px-8 gap-6 sm:gap-8 md:gap-[71px] items-stretch justify-center">
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
              <div className="flex items-end">
                <CustomeText title={hero.name} className="text-[#FD853A] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[70px]" />
                <CustomeText title={hero.lastName} className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[70px]" />
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
              src="/girl.svg"
              alt="abhiruchi"
              width={952}
              height={636}
              className="absolute inset-0 z-20 w-full h-full object-cover md:static md:h-auto md:object-contain md:mt-5"
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
      <div id="about" className="relative flex flex-col w-full gap-10 sm:gap-16 items-center px-4 sm:px-6 lg:px-[71px] pt-12 sm:pt-16 pb-16 sm:pb-24 bg-[#171717] overflow-hidden -mt-14">
        <Image
          src="/Frame 77.svg"
          alt="image"
          fill
          className="object-cover absolute opacity-50"
        />

        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-6 relative z-10">
          <div className="flex gap-2.5">
            <CustomeText title="My" className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#FCFCFD]" />
            <CustomeText title="Services" className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#FD853A]" />
          </div>
          <p className="w-full lg:w-[578px] font-medium text-base sm:text-lg lg:text-[20px] text-white">
            Building modern, scalable and maintainable products with a focus on
            clean architecture, performance and intelligent AI-powered features.
          </p>
        </div>

        <div className="relative w-full max-w-[1299px] flex items-start justify-center">
          <GenericSlider
            data={servicesData}
            slidesPerView={3}
            heightClass="h-[380px] sm:h-[430px]"
            cardType="hover"
          />
        </div>
      </div>

      {/* Work Experience */}
      <div id="experience" className="w-full min-h-[600px] lg:h-[827px] flex flex-col items-start mx-auto px-4 sm:px-6 lg:px-[71px] py-8 lg:py-16">
        <div className="w-full h-auto lg:h-[234px] flex lg:flex-row items-start justify-center space-x-2.5 mb-8 lg:mb-16 text-center lg:text-left">
          <CustomeText title="My" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#344054]" />
          <CustomeText title="Work" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#FD853A]" />
          <CustomeText title="Experience" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#FD853A]" />
        </div>

        <div className="w-full lg:hidden">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0 mt-2">
                  <div className="w-6 h-6 rounded-full border-2 border-dashed border-[#1D2939] bg-white" />
                  <div className={`absolute top-1 left-1 w-4 h-4 rounded-full ${exp.dotColor}`} />
                </div>

                <div className="flex-1">
                  <CustomeText title={exp.company} className="font-semibold text-[#1D2939] text-[20px] sm:text-[24px] mb-1" />
                  <CustomeText title={`${exp.duration} • ${exp.location}`} className="text-[#98A2B3] text-[14px] sm:text-[16px] mb-2" />
                  <CustomeText title={exp.role} className="font-semibold text-[#1D2939] text-[18px] sm:text-[20px] mb-2" />
                  {exp.highlights.length > 0 && (
                    <ul className="flex flex-col gap-1.5">
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#98A2B3] text-[14px] sm:text-[16px] leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FD853A] flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-auto lg:h-[438px] hidden lg:flex justify-evenly">
          <div className="flex flex-col justify-between w-[495px] h-[438px] gap-[102px]">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-[14px]">
                <CustomeText title={exp.company} className="font-semibold text-[#1D2939] text-[40px]" />
                <CustomeText title={`${exp.duration} • ${exp.location}`} className="text-2xl text-[#98A2B3]" />
              </div>
            ))}
          </div>

          <div className="relative flex flex-col items-center justify-between">
            <div className="absolute top-0 bottom-0 w-[2px] border-l-2 border-dashed border-[#1D2939]" />
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-center w-12 h-12">
                <div className="absolute w-12 h-12 rounded-full border-2 border-dashed border-[#1D2939] bg-white" />
                <div className={`w-9 h-9 rounded-full z-10 ${exp.dotColor}`} />
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between w-[444px] h-[400px] gap-[48px]">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-[14px]">
                <CustomeText title={exp.role} className="font-semibold text-[#1D2939] text-[40px]" />
                {exp.highlights.length > 0 && (
                  <ul className="flex flex-col gap-2">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-2xl text-[#98A2B3]">
                        <span className="mt-3 w-2 h-2 rounded-full bg-[#FD853A] flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hire Me */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[71px] py-20 lg:py-[122px] bg-[#F2F4F7] rounded-[32px] lg:rounded-[50px] gap-12 lg:gap-[96px]">
        <div className="relative w-full max-w-[500px] aspect-square group mx-auto lg:mx-0">
          <Image
            src="/Property 1=Default.svg"
            alt="Hire me"
            fill
            className="object-contain z-10 transition-all duration-300 ease-in-out group-hover:translate-y-3"
            priority
          />

          <Image
            src="/Property 1=Variant2.svg"
            alt="Hire me"
            fill
            className="object-contain absolute -translate-y-[15px] transition-all duration-300 ease-in-out opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110"
            priority
          />
        </div>

        <div className="w-full max-w-xl flex flex-col items-start gap-8">
          <div className="flex flex-wrap text-4xl sm:text-5xl lg:text-6xl font-semibold gap-2">
            <CustomeText title="Why" className="text-[#344054]" />
            <CustomeText title="Hire me" className="text-[#FD853A]" />
            <CustomeText title="?" className="text-[#344054]" />
          </div>

          <p className="text-[#98A2B3] text-base sm:text-lg lg:text-xl leading-relaxed max-w-md">
            I enjoy solving real-world business problems by combining modern
            frontend development, scalable backend architecture, cloud
            technologies and AI integrations.
          </p>

          <div className="flex flex-wrap gap-x-12 gap-y-8 w-full">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <CustomeText
                  title={stat.title}
                  className="text-[32px] sm:text-[36px] font-medium text-[#1D2939]"
                />
                <CustomeText
                  title={stat.label}
                  className="text-lg text-[#667085]"
                />
              </div>
            ))}
          </div>

          <ClientOnly>
            <button className="w-full cursor-pointer sm:w-auto px-6 py-4 rounded-[20px] border border-[#151515] text-[#151515] font-semibold text-2xl sm:text-[28px] transition-all duration-300 hover:bg-[#151515] hover:text-white">
              Hire me
            </button>
          </ClientOnly>
        </div>
      </div>

      {/* Portfolio */}
      <div id="projects" className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-[71px] py-12 sm:py-20 gap-10 lg:gap-12">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col items-start max-w-full lg:max-w-[643px]">
            <CustomeText
              title="Lets Have a look at"
              className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#344054]"
            />
            <div className="flex items-start justify-start gap-4 flex-wrap">
              <CustomeText
                title="my"
                className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#344054]"
              />
              <CustomeText
                title="Portfolio"
                className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#FD853A]"
              />
            </div>
          </div>

          <div className="shrink-0">
            <OrangeButton title="See All" />
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-10 lg:gap-12 max-w-[1290px]">
          <GenericSlider
            data={portfolioData}
            slidesPerView={2}
            heightClass="h-auto"
            cardType="portfolio"
          />

          <div className="w-full max-w-[947px] flex flex-wrap justify-center gap-4 sm:gap-[14px] items-center">
            <ClientOnly>
              {buttons.map((text, index) => (
                <button
                  key={index}
                  className="px-6 sm:px-8 py-3 rounded-[24px] bg-[#F2F4F7] text-[#000000] text-[16px] sm:text-[18px] lg:text-[20px] hover:bg-[#FD853A] hover:text-white transition-colors duration-300"
                >
                  {text}
                </button>
              ))}
            </ClientOnly>
          </div>

          <div className="flex flex-col w-full max-w-[742px] items-start gap-6 px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row w-full items-start sm:items-center gap-4 sm:gap-[18px]">
              <CustomeText
                title="Bynaus AI - Construction Management Platform"
                className="font-bold text-[28px] sm:text-[32px] lg:text-[40px] text-[#344054]"
              />
              <div className="w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] rounded-full bg-[#FD853A] hidden md:flex items-center justify-center transition-all duration-300">
                <ArrowButton className="transition-all duration-300 stroke-white -rotate-45" />
              </div>
            </div>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#344054] text-center sm:text-left">
              An AI-powered construction management platform featuring OCR, vector search, voice reporting and a microservices architecture built with React, Node.js, AWS, Docker, MongoDB and PostGIS.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative flex flex-col w-full min-h-[900px] items-center px-4 sm:px-6 lg:px-[71px] py-12 sm:py-[96px]  gap-12 bg-[#171717] overflow-hidden">
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

        <div className="absolute bottom-[20%] left-0 right-0 w-full z-10">
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
            className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#344054]"
          />
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <CustomeText
              title="Amazing"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#344054]"
            />
            <CustomeText
              title="Together"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#FD853A]"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl flex md:flex-row items-center justify-between gap-4 px-3 py-2 md:px-6 md:py-4 rounded-full border border-[#E4E7EC] bg-white">
          <div className="w-9 h-9 md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full bg-[#FFEAD5] shrink-0">
            <Image
              src="/sms.svg"
              alt="message icon"
              width={24}
              height={24}
            />
          </div>

          <ClientOnly>
            <input
              type="text"
              placeholder="Enter Email Address"
              className="w-full md:flex-1 px-4 py-2 rounded-full text-center md:text-left text-base sm:text-lg outline-none bg-transparent text-[#1D2939] placeholder:text-[#667085]"
            />

            <button className="w-fit px-6 md:px-12 py-1 md:py-3 rounded-full bg-[#FD853A] hover:bg-[#e4752f] text-white text-lg font-semibold transition duration-300">
              Send Message
            </button>
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
      <div id="skills" className="relative w-full h-[147px] bg-[#FB6514] rounded-tl-4xl rounded-br-4xl overflow-hidden">
        <div className="absolute w-[5000px] h-[63px] bg-white -rotate-2 -mt-2 md:mt-0 md:-rotate-[1.9deg] z-10 -ml-2 flex items-center">
          <div className="marquee flex gap-8 w-max">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-5 text-[#000000] text-[48px] whitespace-nowrap"
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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

    </div>
  );
}