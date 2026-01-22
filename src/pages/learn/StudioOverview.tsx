import { DocsLayout } from "@/components/docs/DocsLayout";
import { studioLearnSidebar } from "@/config/sidebarConfig";
import {
  DocsBreadcrumb,
  DocsHeading,
  DocsLearnBox,
  DocsNote,
  DocsList,
  DocsLink,
  DocsCodeBlock,
  DocsInlineCode,
} from "@/components/docs/DocsContent";
import { TocItem } from "@/components/docs/OnThisPage";

const tocItems: TocItem[] = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "getting-started", title: "Getting Started", level: 2 },
  { id: "key-features", title: "Key Features", level: 2 },
  { id: "dashboard", title: "Dashboard", level: 3 },
  { id: "content-management", title: "Content Management", level: 3 },
  { id: "analytics", title: "Analytics", level: 3 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const StudioOverview = () => {
  return (
    <DocsLayout sidebarSections={studioLearnSidebar} tocItems={tocItems}>
      <DocsBreadcrumb
        items={[
          { label: "Learn CreaTV Studio", href: "/learn/studio" },
          { label: "Overview" },
        ]}
      />

      <DocsHeading level={1}>Welcome to CreaTV Studio</DocsHeading>

      <p className="text-lg text-muted-foreground mb-6">
        CreaTV Studio is your creative command center for managing your channel, uploading content,
        and growing your audience on CreaTV.
      </p>

      <DocsLearnBox>
        <ul className="space-y-2 list-disc ml-4">
          <li>How to navigate the CreaTV Studio interface</li>
          <li>Upload and manage your video content</li>
          <li>Track your channel's performance with analytics</li>
          <li>Engage with your community</li>
          <li>Customize your channel's appearance</li>
        </ul>
      </DocsLearnBox>

      <DocsHeading id="overview">Overview</DocsHeading>

      <p className="mb-4">
        CreaTV Studio provides content creators with all the tools they need to build and grow their
        presence on the platform. Whether you're just starting out or you're an established creator,
        Studio gives you the power to:
      </p>

      <DocsList>
        <li><strong>Upload and edit videos</strong> with our intuitive video management system</li>
        <li><strong>Analyze performance</strong> with detailed analytics and insights</li>
        <li><strong>Engage with viewers</strong> through comments and community features</li>
        <li><strong>Monetize your content</strong> with multiple revenue streams</li>
        <li><strong>Customize your channel</strong> to reflect your unique brand</li>
      </DocsList>

      <DocsHeading id="getting-started">Getting Started</DocsHeading>

      <p className="mb-4">
        To access CreaTV Studio, you'll need a CreaTV account. Once you're signed in, click on your
        profile picture and select <DocsInlineCode>CreaTV Studio</DocsInlineCode> from the dropdown menu.
      </p>

      <DocsNote>
        <p>
          New to CreaTV? You can create an account for free at{" "}
          <DocsLink href="https://creatv.com/signup" external>creatv.com/signup</DocsLink>.
          Your channel is created automatically when you sign up.
        </p>
      </DocsNote>

      <DocsHeading id="key-features">Key Features</DocsHeading>

      <DocsHeading level={3} id="dashboard">Dashboard</DocsHeading>

      <p className="mb-4">
        Your Dashboard is the first thing you see when you open Studio. It provides a quick overview
        of your channel's performance, including:
      </p>

      <DocsList>
        <li>Recent video performance metrics</li>
        <li>Channel analytics summary</li>
        <li>Latest comments requiring attention</li>
        <li>News and updates from CreaTV</li>
      </DocsList>

      <DocsHeading level={3} id="content-management">Content Management</DocsHeading>

      <p className="mb-4">
        The Content section is where you manage all your videos, shorts, live streams, and playlists.
        From here you can:
      </p>

      <DocsList>
        <li>Upload new videos and configure their settings</li>
        <li>Edit video details like titles, descriptions, and thumbnails</li>
        <li>Organize content into playlists</li>
        <li>Schedule videos for future publication</li>
        <li>Manage visibility settings (public, unlisted, private)</li>
      </DocsList>

      <DocsCodeBlock language="example">
{`Video Upload Flow:
1. Click "Create" button in the top right
2. Select "Upload video"
3. Choose your video file
4. Fill in video details while uploading
5. Set visibility and publish`}
      </DocsCodeBlock>

      <DocsHeading level={3} id="analytics">Analytics</DocsHeading>

      <p className="mb-4">
        Analytics gives you deep insights into how your content is performing. Understand your audience
        with metrics like:
      </p>

      <DocsList>
        <li><strong>Views</strong> - How many times your videos have been watched</li>
        <li><strong>Watch time</strong> - Total hours viewers spent watching</li>
        <li><strong>Subscribers</strong> - Growth and demographics of your subscriber base</li>
        <li><strong>Revenue</strong> - Earnings from ads, memberships, and more</li>
        <li><strong>Traffic sources</strong> - Where your viewers are coming from</li>
      </DocsList>

      <DocsNote type="pitfall" title="Pitfall">
        <p>
          Analytics data may take up to 48 hours to fully update. For the most accurate insights,
          wait at least 2 days after publishing before drawing conclusions about a video's performance.
        </p>
      </DocsNote>

      <DocsHeading id="next-steps">Next Steps</DocsHeading>

      <p className="mb-4">
        Ready to dive deeper? Explore these guides to master CreaTV Studio:
      </p>

      <DocsList>
        <li><DocsLink href="/learn/studio/quick-start">Quick Start Guide</DocsLink> - Get up and running in minutes</li>
        <li><DocsLink href="/learn/studio/first-video">Your First Video</DocsLink> - Step-by-step video upload tutorial</li>
        <li><DocsLink href="/learn/studio/dashboard">Dashboard Deep Dive</DocsLink> - Master your command center</li>
        <li><DocsLink href="/learn/studio/analytics">Understanding Analytics</DocsLink> - Data-driven content strategy</li>
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

export default StudioOverview;
