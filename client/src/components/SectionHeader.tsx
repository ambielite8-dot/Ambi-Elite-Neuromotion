import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, className, align = "left" }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 space-y-4", align === "center" && "text-center", className)}>
      <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h1>
      {subtitle && (
        <div className="h-1 w-20 bg-primary/20 rounded-full mt-6" />
      )}
      {subtitle && (
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
