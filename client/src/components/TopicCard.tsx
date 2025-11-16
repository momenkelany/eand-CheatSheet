import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Card } from "./ui/card";

interface TopicCardProps {
  title: string;
  content: string[];
}

export default function TopicCard({ title, content }: TopicCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      className={`relative overflow-visible cursor-pointer transition-all duration-300 bg-gradient-to-br from-card to-card/60 border border-chart-2/20 hover:border-chart-2 hover:-translate-y-1 hover:shadow-[0_20px_40px_var(--tw-shadow-color)] hover:shadow-chart-2/10 ${
        isExpanded ? "border-chart-2" : ""
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
      data-testid={`card-topic-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-chart-2/10 to-chart-2/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
      
      <div className="relative p-4 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 
            className="flex-1 font-semibold text-chart-2 text-base sm:text-lg leading-snug"
            data-testid={`text-topic-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
          >
            {title}
          </h3>
          <ChevronDown
            className={`h-5 w-5 flex-shrink-0 text-chart-2 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        {isExpanded && (
          <div 
            className="mt-4 pt-4 border-t border-chart-2/10 animate-in fade-in slide-in-from-top-2 duration-300"
            data-testid={`text-topic-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {content.map((item, index) => (
                <li key={index} className="pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
}
