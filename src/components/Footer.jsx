import { ArrowUp } from "lucide-react"


export const Footer = () => {
    return (
        <footer className="py-12 px-4 relative mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground"> 
                &copy; {new Date().getFullYear()} Elizabeth Kushelevsky
            </p>
            <a href="#top" className="p-2 rounded-full bg-primary/10 transition-colors text-primary hover:bg-primary/20 hover:outline hover:outline-1 hover:outline-primary">
                <ArrowUp size={20}/>
            </a>
        </footer>
    )
}