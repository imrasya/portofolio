import React from "react";
import { cn } from "../lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)] rounded-none px-4 py-2 focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0)] w-full transition-all",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input }; 