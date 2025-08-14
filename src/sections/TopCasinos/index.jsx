import Card from "@/components/Card";

export default function TopCasinos() {
    return (
        <section id="top-casinos" className="min-h-screen py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col xl:gap-6 gap-10">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    );
}
