export default function UnderscoredText({ text, className, children }) {  
  return (
    <div className='relative flex items-baseline gap-1'>
      <div className={`w-8 h-0.5 bg-(--text-muted) relative overflow-hidden`} />
      <h1 className={`text-(--text) text-5xl font-inter ${className}`}>{text}</h1>
      {children && <div className='ml-4 flex absolute -bottom-5 sm:static items-center gap-2'>{children}</div>}
    </div> 
  );
}