import * as React from "react"
import { cn } from "@/lib/utils"

const ObsidianCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "obsidian-surface border border-iron-grey/30 angular-border p-6 shadow-sm obsidian-shard",
      className
    )}
    {...props}
  />
))
ObsidianCard.displayName = "ObsidianCard"

const ObsidianCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-0", className)} {...props} />
))
ObsidianCardHeader.displayName = "ObsidianCardHeader"

const ObsidianCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "heading-directive text-xl leading-none tracking-tight text-obsidian-white",
      className
    )}
    {...props}
  />
))
ObsidianCardTitle.displayName = "ObsidianCardTitle"

const ObsidianCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("body-text text-sm", className)}
    {...props}
  />
))
ObsidianCardDescription.displayName = "ObsidianCardDescription"

const ObsidianCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-0", className)} {...props} />
))
ObsidianCardContent.displayName = "ObsidianCardContent"

const ObsidianCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center pt-0", className)} {...props} />
))
ObsidianCardFooter.displayName = "ObsidianCardFooter"

export { ObsidianCard, ObsidianCardHeader, ObsidianCardFooter, ObsidianCardTitle, ObsidianCardDescription, ObsidianCardContent }