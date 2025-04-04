import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="p-4 border rounded-lg">{children}</div>;
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn("p-4", className)} {...props}>
      {children}
    </div>
  );
}
