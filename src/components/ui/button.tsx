import * as React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { cva, type VariantProps } from "class-variance-authority"; // Correct import
import { cn } from "../../lib/utils"; // Ensure cn utility function is available

// Define buttonVariants using cva for class variance
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", 
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default", // default variant if not provided
      size: "default",    // default size if not provided
    },
  }
);

// Define ButtonProps interface
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon"; // Fixed size variants
  asChild?: boolean; // If true, render the button as a span instead of button
}

// Button component implementation
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    // Dynamically choose the component (button or span based on asChild prop)
    const Component = asChild ? "span" : "button"; 
    return (
      <Component
        className={cn(buttonVariants({ variant, size }), className)} // Merge classes with cn
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button"; // Helpful for debugging

export { Button, buttonVariants };
