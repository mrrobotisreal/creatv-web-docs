import { DocsLayout } from "@/components/docs/DocsLayout";
import { studioLearnSidebar } from "@/config/sidebarConfig";
import {
  DocsBreadcrumb,
  DocsHeading,
  DocsList,
  DocsLink,
  DocsNote,
} from "@/components/docs/DocsContent";
import { TocItem } from "@/components/docs/OnThisPage";

const tocItems: TocItem[] = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "monetization-requirements", title: "Monetization Requirements", level: 2 },
  { id: "revenue-sources", title: "Revenue Sources", level: 2 },
  { id: "getting-paid", title: "Getting Paid", level: 2 },
];

const EarnPage = () => {
  return (
    <DocsLayout sidebarSections={studioLearnSidebar} tocItems={tocItems}>
      <DocsBreadcrumb
        items={[
          { label: "Learn CreaTV Studio", href: "/learn/studio" },
          { label: "Earn" },
        ]}
      />

      <DocsHeading level={1}>Earn</DocsHeading>

      <p className="text-lg text-muted-foreground mb-6">
        Turn your passion into income. Learn how to monetize your CreaTV channel and build
        sustainable revenue streams.
      </p>

      <DocsHeading id="overview">Overview</DocsHeading>

      <p className="mb-4">
        CreaTV offers multiple ways for creators to earn money from their content. From ads to
        memberships to merchandise, you can build a diversified income that rewards your creativity.
      </p>

      <DocsHeading id="monetization-requirements">Monetization Requirements</DocsHeading>

      <p className="mb-4">
        To join the CreaTV Partner Program and start earning, you need:
      </p>

      <DocsList>
        <li><strong>1,000 subscribers</strong> - Build your initial audience</li>
        <li><strong>4,000 watch hours</strong> - In the last 12 months</li>
        <li><strong>Clean record</strong> - No active community guidelines strikes</li>
        <li><strong>Linked AdSense account</strong> - To receive payments</li>
      </DocsList>

      <DocsNote>
        <p>
          Shorts have an alternative path: 1,000 subscribers and 10 million Shorts views in 90 days.
        </p>
      </DocsNote>

      <DocsHeading id="revenue-sources">Revenue Sources</DocsHeading>

      <DocsList>
        <li><strong>Ad revenue</strong> - Earnings from ads shown on your videos</li>
        <li><strong>Channel memberships</strong> - Monthly subscriptions from fans</li>
        <li><strong>Super Chat & Super Stickers</strong> - Paid messages in live chat</li>
        <li><strong>Super Thanks</strong> - One-time tips on videos</li>
        <li><strong>Shopping</strong> - Sell products directly from your channel</li>
        <li><strong>CreaTV Premium revenue</strong> - Share of Premium subscription fees</li>
      </DocsList>

      <DocsHeading id="getting-paid">Getting Paid</DocsHeading>

      <p className="mb-4">
        Once you reach the payment threshold ($100 USD), CreaTV will issue a payment via your
        linked AdSense account. Payments are made monthly, around the 21st of each month.
      </p>

      <DocsNote type="pitfall" title="Pitfall">
        <p>
          Keep your AdSense information up to date. If your payment details are incorrect or your
          account is suspended, payments will be held until the issue is resolved.
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

export default EarnPage;
