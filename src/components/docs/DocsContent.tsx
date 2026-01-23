import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, FileText, AlertTriangle, Info } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface DocsBreadcrumbProps {
  items: BreadcrumbItem[];
}

export const DocsBreadcrumb = ({ items }: DocsBreadcrumbProps) => {
  return (
    <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          {index > 0 && <ChevronRight className="h-3 w-3" />}
          {item.href ? (
            <Link to={item.href} className="hover:text-primary transition-colors uppercase text-xs font-medium tracking-wide">
              {item.label}
            </Link>
          ) : (
            <span className="text-primary uppercase text-xs font-medium tracking-wide">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

interface DocsHeadingProps {
  children: ReactNode;
  id?: string;
  level?: 1 | 2 | 3 | 4;
}

export const DocsHeading = ({ children, id, level = 2 }: DocsHeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classes = {
    1: "text-4xl md:text-5xl font-bold mb-4",
    2: "text-2xl md:text-3xl font-bold mb-4 mt-10",
    3: "text-xl md:text-2xl font-semibold mb-3 mt-8",
    4: "text-lg font-semibold mb-2 mt-6",
  };

  return (
    <Tag id={id} className={`${classes[level]} scroll-mt-20`}>
      {children}
    </Tag>
  );
};

interface DocsNoteProps {
  children: ReactNode;
  type?: "note" | "pitfall";
  title?: string;
}

export const DocsNote = ({ children, type = "note", title }: DocsNoteProps) => {
  const isNote = type === "note";
  const Icon = isNote ? Info : AlertTriangle;
  const defaultTitle = isNote ? "Note" : "Pitfall";

  return (
    <div className={isNote ? "docs-note" : "docs-pitfall"}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`h-4 w-4 ${isNote ? "text-docs-note-border" : "text-docs-pitfall-border"}`} />
        <span className={`font-semibold ${isNote ? "text-docs-note-border" : "text-docs-pitfall-border"}`}>
          {title || defaultTitle}
        </span>
      </div>
      <div className="text-foreground/90">{children}</div>
    </div>
  );
};

interface DocsLearnBoxProps {
  children: ReactNode;
  title?: string;
}

export const DocsLearnBox = ({ children, title = "You will learn" }: DocsLearnBoxProps) => {
  return (
    <div className="docs-learn-box">
      <div className="flex items-center gap-2 mb-3">
        <FileText className="h-4 w-4 text-primary" />
        <span className="font-semibold text-foreground">{title}</span>
      </div>
      <div className="text-foreground/90">{children}</div>
    </div>
  );
};

interface DocsCodeBlockProps {
  children: string;
  language?: string;
}

export const DocsCodeBlock = ({ children, language }: DocsCodeBlockProps) => {
  return (
    <div className="relative my-4">
      {language && (
        <div className="absolute top-0 right-0 px-2 py-1 text-xs text-muted-foreground bg-muted rounded-bl">
          {language}
        </div>
      )}
      <pre className="docs-code-block">
        <code>{children}</code>
      </pre>
    </div>
  );
};

interface DocsInlineCodeProps {
  children: ReactNode;
}

export const DocsInlineCode = ({ children }: DocsInlineCodeProps) => {
  return <code className="docs-code-inline">{children}</code>;
};

interface DocsLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
}

export const DocsLink = ({ href, children, external }: DocsLinkProps) => {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="docs-link underline underline-offset-2 text-primary hover:text-purple-500"
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className="docs-link underline underline-offset-2 text-primary hover:text-purple-500">
      {children}
    </Link>
  );
};

interface DocsListProps {
  children: ReactNode;
  ordered?: boolean;
}

export const DocsList = ({ children, ordered }: DocsListProps) => {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={`my-4 ml-6 space-y-2 ${ordered ? "list-decimal" : "list-disc"}`}>
      {children}
    </Tag>
  );
};
