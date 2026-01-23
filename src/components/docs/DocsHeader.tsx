import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github } from "lucide-react";
import { CreaTVLogo } from "@/components/CreaTVLogo";
import { SearchBar } from "./SearchBar";
import { NavDropdown } from "./NavDropdown";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";
import { AdPlaceholder } from "./AdPlaceholder";
import { GiSpellBook } from "react-icons/gi";

// React Icons MdOutlineAutoStories; MdMovieFilter for use later on

const learnItems = [
  { label: "CreaTV Studio", href: "/learn/studio" },
  { label: "CreaTV API", href: "/learn/api", comingSoon: true },
];

const referenceItems = [
  { label: "CreaTV Studio", href: "/reference/studio" },
  { label: "CreaTV API", href: "/reference/api", comingSoon: true },
];

export const DocsHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isLearnActive = location.pathname.startsWith("/learn");
  const isReferenceActive = location.pathname.startsWith("/reference");
  const isCommunityActive = location.pathname.startsWith("/community");
  const isBlogActive = location.pathname.startsWith("/blog");

  return (
    <>
      {/* Main header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-4">
          <div className="grid h-14 grid-cols-[auto,1fr,auto] items-center gap-3">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <CreaTVLogo size="sm" linkTo="/" />
              <div className="flex flex-col justify-center items-center">
                <span className="text-xs font-bold text-muted-foreground hidden sm:inline creatv-documentation-top">Docs</span>
                <GiSpellBook className="h-6 w-6 text-yellow-300" />
              </div>
            </div>

            {/* Desktop Search - Center */}
            <div className="hidden md:flex w-full justify-center">
              <div className="w-full max-w-xl">
                <SearchBar />
              </div>
            </div>

            {/* Desktop Navigation + Right icons */}
            <div className="flex items-center justify-end gap-2">
              <nav className="hidden md:flex items-center gap-1">
                <NavDropdown label="Learn" items={learnItems} isActive={isLearnActive} />
                <NavDropdown label="Reference" items={referenceItems} isActive={isReferenceActive} />
                <Link
                  to="/community"
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isCommunityActive ? "text-primary" : "text-foreground"
                  }`}
                >
                  Community
                </Link>
                <Link
                  to="/blog"
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isBlogActive ? "text-primary" : "text-foreground"
                  }`}
                >
                  Blog
                </Link>
              </nav>

              <div className="flex items-center gap-1">
                <ThemeToggle />
                <LanguageSelector />
                <a
                  href="https://www.winapps.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>

                {/* Mobile menu button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background animate-fade-in">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile search */}
              <SearchBar />

              {/* Mobile nav links */}
              <nav className="space-y-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Learn
                </div>
                <Link
                  to="/learn/studio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  CreaTV Studio
                </Link>
                <span className="flex items-center justify-between px-3 py-2 text-muted-foreground">
                  CreaTV API
                  <span className="text-xs bg-muted px-1.5 py-0.5 rounded">Coming Soon</span>
                </span>

                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 mt-4">
                  Reference
                </div>
                <Link
                  to="/reference/studio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  CreaTV Studio
                </Link>
                <span className="flex items-center justify-between px-3 py-2 text-muted-foreground">
                  CreaTV API
                  <span className="text-xs bg-muted px-1.5 py-0.5 rounded">Coming Soon</span>
                </span>

                <div className="border-t border-border pt-2 mt-4">
                  <Link
                    to="/community"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    Community
                  </Link>
                  <Link
                    to="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    Blog
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Top ad banner */}
      <div className="border-b border-border bg-background">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-4">
          <AdPlaceholder type="banner" />
        </div>
      </div>
    </>
  );
};
