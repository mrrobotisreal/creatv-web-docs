import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ScreenshotPlaceholder } from "@/components/common/ScreenshotPlaceholder";
import { studioLearnSidebar } from "@/config/sidebarConfig";
import {
  DocsBreadcrumb,
  DocsHeading,
  DocsLearnBox,
  DocsList,
  DocsLink,
  DocsNote,
  DocsInlineCode,
} from "@/components/docs/DocsContent";
import { TocItem } from "@/components/docs/OnThisPage";

const tocItems: TocItem[] = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "navigation", title: "Navigation", level: 2 },
  { id: "metrics", title: "Metrics overview", level: 2 },
  { id: "total-views", title: "Total Views", level: 3 },
  { id: "watch-time", title: "Watch Time", level: 3 },
  { id: "subscribers", title: "Subscribers", level: 3 },
  { id: "total-videos", title: "Total Videos", level: 3 },
  { id: "recent-activity", title: "Recent Activity", level: 2 },
  { id: "quick-actions", title: "Quick actions", level: 3 },
  { id: "best-practices", title: "How to make the most of it", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
  { id: "screenshots", title: "Screenshot checklist", level: 2 },
  { id: "next-steps", title: "Next steps", level: 2 },
];

const ComingSoonBadge = ({ className = "" }: { className?: string }) => (
  <span
    className={[
      "ml-2 inline-flex items-center rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold uppercase text-white shadow-[0_0_12px_rgba(16,185,129,0.6)]",
      className,
    ].join(" ")}
  >
    Coming Soon
  </span>
);

const ScreenshotChecklistPlaceholder = ({ title, where, notes }: { title: string; where: string; notes?: string }) => (
  <div className="my-6 rounded-xl border border-border bg-muted/20 p-4">
    <div className="font-semibold mb-2">{title}</div>
    <p className="text-sm text-muted-foreground mb-2">
      <span className="font-medium text-foreground/80">Where:</span> {where}
    </p>
    {notes ? <p className="text-sm mb-0">{notes}</p> : null}
  </div>
);

const StudioBasicsDashboard = () => {
  const { pathname } = useLocation();

  // Support sidebar nested routes like /learn/studio/dashboard/navigation and /learn/studio/dashboard/metrics
  useEffect(() => {
    const last = pathname.split("/").filter(Boolean).pop();
    if (!last || last === "dashboard") return;

    const id = last === "navigation" ? "navigation" : last === "metrics" ? "metrics" : null;
    if (!id) return;

    // allow layout to render before scrolling
    window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, [pathname]);

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
        The Studio Dashboard is your creator “home base”: quick stats, quick actions, and your most recent uploads—so you
        can stop hunting for the next thing to do and just do it.
      </p>

      <DocsNote title="Pre-launch reality (the good kind)">
        <p>
          CreaTV Studio is still evolving fast. The Dashboard is intentionally simple right now—core metrics and “recent
          activity” first—then we’ll layer in more power as the platform ships.
        </p>
      </DocsNote>

      <DocsLearnBox>
        <DocsList>
          <li>What each Dashboard metric means (and what it doesn’t)</li>
          <li>How “Recent Activity” is generated and how to use it</li>
          <li>The fastest path to Watch, Analytics, and Create</li>
          <li>What’s placeholder today (and what’s coming)</li>
        </DocsList>
      </DocsLearnBox>

      <DocsHeading id="overview">Overview</DocsHeading>
      <p className="mb-4">
        When you open Studio, you’ll see:
      </p>
      <DocsList>
        <li>
          A header with a <strong>Create</strong> button (your “I’m here to publish” shortcut).
        </li>
        <li>
          Four stat cards: <strong>Total Views</strong>, <strong>Watch Time</strong>, <strong>Subscribers</strong>,{" "}
          <strong>Total Videos</strong>.
        </li>
        <li>
          A <strong>Recent Activity</strong> list showing your latest uploads with one-click actions.
        </li>
      </DocsList>

      <ScreenshotPlaceholder label="Dashboard overview (Create button + top metrics cards)" />

      <DocsHeading id="navigation">Navigation</DocsHeading>
      <p className="mb-4">
        In Studio, the left sidebar switches between sections like <strong>Dashboard</strong>, <strong>Content</strong>,
        <strong> Analytics</strong>, <strong>Community</strong>, <strong>Earn</strong>, and <strong>Customization</strong>.
      </p>
      <DocsList>
        <li>
          If you want “today’s overview,” stay on <strong>Dashboard</strong>.
        </li>
        <li>
          If you want to manage your uploads (and create new ones), head to <strong>Content</strong>.
        </li>
        <li>
          If you want to understand performance, open <strong>Analytics</strong>.
        </li>
      </DocsList>

      <DocsNote title="Create is designed to move you forward">
        <p>
          The <strong>Create</strong> button on the Dashboard opens the same Create flow you’ll use elsewhere. In the
          current build, Create supports things like <strong>Videos</strong>, <strong>Posts</strong>,{" "}
          <strong>Playlists</strong>, and <strong>Podcasts</strong>.
        </p>
      </DocsNote>

      <DocsHeading id="metrics">Metrics overview</DocsHeading>
      <p className="mb-4">
        The top cards are “at-a-glance” numbers—meant to be fast, not overwhelming. They’re lifetime-style rollups across
        your uploads.
      </p>

      <DocsHeading level={3} id="total-views">
        Total Views
      </DocsHeading>
      <p className="mb-4">
        Total Views is the lifetime number of views across your uploaded videos. Think of it as the quickest “is my
        channel getting watched?” signal.
      </p>
      <DocsList>
        <li>
          Counts are formatted in a readable way (for example, <DocsInlineCode>1.2K</DocsInlineCode> instead of{" "}
          <DocsInlineCode>1200</DocsInlineCode>).
        </li>
        <li>
          If you just published, views may take a moment to reflect as analytics updates.
        </li>
      </DocsList>

      <DocsHeading level={3} id="watch-time">
        Watch Time
      </DocsHeading>
      <p className="mb-4">
        Watch Time is the total amount of time viewers have spent watching your content (lifetime across uploads). It’s
        one of the best “are people actually sticking around?” indicators.
      </p>
      <DocsList>
        <li>
          Watch time is displayed in a friendly duration format (hours/minutes), not raw seconds.
        </li>
        <li>
          Like views, it may lag slightly behind real-time immediately after a new upload.
        </li>
      </DocsList>

      <DocsHeading level={3} id="subscribers">
        Subscribers
        <ComingSoonBadge />
      </DocsHeading>
      <p className="mb-4">
        In the current Studio build, the Subscribers card is a placeholder and will display <strong>0</strong>. Subscriber
        functionality and reporting will be wired in as the platform progresses toward launch.
      </p>

      <DocsHeading level={3} id="total-videos">
        Total Videos
      </DocsHeading>
      <p className="mb-4">
        Total Videos is the number of videos in your library (your upload count). It’s a simple but useful “volume”
        signal—especially early on while you’re building consistency.
      </p>

      <DocsNote title="Personalize Your Dashboard Metrics Overview">
        <p>
          The Metrics Overview on your Channel Dashboard is currently limited to <span className="font-bold">Total Views</span>, <span className="font-bold">Watch Time</span>, <span className="font-bold">Subscribers</span>, and
          <span className="font-bold">Total Videos</span>. However, the engineering team building the Studio UI is working on a new feature that will let you
          personalize your dashboard Metrics Overview with the metrics that matter most to you—while still defaulting to
          the four metrics listed above. Stay tuned for the drop.
        </p>
          <p className="mt-3 italic">
            If you have a qualifying channel with at least <span className="font-bold">3 videos</span> published and you’re
            interested in getting access to new features before they’re launched and want to participate in the
            development of new features, then reach out to{" "}
            <a
              href="mailto:partners@creatv.io"
              className="underline underline-offset-2 text-primary hover:text-purple-500"
            >
              partners@creatv.io
            </a>{" "}
            about becoming a <span className="font-bold">CreaTV Partner</span>.
          </p>
      </DocsNote>

      <DocsHeading id="recent-activity">Recent Activity</DocsHeading>
      <p className="mb-4">
        Recent Activity shows your latest uploads (currently the most recent <strong>up to 5</strong> videos). Each row
        is designed to answer four questions quickly:
      </p>

      <DocsList>
        <li>
          <strong>What is it?</strong> (title + thumbnail)
        </li>
        <li>
          <strong>When did it go up?</strong> (a relative time like “2 hours ago”)
        </li>
        <li>
          <strong>What’s the status?</strong> (visibility like Public/Unlisted/Private)
        </li>
        <li>
          <strong>Is it getting watched?</strong> (views + duration context)
        </li>
      </DocsList>

      <DocsNote title="A small detail that matters">
        <p>
          “Uploaded {`{relative time}`}`” uses the best available timestamp (published date when available, otherwise the
          creation date). So if you’re seeing “Uploaded just now” right after posting, that’s expected.
        </p>
      </DocsNote>

      <DocsHeading level={3} id="quick-actions">
        Quick actions
      </DocsHeading>
      <p className="mb-4">
        Every Recent Activity item has fast actions so you can go from “overview” to “action” in one click:
      </p>
      <DocsList>
        <li>
          <strong>Watch</strong> — opens the video watch page (<DocsInlineCode>/video/{"{id}"}</DocsInlineCode>).
        </li>
        <li>
          <strong>View</strong> — opens that video’s Studio analytics page (<DocsInlineCode>/creatv-studio/video/{"{id}"}/analytics</DocsInlineCode>).
        </li>
        <li>
          Clicking the <strong>thumbnail</strong> also takes you to the watch page.
        </li>
      </DocsList>

      <DocsNote title="Use Dashboard like a checklist">
        <p className="mb-0">
          After you publish, the Dashboard is the fastest place to verify: your video appears, visibility looks right,
          and analytics is reachable. It’s basically your “did everything ship?” sanity check.
        </p>
      </DocsNote>

      <DocsHeading id="best-practices">How to make the most of it</DocsHeading>
      <DocsList>
        <li>
          <strong>Make Dashboard your daily start.</strong> If you upload often, checking Recent Activity first keeps you
          anchored.
        </li>
        <li>
          <strong>Publish → then immediately View analytics.</strong> Even early, you’ll catch “packaging” issues quickly
          (title/thumbnail mismatch, wrong visibility, etc.).
        </li>
        <li>
          <strong>Use Watch as a quality check.</strong> Confirm playback, description formatting, and chapters (if you
          added them).
        </li>
        <li>
          <strong>Don’t overreact to the first minutes.</strong> Early analytics can be delayed or recalculated while the
          system stabilizes (especially pre-launch).
        </li>
      </DocsList>

      <DocsHeading id="troubleshooting">Troubleshooting</DocsHeading>
      <DocsList>
        <li>
          <strong>“No recent activity to display”</strong> — you don’t have uploads yet (or you’re not signed into the
          account that owns them). Upload your first video via <DocsLink href="/learn/studio/first-video">Your First Video</DocsLink>.
        </li>
        <li>
          <strong>Metrics show “--” briefly</strong> — stats are still loading. Give it a moment and refresh.
        </li>
        <li>
          <strong>Subscribers is 0</strong> — expected right now. Subscriber tracking/reporting is not wired up yet.
        </li>
        <li>
          <strong>Watch time/views feel “behind”</strong> — analytics can lag, especially right after publishing.
        </li>
      </DocsList>

      <DocsHeading id="screenshots">Screenshot checklist</DocsHeading>
      <p className="mb-4">
        If you want this page to land instantly for creators, these screenshots do the heavy lifting:
      </p>

      <ScreenshotChecklistPlaceholder
        title="Screenshot 1: Dashboard overview (top of page)"
        where='Studio → Dashboard (capture: page title, Create button, and the 4 stat cards)'
        notes="This screenshot teaches the layout in 2 seconds."
      />

      <ScreenshotChecklistPlaceholder
        title="Screenshot 2: Recent Activity list"
        where='Studio → Dashboard → Recent Activity (capture 2–5 rows)'
        notes='Bonus: include at least one video with views + duration so the “Uploaded · Visibility · Views · Duration” line is visible.'
      />

      <ScreenshotChecklistPlaceholder
        title="Screenshot 3: One-click actions"
        where='Hover/capture the “View” (analytics) and “Watch” buttons on a Recent Activity row'
        notes="This makes the Dashboard feel actionable instead of informational."
      />

      <DocsHeading id="next-steps">Next steps</DocsHeading>
      <DocsList>
        <li>
          <DocsLink href="/learn/studio/content">Content</DocsLink> — manage uploads and create new videos
        </li>
        <li>
          <DocsLink href="/learn/studio/analytics">Analytics</DocsLink> — understand performance in detail
        </li>
        <li>
          <DocsLink href="/learn/studio/quick-start">Quick Start</DocsLink> — the fastest publish path (and the best early habits)
        </li>
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

export default StudioBasicsDashboard;
