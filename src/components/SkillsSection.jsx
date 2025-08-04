import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 98, category: "Frontend" },
  { name: "JavaScript", level: 95, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Angular", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },

  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Express.js", level: 90, category: "Backend" },
  { name: "MongoDB", level: 95, category: "Backend" },

  { name: "Insomnia", level: 90, category: "Tools" },
  { name: "Git", level: 95, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : " bg-secondary/70 text-foreground hover: bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <h3 className="text-xl font-semibold ">{skill.name}</h3>
              <div className="mb-4">
                {typeof skill.level === "number" ? (
                  <div>
                    <div className="flex justify-between text-sm mb-1 text-gray-600 dark:text-gray-400">
                      <span>Level</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">
                    Level: {skill.level}
                  </p>
                )}
              </div>

              <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
