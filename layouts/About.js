import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import ImageFallback from "./components/ImageFallback";
import { 
  FaGraduationCap, 
  FaUniversity, 
  FaCalendarAlt, 
  FaAward, 
  FaCheckCircle,
  FaCode
} from "react-icons/fa";

const About = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, image, education, experience } = frontmatter;

  return (
    <section className="section mt-16">
      <div className="container">
        {/* Profile Image & Header */}
        {image && (
          <div className="mb-10 flex justify-center">
            <ImageFallback
              src={image}
              width={400}
              height={500}
              alt={title}
              className="mx-auto max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] h-auto rounded-2xl object-cover shadow-2xl border-2 border-primary/20 dark:border-darkmode-border transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        )}
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          {markdownify(title, "h1", "h1 text-center lg:text-[48px] font-bold text-dark dark:text-darkmode-light")}
        </div>

        {/* Bio Content */}
        <div className="content max-w-4xl mx-auto text-left leading-relaxed text-lg">
          <MDXRemote {...mdxContent} components={shortcodes} />
        </div>

        {/* Education & Experience Grid */}
        <div className="row mt-20 text-left items-start gap-y-12">
          {/* Formal Education Card Column */}
          <div className="lg:col-6 w-full">
            <div className="rounded-2xl border border-border p-6 sm:p-8 dark:border-darkmode-border bg-white dark:bg-darkmode-theme-dark/40 shadow-sm">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border dark:border-darkmode-border">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <FaGraduationCap className="text-2xl" />
                </div>
                {markdownify(education.title, "h2", "text-2xl font-bold text-dark dark:text-darkmode-light m-0")}
              </div>

              {/* Timeline Container */}
              <div className="relative pl-6 border-l-2 border-primary/30 dark:border-primary/40 space-y-6">
                {education.degrees.map((degree, index) => {
                  const degreeTitle = degree.title || degree.university;
                  const institution = degree.institution || degree.content;
                  const year = degree.year;
                  const result = degree.result;

                  return (
                    <div 
                      key={"degree-" + index}
                      className="group relative rounded-xl border border-border bg-theme-light/40 dark:bg-darkmode-theme-dark/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary dark:border-darkmode-border"
                    >
                      {/* Timeline Dot */}
                      <span className="absolute -left-[31px] top-6 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-white dark:ring-darkmode-theme-dark">
                        <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                      </span>

                      {/* Header: Title */}
                      <h3 className="text-base sm:text-lg font-bold text-dark dark:text-darkmode-light group-hover:text-primary transition-colors mb-2">
                        {degreeTitle}
                      </h3>

                      {/* Institution */}
                      {institution && (
                        <p className="text-sm text-text/80 dark:text-darkmode-text/80 font-medium flex items-start gap-2 mb-3">
                          <FaUniversity className="text-primary mt-1 flex-shrink-0 text-xs" />
                          <span>{institution}</span>
                        </p>
                      )}

                      {/* Year & Score Badges */}
                      <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-border/60 dark:border-darkmode-border/60">
                        {year && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                            <FaCalendarAlt className="text-[11px]" />
                            {year}
                          </span>
                        )}
                        {result && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            <FaAward className="text-[11px]" />
                            {result}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Experience / Skills Column */}
          <div className="experience lg:col-6 w-full">
            <div className="rounded-2xl border border-border p-6 sm:p-8 dark:border-darkmode-border bg-white dark:bg-darkmode-theme-dark/40 shadow-sm">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border dark:border-darkmode-border">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <FaCode className="text-2xl" />
                </div>
                {markdownify(experience.title, "h2", "text-2xl font-bold text-dark dark:text-darkmode-light m-0")}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {experience?.list?.map((item, index) => (
                  <div
                    className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-theme-light/40 dark:bg-darkmode-theme-dark/80 dark:border-darkmode-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary"
                    key={"experience-" + index}
                  >
                    <FaCheckCircle className="text-primary text-lg flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold text-dark dark:text-darkmode-light group-hover:text-primary transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
