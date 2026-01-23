import { DocsLayout } from "@/components/docs/DocsLayout";
import { studioLearnSidebar } from "@/config/sidebarConfig";
import {
  DocsBreadcrumb,
  DocsHeading,
  DocsLearnBox,
  DocsList,
  DocsNote,
  DocsLink,
  DocsCodeBlock,
  DocsInlineCode,
} from "@/components/docs/DocsContent";
import { TocItem } from "@/components/docs/OnThisPage";

const tocItems: TocItem[] = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "prereqs", title: "Before you start", level: 2 },
  { id: "channel-basics", title: "Set up your channel basics", level: 2 },
  { id: "publish-fast", title: "Publish fast (without rushing)", level: 2 },
  { id: "discoverability", title: "Quick wins for reach + search", level: 2 },
  { id: "descriptions", title: "Descriptions that work", level: 3 },
  { id: "chapters", title: "Chapters & timestamps", level: 3 },
  { id: "hashtags", title: "Hashtags (useful, not spammy)", level: 3 },
  { id: "description-screenshots", title: "Screenshot checklist", level: 3 },
  { id: "next-steps", title: "Next steps", level: 2 },
];

const StudioQuickStartPage = () => {
  return (
    <DocsLayout sidebarSections={studioLearnSidebar} tocItems={tocItems}>
      <DocsBreadcrumb
        items={[
          { label: "Learn CreaTV Studio", href: "/learn/studio" },
          { label: "Quick Start" },
        ]}
      />

      <DocsHeading level={1}>Quick Start</DocsHeading>

      <p className="text-lg text-muted-foreground mb-6">
        This is the “get your channel looking legit and publish something” guide. No fluff. No lore. Just momentum.
      </p>

      <DocsNote title="Studio is evolving fast (and that’s intentional)">
        <p>
          CreaTV Studio is pre-launch and features are shipping quickly. If a screen looks slightly different than
          what you see here, you’re probably on a newer build.
        </p>
      </DocsNote>

      <DocsLearnBox>
        <DocsList>
          <li>Set your channel name, handle, and brand basics</li>
          <li>Get a first upload published cleanly</li>
          <li>Use metadata that helps viewers (and helps discovery)</li>
          <li>Know what to check right after you publish</li>
        </DocsList>
      </DocsLearnBox>

      <DocsHeading id="overview">Overview</DocsHeading>
      <p className="mb-4">
        The fastest path to a strong start is simple:
        <strong> brand your channel → publish a video → make it easy to understand → iterate using analytics.</strong>
      </p>

      <DocsHeading id="prereqs">Before you start</DocsHeading>
      <DocsList>
        <li>
          You’re signed in to CreaTV and can access <DocsInlineCode>/creatv-studio</DocsInlineCode>.
        </li>
        <li>You have a video file ready to upload (MP4/MOV/WebM are great choices).</li>
        <li>Optional but recommended: a thumbnail image (even a simple one beats “random frame roulette”).</li>
      </DocsList>

      <DocsHeading id="channel-basics">Set up your channel basics</DocsHeading>
      <p className="mb-4">
        Go to <DocsLink href="/learn/studio/customization">Customization</DocsLink> and knock out the essentials:
      </p>
      <DocsList>
        <li>
          <strong>Channel name</strong> — what people remember.
        </li>
        <li>
          <strong>Handle</strong> — what people type.
        </li>
        <li>
          <strong>Bio</strong> — 1–3 sentences: who you are, what you post, why it’s worth watching.
        </li>
        <li>
          <strong>Profile picture + banner</strong> — don’t overthink it, just don’t leave it blank.
        </li>
      </DocsList>

      <DocsNote title="Branding tip">
        <p>
          Your banner should still look good on mobile. Big, centered subject. Minimal tiny text. If it needs a
          magnifying glass, it’s too small.
        </p>
      </DocsNote>

      <DocsHeading id="publish-fast">Publish fast (without rushing)</DocsHeading>
      <p className="mb-4">
        Your first upload matters less than your <em>second</em> and <em>third</em>. The goal is to ship a solid first
        video, learn what viewers respond to, and improve quickly.
      </p>

      <DocsList ordered>
        <li>
          Open <DocsLink href="/learn/studio/dashboard">Dashboard</DocsLink> or{" "}
          <DocsLink href="/learn/studio/content">Content</DocsLink>.
        </li>
        <li>
          Click <strong>Create</strong> → choose <strong>Upload Video</strong>.
        </li>
        <li>
          Add the required basics: <strong>Title</strong>, <strong>Category</strong>, and <strong>Audience</strong>.
        </li>
        <li>
          Choose visibility: <strong>Public</strong>, <strong>Unlisted</strong>, or <strong>Private</strong> (you can also
          schedule).
        </li>
      </DocsList>

      <DocsNote title="Want the full walkthrough?">
        <p>
          Head to <DocsLink href="/learn/studio/first-video">Your First Video</DocsLink> for the exact step-by-step flow
          and screenshot spots.
        </p>
      </DocsNote>

      <DocsHeading id="discoverability">Quick wins for reach + search</DocsHeading>
      <p className="mb-4">
        Discovery is mostly about clarity and viewer satisfaction. You control the clarity part immediately.
      </p>

      <DocsList>
        <li>
          <strong>Titles:</strong> Put the main idea up front. If your title starts with “So I decided to…” you’re hiding
          the point.
        </li>
        <li>
          <strong>Thumbnails:</strong> High contrast, simple subject, readable at phone size. One idea, not five.
        </li>
        <li>
          <strong>Descriptions:</strong> Treat the first two lines like your video’s trailer. Then make the rest useful
          and navigable (links, chapters, and context).
        </li>
        <li>
          <strong>Category:</strong> Pick the closest match. This helps CreaTV place the video in the right neighborhoods.
        </li>
        <li>
          <strong>Consistency:</strong> Don’t vanish for months. The algorithm can’t recommend your next video if you
          never upload it.
        </li>
      </DocsList>

      <DocsHeading level={3} id="descriptions">
        Descriptions that work
      </DocsHeading>
      <p className="mb-4">
        CreaTV descriptions are intentionally <em>interactive</em>. Links are clickable, hashtags are tappable, and
        timestamps jump the viewer to that moment in the video. In other words: your description can be a tiny “table of
        contents” instead of a sad wall of text.
      </p>

      <DocsNote title="The “above the fold” rule">
        <p className="mb-3">
          On the watch page, long descriptions collapse by default (with a subtle <strong>...more</strong> hint). Viewers
          can click to expand and there’s a <strong>Show less</strong> option once it’s open.
        </p>
        <p className="mb-0">
          That means your first 1–2 lines matter a lot. Put the promise and the keywords there, not buried 40 lines down
          next to your third cousin’s discount code.
        </p>
      </DocsNote>

      <DocsHeading level={4}>A simple structure that almost always wins</DocsHeading>
      <DocsList>
        <li>
          <strong>Line 1–2:</strong> What the viewer will get (clear + specific).
        </li>
        <li>
          <strong>Quick bullets:</strong> Tools used, links, downloads, credits (use <DocsInlineCode>-</DocsInlineCode>{" "}
          bullets).
        </li>
        <li>
          <strong>Chapters:</strong> If your video is longer than a few minutes, add them. People love skipping to “the
          part.”
        </li>
        <li>
          <strong>Hashtags:</strong> 2–5 useful ones at the bottom.
        </li>
      </DocsList>

      <DocsHeading level={4}>Formatting you can use (lightweight, safe, and predictable)</DocsHeading>
      <p className="mb-3">
        This is not full Markdown. It’s a lightweight set of features designed to render cleanly and stay safe.
      </p>
      <DocsList>
        <li>
          <strong>Bold:</strong> <DocsInlineCode>**like this**</DocsInlineCode>
        </li>
        <li>
          <strong>Italic:</strong> <DocsInlineCode>__like this__</DocsInlineCode>
        </li>
        <li>
          <strong>Strikethrough:</strong> <DocsInlineCode>~~like this~~</DocsInlineCode>
        </li>
        <li>
          <strong>Bullets:</strong> start a line with <DocsInlineCode>- </DocsInlineCode> to create a bulleted list
        </li>
      </DocsList>

      <DocsNote type="pitfall" title="Formatting markers must match">
        <p className="mb-0">
          If you forget a closing marker (for example, you type <DocsInlineCode>**bold</DocsInlineCode> without the final{" "}
          <DocsInlineCode>**</DocsInlineCode>) the markers will display as normal characters. Keep it tidy.
        </p>
      </DocsNote>

      <DocsHeading level={4}>Links (HTTPS recommended)</DocsHeading>
      <p className="mb-3">
        Links are automatically detected and made clickable. CreaTV supports both <DocsInlineCode>https://</DocsInlineCode>{" "}
        and <DocsInlineCode>http://</DocsInlineCode>, but HTTP links trigger a safety warning modal before opening.
      </p>

      <DocsNote type="pitfall" title="Avoid HTTP links">
        <p className="mb-3">
          HTTP links still work, but the warning adds friction (and makes your description feel sketchy). If you can
          control it, always use HTTPS.
        </p>
        <DocsCodeBlock language="text">
{`✅ Recommended
https://docs.creatv.io

⚠️ Works, but shows a warning first
http://example.com`}
        </DocsCodeBlock>
      </DocsNote>

      <DocsHeading level={4}>Clickable timestamps (and how they become chapters)</DocsHeading>
      <p className="mb-3">
        Any timestamp in your description (like <DocsInlineCode>02:10</DocsInlineCode> or{" "}
        <DocsInlineCode>1:05:30</DocsInlineCode>) becomes clickable and will jump the viewer to that time.
      </p>
      <p className="mb-0">
        If you want the full <strong>Chapters</strong> section to appear on the watch page (with its own chapter cards),
        add a header line (<DocsInlineCode>Chapters</DocsInlineCode> or <DocsInlineCode>Timestamps</DocsInlineCode>) and
        list your timestamps directly under it.
      </p>

      <DocsHeading level={3} id="chapters">
        Chapters & timestamps
      </DocsHeading>
      <p className="mb-4">
        Chapters make your video easier to navigate—and easier to recommend to someone who wants “the part where you show
        the thing.” They also make your content feel more professional instantly, even if you recorded it in one take
        while your dog judged you silently off-camera.
      </p>

      <DocsCodeBlock language="text">
{`Chapters
00:00 Intro
00:18 What we’re building
02:10 The big mistake I made
04:45 The fix
08:12 Final result
10:03 Wrap-up`}
      </DocsCodeBlock>

      <DocsList>
        <li>
          Use <DocsInlineCode>MM:SS</DocsInlineCode> for most videos, or <DocsInlineCode>HH:MM:SS</DocsInlineCode> for
          longer ones.
        </li>
        <li>
          Keep your chapter lines together under the header. Once the chapter list starts, a blank line ends it.
        </li>
        <li>
          You can optionally prefix chapter lines with <DocsInlineCode>-</DocsInlineCode>, <DocsInlineCode>*</DocsInlineCode>{" "}
          or <DocsInlineCode>•</DocsInlineCode>. (I still recommend <DocsInlineCode>-</DocsInlineCode> for consistency.)
        </li>
      </DocsList>

      <DocsNote title="Tiny detail, big UX win">
        <p className="mb-0">
          You don’t need fancy editing to feel polished. Chapters are one of the highest “effort-to-impact” upgrades you
          can make in under two minutes.
        </p>
      </DocsNote>

      <DocsHeading level={3} id="hashtags">
        Hashtags (useful, not spammy)
      </DocsHeading>
      <p className="mb-4">
        Hashtags are labels, not a ransom note. In CreaTV, hashtags in descriptions are clickable and help viewers
        discover related videos—so use a few that actually describe what’s on screen.
      </p>

      <DocsCodeBlock language="text">
{`#drone #colorado #cinematic`}
      </DocsCodeBlock>

      <DocsList>
        <li>2–5 solid hashtags beats 25 random ones.</li>
        <li>Use specific tags viewers might search (places, topics, tools) instead of generic everything-tags.</li>
        <li>Pro tip: if your hashtags are competing with your main message, move the hashtags to the bottom.</li>
      </DocsList>

      <DocsHeading level={3} id="description-screenshots">
        Screenshot checklist (optional, but makes this page 10x clearer)
      </DocsHeading>
      <p className="mb-4">
        If you want to add visuals to this page, these are the highest-value shots. They let creators “get it” in two
        seconds instead of reading a novel.
      </p>

      <div className="my-6 rounded-xl border border-border bg-muted/20 p-4">
        <div className="font-semibold mb-2">Screenshot 1: Raw description text in Studio (before publish)</div>
        <p className="text-sm text-muted-foreground mb-3">
          Where: Studio → Create → Upload Video → <strong>Details</strong> step → <strong>Description</strong> field.
        </p>
        <p className="text-sm mb-3">
          Paste something like this so you can capture a clean “before” screenshot:
        </p>
        <DocsCodeBlock language="text">
{`Build a fast search bar (without melting your backend).
Skip to 02:10 if you just want the fix.

- **Tools:** Go + Postgres + Redis
- __Download__: https://docs.creatv.io
- ~~Old approach:~~ cache everything forever (don’t do this)

Chapters
00:00 Intro
02:10 The fix
05:30 Final result

#creatv #tutorial #backend`}
        </DocsCodeBlock>
      </div>

      <div className="my-6 rounded-xl border border-border bg-muted/20 p-4">
        <div className="font-semibold mb-2">Screenshot 2: Rendered description + Chapters on the watch page</div>
        <p className="text-sm text-muted-foreground mb-3">
          Where: Open the published video → scroll to the description card → capture both the collapsed state (with{" "}
          <strong>...more</strong>) and the expanded state (with <strong>Show less</strong>). Then capture the{" "}
          <strong>Chapters</strong> section below.
        </p>
        <p className="text-sm mb-0">
          Bonus shot: click a timestamp in the description to show that it jumps the player instantly.
        </p>
      </div>

      <div className="my-6 rounded-xl border border-border bg-muted/20 p-4">
        <div className="font-semibold mb-2">Optional Screenshot 3: The HTTP link warning modal</div>
        <p className="text-sm text-muted-foreground mb-0">
          Add an <DocsInlineCode>http://</DocsInlineCode> link temporarily, click it in the description, and screenshot
          the warning modal. Then remove the HTTP link afterward (don’t ship sketchy links).
        </p>
      </div>

      <DocsHeading id="next-steps">Next steps</DocsHeading>
      <DocsList>
        <li>
          <DocsLink href="/learn/studio/first-video">Your First Video</DocsLink> — the complete upload walkthrough
        </li>
        <li>
          <DocsLink href="/learn/studio/analytics">Analytics</DocsLink> — what to check after you publish
        </li>
        <li>
          <DocsLink href="/learn/studio/customization">Customization</DocsLink> — polish the channel “front door”
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

export default StudioQuickStartPage;
