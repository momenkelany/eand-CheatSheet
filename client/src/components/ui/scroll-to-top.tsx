import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from './button';

export default function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const scroller = document.scrollingElement || document.documentElement || document.body;
      const scrollTop = (scroller as any)?.scrollTop ?? window.scrollY ?? 0;
      const isMobile = window.innerWidth <= 640; // tailwind sm breakpoint
      const threshold = isMobile ? 100 : 200;
      setVisible(scrollTop > threshold);
    };

    onScroll();
    // Attach the event to the document's scrolling element when possible, and fallback to window
    const scroller = document.scrollingElement || document.documentElement || document.body;
    scroller?.addEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    return () => {
      scroller?.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed z-50 right-4 bottom-4 sm:right-6 sm:bottom-6">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Scroll to top"
        onClick={handleClick}
        className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-md border border-primary/20 text-foreground hover:shadow-[0_0_18px_hsl(var(--primary)/0.18)] transition-shadow focus:ring-2 focus:ring-primary/20"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
}
