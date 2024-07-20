import { Fragment } from "react/jsx-runtime";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import data from "../data/projects.json";

export default function Projects() {
  return (
    <>
      <div
        className="w-full md:max-w-3xl lg:max-w-6xl mx-auto px-5 text-white my-40 lg:my-40"
        id="projects"
        data-aos="fade-up"
      >
        <div className="text-slate-200 font-semibold text-center text-2xl mb-10">
          Projects
        </div>
        <div className="flex flex-col gap-16">
          {data.map((project, index) => (
            <Fragment key={index}>
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-7"
                data-aos="fade-up"
              >
                <div className="row-start-2 lg:row-start-1">
                  <h1 className="font-semibold mb-2">{project.title}</h1>
                  <div className="flex gap-2 mb-2">
                    {project.technologies.map((technology, index) => (
                      <Fragment key={index}>
                        <Badge variant="outline" className="text-slate-300">
                          {technology}
                        </Badge>
                      </Fragment>
                    ))}
                  </div>
                  <p className="text-slate-300">{project.description}</p>
                  <div className="flex gap-2">
                    {project.url && (
                      <Button
                        className={"mt-5 bg-cyan-600 rounded hover:bg-cyan-500"}
                        size={"sm"}
                      >
                        <a href={project.url} target="_blank">
                          View
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        className={"mt-5 bg-cyan-600 rounded hover:bg-cyan-500"}
                        size={"sm"}
                      >
                        <a href={project.github} target="_blank">
                          Github
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt="project"
                    className="rounded-xl transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-2"
                  />
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
