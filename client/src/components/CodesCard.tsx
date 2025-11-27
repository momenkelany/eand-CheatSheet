import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Card } from "./ui/card";
import Nl2Br from "./ui/nl2br";

interface CodesCardProps {
  title: string;
  description: string;
}

export default function CodesCard({ title, description }: CodesCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => setIsExpanded((prev) => !prev);

  return (
    <Card
      className={`relative overflow-visible transition-all duration-300 bg-gradient-to-br from-card to-card/60 border border-chart-6/20 hover:border-chart-6 hover:-translate-y-1 hover:shadow-[0_20px_40px_var(--tw-shadow-color)] hover:shadow-chart-6/10 ${
        isExpanded ? "border-chart-6" : ""
      }`}
      data-testid={`card-codes-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-chart-6/10 to-chart-6/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
      
      <div className="relative p-4 sm:p-6">
        <div
          className="flex items-start justify-between gap-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 rounded-md"
          role="button"
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleClick();
            }
          }}
          aria-expanded={isExpanded}
        >
          <h3 
            className="flex-1 font-semibold text-chart-6 text-sm sm:text-base leading-snug"
            data-testid={`text-codes-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
            style={{ color: 'hsl(var(--chart-6))' }}
          >
            {title}
          </h3>
          <ChevronDown
            className={`h-5 w-5 flex-shrink-0 text-chart-6 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            style={{ color: 'hsl(var(--chart-6))' }}
          />
        </div>

        {isExpanded && (
          <div
            className="mt-4 pt-4 border-t border-chart-6/20 animate-in fade-in slide-in-from-top-2 duration-300"
            data-testid={`text-codes-description-${title.replace(/\s+/g, '-').toLowerCase()}`}
            style={{'--link-hover-color': 'hsl(var(--chart-6))'} as React.CSSProperties}
          >
            <div className="text-sm text-muted-foreground leading-relaxed">
              <Nl2Br>{description}</Nl2Br>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
