import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", asChild = false, children, ...props }, ref) => {
    const buttonClass = `inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 font-medium transition-colors hover:bg-black/90 ${className}`
    
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        className: buttonClass,
      })
    }
    
    return (
      <button
        ref={ref}
        className={buttonClass}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"