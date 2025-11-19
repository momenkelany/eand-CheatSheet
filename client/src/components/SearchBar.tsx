import { Search, X } from "lucide-react";
import { useRef } from "react";
import { Button } from "./ui/button";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Search details..." }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
      <div className="relative w-full overflow-hidden rounded-lg">
        <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-12 sm:pr-16 py-3 sm:py-4 bg-card/60 backdrop-blur-lg border border-primary/20 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        data-testid="input-search"
      />
      {value && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Clear search"
          onClick={() => {
            onChange("");
            inputRef.current?.focus();
          }}
          className="z-20 mr-1 text-foreground bg-card/60 backdrop-blur-md rounded-r-md pointer-events-auto hover:shadow-[0_0_14px_hsl(var(--primary)/0.18)] transition-shadow focus:ring-2 focus:ring-primary/20"
          data-testid="button-clear-search"
        >
          <X className="h-5 w-5" />
        </Button>
        </div>
      )}
    </div>
  </div>
  );
}
