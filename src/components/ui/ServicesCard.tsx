import Image from "next/image";

interface ServicesCardProps {
  title: string;
  description: string;
  tech: string[];
  imageSrc?: string;
  priority?: boolean;
}

export default function ServicesCard({
  title,
  description,
  tech,
  imageSrc,
  priority,
}: ServicesCardProps) {
  return (
    <div className="relative flex flex-col items-center justify-end w-full md:max-w-[320px] lg:max-w-[380px] h-[380px] lg:h-[440px] rounded-[30px] lg:rounded-[35px] bg-white/10 backdrop-blur-[15px] border border-white/50 hover:bg-[#FD853A] transition-colors duration-300 ease-in-out overflow-hidden cursor-pointer group">
      
      {/* Title (absolute top) */}
      <h1 className="absolute top-3 w-full h-[35px] sm:h-[40px] md:h-[45px] lg:h-[55px] flex items-start font-medium text-[18px] md:text-[20px] lg:text-[26px] text-white z-30 border-b-2 border-[#F9FAFB]/30">
        <span className="relative lg:top-2 left-6">{title}</span>
      </h1>

      {/* Decorative Backgrounds */}
      {imageSrc ? (
        <div className="absolute w-[90%] lg:w-[320px] h-[250px] lg:h-[280px] rounded-[25px] lg:rounded-[30px] overflow-hidden mb-2 sm:mb-3 md:mb-4 lg:mb-5">
          <Image
            src={imageSrc}
            alt={title}
            fill
            priority={priority}
            className="object-cover opacity-70"
            sizes="(max-width: 768px) 90vw, 320px"
          />
        </div>
      ) : (
        <>
          <div className="absolute w-[80%]  lg:w-[280px] h-[260px]  lg:h-[280px] rounded-[25px] lg:rounded-[30px] bg-[#757575] opacity-50 mb-2 sm:mb-3 md:mb-4 lg:mb-5"></div>
          <div className="absolute w-[90%]  lg:w-[320px] h-[250px]  lg:h-[280px] rounded-[25px] lg:rounded-[30px]  bg-[#9E9D9D]"></div>
        </>
      )}

      {/* Content */}
      <div className="relative z-20 w-[90%] flex flex-col items-center justify-end gap-4 px-6 pb-8">
        <p className="text-white text-[13px] sm:text-sm lg:text-[15px] leading-relaxed text-center">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-white/15 border border-white/30 text-white text-[11px] lg:text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
