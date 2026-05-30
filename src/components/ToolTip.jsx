import { useState } from "react";

export default function Tooltip({ children, content, image }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children}

      {isOpen && (
        <div className="absolute -left-1 sm:left-40 top-full w-[20rem] z-50 bg-(--bg)">
          <div className="m-2 border p-4 flex flex-col items-center justify-center gap-3" >
          {image && 
            <img
              src={image}
              alt="JNUTH Logo"
              className="w-full object-contain"
            />
          }
          <p className="text-center text-sm text-(--text-muted) font-medium font-inter">
            {content}
          </p>
          </div>
        </div>
      )}
    </div>
  );
}