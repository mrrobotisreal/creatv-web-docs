import { DocsLayout } from "@/components/docs/DocsLayout";
import { studioReferenceSidebar } from "@/config/sidebarConfig";
import {
  DocsBreadcrumb,
  DocsHeading,
  DocsList,
  DocsLink,
} from "@/components/docs/DocsContent";
import { TocItem } from "@/components/docs/OnThisPage";

const tocItems: TocItem[] = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "dashboard", title: "Dashboard", level: 2 },
  { id: "content", title: "Content", level: 2 },
  { id: "analytics", title: "Analytics", level: 2 },
  { id: "community", title: "Community", level: 2 },
  { id: "earn", title: "Earn", level: 2 },
  { id: "customization", title: "Customization", level: 2 },
];

const StudioReference = () => {
  return (
    <DocsLayout sidebarSections={studioReferenceSidebar} tocItems={tocItems}>
      <DocsBreadcrumb
        items={[
          { label: "Studio Reference", href: "/reference/studio" },
        ]}
      />

      <DocsHeading level={1}>Studio Reference Overview</DocsHeading>

      <p className="text-lg text-muted-foreground mb-6">
        This section provides detailed reference documentation for CreaTV Studio. For an
        introduction to Studio, please visit the <DocsLink href="/learn/studio">Learn</DocsLink> section.
      </p>

      <p className="mb-6">
        The CreaTV Studio reference documentation is broken down into functional subsections:
      </p>

      <DocsHeading id="dashboard">Dashboard</DocsHeading>

      <p className="mb-4">Dashboard features for monitoring your channel:</p>

      <DocsList>
        <li><DocsLink href="/reference/studio/dashboard">Dashboard Overview</DocsLink> - Main dashboard features and navigation</li>
        <li><DocsLink href="/reference/studio/dashboard/channel">Channel Dashboard</DocsLink> - Channel-level metrics and insights</li>
        <li><DocsLink href="/reference/studio/dashboard/video">Video Dashboard</DocsLink> - Individual video performance tracking</li>
      </DocsList>

      <DocsHeading id="content">Content</DocsHeading>

      <p className="mb-4">Content management features:</p>

      <DocsList>
        <li><DocsLink href="/reference/studio/content/videos">Videos</DocsLink> - Upload, edit, and manage video content</li>
        <li><DocsLink href="/reference/studio/content/shorts">Shorts</DocsLink> - Create and manage short-form vertical videos</li>
        <li><DocsLink href="/reference/studio/content/live">Live</DocsLink> - Livestream management and scheduling</li>
        <li><DocsLink href="/reference/studio/content/posts">Posts</DocsLink> - Community posts and updates</li>
        <li><DocsLink href="/reference/studio/content/playlists">Playlists</DocsLink> - Organize videos into collections</li>
        <li><DocsLink href="/reference/studio/content/podcasts">Podcasts</DocsLink> - Podcast episode management</li>
      </DocsList>

      <DocsHeading id="analytics">Analytics</DocsHeading>

      <p className="mb-4">Analytics and reporting features:</p>

      <DocsList>
        <li><DocsLink href="/reference/studio/analytics/channel">Channel Analytics</DocsLink> - Overall channel performance metrics</li>
        <li><DocsLink href="/reference/studio/analytics/video">Video Analytics</DocsLink> - Per-video performance data</li>
        <li><DocsLink href="/reference/studio/analytics/revenue">Revenue Analytics</DocsLink> - Earnings and monetization reports</li>
        <li><DocsLink href="/reference/studio/analytics/research">Research</DocsLink> - Audience research and trend analysis</li>
      </DocsList>

      <DocsHeading id="community">Community</DocsHeading>

      <p className="mb-4">Community engagement features:</p>

      <DocsList>
        <li><DocsLink href="/reference/studio/community/comments">Comments</DocsLink> - Comment moderation and management</li>
        <li><DocsLink href="/reference/studio/community/mentions">Mentions</DocsLink> - Track when you're mentioned</li>
        <li><DocsLink href="/reference/studio/community/subtitles">Subtitles</DocsLink> - Caption and subtitle management</li>
      </DocsList>

      <DocsHeading id="earn">Earn</DocsHeading>

      <p className="mb-4">Monetization features:</p>

      <DocsList>
        <li><DocsLink href="/reference/studio/earn">Earn Overview</DocsLink> - Monetization options and eligibility</li>
        <li><DocsLink href="/reference/studio/earn/memberships">Memberships</DocsLink> - Channel membership management</li>
        <li><DocsLink href="/reference/studio/earn/shopping">Shopping</DocsLink> - Product listings and merch</li>
        <li><DocsLink href="/reference/studio/earn/super-thanks">Super Thanks</DocsLink> - Viewer appreciation features</li>
      </DocsList>

      <DocsHeading id="customization">Customization</DocsHeading>

      <p className="mb-4">Channel customization options:</p>

      <DocsList>
        <li><DocsLink href="/reference/studio/customization/basic-info">Basic Info</DocsLink> - Channel name, description, links</li>
        <li><DocsLink href="/reference/studio/customization/branding">Branding</DocsLink> - Profile picture, banner, watermark</li>
        <li><DocsLink href="/reference/studio/customization/layout">Layout</DocsLink> - Channel page layout and sections</li>
      </DocsList>

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

export default StudioReference;
