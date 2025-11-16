import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeProvider";
import { Button } from "./ui/button";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const handleMobileToggle = () => {
    // Toggle the mobile menu open state on a single click/tap
    setMobileMenuOpen((open) => !open);
  };

  // Keep CSS var --header-offset in sync with the header height so that anchors
  // land a bit below the top of the viewport. We add a small extra offset
  // (EXTRA_OFFSET_PX) to make the section appear a little bit down from the
  // top (user preference).
  useEffect(() => {
    const EXTRA_OFFSET_PX = 16; // tweak this to move anchor targets slightly down

    const updateOffset = () => {
      const height = headerRef.current?.offsetHeight ?? 0;
      const newOffset = height + EXTRA_OFFSET_PX;
      document.documentElement.style.setProperty("--header-offset", `${newOffset}px`);
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    window.addEventListener("load", updateOffset);
    return () => {
      window.removeEventListener("resize", updateOffset);
      window.removeEventListener("load", updateOffset);
    };
  }, [mobileMenuOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold truncate"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="text-header-title"
            >
              <span className="text-destructive">e&</span>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to right, var(--cheatsheet-gradient-1), var(--cheatsheet-gradient-2), var(--cheatsheet-gradient-3))'
                }}
              >
                CheatSheet
              </span>
            </h1>
            <p className="text-sm text-muted-foreground mt-1" data-testid="text-header-subtitle">
              Quick reference guide for system navigation
            </p>
          </div>

          <nav className="hidden md:flex md:flex-nowrap items-center gap-1 whitespace-nowrap flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover-elevate active-elevate-2 hover:text-primary transition-colors"
              data-testid="link-desktop-details"
            >
              <a href="#CIM">CIM Shortcuts</a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover-elevate active-elevate-2 hover:text-primary transition-colors"
              data-testid="link-desktop-topics"
            >
              <a href="#DeviceCare">Device Care</a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover-elevate active-elevate-2 hover:text-primary transition-colors"
              data-testid="link-desktop-topics"
            >
              <a href="#InfoHub">InfoHub</a>
            </Button>
             <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover-elevate active-elevate-2 hover:text-primary transition-colors"
              data-testid="link-desktop-topics"
            >
              <a href="#Scenarios">Scenarios</a>
            </Button>
             <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover-elevate active-elevate-2 hover:text-primary transition-colors"
              data-testid="link-desktop-topics"
            >
              <a href="#CodesAndNumbers">Codes and Numbers</a>
            </Button>
             <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover-elevate active-elevate-2 hover:text-primary transition-colors"
              data-testid="link-desktop-topics"
            >
              <a href="#StartupTools">Startup Tools</a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover-elevate active-elevate-2 hover:text-primary transition-colors"
              data-testid="link-desktop-topics"
            >
              <a href="https://basher-tech.me/QuickLinks.html" target="_blank" rel="noopener noreferrer">
                More Tools
              </a>
            </Button>
            {/* Theme toggle visible only on desktop nav so it aligns with the links */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="hover-elevate active-elevate-2"
              data-testid="link-desktop-theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </nav>

          <div className="flex items-center gap-2">
            {/* mobile-only theme toggle (hidden on md and up) */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="md:hidden hover-elevate active-elevate-2"
              data-testid="button-theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover-elevate active-elevate-2"
              onClick={handleMobileToggle}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mt-4 pt-4 border-t border-primary/20 md:hidden">
            <div className="flex flex-col gap-2">
              <a
                href="#CIM"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover-elevate"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-details"
              >
                CIM Shortcuts
              </a>
              <a
                href="#DeviceCare"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover-elevate"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-topics"
              >
                Device Care
              </a>
              <a
                href="#InfoHub"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover-elevate"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-topics"
              >
                InfoHub Articles
              </a>
                <a
                href="#Scenarios"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover-elevate"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-topics"
              >
               Scenarios
              </a>
                <a
                href="#CodesAndNumbers"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover-elevate"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-topics"
              >
                Codes and Numbers
              </a>
                <a
                href="#StartupTools"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover-elevate"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-topics"
              >
                Startup Tools
              </a>
              <a
                href="https://basher-tech.me/QuickLinks.html"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover-elevate"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-topics"
                target="_blank"
                rel="noopener noreferrer"
              >
                More Tools
              </a>

            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
