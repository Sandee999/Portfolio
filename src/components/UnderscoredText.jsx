export default function UnderscoredText({ text, className, children }) {  
  return (
    <div className='flex flex-wrap items-baseline gap-2'>
      <div className="flex items-baseline gap-1">
        <div className={`w-8 h-0.5 bg-(--text-muted) overflow-hidden`} />
        <h1 className={`text-(--text) text-5xl font-inter ${className}`}>{text}</h1>
      </div>
      {children && <div className='ml-4 flex items-center gap-2'>{children}</div>}
    </div> 
  );
}