import { Github, Linkedin, MailIcon } from "lucide-react"
import {cn} from "@/lib/utils"

export const Contact = () => {
    return <section id="contact" className="py-4 px-4 relative bg-secondary">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center hover:italic"> Contact</h2>
                <div className="space-y-8">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <a href="mailto:egkushelevsky@gmail.com">
                                <div className="p-3 rounded-full bg-primary/20 hover:outline hover:outline-1 hover:outline-primary">
                                    <MailIcon className="h-6 w-6 text-primary" />
                                </div>
                            </a>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a 
                                  href="mailto:egkushelevsky@gmail.com" 
                                  className="text-muted-foreground hover:text-primary transition-colors hover:italic">
                                    egkushelevsky@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <a href="https://github.com/egkushelevsky">
                                <div className="p-3 rounded-full bg-primary/20 hover:outline hover:outline-1 hover:outline-primary">
                                    <Github className="h-6 w-6 text-primary" />
                                </div>
                            </a>
                            <div>
                                <h4 className="font-medium">GitHub</h4>
                                <a 
                                  href="https://github.com/egkushelevsky" 
                                  className="text-muted-foreground hover:text-primary transition-colors hover:italic">
                                    github.com/egkushelevsky
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <a href="https://www.linkedin.com/in/egkushelevsky/">
                                <div className="p-3 rounded-full bg-primary/20 hover:outline hover:outline-1 hover:outline-primary">
                                    <Linkedin className="h-6 w-6 text-primary" />
                                </div>
                            </a>
                            <div>
                                <h4 className="font-medium">LinkedIn</h4>
                                <a 
                                  href="https://www.linkedin.com/in/egkushelevsky"
                                  className="text-muted-foreground hover:text-primary transition-colors hover:italic">
                                    linkedin.com/in/egkushelevsky
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
}