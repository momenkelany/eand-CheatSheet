import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from './button';

export default function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed z-50 right-6 bottom-6">
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
