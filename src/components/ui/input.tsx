import React from "react";
import { cn } from "../../lib/utils"; // Ensure the cn function is correctly imported

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string; // Optional className prop for custom styling
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className // Use the proper `className` here
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input"; // Setting the displayName for debugging

export { Input };
