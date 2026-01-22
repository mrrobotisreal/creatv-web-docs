import { Link } from "react-router-dom";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { DocsBreadcrumb, DocsHeading, DocsLink } from "@/components/docs/DocsContent";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Introducing CreaTV Shorts: Vertical Video for Everyone",
    date: "January 15, 2026",
    excerpt: "We're excited to announce the launch of CreaTV Shorts, our new vertical video format designed for quick, engaging content. Learn how to get started with Shorts and reach a whole new audience...",
    author: "The CreaTV Team",
    slug: "introducing-shorts",
  },
  {
    id: "2",
    title: "New Analytics Dashboard: Deeper Insights for Creators",
    date: "January 8, 2026",
    excerpt: "Today we're rolling out a completely redesigned Analytics dashboard with new metrics, better visualizations, and actionable insights. Here's what's new and how to make the most of it...",
    author: "The CreaTV Team",
    slug: "new-analytics-dashboard",
  },
  {
    id: "3",
    title: "CreaTV Partner Program: What's New in 2026",
    date: "December 20, 2025",
    excerpt: "We're making significant changes to the CreaTV Partner Program to help more creators monetize their content. This post covers new eligibility requirements, revenue opportunities, and more...",
    author: "The CreaTV Team",
    slug: "partner-program-2026",
  },
  {
    id: "4",
    title: "Studio Mobile App: Manage Your Channel On the Go",
    date: "December 12, 2025",
    excerpt: "The CreaTV Studio mobile app is now available for iOS and Android. Reply to comments, check analytics, and even upload videos right from your phone. Here's everything you can do...",
    author: "The CreaTV Team",
    slug: "studio-mobile-app",
  },
  {
    id: "5",
    title: "Community Guidelines Update: Transparency Report Q4 2025",
    date: "December 1, 2025",
    excerpt: "Our quarterly transparency report is here. See how we're enforcing community guidelines, what content was removed, and how we're improving our systems to keep CreaTV safe for everyone...",
    author: "The CreaTV Team",
    slug: "transparency-report-q4-2025",
  },
];

const BlogPage = () => {
  return (
    <DocsLayout showSidebar={false} showToc={false}>
      <DocsBreadcrumb items={[{ label: "Blog" }]} />

      <DocsHeading level={1}>CreaTV Blog</DocsHeading>

      <p className="text-lg text-muted-foreground mb-4">
        This blog is the official source for updates from the CreaTV team. Anything important,
        including release notes or deprecation notices, will be posted here first.
      </p>

      <p className="text-muted-foreground mb-8">
        You can also follow the{" "}
        <DocsLink href="https://twitter.com/creatv" external>@creatv</DocsLink> account on Twitter,
        or{" "}
        <DocsLink href="https://bsky.app/profile/creatv.dev" external>@creatv.dev</DocsLink>{" "}
        account on Bluesky, but you won't miss anything essential if you only read this blog.
      </p>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
          >
            <Link to={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
            <p className="text-foreground/80 mb-4">{post.excerpt}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="text-primary hover:underline text-sm font-medium"
            >
              Read more
            </Link>
          </article>
        ))}
      </div>
    </DocsLayout>
  );
};

export default BlogPage;
