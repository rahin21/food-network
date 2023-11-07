import * as React from "react"
import {BiSearch} from "react-icons/bi"
import { cn } from "@/lib/utils"
import Button from "./button"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex">
      <input
        type={type}
        className={cn(
          "flex h-10 w-[24rem] rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
      <Button cl="absolute" ><BiSearch /></Button>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
