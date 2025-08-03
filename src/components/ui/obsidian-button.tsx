import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const obsidianButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sharp-transition angular-border uppercase tracking-wide",
  {
    variants: {
      variant: {
        command: "bg-abyss-black text-obsidian-white border border-obsidian-white/20 hover:border-crimson-glow hover:text-crimson-glow hover:shadow-[0_0_20px_hsl(var(--crimson-glow)/0.3)] font-command font-bold",
        directive: "bg-iron-grey text-obsidian-white border border-iron-grey hover:bg-obsidian-white hover:text-abyss-black font-directive",
        ghost: "text-submission-ash hover:bg-iron-grey/20 hover:text-obsidian-white border border-transparent hover:border-iron-grey/30",
        shard: "bg-gradient-to-br from-abyss-black to-iron-grey/50 text-obsidian-white border border-crimson-glow/30 hover:border-crimson-glow crimson-glow obsidian-surface"
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "command",
      size: "default",
    },
  }
)

export interface ObsidianButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof obsidianButtonVariants> {
  asChild?: boolean
}

const ObsidianButton = React.forwardRef<HTMLButtonElement, ObsidianButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(obsidianButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
ObsidianButton.displayName = "ObsidianButton"

export { ObsidianButton, obsidianButtonVariants }