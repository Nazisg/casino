export default function Footer() {
  return (
    <footer className="px-4 pt-5 lg:pt-20 pb-5 text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:gap-16">

        {/* Top Section: Brand & Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 lg:gap-10">
          {/* Brand Info */}
          <div className="max-w-lg">
            <h2 className="font-bold text-xl lg:text-2xl mb-2">Brand Name</h2>
            <p className="opacity-60 text-sm lg:text-base">
              Your trusted guide to the best online casinos in the UK. We review and compare top casino sites to help you find the perfect gaming experience with the best bonuses and promotions.
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap gap-6 font-bold text-sm lg:text-base">
            <li><a href="#top-casinos" >Top Casinos</a></li>
            <li><a href="#about-us" >About Us</a></li>
            <li><a href="#terms" >Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Middle Section: Placeholder Logos */}
        <div className="flex flex-wrap justify-center gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-[#D9D9D9] w-[137px] h-[43px]"></div>
          ))}
        </div>

        {/* Bottom Section: Copyright */}
        <div className="w-full text-center opacity-50 text-sm lg:text-base">
          ©2025 All Rights Reserved By “sitename”
        </div>

      </div>
    </footer>
  );
}
