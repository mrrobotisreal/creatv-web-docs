import { DocsLayout } from "@/components/docs/DocsLayout";
import { DocsHeading } from "@/components/docs/DocsContent";
import { Clock, MessageCircle, Users, Calendar } from "lucide-react";

const CommunityPage = () => {
  return (
    <DocsLayout showSidebar={false} showToc={false}>
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
          <Users className="h-10 w-10 text-primary" />
        </div>

        <DocsHeading level={1}>Community Hub</DocsHeading>

        <p className="text-lg text-muted-foreground mb-8">
          The CreaTV Community is coming soon! Connect with fellow creators, share tips,
          and grow together.
        </p>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Clock className="h-5 w-5" />
            <span className="font-medium">Coming Soon</span>
          </div>
          <p className="text-muted-foreground">
            We're building something special. Sign up for updates to be the first to know when
            the Community launches.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="p-4 rounded-lg bg-secondary/50">
            <MessageCircle className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-semibold mb-1">Discussion Forums</h3>
            <p className="text-sm text-muted-foreground">
              Share ideas and get help from other creators
            </p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/50">
            <Users className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-semibold mb-1">Creator Groups</h3>
            <p className="text-sm text-muted-foreground">
              Join niche communities based on your content type
            </p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/50">
            <Calendar className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-semibold mb-1">Events</h3>
            <p className="text-sm text-muted-foreground">
              Webinars, AMAs, and live learning sessions
            </p>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default CommunityPage;
