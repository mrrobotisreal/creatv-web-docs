import { DocsLayout } from "@/components/docs/DocsLayout";
import { DocsHeading } from "@/components/docs/DocsContent";
import { Code, Clock, FileCode, Terminal, Book } from "lucide-react";

const APIComingSoon = () => {
  return (
    <DocsLayout showSidebar={false} showToc={false}>
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
          <Code className="h-10 w-10 text-primary" />
        </div>

        <DocsHeading level={1}>CreaTV API Documentation</DocsHeading>

        <p className="text-lg text-muted-foreground mb-8">
          Build powerful integrations with the CreaTV platform. Our API documentation is
          currently being developed and will be available soon.
        </p>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Clock className="h-5 w-5" />
            <span className="font-medium">Coming Soon</span>
          </div>
          <p className="text-muted-foreground">
            We're working hard to bring you comprehensive API documentation. Sign up for our
            developer newsletter to be notified when it launches.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="p-4 rounded-lg bg-secondary/50">
            <FileCode className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-semibold mb-1">RESTful API</h3>
            <p className="text-sm text-muted-foreground">
              Standard REST endpoints for all platform features
            </p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/50">
            <Terminal className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-semibold mb-1">SDKs</h3>
            <p className="text-sm text-muted-foreground">
              Client libraries for JavaScript, Python, and more
            </p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/50">
            <Book className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-semibold mb-1">Guides</h3>
            <p className="text-sm text-muted-foreground">
              Step-by-step tutorials for common use cases
            </p>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default APIComingSoon;
