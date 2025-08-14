export default function Card() {
    return (
        <div className="relative bg-[#101010] rounded-[12px] xl:p-8 py-2 grid xl:grid-cols-5 grid-cols-2 gap-5">
            {/* Gradient bottom border */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#6600FF] to-[#00E5FF] rounded-b-full"></div>

            {/* Card Icon */}
            <div className="col-span-1 flex xl:items-center justify-center">
                <img src="/icons/card-icon.svg" alt="card-icon" />
            </div>

            {/* Expert Rating */}
            <div className="col-span-1 flex flex-col gap-2 items-center justify-center">
                <p className="opacity-50 text-[12px] xl:text-[16px]">Expert Rating</p>
                <div className="flex gap-1 items-center">
                    {Array(5)
                        .fill()
                        .map((_, i) => (
                            <img
                                key={i}
                                src="/icons/rating-star.svg"
                                alt="star"
                                className="w-4 h-4"
                            />
                        ))}
                </div>
                <h4 className="xl:text-[24px] font-bold">4.9</h4>
            </div>

            {/* Min Deposit */}
            <div className="col-span-1 flex flex-col gap-1 xl:gap-2 xl:items-center justify-center order-3 xl:order-2">
                <p className="opacity-50 text-[12px] xl:text-[16px]">Min Deposit</p>
                <h4 className="xl:text-[24px] font-bold">$20</h4>
                <div className="flex gap-1 flex-wrap xl:justify-center">
                    {["Visa", "MasterCard", "PayPal"].map((method, i) => (
                        <div
                            key={i}
                            className="text-[#00E5FF] px-1 xl:py-1 xl:px-2 rounded-[12px] border border-[#00E5FF] text-[10px] xl:text-[12px]"
                        >
                            {method}
                        </div>
                    ))}
                </div>
            </div>

            {/* Welcome Bonus */}
            <div className="col-span-1 flex flex-col gap-2 xl:items-center justify-center order-2 xl:order-3">
                <p className="opacity-50 text-[12px] xl:text-[16px]">Welcome Bonus</p>
                <h4 className="xl:text-[24px] xl:text-center font-bold">
                    Up to $1,200 Welcome Bonus
                </h4>
            </div>

            {/* Button */}
            <div className="col-span-2 xl:col-span-1 flex items-center order-4">
                <button className="font-bold py-2 px-10 w-full xl:w-auto rounded-[8px] bg-gradient-to-r from-[#6600FF] to-[#00E5FF] cursor-pointer">
                    Get Bonus
                </button>
            </div>
        </div>
    );
}
