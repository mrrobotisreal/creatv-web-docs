import { Link } from "react-router-dom";
import { CreaTVLogo } from "@/components/CreaTVLogo";

const footerLinks = {
  learn: [
    { label: "Overview", href: "/learn/studio" },
    { label: "Dashboard", href: "/learn/studio/dashboard" },
    { label: "Content", href: "/learn/studio/content" },
    { label: "Analytics", href: "/learn/studio/analytics" },
  ],
  reference: [
    { label: "Studio Reference", href: "/reference/studio" },
    { label: "API Reference", href: "/reference/api", comingSoon: true },
  ],
  community: [
    { label: "Community Hub", href: "/community" },
    { label: "Blog", href: "/blog" },
  ],
  more: [
    { label: "GitHub", href: "https://www.winapps.io", external: true },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export const DocsFooter = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-auto">
      <div className="max-w-screen-2xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Learn */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Learn</h3>
            <ul className="space-y-2">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reference */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Reference</h3>
            <ul className="space-y-2">
              {footerLinks.reference.map((link) => (
                <li key={link.href}>
                  {link.comingSoon ? (
                    <span className="text-sm text-muted-foreground/60">{link.label}</span>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">More</h3>
            <ul className="space-y-2">
              {footerLinks.more.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <CreaTVLogo size="sm" />
          <p className="text-sm text-muted-foreground text-center">
            © 2026 CreaTV Ltd., All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
