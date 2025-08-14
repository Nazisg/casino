export default function AboutUs() {
  return (
    <section id="about-us" className="px-4 py-10 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="opacity-60 mb-3">About Us</p>
        <h2 className="font-bold text-[24px] lg:text-[36px] text-center">Everything You Need to Know</h2>

        <div className="relative bg-gradient-to-r from-[#6600FF] to-[#00E5FF] grid grid-cols-4 rounded-[12px] p-4 lg:p-14 mt-6 lg:mt-10 gap-4">
          {/* Text Section */}
          <div className="col-span-3 flex flex-col gap-4">
            <h3 className="text-[20px] lg:text-[40px] font-bold">Why You Trust “sitename”?</h3>
            <p className="text-[12px] lg:text-[16px]">
              We are a team of veteran casino players and industry experts dedicated to one mission: providing you with the most honest, comprehensive, and up-to-date online casino reviews. We cut through the noise to bring you only the best.
            </p>
          </div>

          {/* Image Section */}
          <div className="absolute bottom-0 lg:right-0  right-[-10px] col-span-1 flex justify-center items-center">
            <img src="/icons/3d-img.svg" alt="3d-image" className="w-[110px] lg:w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
