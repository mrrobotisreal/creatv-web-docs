import { DocsLayout } from "@/components/docs/DocsLayout";
import { studioLearnSidebar } from "@/config/sidebarConfig";
import {
  DocsBreadcrumb,
  DocsHeading,
  DocsNote,
  DocsList,
  DocsLink,
} from "@/components/docs/DocsContent";
import { TocItem } from "@/components/docs/OnThisPage";

// React Icons MdInsights for analytics; MdOutlineAutograph

const tocItems: TocItem[] = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "key-metrics", title: "Key Metrics", level: 2 },
  { id: "audience-insights", title: "Audience Insights", level: 2 },
  { id: "revenue-analytics", title: "Revenue Analytics", level: 2 },
  { id: "using-data", title: "Using Data Effectively", level: 2 },
];

const AnalyticsPage = () => {
  return (
    <DocsLayout sidebarSections={studioLearnSidebar} tocItems={tocItems}>
      <DocsBreadcrumb
        items={[
          { label: "Learn CreaTV Studio", href: "/learn/studio" },
          { label: "Analytics" },
        ]}
      />

      <DocsHeading level={1}>Analytics</DocsHeading>

      <p className="text-lg text-muted-foreground mb-6">
        Understand your audience and optimize your content strategy with comprehensive analytics.
      </p>

      <DocsHeading id="overview">Overview</DocsHeading>

      <p className="mb-4">
        CreaTV Analytics provides deep insights into how your content performs, who your audience
        is, and how they discover your videos. Use this data to make informed decisions about
        your content strategy.
      </p>

      <DocsHeading id="key-metrics">Key Metrics</DocsHeading>

      <DocsList>
        <li><strong>Views</strong> - Number of times your videos have been watched</li>
        <li><strong>Watch time</strong> - Total hours spent watching your content</li>
        <li><strong>Subscribers</strong> - New subscribers gained (and lost)</li>
        <li><strong>Impressions</strong> - How often your thumbnails are shown</li>
        <li><strong>Click-through rate (CTR)</strong> - Percentage of impressions that become views</li>
        <li><strong>Average view duration</strong> - How long viewers watch before leaving</li>
      </DocsList>

      <DocsNote>
        <p>
          Watch time is the most important metric for growing your channel. Videos with higher
          watch time are more likely to be recommended by the algorithm.
        </p>
      </DocsNote>

      <DocsHeading id="audience-insights">Audience Insights</DocsHeading>

      <p className="mb-4">
        Learn about who's watching your content:
      </p>

      <DocsList>
        <li><strong>Demographics</strong> - Age and gender distribution</li>
        <li><strong>Geography</strong> - Top countries and cities</li>
        <li><strong>Returning vs new viewers</strong> - Audience loyalty metrics</li>
        <li><strong>When viewers are online</strong> - Best times to publish</li>
        <li><strong>Other videos your audience watches</strong> - Content opportunities</li>
      </DocsList>

      <DocsHeading id="revenue-analytics">Revenue Analytics</DocsHeading>

      <p className="mb-4">
        If you're monetized, track your earnings:
      </p>

      <DocsList>
        <li><strong>Estimated revenue</strong> - Total earnings from all sources</li>
        <li><strong>RPM</strong> - Revenue per mille (per 1,000 views)</li>
        <li><strong>CPM</strong> - Cost per mille (what advertisers pay)</li>
        <li><strong>Ad types</strong> - Performance by ad format</li>
        <li><strong>Transaction revenue</strong> - Memberships, Super Chat, etc.</li>
      </DocsList>

      <DocsHeading id="using-data">Using Data Effectively</DocsHeading>

      <DocsList>
        <li>Compare video performance to identify what works</li>
        <li>Optimize upload times based on when your audience is active</li>
        <li>Improve thumbnails by testing and tracking CTR</li>
        <li>Create content similar to your best performers</li>
        <li>Address audience retention drop-offs in future videos</li>
      </DocsList>

      <DocsNote type="pitfall" title="Pitfall">
        <p>
          Don't obsess over daily fluctuations. Analytics are most useful when viewed over
          longer periods (7-28 days) to identify real trends vs. random variation.
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

export default AnalyticsPage;
