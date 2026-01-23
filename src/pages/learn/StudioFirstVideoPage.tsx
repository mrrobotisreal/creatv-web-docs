import { DocsLayout } from "@/components/docs/DocsLayout";
import { ScreenshotPlaceholder } from "@/components/common/ScreenshotPlaceholder";
import { studioLearnSidebar } from "@/config/sidebarConfig";
import {
  DocsBreadcrumb,
  DocsHeading,
  DocsLearnBox,
  DocsList,
  DocsNote,
  DocsLink,
  DocsInlineCode,
} from "@/components/docs/DocsContent";
import { TocItem } from "@/components/docs/OnThisPage";

const tocItems: TocItem[] = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "before-you-upload", title: "Before you upload", level: 2 },
  { id: "start-upload", title: "Start the upload", level: 2 },
  { id: "step-upload", title: "Step 1: Upload", level: 2 },
  { id: "step-details", title: "Step 2: Details", level: 2 },
  { id: "step-elements", title: "Step 3: Video elements", level: 2 },
  { id: "step-checks", title: "Step 4: Checks", level: 2 },
  { id: "step-visibility", title: "Step 5: Visibility", level: 2 },
  { id: "after-publish", title: "After you publish", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
];

const StudioFirstVideoPage = () => {
  return (
    <DocsLayout sidebarSections={studioLearnSidebar} tocItems={tocItems}>
      <DocsBreadcrumb
        items={[
          { label: "Learn CreaTV Studio", href: "/learn/studio" },
          { label: "Your First Video" },
        ]}
      />

      <DocsHeading level={1}>Your First Video</DocsHeading>

      <p className="text-lg text-muted-foreground mb-6">
        A clean, step-by-step upload walkthrough—built for speed, clarity, and fewer “wait… where is that setting?” moments.
      </p>

      <DocsNote title="Reality check (the good kind)">
        <p>
          Your first upload doesn’t have to be perfect. It does need to be <strong>clear</strong>, <strong>watchable</strong>, and
          published with the required basics filled out. You can always iterate.
        </p>
      </DocsNote>

      <DocsLearnBox>
        <DocsList>
          <li>Open Studio and launch the upload flow</li>
          <li>Fill the required fields (so you don’t get stuck on “Next”)</li>
          <li>Pick visibility or schedule a publish time</li>
          <li>Find your video in Content and open analytics</li>
        </DocsList>
      </DocsLearnBox>

      <DocsHeading id="overview">Overview</DocsHeading>
      <p className="mb-4">
        Uploading a video in Studio is a guided flow with five steps:
        <strong> Upload → Details → Video elements → Checks → Visibility</strong>.
      </p>

      <DocsHeading id="before-you-upload">Before you upload</DocsHeading>
      <DocsList>
        <li>
          Recommended formats: <strong>MP4</strong>, <strong>MOV</strong>, <strong>WebM</strong> (others may work too).
        </li>
        <li>
          Have a thumbnail ready if you can. If not, you can still publish and update later.
        </li>
        <li>
          Plan your <strong>title</strong> and <strong>category</strong> ahead of time—both are required.
        </li>
      </DocsList>

      <DocsHeading id="start-upload">Start the upload</DocsHeading>
      <DocsList ordered>
        <li>
          Open <DocsLink href="/learn/studio/dashboard">Dashboard</DocsLink> (or <DocsLink href="/learn/studio/content">Content</DocsLink>).
        </li>
        <li>
          Click <strong>Create</strong>.
        </li>
        <li>
          Select <strong>Upload Video</strong>.
        </li>
      </DocsList>

      <ScreenshotPlaceholder label='Dashboard → "Create" button → Create modal with "Upload Video" option' />

      <DocsHeading id="step-upload">Step 1: Upload</DocsHeading>
      <p className="mb-4">
        Select your video file. Studio will show upload progress—keep the tab open until it completes.
      </p>

      <DocsNote title="Pro tip">
        <p>
          Large uploads can take a moment even after progress hits 100% (network + processing). If you close the tab mid-upload,
          you’re basically asking the internet to remember your progress out of pure kindness.
        </p>
      </DocsNote>

      <ScreenshotPlaceholder label="Upload step (file picker + progress)" />

      <DocsHeading id="step-details">Step 2: Details</DocsHeading>
      <p className="mb-4">
        This is the most important step for getting published quickly because it includes required fields.
      </p>

      <DocsList>
        <li>
          <strong>Title (required)</strong> — short, specific, and human-readable.
        </li>
        <li>
          <strong>Category (required)</strong> — select the best match.
        </li>
        <li>
          <strong>Audience (required)</strong> — specify whether it’s made for kids.
        </li>
        <li>
          <strong>Description (recommended)</strong> — tell viewers what they’ll get; add chapters/timestamps if relevant.
        </li>
        <li>
          <strong>Thumbnail (recommended)</strong> — upload one, or choose an auto/test option if available.
        </li>
        <li>
          <strong>Playlists (optional)</strong> — useful for organization (still evolving).
        </li>
      </DocsList>

      <ScreenshotPlaceholder label="Details step (Title, Description, Thumbnail, Category, Audience)" />

      <DocsNote type="pitfall" title="Pitfall: “Next” won’t work until required fields are set">
        <p>
          If you can’t continue, double-check: <strong>Title</strong>, <strong>Category</strong>, and <strong>Audience</strong>.
          Those three unlock the rest of the flow.
        </p>
      </DocsNote>

      <DocsHeading id="step-elements">Step 3: Video elements</DocsHeading>
      <p className="mb-4">
        This step is where you’ll eventually add extras like subtitles and end screens. Some options may appear disabled
        while the backend support is being rolled out.
      </p>

      <DocsList>
        <li><strong>Subtitles</strong> — helps accessibility and understanding (may be disabled right now).</li>
        <li><strong>End screens</strong> — suggest another video, playlist, or call-to-action.</li>
      </DocsList>

      <ScreenshotPlaceholder label="Video elements step (subtitles / end screen layouts)" />

      <DocsHeading id="step-checks">Step 4: Checks</DocsHeading>
      <p className="mb-4">
        Studio runs basic checks (for example, copyright-related flags). If it finds something, you’ll get a chance
        to address it before publishing.
      </p>

      <ScreenshotPlaceholder label="Checks step (copyright check status)" />

      <DocsHeading id="step-visibility">Step 5: Visibility</DocsHeading>
      <p className="mb-4">
        Choose who can see your video and when it goes live.
      </p>

      <DocsList>
        <li><strong>Private</strong> — only you (and specific people, depending on future sharing options).</li>
        <li><strong>Unlisted</strong> — anyone with the link can watch.</li>
        <li><strong>Public</strong> — fully discoverable on CreaTV.</li>
        <li><strong>Schedule</strong> — pick a date/time to publish publicly later.</li>
      </DocsList>

      <ScreenshotPlaceholder label="Visibility step (Private / Unlisted / Public + Schedule controls)" />

      <DocsNote title="Publishing checklist">
        <p>
          Before you hit <strong>Publish</strong>: confirm your title is clear, your thumbnail isn’t blurry, and your category matches the content.
          That’s 80% of early discoverability.
        </p>
      </DocsNote>

      <DocsHeading id="after-publish">After you publish</DocsHeading>
      <DocsList ordered>
        <li>
          Go to <DocsLink href="/learn/studio/content">Content</DocsLink> and find your video in the list.
        </li>
        <li>
          Open its analytics (or use <DocsLink href="/learn/studio/analytics">Analytics</DocsLink>) to track early performance.
        </li>
        <li>
          Share it. Early views help you validate the packaging (title/thumbnail) and hook.
        </li>
      </DocsList>

      <DocsHeading id="troubleshooting">Troubleshooting</DocsHeading>
      <DocsList>
        <li>
          <strong>Categories won’t load:</strong> wait a moment and retry—category data can be temporarily unavailable.
        </li>
        <li>
          <strong>Upload looks stuck:</strong> keep the tab open, confirm your connection, and try again if the progress never moves.
        </li>
        <li>
          <strong>Preview doesn’t play:</strong> that’s usually a local browser/format quirk—publishing can still work fine.
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

export default StudioFirstVideoPage;
