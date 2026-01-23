import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComingSoonBadge } from "@/components/common/ComingSoonBadge";
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
  { id: "getting-started", title: "Getting started", level: 2 },
  { id: "studio-map", title: "How Studio is organized", level: 2 },
  { id: "dashboard", title: "Dashboard", level: 3 },
  { id: "content", title: "Content", level: 3 },
  { id: "analytics", title: "Analytics", level: 3 },
  { id: "community", title: "Community", level: 3 },
  { id: "earn", title: "Earn", level: 3 },
  { id: "customization", title: "Customization", level: 3 },
  { id: "evolving-fast", title: "Studio is evolving fast", level: 2 },
  { id: "next-steps", title: "Next steps", level: 2 },
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

      <DocsHeading level={1}>CreaTV Studio</DocsHeading>

      <p className="text-lg text-muted-foreground mb-6">
        CreaTV Studio is your creator HQ: upload and manage content, track performance, shape your channel,
        and (soon) turn your work into real revenue—without needing to duct-tape spreadsheets together at 2 a.m.
      </p>

      <DocsNote title="Heads up: Studio is still in active development">
        <p>
          Studio is evolving quickly while CreaTV is pre-launch. That’s a good thing (more tools, faster iteration),
          but it also means buttons may move, labels may change, and new features may appear between visits.
          We’ll keep the docs updated as the product ships.
        </p>
      </DocsNote>

      <DocsLearnBox>
        <DocsList>
          <li>What CreaTV Studio is (and what it isn’t)</li>
          <li>How to access Studio and navigate the main sections</li>
          <li>What’s available today vs. what’s actively being built</li>
          <li>Where to go next when you’re ready to publish</li>
        </DocsList>
      </DocsLearnBox>

      <DocsHeading id="overview">Overview</DocsHeading>

      <p className="mb-4">
        Think of Studio as the control panel for your channel. It’s where you manage the creator side of CreaTV:
        your uploads, your performance metrics, and the “front door” of your brand (name, handle, banner, bio, etc.).
      </p>

      <p className="mb-4">
        Studio is designed to be simple: a small set of sections that map to real creator workflows.
        No “where-did-the-setting-go-this-time” scavenger hunt.
      </p>

      <DocsHeading id="getting-started">Getting started</DocsHeading>

      <DocsList ordered>
        <li>
          Sign in to CreaTV at{" "}
          <DocsLink href="https://www.creatv.io/auth" external>
            creatv.io/auth
          </DocsLink>
          .
        </li>
        <li>
          Open your profile menu and select <DocsInlineCode>CreaTV Studio</DocsInlineCode>.
        </li>
        <li>
          If you already have the direct link, you can typically jump straight to{" "}
          <DocsInlineCode>/creatv-studio</DocsInlineCode> (you’ll be prompted to sign in if needed).
        </li>
      </DocsList>

      <DocsNote title="Automatic channel setup">
        <p>
          Your channel identity (name, handle, and profile basics) is tied to your CreaTV account.
          You can refine everything in <DocsInlineCode>Customization</DocsInlineCode>.
        </p>
      </DocsNote>

      <DocsHeading id="studio-map">How Studio is organized</DocsHeading>

      <p className="mb-4">
        Studio is split into six main sections. Here’s the mental model:
      </p>

      <DocsHeading level={3} id="dashboard">
        Dashboard
      </DocsHeading>
      <p className="mb-4">
        Your at-a-glance channel overview. Today it focuses on the fundamentals:
      </p>
      <DocsList>
        <li>
          High-level totals like <strong>views</strong>, <strong>watch time</strong>, and <strong>total uploads</strong>
        </li>
        <li>
          A <strong>recent activity</strong> feed with quick actions (watch your video, open its analytics)
        </li>
        <li>
          Early scaffolding for subscriber and channel health metrics (more coming soon)
        </li>
      </DocsList>

      <DocsHeading level={3} id="content">
        Content
      </DocsHeading>
      <p className="mb-4">
        This is where you create and manage what your audience actually sees. Today Studio supports{" "}
        <strong>Videos</strong>, <strong>Posts</strong>, <strong>Playlists</strong>, and <strong>Podcasts</strong>.
        <strong> Snippets</strong> and <strong>Live</strong> are planned, but not implemented in the backend or frontend yet.
      </p>

      <DocsList>
        <li>
          <strong>Videos</strong> (upload, view, and open analytics per video)
        </li>
        <li>
          <strong>Snippets</strong>
          <ComingSoonBadge />
          <span className="text-muted-foreground"> (not available yet)</span>
        </li>
        <li>
          <strong>Posts</strong> (community-style updates — early access)
        </li>
        <li>
          <strong>Playlists</strong> (organize content — early access)
        </li>
        <li>
          <strong>Podcasts</strong> (foundation in place — actively being built)
        </li>
        <li>
          <strong>Live</strong>
          <ComingSoonBadge />
          <span className="text-muted-foreground"> (not available yet)</span>
        </li>
      </DocsList>

      <DocsCodeBlock language="workflow">
{`Fast path: publish a video
1) Open Studio → Content
2) Click "Create"
3) Choose "Upload Video"
4) Upload your file and add the basics (title, category, audience, thumbnail)
5) Publish`}
      </DocsCodeBlock>

      <DocsNote title="About search & filters">
        <p>
          You’ll see search and filter controls in Content. Some of these are still being wired up,
          so if something looks present-but-not-powerful yet… yes. That’s on purpose.
        </p>
      </DocsNote>

      <DocsHeading level={3} id="analytics">
        Analytics
      </DocsHeading>
      <p className="mb-4">
        Analytics is where you go from “I think this video is doing well” to “I know it is (and I can prove it).”
        The current Studio build includes:
      </p>
      <DocsList>
        <li>
          Channel-level rollups like <strong>total views</strong>, <strong>watch time</strong>, and{" "}
          <strong>average view duration</strong>
        </li>
        <li>
          A <strong>top videos</strong> view to quickly spot what’s working
        </li>
        <li>
          A dedicated <strong>per-video analytics</strong> experience (rapidly evolving)
        </li>
      </DocsList>

      <DocsNote title="Analytics freshness">
        <p>
          Early in launch, analytics can lag or shift as we improve accuracy, aggregation, and anti-spam logic.
          If a number looks “off,” it may simply be catching up or being recalculated.
        </p>
      </DocsNote>

      <DocsHeading level={3} id="community">
        Community
      </DocsHeading>
      <p className="mb-4">
        Community is your audience relationship layer: comments and creator-to-viewer communication.
        The structure is in place, and features will expand quickly.
      </p>
      <DocsList>
        <li>
          <strong>Comments</strong> management (foundation)
        </li>
        <li>
          <strong>Community posts</strong> (create + share updates — early access)
        </li>
      </DocsList>

      <DocsHeading level={3} id="earn">
        Earn
      </DocsHeading>
      <p className="mb-4">
        Earn is where monetization lives. You’ll see early “eligibility” checkpoints and the overall monetization
        scaffolding as CreaTV’s creator economy comes online.
      </p>
      <DocsList>
        <li>
          Partner-style <strong>eligibility tracking</strong> (pre-launch / subject to change)
        </li>
        <li>
          A future home for <strong>revenue analytics</strong> and <strong>payout settings</strong>
        </li>
      </DocsList>

      <DocsNote type="pitfall" title="Pitfall: don’t treat eligibility numbers as final (yet)">
        <p>
          Requirements and thresholds may change during pre-launch as we finalize the Partner Program.
          If you’re reading this early: you’re not behind—you're just ahead of the product.
        </p>
      </DocsNote>

      <DocsHeading level={3} id="customization">
        Customization
      </DocsHeading>
      <p className="mb-4">
        Customization is where your channel becomes <em>yours</em>. In the current build you can:
      </p>
      <DocsList>
        <li>
          Update <strong>channel name</strong>, <strong>handle</strong>, <strong>bio</strong>, and <strong>contact email</strong>
        </li>
        <li>
          Upload a <strong>profile picture</strong> and <strong>banner</strong>
        </li>
        <li>
          Explore upcoming <strong>layout controls</strong> as they come online
        </li>
      </DocsList>

      <DocsHeading id="evolving-fast">Studio is evolving fast</DocsHeading>

      <p className="mb-4">
        A quick promise and a quick warning:
      </p>

      <DocsList>
        <li>
          <strong>Promise:</strong> Studio will keep getting more powerful—especially analytics, community tooling,
          and monetization.
        </li>
        <li>
          <strong>Warning:</strong> You may see features appear before the docs catch up (we’re working on it),
          and some UI is intentionally “scaffolded” while backend pieces ship.
        </li>
      </DocsList>

      <DocsNote title="If something looks different than the docs">
        <p>
          That usually means you’re seeing a newer build. If you want to help, keep notes on what changed and why it felt
          better/worse. That feedback directly shapes what Studio becomes.
        </p>
      </DocsNote>

      <DocsHeading id="next-steps">Next steps</DocsHeading>

      <p className="mb-4">
        Keep going with these guides (they’re actively being expanded as Studio ships):
      </p>

      <DocsList>
        <li>
          <DocsLink href="/learn/studio/quick-start">Quick Start</DocsLink> — the fastest path from “new channel” to “published”
        </li>
        <li>
          <DocsLink href="/learn/studio/first-video">Your First Video</DocsLink> — a clean, step-by-step upload walkthrough
        </li>
        <li>
          <DocsLink href="/learn/studio/dashboard">Dashboard</DocsLink> — what the overview metrics mean (and what’s coming)
        </li>
        <li>
          <DocsLink href="/learn/studio/content">Content</DocsLink> — managing videos, posts, playlists, podcasts (and what’s coming next)
        </li>
        <li>
          <DocsLink href="/learn/studio/analytics">Analytics</DocsLink> — interpreting performance like a pro
        </li>
        <li>
          <DocsLink href="/learn/studio/customization">Customization</DocsLink> — polish your channel identity
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

export default StudioOverview;
