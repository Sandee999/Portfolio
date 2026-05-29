export default function SkillSet({ title, arrSkills }) {
  const skillElements = arrSkills.map((skill, index) => (
    <div key={index} className='flex flex-col items-center justify-center'>
      <img src={skill.image} alt={skill.name} className='w-5' />
      <p className='text-center text-(--text-muted) text-sm font-open-sans mt-2'>{skill.name}</p>
    </div>
  ));

  return (
    <div className='relative flex flex-col items-center px-10 pb-10 bg-(--bg) border border-(--border) rounded-2xl'>
      <p className='py-5 font-sans tracking-wider text-(--text)'>{title}</p>
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-6">
        {skillElements}
      </div>
    </div>
  );
}