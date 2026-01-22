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
  { id: "comments", title: "Managing Comments", level: 2 },
  { id: "community-posts", title: "Community Posts", level: 2 },
  { id: "mentions", title: "Mentions", level: 2 },
];

const StudioCommunityPage = () => {
  return (
    <DocsLayout sidebarSections={studioLearnSidebar} tocItems={tocItems}>
      <DocsBreadcrumb
        items={[
          { label: "Learn CreaTV Studio", href: "/learn/studio" },
          { label: "Community" },
        ]}
      />

      <DocsHeading level={1}>Community</DocsHeading>

      <p className="text-lg text-muted-foreground mb-6">
        Build meaningful connections with your viewers through comments, community posts,
        and direct engagement.
      </p>

      <DocsHeading id="overview">Overview</DocsHeading>

      <p className="mb-4">
        The Community section in CreaTV Studio helps you stay connected with your audience.
        Here you can manage comments, create community posts, and track when you're mentioned
        across the platform.
      </p>

      <DocsHeading id="comments">Managing Comments</DocsHeading>

      <p className="mb-4">
        Comments are the heart of community engagement. In Studio, you can:
      </p>

      <DocsList>
        <li><strong>View all comments</strong> - See comments across all your videos in one place</li>
        <li><strong>Filter comments</strong> - Show held for review, published, or questions</li>
        <li><strong>Reply</strong> - Respond directly to viewers</li>
        <li><strong>Heart</strong> - Show appreciation for great comments</li>
        <li><strong>Pin</strong> - Feature important comments at the top</li>
        <li><strong>Hide</strong> - Remove inappropriate comments</li>
      </DocsList>

      <DocsNote>
        <p>
          Use the "Held for review" filter to find comments that may need moderation. CreaTV
          automatically holds potentially inappropriate comments for your review.
        </p>
      </DocsNote>

      <DocsHeading id="community-posts">Community Posts</DocsHeading>

      <p className="mb-4">
        Community posts let you share updates, polls, and behind-the-scenes content with your
        subscribers. Post types include:
      </p>

      <DocsList>
        <li><strong>Text posts</strong> - Share announcements and updates</li>
        <li><strong>Image posts</strong> - Share photos and graphics</li>
        <li><strong>Polls</strong> - Get feedback from your audience</li>
        <li><strong>Video previews</strong> - Tease upcoming content</li>
      </DocsList>

      <DocsNote type="pitfall" title="Pitfall">
        <p>
          Community posts require at least 500 subscribers to unlock. Until then, focus on
          engaging through video comments.
        </p>
      </DocsNote>

      <DocsHeading id="mentions">Mentions</DocsHeading>

      <p className="mb-4">
        Track when other creators or viewers mention your channel. Mentions help you:
      </p>

      <DocsList>
        <li>Discover collaborations and shoutouts</li>
        <li>Find user-generated content about your channel</li>
        <li>Respond to community conversations</li>
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

export default StudioCommunityPage;
