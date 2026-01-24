import { FileUser, Linkedin } from "lucide-react"
import ProfileImageUrl from "../../assets/images/profile.jpeg";

export const About = () => {
    return <section id="about" className="py-24 px-4 relative">
        {""}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold md:text-4xl mb-12 text-center hover:italic">
                About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                <div>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    I am a junior at Barnard College of Columbia University. I am studying computer science with minors in math
                    and Russian. I'm primarily interested in systems and security. My goal is always 
                    to create a positive impact on other people through my work.
                    <br />
                    <br />            
                    For summer 2025, I was a security intern at <a 
                                href="https://www.thehealthcolab.com/" className="hover:italic"
                                >The Health Co-Lab</a>, a consulting firm working with community-based healthcare organizations.
                    I've also been a TA for two Columbia CS classes: <a href = "https://cs3157.github.io/www/2025-9/" className="hover:italic" >
                        Advanced Programming
                        </a> and <a href = "https://cs4157.github.io/www/2026-1/" className="hover:italic" >
                        Advanced Systems Programming
                        </a>.
                    </p>

                    { /*
                    <div className=" py-6 flex items-center justify-center space-x-4 hover:italic">
                        <a href="https://drive.google.com/file/d/1syGSPmgL0LuqFkbkaQRX_DRPnNkhvDfX/view?usp=sharing">
                            <div className="p-3 rounded-full bg-primary/20 hover:outline hover:outline-1 hover:outline-primary">
                                <FileUser className="h-6 w-6 text-primary" />
                            </div>
                         </a>
                            <div>
                                <a 
                                href="https://drive.google.com/file/d/1syGSPmgL0LuqFkbkaQRX_DRPnNkhvDfX/view?usp=sharing" 
                                className="font-medium"
                                >
                                    Resume
                                </a>
                            </div>
                    </div>
                        */}
                    
                    <div className=" py-6 flex items-center justify-center space-x-4 hover:italic">
                        <a href="https://www.linkedin.com/in/egkushelevsky">
                            <div className="p-3 rounded-full bg-primary/20 hover:outline hover:outline-1 hover:outline-primary">
                                <Linkedin className="h-6 w-6 text-primary" />
                            </div>
                        </a>
                            <div>
                                <a 
                                href="https://www.linkedin.com/in/egkushelevsky" 
                                className="text-muted-foreground hover:text-primary transition-colors hover:italic"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                        
                    </div>
                <img 
                  src= {ProfileImageUrl}
                  alt="Profile Picture"
                  className="w-full max-w-xs mx-auto rounded-lg object-cover shadow-md"
                  >
                  </img>
            </div>
        </div>
    </section>
}