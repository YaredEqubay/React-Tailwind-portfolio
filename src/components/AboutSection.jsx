import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3>
              Passionate Full Stack Web Developer by Skill & A Problem Solver by
              Habit
            </h3>
            <p className="text-muted-foreground">
              It usually starts with an idea, then comes the bugs, the
              confusion… and finally, that one small “yes!” moment.
            </p>

            <p className="text-muted-foreground">
              I enjoy building websites from scratch and I specialize in MERN
              stack. Most of the learning came from late nights, endless tabs
              and coffee that never stayed hot. I’m not perfect, but every line
              I write gets me one step better than yesterday.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>

              <a
                href="/Yared-Ekubay-Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-white hover:bg-primary/10 transition-colors duration-300 cosmic-button"
               download
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    Front-end Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive and dynamic user interfaces using
                    React.Js, Tailwind CSS and modern Javascript.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Back-end Development
                    </h4>
                    <p className="text-muted-foreground">
                      Building robust and scalable server-side applications and
                      APIs using Node.js, Express,MongoDB and other
                      technologies.
                    </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    Full Stack Integration
                  </h4>
                  <p className="text-muted-foreground">
                    Integrating front-end and back-end components to create
                    interactive and dynamic web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
