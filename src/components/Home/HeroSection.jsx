import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 font-stix">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl tracking-tight">
                    <span className="opacity-0 animate-fade-in text-primary text-bold hover:italic">Elizabeth Kushelevsky</span>
                </h1>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </div>
    </section>
}