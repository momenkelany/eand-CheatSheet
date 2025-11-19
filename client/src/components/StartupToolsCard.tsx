import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { Card } from "./ui/card";
import Nl2Br from "./ui/nl2br";

interface StartupToolsCardProps {
  title: string;
  content: string[];
}

export default function StartupToolsCard({ title, content }: StartupToolsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const lastTapRef = useRef<number | null>(null);

  const handleClick = () => {
    const now = Date.now();
    if (!isExpanded) {
      setIsExpanded(true);
      lastTapRef.current = now;
      return;
    }

    if (lastTapRef.current && now - lastTapRef.current <= 300) {
      setIsExpanded(false);
      lastTapRef.current = null;
    } else {
      lastTapRef.current = now;
    }
  };

  return (
    <Card
      className={`relative overflow-visible cursor-pointer transition-all duration-300 bg-gradient-to-br from-card to-card/60 border border-chart-5/20 hover:border-chart-5 hover:-translate-y-1 hover:shadow-[0_20px_40px_var(--tw-shadow-color)] hover:shadow-chart-5/10 ${
        isExpanded ? "border-chart-5" : ""
      }`}
      onClick={handleClick}
      data-testid={`card-startup-tools-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-chart-5/10 to-chart-5/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
      
      <div className="relative p-4 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 
            className="flex-1 font-semibold text-chart-5 text-base sm:text-lg leading-snug"
            data-testid={`text-startup-tools-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
          >
            {title}
          </h3>
          <ChevronDown
            className={`h-5 w-5 flex-shrink-0 text-chart-5 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        {isExpanded && (
          <div
            className="mt-4 pt-4 border-t border-chart-5/10 animate-in fade-in slide-in-from-top-2 duration-300"
            data-testid={`text-startup-tools-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
            style={{'--link-hover-color': 'hsl(var(--chart-5))'} as React.CSSProperties}
          >
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {content.map((item, index) => (
                <li key={index} className="pl-3">
                  {/<a\s+/i.test(item) ? (
                    <span
                      dangerouslySetInnerHTML={{ __html: item.replace(/\n/g, "<br />") }}
                    />
                  ) : (
                    <Nl2Br>{item}</Nl2Br>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
}
