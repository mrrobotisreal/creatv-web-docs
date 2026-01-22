import { DocsLayout } from "@/components/docs/DocsLayout";
import { studioLearnSidebar } from "@/config/sidebarConfig";
import {
  DocsBreadcrumb,
  DocsHeading,
  DocsNote,
  DocsList,
  DocsLink,
  DocsCodeBlock,
  DocsInlineCode,
} from "@/components/docs/DocsContent";
import { TocItem } from "@/components/docs/OnThisPage";

const tocItems: TocItem[] = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "navigating-dashboard", title: "Navigating the Dashboard", level: 2 },
  { id: "channel-analytics-card", title: "Channel Analytics Card", level: 3 },
  { id: "latest-video-performance", title: "Latest Video Performance", level: 3 },
  { id: "comments-section", title: "Comments Section", level: 3 },
  { id: "news-and-updates", title: "News and Updates", level: 3 },
  { id: "customizing-dashboard", title: "Customizing Your Dashboard", level: 2 },
];

const DashboardPage = () => {
  return (
    <DocsLayout sidebarSections={studioLearnSidebar} tocItems={tocItems}>
      <DocsBreadcrumb
        items={[
          { label: "Learn CreaTV Studio", href: "/learn/studio" },
          { label: "Dashboard" },
        ]}
      />

      <DocsHeading level={1}>Dashboard</DocsHeading>

      <p className="text-lg text-muted-foreground mb-6">
        Your Dashboard is the command center for your CreaTV channel. Get a quick overview of your
        channel's performance and manage your content all from one place.
      </p>

      <DocsHeading id="overview">Overview</DocsHeading>

      <p className="mb-4">
        The Dashboard provides at-a-glance metrics and quick access to your most important tools.
        It's designed to give you the information you need to make decisions about your content
        strategy without digging through multiple pages.
      </p>

      <DocsHeading id="navigating-dashboard">Navigating the Dashboard</DocsHeading>

      <p className="mb-4">
        When you first open CreaTV Studio, you'll land on your Dashboard. The page is organized
        into several key sections:
      </p>

      <DocsHeading level={3} id="channel-analytics-card">Channel Analytics Card</DocsHeading>

      <p className="mb-4">
        At the top of your Dashboard, you'll see a summary of your channel's performance over the
        last 28 days:
      </p>

      <DocsList>
        <li><strong>Current subscribers</strong> - Your total subscriber count</li>
        <li><strong>Views</strong> - Total views across all videos</li>
        <li><strong>Watch time</strong> - Hours of content watched</li>
        <li><strong>Top videos</strong> - Your best performing content</li>
      </DocsList>

      <DocsCodeBlock language="tip">
{`Click "Go to channel analytics" to see detailed
breakdowns of each metric over time.`}
      </DocsCodeBlock>

      <DocsHeading level={3} id="latest-video-performance">Latest Video Performance</DocsHeading>

      <p className="mb-4">
        Below the analytics summary, you'll see performance data for your most recently published
        video. This includes:
      </p>

      <DocsList>
        <li>Views in the first 24/48 hours</li>
        <li>Click-through rate from impressions</li>
        <li>Average view duration</li>
        <li>Comparison to your typical performance</li>
      </DocsList>

      <DocsNote>
        <p>
          Performance data for new videos may take a few hours to appear. Check back later if
          you've just published a video.
        </p>
      </DocsNote>

      <DocsHeading level={3} id="comments-section">Comments Section</DocsHeading>

      <p className="mb-4">
        The comments widget shows your latest comments that may need attention. You can quickly:
      </p>

      <DocsList>
        <li>Reply to comments directly from the Dashboard</li>
        <li>Heart comments to show appreciation</li>
        <li>Pin important comments</li>
        <li>Hide or report problematic comments</li>
      </DocsList>

      <DocsHeading level={3} id="news-and-updates">News and Updates</DocsHeading>

      <p className="mb-4">
        Stay informed about CreaTV platform updates, new features, and important announcements.
        This section highlights:
      </p>

      <DocsList>
        <li>New Studio features and tools</li>
        <li>Policy updates that affect creators</li>
        <li>Tips and best practices from CreaTV</li>
        <li>Creator events and programs</li>
      </DocsList>

      <DocsHeading id="customizing-dashboard">Customizing Your Dashboard</DocsHeading>

      <p className="mb-4">
        While the Dashboard layout is fixed, you can customize what information is highlighted by
        adjusting your notification preferences and pinned items in{" "}
        <DocsInlineCode>Settings → Notifications</DocsInlineCode>.
      </p>

      <DocsNote type="pitfall" title="Pitfall">
        <p>
          Don't rely solely on Dashboard metrics for important decisions. Always check the full
          Analytics section for complete data, as the Dashboard shows summarized data that may
          not capture all nuances.
        </p>
      </DocsNote>

      <p className="mt-6">
        Ready to learn more? Continue to <DocsLink href="/learn/studio/content">Content Management</DocsLink> to
        learn how to upload and manage your videos.
      </p>

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

export default DashboardPage;
