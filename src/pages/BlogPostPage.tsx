import { useParams, Link } from "react-router-dom";
import { DocsLayout } from "@/components/docs/DocsLayout";
import {
  DocsBreadcrumb,
  DocsHeading,
  DocsNote,
  DocsList,
  DocsLink,
} from "@/components/docs/DocsContent";
import { TocItem } from "@/components/docs/OnThisPage";
import { ArrowLeft } from "lucide-react";

interface BlogPostData {
  title: string;
  date: string;
  author: string;
  content: React.ReactNode;
  tocItems: TocItem[];
}

const blogPostsData: Record<string, BlogPostData> = {
  "introducing-shorts": {
    title: "Introducing CreaTV Shorts: Vertical Video for Everyone",
    date: "January 15, 2026",
    author: "The CreaTV Team",
    tocItems: [
      { id: "what-are-shorts", title: "What are Shorts?", level: 2 },
      { id: "getting-started", title: "Getting Started", level: 2 },
      { id: "monetization", title: "Monetization", level: 2 },
      { id: "whats-next", title: "What's Next", level: 2 },
    ],
    content: (
      <>
        <p className="text-lg text-muted-foreground mb-6">
          We're thrilled to announce CreaTV Shorts — a new way to create and discover short-form
          vertical videos on CreaTV.
        </p>

        <DocsHeading id="what-are-shorts">What are Shorts?</DocsHeading>
        <p className="mb-4">
          Shorts are vertical videos up to 60 seconds long. They're designed for quick, engaging
          content that viewers can swipe through in our dedicated Shorts feed.
        </p>
        <DocsList>
          <li>Vertical format (9:16 aspect ratio)</li>
          <li>Up to 60 seconds long</li>
          <li>Full-screen, immersive viewing experience</li>
          <li>Easy creation tools right in the app</li>
        </DocsList>

        <DocsHeading id="getting-started">Getting Started</DocsHeading>
        <p className="mb-4">Creating your first Short is easy:</p>
        <DocsList ordered>
          <li>Open the CreaTV app and tap the + button</li>
          <li>Select "Create a Short"</li>
          <li>Record or upload your video</li>
          <li>Add text, filters, and music</li>
          <li>Publish and share with your audience</li>
        </DocsList>

        <DocsNote>
          <p>
            Shorts use the same Studio backend as regular videos. You can track their performance
            in the Analytics section just like any other content.
          </p>
        </DocsNote>

        <DocsHeading id="monetization">Monetization</DocsHeading>
        <p className="mb-4">
          Yes, Shorts can be monetized! If you're in the Partner Program, you'll earn a share of
          ad revenue from ads shown between Shorts in the feed.
        </p>
        <p className="mb-4">
          The alternative monetization path for Shorts:
        </p>
        <DocsList>
          <li>1,000 subscribers</li>
          <li>10 million Shorts views in the last 90 days</li>
        </DocsList>

        <DocsHeading id="whats-next">What's Next</DocsHeading>
        <p className="mb-4">
          We're just getting started with Shorts. Upcoming features include:
        </p>
        <DocsList>
          <li>Collaborative Shorts with other creators</li>
          <li>Trending sounds and effects</li>
          <li>Enhanced analytics for Shorts performance</li>
          <li>Integration with your long-form content</li>
        </DocsList>
      </>
    ),
  },
  "new-analytics-dashboard": {
    title: "New Analytics Dashboard: Deeper Insights for Creators",
    date: "January 8, 2026",
    author: "The CreaTV Team",
    tocItems: [
      { id: "whats-new", title: "What's New", level: 2 },
      { id: "new-metrics", title: "New Metrics", level: 2 },
      { id: "rolling-out", title: "Rolling Out", level: 2 },
    ],
    content: (
      <>
        <p className="text-lg text-muted-foreground mb-6">
          We've completely rebuilt the Analytics dashboard to give you deeper insights and
          actionable recommendations for growing your channel.
        </p>

        <DocsHeading id="whats-new">What's New</DocsHeading>
        <p className="mb-4">
          The new Analytics dashboard features a cleaner design, faster load times, and new
          visualization options. Key improvements include:
        </p>
        <DocsList>
          <li>Real-time metrics that update every minute</li>
          <li>Comparison tools to benchmark against past performance</li>
          <li>Customizable date ranges and export options</li>
          <li>Mobile-optimized views for checking stats on the go</li>
        </DocsList>

        <DocsHeading id="new-metrics">New Metrics</DocsHeading>
        <p className="mb-4">We've added several new metrics to help you understand your audience:</p>
        <DocsList>
          <li><strong>Returning viewers</strong> - Track audience loyalty over time</li>
          <li><strong>Unique viewers</strong> - Understand your true reach</li>
          <li><strong>Subscriber conversion rate</strong> - See how many viewers subscribe</li>
          <li><strong>Content performance score</strong> - AI-powered rating of your videos</li>
        </DocsList>

        <DocsNote type="pitfall" title="Note">
          <p>
            Historical data for new metrics starts from January 1, 2026. Earlier data is not available
            for these specific metrics.
          </p>
        </DocsNote>

        <DocsHeading id="rolling-out">Rolling Out</DocsHeading>
        <p className="mb-4">
          The new Analytics dashboard is rolling out gradually to all creators. You'll see an
          announcement in Studio when it's available for your channel. The rollout will complete
          by January 31, 2026.
        </p>
      </>
    ),
  },
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <DocsLayout showSidebar={false} showToc={false}>
        <div className="text-center py-16">
          <DocsHeading level={1}>Post Not Found</DocsHeading>
          <p className="text-muted-foreground mb-6">
            Sorry, this blog post doesn't exist or has been removed.
          </p>
          <Link to="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </DocsLayout>
    );
  }

  return (
    <DocsLayout showSidebar={false} tocItems={post.tocItems}>
      <DocsBreadcrumb
        items={[
          { label: "Blog", href: "/blog" },
        ]}
      />

      <DocsHeading level={1}>{post.title}</DocsHeading>

      <p className="text-muted-foreground mb-8">
        {post.date} by <DocsLink href="#">{post.author}</DocsLink>
      </p>

      {post.content}

      <div className="mt-12 pt-8 border-t border-border">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all posts
        </Link>
      </div>
    </DocsLayout>
  );
};

export default BlogPostPage;
