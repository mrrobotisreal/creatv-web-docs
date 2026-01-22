import { Link } from "react-router-dom";
import { CreaTVLogo } from "@/components/CreaTVLogo";
import { DocsHeader } from "@/components/docs/DocsHeader";
import { DocsFooter } from "@/components/docs/DocsFooter";
import { ArrowRight, Play, BarChart3, Users, Palette } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DocsHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <CreaTVLogo size="lg" showStudio={false} />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="creatv-documentation">Documentation</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Everything you need to master CreaTV Studio and grow your channel.
              From your first upload to advanced analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/learn/studio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/reference/studio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                API Reference
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              What's in the docs?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                to="/learn/studio/content"
                className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <Play className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  Content Management
                </h3>
                <p className="text-sm text-muted-foreground">
                  Upload, organize, and optimize your videos for maximum reach.
                </p>
              </Link>

              <Link
                to="/learn/studio/analytics"
                className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <BarChart3 className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  Analytics
                </h3>
                <p className="text-sm text-muted-foreground">
                  Understand your audience with powerful insights and metrics.
                </p>
              </Link>

              <Link
                to="/learn/studio/earn"
                className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  Monetization
                </h3>
                <p className="text-sm text-muted-foreground">
                  Learn how to earn from ads, memberships, and more.
                </p>
              </Link>

              <Link
                to="/learn/studio/customization"
                className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <Palette className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  Customization
                </h3>
                <p className="text-sm text-muted-foreground">
                  Brand your channel and make it uniquely yours.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Docs Overview */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="creatv-studio">CreaTV Studio</span>
                </h3>
                <p className="text-muted-foreground mb-4">
                  For content creators. Learn how to use Studio to manage your channel,
                  upload content, and grow your audience.
                </p>
                <Link
                  to="/learn/studio"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Start learning <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="p-6 rounded-lg border border-border opacity-60">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  CreaTV API
                  <span className="text-xs bg-muted px-2 py-0.5 rounded font-normal">Coming Soon</span>
                </h3>
                <p className="text-muted-foreground mb-4">
                  For developers. Build integrations, automate workflows, and extend
                  CreaTV functionality with our API.
                </p>
                <span className="text-muted-foreground text-sm">
                  Documentation coming soon
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DocsFooter />
    </div>
  );
};

export default HomePage;
