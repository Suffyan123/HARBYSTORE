import { infoStripData } from "@/data/infoStrip";

const InfoStripSection = () => {
  return (
    <section className="bg-(--white-ghost) flex justify-between items-center w-full">
      <div className="flex flex-col md:flex-row items-center md:justify-between px-10 pt-6 w-full">
        {infoStripData.map((item) => {
          const Icon = item.icon; // 👈 use directly, no lookup map needed
          return (
            <div key={item.id} className="flex items-center gap-3">
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-[#E6FAFB] text-black shrink-0">
                <Icon size={18} />
              </div>
              <span className="text-[14px] lg:text-[16px] font-normal text-black">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InfoStripSection;