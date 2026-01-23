import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComingSoonBadge } from "@/components/common/ComingSoonBadge";
import { ScreenshotPlaceholder } from "@/components/common/ScreenshotPlaceholder";
import { studioLearnSidebar } from "@/config/sidebarConfig";
import {
  DocsBreadcrumb,
  DocsHeading,
  DocsLearnBox,
  DocsNote,
  DocsList,
  DocsLink,
  DocsInlineCode,
  DocsCodeBlock,
} from "@/components/docs/DocsContent";
import { TocItem } from "@/components/docs/OnThisPage";

const tocItems: TocItem[] = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "content-types", title: "What you can manage (today)", level: 2 },
  { id: "videos-library", title: "Videos: your main library", level: 2 },
  { id: "uploading-videos", title: "Uploading videos", level: 2 },
  { id: "video-details", title: "Video details that matter", level: 2 },
  { id: "thumbnails", title: "Thumbnails", level: 2 },
  { id: "playlists", title: "Playlists", level: 2 },
  { id: "snippets-live", title: "Snippets & Live", level: 2 },
  { id: "tips", title: "Make the most of Content", level: 2 },
];

const sectionIdBySlug: Record<string, string> = {
  uploading: "uploading-videos",
  details: "video-details",
  thumbnails: "thumbnails",
  playlists: "playlists",
};

const StudioBasicsContent = () => {
  const location = useLocation();

  useEffect(() => {
    const parts = location.pathname.split("/").filter(Boolean);
    const last = parts[parts.length - 1];
    const maybeId = sectionIdBySlug[last];

    if (!maybeId) {
      // If they hit /learn/studio/content (or something unknown), start at top.
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(maybeId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.pathname]);

  return (
    <DocsLayout sidebarSections={studioLearnSidebar} tocItems={tocItems}>
      <DocsBreadcrumb
        items={[
          { label: "Learn CreaTV Studio", href: "/learn/studio" },
          { label: "Content" },
        ]}
      />

      <DocsHeading level={1}>Content</DocsHeading>

      <p className="text-lg text-muted-foreground mb-6">
        Think of <strong>Content</strong> as your “creator inventory” page: what you’ve uploaded,
        what’s processing, and what’s ready to ship to the world.
      </p>

      <DocsLearnBox>
        <DocsList>
          <li>How the Content tabs are structured (and what’s live vs in-progress)</li>
          <li>How the video library cards work (Processing vs Ready, View vs Watch)</li>
          <li>The real upload flow (steps, required fields, visibility & scheduling)</li>
          <li>Thumbnails and playlists (what’s supported today, what’s being built)</li>
        </DocsList>
      </DocsLearnBox>

      <DocsNote title="Fast-moving product warning (the good kind)">
        <p>
          CreaTV Studio is actively evolving. You’ll see some UI that’s already wired up end-to-end
          (like video uploads), and some UI that’s intentionally “scaffolded” while the backend catches up.
          When something is in that second bucket, we’ll call it out clearly so you’re not stuck playing
          “is it me or is it the feature?”
        </p>
      </DocsNote>

      <DocsHeading id="overview">Overview</DocsHeading>

      <p className="mb-4">
        The Content section lives inside Studio and is designed to answer three questions quickly:
      </p>

      <DocsList>
        <li>
          <strong>What’s processing?</strong> (i.e., “Did my upload actually go through?”)
        </li>
        <li>
          <strong>What’s ready?</strong> (i.e., “Can viewers watch this right now?”)
        </li>
        <li>
          <strong>Where do I go next?</strong> (analytics, watch page, and soon: editing + organization)
        </li>
      </DocsList>

      <ScreenshotPlaceholder label="Content → Videos tab showing a mix of Processing and Ready video cards." />

      <DocsHeading id="content-types">What you can manage (today)</DocsHeading>

      <p className="mb-4">
        Content currently includes four tabs. They’re not all at the same maturity level yet—and that’s okay.
        Here’s the honest breakdown:
      </p>

      <DocsList>
        <li>
          <strong>Videos</strong> — fully supported end-to-end (upload → process → watch → analytics).
        </li>
        <li>
          <strong>Posts</strong> — early UI / workflow scaffolding (backend + publishing surface is still being built).
        </li>
        <li>
          <strong>Playlists</strong> — early UI scaffolding (real playlist data + management will land as backend work completes).
        </li>
        <li>
          <strong>Podcasts</strong> — early UI scaffolding (upload flow exists in Studio, but it’s not the primary shipped path yet).
        </li>
      </DocsList>

      <DocsNote title="Search & filters">
        <p>
          You’ll see a search box and filter icon in Content. That UI is in place, but the full
          “search, filter, sort, bulk actions” toolkit is still in progress—so consider it a preview
          of where this is headed.
        </p>
      </DocsNote>

      <DocsHeading id="videos-library">Videos: your main library</DocsHeading>

      <p className="mb-4">
        The <strong>Videos</strong> tab is your current “source of truth” for uploads. Each video appears as a card
        that summarizes what matters at a glance.
      </p>

      <DocsHeading level={3}>What a video card shows</DocsHeading>

      <DocsList>
        <li>
          <strong>Thumbnail</strong> — uses your thumbnail URL if present; otherwise a placeholder is shown.
        </li>
        <li>
          <strong>Status</strong> — <em>Processing</em> while the backend is transcoding; <em>Ready</em> when it’s watchable.
        </li>
        <li>
          <strong>Uploaded time</strong> — shown as a relative timestamp (e.g., “Uploaded 2 hours ago”).
        </li>
        <li>
          <strong>Visibility</strong> — Public / Unlisted / Private.
        </li>
        <li>
          <strong>Views</strong> — displayed when view count is available.
        </li>
        <li>
          <strong>Duration</strong> — displayed when duration is available (otherwise shows 0:00).
        </li>
      </DocsList>

      <DocsHeading level={3}>What you can do from a video card</DocsHeading>

      <DocsList>
        <li>
          <strong>View</strong> — opens video analytics for that specific upload.
        </li>
        <li>
          <strong>Watch</strong> — opens the public watch page for the video.
        </li>
      </DocsList>

      <DocsNote title="Processing means “hands off” (for now)">
        <p>
          While a video is processing, Studio intentionally disables the “View” and “Watch” actions on that card.
          As soon as processing completes, those actions appear automatically.
        </p>
      </DocsNote>

      <DocsHeading id="uploading-videos">Uploading videos</DocsHeading>

      <p className="mb-4">
        There are two common entry points for uploads:
      </p>

      <DocsList>
        <li>
          <strong>Dashboard → Create</strong> opens the full “Create” modal (Videos, Posts, Playlists, Podcasts).
        </li>
        <li>
          <strong>Content → Create</strong> currently jumps straight into <em>video upload</em> (optimized for “I’m here to upload”).
        </li>
      </DocsList>

      <ScreenshotPlaceholder label="Dashboard Create modal with the 4 options (Upload Videos, Create Posts, Create Playlists, Create Podcasts)." />
      <ScreenshotPlaceholder label="Video upload modal - step navigation (Details → Video elements → Checks → Visibility)." />

      <DocsHeading level={3}>Supported file types</DocsHeading>
      <p className="mb-4">
        The upload UI currently accepts common video formats including{" "}
        <DocsInlineCode>.mp4</DocsInlineCode>, <DocsInlineCode>.mov</DocsInlineCode>,{" "}
        <DocsInlineCode>.webm</DocsInlineCode>, <DocsInlineCode>.avi</DocsInlineCode>,{" "}
        <DocsInlineCode>.mkv</DocsInlineCode>, <DocsInlineCode>.flv</DocsInlineCode>,{" "}
        and <DocsInlineCode>.wmv</DocsInlineCode>.
      </p>

      <DocsHeading level={3}>Upload steps (what Studio actually asks you for)</DocsHeading>

      <DocsCodeBlock language="steps">{`1) Select your video file
2) Details (required items live here)
   - Title (required)
   - Category (required)
   - Audience: "Made for kids?" (required)
   - Description (optional)
   - Thumbnail (optional)
   - Playlist selection (optional / evolving)
3) Video elements
   - End screen layout (available)
   - Subtitles UI is present (still evolving)
4) Checks
   - Runs basic checks before publish
5) Visibility
   - Private / Unlisted / Public
   - Optional scheduling (date + time)
6) Publish (or Schedule)`}</DocsCodeBlock>

      <DocsNote title="The 3 required fields are on purpose">
        <p>
          Studio requires <strong>Title</strong>, <strong>Category</strong>, and <strong>Audience</strong>
          because they’re foundational: title + category impact discovery, and audience is needed for legal/policy compliance.
        </p>
      </DocsNote>

      <DocsHeading id="video-details">Video details that matter</DocsHeading>

      <p className="mb-4">
        “Details” isn’t just paperwork. It’s how your video becomes understandable to humans <em>and</em> discoverable by the platform.
        Here’s what matters most right now.
      </p>

      <DocsHeading level={3}>Title</DocsHeading>
      <p className="mb-4">
        Titles are capped (and for good reason). Make them specific, searchable, and human. If your title needs a paragraph,
        that’s what the description is for.
      </p>

      <DocsHeading level={3}>Description</DocsHeading>
      <p className="mb-4">
        Descriptions are rendered on the watch page and support rich, interactive behavior (links, hashtags, and timestamps/chapters).
        If you want the full deep-dive on formatting, check out{" "}
        <DocsLink href="/learn/studio/quick-start">Quick Start</DocsLink>{" "}
        where we document what parses, what becomes clickable, and the “HTTPS link” safety behavior.
      </p>

      <DocsHeading level={3}>Category</DocsHeading>
      <p className="mb-4">
        Category is required and selected via a searchable picker. Pick the most accurate category—not the one you think will “hack” the algo.
        You’re training discovery signals over time, not winning a one-time lottery ticket.
      </p>

      <DocsHeading level={3}>Audience (“Made for kids?”)</DocsHeading>
      <p className="mb-4">
        Studio requires you to declare whether the video is made for kids. This is a compliance-critical field and affects how content is handled.
      </p>

      <DocsHeading level={3}>Visibility and scheduling</DocsHeading>
      <p className="mb-4">
        You can publish as <strong>Private</strong>, <strong>Unlisted</strong>, or <strong>Public</strong>, and optionally schedule a publish time.
        When scheduling is enabled, the video stays private until the scheduled time.
      </p>

      <DocsHeading id="thumbnails">Thumbnails</DocsHeading>

      <p className="mb-4">
        In Studio’s upload flow you’ll see three thumbnail options:
      </p>

      <DocsList>
        <li>
          <strong>Upload file</strong> — fully supported today.
        </li>
        <li>
          <strong>Auto-generated</strong>
          <ComingSoonBadge />
          — the UI is present; deeper automation is still being built.
        </li>
        <li>
          <strong>Test & compare</strong>
          <ComingSoonBadge />
          — designed for thumbnail A/B testing in the future.
        </li>
      </DocsList>

      <ScreenshotPlaceholder label="Upload Details step showing the 3 thumbnail options." />

      <DocsNote title="Thumbnail advice that actually helps">
        <DocsList>
          <li>Use a clear subject and strong contrast. Tiny details die on mobile.</li>
          <li>Design for the smallest preview you can imagine. Then make it 10% clearer.</li>
          <li>If you’re using text, keep it short (3–5 words) and readable at a glance.</li>
        </DocsList>
      </DocsNote>

      <DocsHeading id="playlists">Playlists</DocsHeading>

      <p className="mb-4">
        Playlists are in an “evolving” phase right now. You’ll see playlist selection in the video upload flow, and you can also
        create playlists from Studio’s Create modal. The UI is intentionally there so creators can start thinking in collections,
        even while the backend features are landing.
      </p>

      <DocsList>
        <li>
          <strong>During upload</strong>: you can choose a playlist in the Details step (current selection list is still being wired to real data).
        </li>
        <li>
          <strong>Create modal</strong>: “Create Playlists” opens a playlist builder experience (data scaffolding is in progress).
        </li>
      </DocsList>

      <DocsNote title="What to expect here">
        <p>
          You may see placeholder/demo entries in playlist workflows while the real playlist backend finishes landing.
          The intent is to keep the creator experience visible and testable while implementation catches up.
        </p>
      </DocsNote>

      <DocsHeading id="snippets-live">Snippets & Live</DocsHeading>

      <p className="mb-4">
        These are absolutely part of the long-term Studio plan—but they’re not implemented end-to-end yet.
      </p>

      <DocsList>
        <li>
          <strong>Snippets</strong>
          <ComingSoonBadge /> — CreaTV’s version of “Shorts.”
        </li>
        <li>
          <strong>Live</strong>
          <ComingSoonBadge /> — live streaming + live content management will land later.
        </li>
      </DocsList>

      <DocsHeading id="tips">Make the most of Content</DocsHeading>

      <p className="mb-4">
        A few practical habits that pay off immediately (and keep paying off as your library grows):
      </p>

      <DocsList>
        <li>
          <strong>Upload → then verify processing</strong>: after publishing, jump to Content → Videos and confirm you see your upload
          move from Processing to Ready.
        </li>
        <li>
          <strong>Use categories intentionally</strong>: category is a discovery primitive—treat it like one.
        </li>
        <li>
          <strong>Write descriptions for viewers</strong>: add links, hashtags, and chapters where it improves navigation.
        </li>
        <li>
          <strong>Don’t ship without a thumbnail</strong>: you can, but you’re choosing avoidable pain.
        </li>
        <li>
          <strong>Use “Unlisted” strategically</strong>: it’s perfect for review, client delivery, or “soft launch” sharing.
        </li>
      </DocsList>

      <DocsNote title="Next stop">
        <p>
          Once a video is Ready, click <strong>View</strong> on its card to jump into video analytics.{" "}
          <DocsLink href="/learn/studio/analytics">Go to Analytics</DocsLink>.
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

export default StudioBasicsContent;
