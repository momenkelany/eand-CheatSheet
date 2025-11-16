export default function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background/50 backdrop-blur-lg mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <p className="text-muted-foreground" data-testid="text-footer-attribution">
              Developed by: 
              <span className="text-primary font-semibold ml-1 inline-block">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://momenkelany.github.io/Momen-Kelany-Portfolio/"
                  className="name-hover"
                  aria-label="Visit Mo'men Kelany portfolio"
                >
                  <span className="name-gradient">Mo'men Kelany</span>
                </a>
              </span>
            </p>
          </div>

          <p className="text-sm text-muted-foreground/60 mt-1" data-testid="text-footer-copyright">
            Batch 92❤️
          </p>
          <p >
            <span className="text-xs text-destructive">e&</span>{" "}
            <span className="text-xs text-muted-foreground/50">
              CheatSheet v1.0
            </span>
          </p>
            <p className="text-sm text-muted-foreground/60 mt-1" data-testid="text-footer-copyright">
              All rights reserved © {new Date().getFullYear()}
            </p>
        </div>
      </div>
    </footer>
  );
}
