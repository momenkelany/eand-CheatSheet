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
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-12 py-3 sm:py-4 bg-card/60 backdrop-blur-lg border border-primary/20 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        data-testid="input-search"
      />
      {value && (
        <Button
          variant="ghost"
          size="icon"
          aria-label="Clear search"
          onClick={() => {
            onChange("");
            inputRef.current?.focus();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 text-foreground hover:shadow-[0_0_12px_hsl(var(--primary)/0.2)] transition-shadow focus:ring-2 focus:ring-primary/20"
          data-testid="button-clear-search"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
