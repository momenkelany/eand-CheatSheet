import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Card } from "./ui/card";

interface DetailCardProps {
  title: string;
  description: string;
}

export default function DetailCard({ title, description }: DetailCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
  className={`relative overflow-visible transition-all duration-300 bg-gradient-to-br from-card to-card/60 border border-chart-1/20 hover:border-chart-1 hover:-translate-y-1 hover:shadow-[0_20px_40px_var(--tw-shadow-color)] hover:shadow-chart-1/10 ${
        isExpanded ? "border-chart-1" : ""
      }`}
      data-testid={`card-detail-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
  <div className="absolute inset-0 bg-gradient-to-br from-chart-1/10 to-chart-1/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
      
      <div className="relative p-4 sm:p-6">
        <div
          className="flex items-start justify-between gap-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 rounded-md"
          role="button"
          tabIndex={0}
          onClick={() => setIsExpanded(!isExpanded)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }
          }}
          aria-expanded={isExpanded}
        >
          <h3 
            className="flex-1 font-semibold text-chart-1 text-sm sm:text-base leading-snug"
            data-testid={`text-detail-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
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
            className="mt-4 pt-4 border-t border-chart-1/20 text-sm text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300"
            data-testid={`text-detail-description-${title.replace(/\s+/g, '-').toLowerCase()}`}
          >
            {description}
          </div>
        )}
      </div>
    </Card>
  );
}
