import GithubLogo from '@/assets/socials/github.png';
import MailLogo from '@/assets/socials/mail.png';
import UnderscoredText from '@/components/UnderscoredText';
import SkillSet from '@/components/SkillSet';
import Skills from '@/data/skills.json' with { type: 'json' };
import { DisplayProject } from '@/components/DisplayProject';
import Projects from '@/data/projects.json' with { type: 'json' };
import Tooltip from './components/ToolTip';
import JntuhLogo from "@/assets/JNTUH.png";

function App() {
  const aboutMeToolTip = "Hi, I'm Talatam Venkata Sandeep. While design isn't my strongest suit, \
  I excel at coding and enjoy building efficient, reliable software solutions.";
  const webDevToolTip = "With my experience in React and Tailwind CSS, \
  I bring ideas to life by building websites that deliver seamless user experiences.";
  const mobileDevToolTip = "Using React Native, I build fast and responsive mobile applications for Android.\
   I have not yet developed for iOS due to resource constraints.";

  return (
    <div className="w-full min-h-screen text-(--text) dot-background">
      <section className="w-full h-16 items-center justify-end px-10 gap-6 fixed top-0 left-0 z-50 hidden sm:flex">
        <a href="#home" className="text-(--text-muted) hover:text-(--text) transition-colors duration-300">Home</a>
        <a href="#skills" className="text-(--text-muted) hover:text-(--text) transition-colors duration-300">Skills</a>
        <a href="#projects" className="text-(--text-muted) hover:text-(--text) transition-colors duration-300">Projects</a>
        <a href="#contact" className="text-(--text-muted) hover:text-(--text) transition-colors duration-300">Contact</a>
      </section>
      <section id="home" className="w-full h-screen mb-10 flex flex-col items-center justify-center">
        <div className='w-[80%] h-[80%] flex flex-col justify-center'>
          <UnderscoredText text="Sandeep" tooltip={aboutMeToolTip}>
            <div className='animate-ping w-1 h-1 bg-green-600 rounded-full' />
            <p className='font-open-sans text-xs text-(--text-muted-dim)'> Open to Software Engineering Internship Opportunities</p>
          </UnderscoredText>
          <Tooltip content="Currently pursuing an Integrated Dual Degree (B.Tech + M.Tech) in Computer Science and Engineering at JNTUH, Hyderabad." image={JntuhLogo}>
            <h3 className='text-(--text-muted) text-lg font-inter mt-6'>A University Student In Hyderabad, India.</h3>          
          </Tooltip>
          <h4 className='flex flex-wrap items-center gap-2 text-(--text-muted) text-lg font-inter font-light mt-4'>
            <Tooltip content={webDevToolTip}>
              <span>Web Development</span>
            </Tooltip>
            <span className='text-6xl hidden sm:inline'>{"\u00B7"}</span>
            <Tooltip content={mobileDevToolTip}>
              <span>Mobile Development</span>
            </Tooltip>
          </h4>
          <div className='flex items-center gap-4 mt-8'>
            <a href="mailto:venkatasandeeptalatam@gamil.com" target='_blank'>
              <div className='px-4 py-2 group flex gap-3 items-center'>
                <img src={MailLogo} alt="Mail" className='w-5 brightness-0 invert' />
                <p className='text-(--text) text-base group-hover:underline'>Mail</p>
              </div>
            </a>
            <a href="https://www.github.com/sandee999" target='_blank'>
              <div className='px-4 py-2 group flex gap-3 items-center'>
                <img src={GithubLogo} alt="GitHub" className='w-5 brightness-0 invert' />
                <p className='text-(--text) text-base group-hover:underline'>Github</p>
              </div>
            </a>
          </div>
        </div>
        <div className='relative bottom-10 flex flex-col items-center gap-2'>
          <p className='text-(--text-muted) text-sm font-roboto font-light'>Scroll Down</p>
          <div className="arrow w-6 h-6"/>
        </div>
      </section>
      <section id="skills" className="relative w-full flex flex-col items-center justify-center">
        <UnderscoredText text="Skills" className='text-6xl font-thin' />
        <div className='mt-10 mb-20 w-[80%] grid grid-cols-1 md:grid-cols-2 gap-10'>
          <SkillSet title="Languages" arrSkills={Skills.language} />
          <SkillSet title="Tools" arrSkills={Skills.tools} />
          <SkillSet title="Mobile Development" arrSkills={Skills.mobileDevelopment} />
          <SkillSet title="Web Development" arrSkills={Skills.webDevelopment} />
        </div>
      </section>
      <section id="projects" className="w-full pb-10 flex flex-col items-center">
        <UnderscoredText text="Projects" className='text-6xl font-thin' />
        {Projects.projects.map((project, index) => (
          <DisplayProject key={index} project={project} reverse={index % 2 !== 0} />
        ))}
      </section>
      <section id="contact" className="w-full py-16 flex flex-col items-center justify-center">
        <h2 className='text-4xl font-thin text-(--text-muted)'>Find Me</h2>
        <div className='flex flex-wrap items-center justify-center gap-6 mt-6'>
          <a href="mailto:venkatasandeeptalatam@gamil.com" target='_blank'>
            <div className='px-4 py-2 group flex gap-3 items-center'>
              <img src={MailLogo} alt="Mail" className='w-7 brightness-0 invert' />
              <p className='text-(--text) text-lg group-hover:underline'>Mail: venkatasandeeptalatam@gamil.com</p>
            </div>
          </a>
          <a href="https://www.github.com/sandee999" target='_blank'>
            <div className='px-4 py-2 group flex gap-3 items-center'>
              <img src={GithubLogo} alt="GitHub" className='w-7 brightness-0 invert' />
              <p className='text-(--text) text-lg group-hover:underline'>Github: github.com/sandee999</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/sandee999" target='_blank'>
            <div className='px-4 py-2 group flex gap-3 items-center'>
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className='w-7 brightness-0 invert' />
              <p className='text-(--text) text-lg group-hover:underline'>LinkedIn: linkedin.com/in/sandee999</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
