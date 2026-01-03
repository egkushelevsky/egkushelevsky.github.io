import { useState } from "react";
import { cn } from "@/lib/utils";

const courses = [
    { name: "Introduction to Computer Science and Programming in Java", code: "COMS-W1004", year: 2023, sem: "Fall 2023"},
    { name: "Introduction to Computational Thinking and Data Science", code: "COMS-BC1016", year: 2023, sem: "Fall 2023"},

    { name: "Data Structures & Algorithms", code: "COMS-W3134", year: 2024, sem: "Spring 2024"},
    { name: "Discrete Mathematics", code: "COMS-W3203", year: 2024, sem: "Spring 2024"},

    { name: "Advanced Programming", code: "COMS-W3157", year: 2024, sem: "Fall 2024"},
    { name: "Fundamentals of Computer Systems", code: "CSEE-W3827", year: 2024, sem: "Fall 2024"},

    { name: "Advanced Systems Programming", code: "COMS-W4157", year: 2025, sem: "Spring 2025"},
    { name: "Machine Learning", code: "COMS-W4771", year: 2025, sem: "Spring 2025"},

    { name: "Malware Analysis & Reverse Engineering", code: "COMS-W4186", year: 2025, sem: "Fall 2025"},
    { name: "Security I", code: "COMS-W4181", year: 2025, sem: "Fall 2025"},
    { name: "Computer Science Theory", code: "COMS-W3261", year: 2025, sem: "Fall 2025"},
    { name: "Making, Breaking Codes", code: "MATH-UN3025", year: 2025, sem: "Fall 2025"}
];

const years = [2025, 2024, 2023];

export const Courses = () => {
    const [activeYear, setActiveYear] = useState(2025);
    const filteredCourses = courses.filter((course) => activeYear === course.year);
    return (
        <section id="courses" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center hover:italic">
                    Courses
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {years.map((year, key) => (
                        <button 
                          key={key}
                          onClick={() => setActiveYear(year)}
                          className={cn(
                            "px-5 py-5 rounded-full transition-colors duration-300 capitalize hover:border hover:border-1 hover:border-primary",
                            activeYear === year ? "bg-primary/20 text-primary-foreground hover:italic"
                            : "bg-secondary/10 text-foreground hover:italic"
                          )}>{year}</button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {filteredCourses.map((course, key) => (
                        <div key={key} className="bg-primary/20 p-6 outline-1 outline-primary backdropp-blur-md rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h5 className="text-md">{course.sem}</h5>
                                <h3 className="font-bold text-lg"> {course.name}</h3>
                                <h4 className="text-md">{course.code}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}