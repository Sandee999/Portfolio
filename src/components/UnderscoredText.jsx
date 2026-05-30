import Tooltip from "./ToolTip";

export default function UnderscoredText({ text, className, children, tooltip }) {  
  return (
    <div className='flex flex-wrap items-baseline gap-2'>
      <div className="flex items-baseline gap-1">
        <div className={`w-8 h-0.5 bg-(--text-muted) overflow-hidden`} />
        {tooltip ?
          <Tooltip content={tooltip}>
            <h1 className={`text-(--text) text-5xl font-inter ${className}`}>{text}</h1>
          </Tooltip>
          :
          <h1 className={`text-(--text) text-5xl font-inter ${className}`}>{text}</h1>
        }
      </div>
      {children && <div className='ml-4 flex items-center gap-2'>{children}</div>}
    </div> 
  );
}