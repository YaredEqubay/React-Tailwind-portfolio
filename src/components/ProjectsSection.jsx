const projects = [
  {
    id: 1,
    title: "KoloTemari Interactive E-Learning Platform",
    description:
      "Forget boring online courses, A digital classroom without walls where students and teachers meet, learn and grow together.",
    image: "/projects/pexels-pixabay-247819.jpg",
    tags: ["React", "TailwindCSS", "Node.js", "MongoDB", "Express"],
  },

  {
    id: 2,
    title: "JirehEstate Home Buying and Renting Web App",
    description:
      "Finding a home shouldn’t feel like searching for a needle in a haystack. JirehEstate makes renting and buying houses simple,visual and stress free.",
    image: "/projects/project-2.jpg",
    tags: ["React", "TailwindCSS", "Node.js", "MongoDB", "Express"],
  },

  {
    id: 3,
    title: "CargoFlow Logistics Web App",
    description:
      "A powerful admin dashboard for managing properties, users, and transactions with real-time analytics and user-friendly interface.",
    image: "/projects/projects-3.webp",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
  },

  {
    id: 4,
    title: "Gamoththo Mobile App",
    description:
      "From text to talk, Gamoththo makes three worlds speak as one smooth, clear and effortless.",
    image: "/projects/project-5.jpg",
    tags: ["Flutter", "JSON"]
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured
          <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are my projects, little pieces of my journey as a developer. Each
          one started as an idea, grew with a lot of trial and error and ended
          up teaching me something new.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Yaredequbay"
          >
            Check Out My Github
          </a>
        </div>
      </div>
    </section>
  );
};
