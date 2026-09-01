import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaCodeBranch } from "react-icons/fa";

const Projects = ({ data }) => {
  const { frontmatter } = data;
  const { title, projects } = frontmatter;

  return (
    <section className="section mt-12">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          {markdownify(title, "h1", "h1 font-bold text-dark dark:text-darkmode-light mb-4")}
          <p className="text-text/80 dark:text-darkmode-text/80 text-lg">
            A showcase of software engineering applications, backend microservices, and AI integrations I have built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects?.map((item, index) => (
            <div
              key={"project-" + index}
              className="group rounded-2xl border border-border bg-white dark:bg-darkmode-theme-dark/50 p-6 dark:border-darkmode-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    <FaCodeBranch className="text-[11px]" />
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-dark dark:text-darkmode-light group-hover:text-primary transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-text/80 dark:text-darkmode-text/80 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tech?.map((techItem, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-theme-light dark:bg-darkmode-theme-dark text-dark/70 dark:text-darkmode-light/70 border border-border/50 dark:border-darkmode-border/50"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/60 dark:border-darkmode-border/60">
                  {item.github && item.github !== "#" && (
                    <Link
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-dark dark:text-darkmode-light hover:text-primary transition-colors"
                    >
                      <FaGithub className="text-base" /> Code
                    </Link>
                  )}
                  {item.demo && item.demo !== "#" && (
                    <Link
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
