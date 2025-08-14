export default function Banner() {
    return (
        <section className="py-10 lg:py-20 px-4">
            <div className="max-w-7xl mx-auto lg:text-center">
                <h2 className="text-[32px] md:text-[48px] xl:text-[64px] font-bold mb-3 ">Find the Best UK Online Casinos</h2>
                <p className="opacity-60 lg:max-w-[90%] mx-auto  lg:text-center">Discover top-rated UK-licensed casino sites with exclusive bonuses, trusted reviews, and the latest games. Your ultimate guide to safe and exciting online gambling in the United Kingdom.</p>
                <div className="lg:w-[60%] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 justify-items-center">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="w-[48px] h-[48px] bg-[#00E5FF]/20 rounded-full flex items-center justify-center">
                                <img src="/icons/secure.svg" alt="secure-icon" />
                            </div>
                            <p className="text-[14px]">Vetted & Secure</p>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="w-[48px] h-[48px] bg-[#00E5FF]/20 rounded-full flex items-center justify-center">
                                <img src="/icons/star.svg" alt="secure-icon" />
                            </div>
                            <p className="text-[14px]">Exclusive Offers</p>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="w-[48px] h-[48px] bg-[#00E5FF]/20 rounded-full flex items-center justify-center">
                                <img src="/icons/crown.svg" alt="secure-icon" />
                            </div>
                            <p className="text-[14px]">Top-Rated Selection</p>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="w-[48px] h-[48px] bg-[#00E5FF]/20 rounded-full flex items-center justify-center">
                                <img src="/icons/game.svg" alt="secure-icon" />
                            </div>
                            <p className="text-[14px]">+1000 Games</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
