import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";
import { DocsHeader } from "./DocsHeader";
import { DocsFooter } from "./DocsFooter";
import { DocsSidebar, SidebarSection } from "./DocsSidebar";
import { OnThisPage, TocItem } from "./OnThisPage";
import { AdPlaceholder } from "./AdPlaceholder";

interface DocsLayoutProps {
  children: ReactNode;
  sidebarSections?: SidebarSection[];
  tocItems?: TocItem[];
  showSidebar?: boolean;
  showToc?: boolean;
}

export const DocsLayout = ({
  children,
  sidebarSections = [],
  tocItems = [],
  showSidebar = true,
  showToc = true,
}: DocsLayoutProps) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <DocsHeader />

      <div className="flex-1 flex">
        {/* Mobile sidebar toggle */}
        {showSidebar && (
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="lg:hidden fixed bottom-4 left-4 z-40 p-3 bg-primary text-primary-foreground rounded-full shadow-lg"
            aria-label="Toggle sidebar"
          >
            {mobileSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        )}

        {/* Mobile sidebar overlay */}
        {showSidebar && mobileSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-30"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        {showSidebar && sidebarSections.length > 0 && (
          <>
            {/* Mobile sidebar */}
            <div
              className={`lg:hidden fixed left-0 top-0 h-full z-40 bg-background transform transition-transform duration-200 ${
                mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
              style={{ paddingTop: "56px" }}
            >
              <DocsSidebar sections={sidebarSections} className="h-full" />
            </div>

            {/* Desktop sidebar */}
            <DocsSidebar
              sections={sidebarSections}
              className="hidden lg:block sticky top-14 h-[calc(100vh-3.5rem)]"
            />
          </>
        )}

        {/* Main content area */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8">
            {children}
          </div>
        </main>

        {/* Right sidebar with TOC and ad */}
        {showToc && (
          <div className="hidden xl:block w-64 flex-shrink-0 border-l border-border">
            <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto scrollbar-thin">
              <OnThisPage items={tocItems} />
              <div className="p-4">
                <AdPlaceholder type="sidebar" />
              </div>
            </div>
          </div>
        )}
      </div>

      <DocsFooter />
    </div>
  );
};
