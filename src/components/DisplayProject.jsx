import UnderscoredText from "./UnderscoredText";

export function DisplayProject({ project, reverse }) {

  return(
    <div className={`w-full px-5 sm:px-10 py-20 flex flex-col ${reverse ? "items-end" : "items-start"}`}>
      <UnderscoredText text={project.name} className={"font-thin"} />
      <div className={`flex ${reverse ? "flex-row-reverse" : "flex-row"} sm:flex-nowrap flex-wrap mt-10 gap-10 items-center justify-center`}>
        <div className="flex flex-col gap-4">
          <p className="text-(--text-muted) text-lg font-roboto">{project.description}</p>
          <h6>Tech Stack:</h6>
          <div id="techStack" className="flex flex-wrap items-center gap-4">
            {project.techStack.map((tech, index) => (
              <p key={index} className="text-(--text-muted) text-sm font-roboto">{tech}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <img src={project.image} alt="Image is not available" className="max-h-72 h-auto rounded-lg object-cover" />
          <div className="flex items-center gap-4 justify-evenly">
            {project.githubLink && <a href={project.githubLink} target="_blank" className="text-(--text) text-lg font-inter hover:underline">
              Source
            </a>}
            {project.liveLink && 
            <a href={project.liveLink} target="_blank" className="flex items-center gap-2">
              <div className='animate-ping w-1 h-1 bg-green-600 rounded-full' />
              <p className="text-(--text) text-lg font-inter hover:underline">Live Demo</p>
            </a>}
          </div>
        </div>
      </div>
    </div>
  );
}