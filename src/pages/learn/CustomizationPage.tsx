import { DocsLayout } from "@/components/docs/DocsLayout";
import { studioLearnSidebar } from "@/config/sidebarConfig";
import {
  DocsBreadcrumb,
  DocsHeading,
  DocsList,
  DocsNote,
} from "@/components/docs/DocsContent";
import { TocItem } from "@/components/docs/OnThisPage";

const tocItems: TocItem[] = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "basic-info", title: "Basic Info", level: 2 },
  { id: "branding", title: "Branding", level: 2 },
  { id: "layout", title: "Layout", level: 2 },
];

const CustomizationPage = () => {
  return (
    <DocsLayout sidebarSections={studioLearnSidebar} tocItems={tocItems}>
      <DocsBreadcrumb
        items={[
          { label: "Learn CreaTV Studio", href: "/learn/studio" },
          { label: "Customization" },
        ]}
      />

      <DocsHeading level={1}>Customization</DocsHeading>

      <p className="text-lg text-muted-foreground mb-6">
        Make your channel uniquely yours. Customize your branding, layout, and info to create a
        memorable experience for viewers.
      </p>

      <DocsHeading id="overview">Overview</DocsHeading>

      <p className="mb-4">
        Channel customization is key to building a recognizable brand. CreaTV Studio provides
        tools to control how your channel looks and what information viewers see.
      </p>

      <DocsHeading id="basic-info">Basic Info</DocsHeading>

      <DocsList>
        <li><strong>Channel name</strong> - Your display name on CreaTV</li>
        <li><strong>Handle</strong> - Your unique @handle for sharing</li>
        <li><strong>Description</strong> - Tell viewers what your channel is about</li>
        <li><strong>Channel URL</strong> - Custom URL (once eligible)</li>
        <li><strong>Links</strong> - Social media and website links</li>
        <li><strong>Contact info</strong> - Business email for inquiries</li>
      </DocsList>

      <DocsHeading id="branding">Branding</DocsHeading>

      <DocsList>
        <li><strong>Profile picture</strong> - 800x800px recommended</li>
        <li><strong>Banner image</strong> - 2048x1152px, keeps safe area in mind</li>
        <li><strong>Video watermark</strong> - Subscribe button that appears on videos</li>
      </DocsList>

      <DocsNote>
        <p>
          Your banner image appears differently on TV, desktop, and mobile. Use the preview in
          Studio to ensure important elements are visible on all devices.
        </p>
      </DocsNote>

      <DocsHeading id="layout">Layout</DocsHeading>

      <p className="mb-4">
        Control what viewers see when they visit your channel:
      </p>

      <DocsList>
        <li><strong>Channel trailer</strong> - Video shown to non-subscribers</li>
        <li><strong>Featured video</strong> - Video shown to returning subscribers</li>
        <li><strong>Sections</strong> - Organize videos into rows on your channel page</li>
      </DocsList>

      <DocsNote type="pitfall" title="Pitfall">
        <p>
          Changes to your channel layout can take a few minutes to appear. If you don't see your
          changes right away, try refreshing or clearing your browser cache.
        </p>
      </DocsNote>

      {/* Page feedback */}
      <div className="mt-12 pt-8 border-t border-border">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>Is this page useful?</span>
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">👍</button>
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">👎</button>
        </div>
      </div>
    </DocsLayout>
  );
};

export default CustomizationPage;
