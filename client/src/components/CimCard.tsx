import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { Card } from "./ui/card";

interface CimCardProps {
  title: string;
  description: string;
}

export default function CimCard({ title, description }: CimCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const lastTapRef = useRef<number | null>(null);

  const handleClick = () => {
    const now = Date.now();
    if (!isExpanded) {
      // Open on single tap
      setIsExpanded(true);
      lastTapRef.current = now;
      return;
    }

    // isExpanded === true -> require double-tap to close
    if (lastTapRef.current && now - lastTapRef.current <= 300) {
      setIsExpanded(false);
      lastTapRef.current = null;
    } else {
      // first tap while expanded: record time and wait for second tap
      lastTapRef.current = now;
    }
  };

  return (
    <Card
      className={`relative overflow-visible cursor-pointer transition-all duration-300 bg-gradient-to-br from-card to-card/60 border border-chart-1/20 hover:border-chart-1 hover:-translate-y-1 hover:shadow-[0_20px_40px_var(--tw-shadow-color)] hover:shadow-chart-1/10 ${
        isExpanded ? "border-chart-1" : ""
      }`}
      onClick={handleClick}
      data-testid={`card-cim-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-chart-1/10 to-chart-1/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
      
      <div className="relative p-4 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 
            className="flex-1 font-semibold text-chart-1 text-sm sm:text-base leading-snug"
            data-testid={`text-cim-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
          >
            {title}
          </h3>
          <ChevronDown
            className={`h-5 w-5 flex-shrink-0 text-chart-1 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        {isExpanded && (
          <div
            className="mt-4 pt-4 border-t border-chart-1/20 text-sm text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300 whitespace-pre-line"
            data-testid={`text-cim-description-${title.replace(/\s+/g, '-').toLowerCase()}`}
            style={{'--link-hover-color': 'hsl(var(--chart-1))'} as React.CSSProperties}
          >
            {description}
          </div>
        )}
      </div>
    </Card>
  );
}