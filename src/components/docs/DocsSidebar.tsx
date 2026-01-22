import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

export interface SidebarItem {
  label: string;
  href: string;
  items?: SidebarItem[];
}

interface DocsSidebarProps {
  sections: SidebarSection[];
  className?: string;
}

interface SidebarGroupProps {
  section: SidebarSection;
  isActive: boolean;
  currentPath: string;
}

const SidebarGroup = ({ section, isActive, currentPath }: SidebarGroupProps) => {
  const [isOpen, setIsOpen] = useState(isActive);

  useEffect(() => {
    if (isActive) setIsOpen(true);
  }, [isActive]);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 hover:text-foreground transition-colors"
      >
        {section.title}
        {isOpen ? (
          <ChevronDown className="h-3 w-3" />
        ) : (
          <ChevronRight className="h-3 w-3" />
        )}
      </button>

      {isOpen && (
        <ul className="space-y-1">
          {section.items.map((item) => (
            <SidebarItemComponent key={item.href} item={item} currentPath={currentPath} />
          ))}
        </ul>
      )}
    </div>
  );
};

interface SidebarItemComponentProps {
  item: SidebarItem;
  currentPath: string;
  depth?: number;
}

const SidebarItemComponent = ({ item, currentPath, depth = 0 }: SidebarItemComponentProps) => {
  const isActive = currentPath === item.href;
  const hasChildren = item.items && item.items.length > 0;
  const hasActiveChild = hasChildren && item.items?.some((child) => currentPath === child.href);
  const [isOpen, setIsOpen] = useState(hasActiveChild || isActive);

  return (
    <li>
      <div className="flex items-center">
        {hasChildren && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 hover:bg-docs-sidebar-hover rounded mr-1"
          >
            {isOpen ? (
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-3 w-3 text-muted-foreground" />
            )}
          </button>
        )}
        <Link
          to={item.href}
          className={`flex-1 px-3 py-1.5 text-sm rounded-md transition-colors ${
            isActive
              ? "bg-docs-sidebar-hover text-primary font-medium border-l-2 border-primary -ml-0.5 pl-[14px]"
              : "text-foreground/80 hover:bg-docs-sidebar-hover hover:text-foreground"
          }`}
          style={{ paddingLeft: depth > 0 ? `${12 + depth * 12}px` : undefined }}
        >
          {item.label}
        </Link>
      </div>

      {hasChildren && isOpen && (
        <ul className="mt-1 space-y-1">
          {item.items!.map((child) => (
            <SidebarItemComponent
              key={child.href}
              item={child}
              currentPath={currentPath}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export const DocsSidebar = ({ sections, className = "" }: DocsSidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isSectionActive = (section: SidebarSection) => {
    return section.items.some(
      (item) =>
        currentPath === item.href ||
        item.items?.some((child) => currentPath === child.href)
    );
  };

  return (
    <aside
      className={`w-64 flex-shrink-0 border-r border-border bg-docs-sidebar overflow-y-auto scrollbar-thin ${className}`}
    >
      <nav className="p-4 pt-6">
        {sections.map((section) => (
          <SidebarGroup
            key={section.title}
            section={section}
            isActive={isSectionActive(section)}
            currentPath={currentPath}
          />
        ))}
      </nav>
    </aside>
  );
};
