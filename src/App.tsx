import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";

// Pages
import HomePage from "./pages/HomePage";
import CommunityPage from "./pages/CommunityPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import APIComingSoon from "./pages/APIComingSoon";

// Learn Studio Pages
import StudioOverview from "./pages/learn/StudioOverview";
import DashboardPage from "./pages/learn/DashboardPage";
import ContentPage from "./pages/learn/ContentPage";
import AnalyticsPage from "./pages/learn/AnalyticsPage";
import EarnPage from "./pages/learn/EarnPage";
import CustomizationPage from "./pages/learn/CustomizationPage";
import StudioCommunityPage from "./pages/learn/StudioCommunityPage";

// Reference Studio Pages
import StudioReference from "./pages/reference/StudioReference";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Learn Studio Routes */}
          <Route path="/learn/studio" element={<StudioOverview />} />
          <Route path="/learn/studio/quick-start" element={<StudioOverview />} />
          <Route path="/learn/studio/first-video" element={<StudioOverview />} />
          <Route path="/learn/studio/dashboard" element={<DashboardPage />} />
          <Route path="/learn/studio/dashboard/*" element={<DashboardPage />} />
          <Route path="/learn/studio/content" element={<ContentPage />} />
          <Route path="/learn/studio/content/*" element={<ContentPage />} />
          <Route path="/learn/studio/analytics" element={<AnalyticsPage />} />
          <Route path="/learn/studio/community" element={<StudioCommunityPage />} />
          <Route path="/learn/studio/earn" element={<EarnPage />} />
          <Route path="/learn/studio/earn/*" element={<EarnPage />} />
          <Route path="/learn/studio/customization" element={<CustomizationPage />} />
          <Route path="/learn/studio/customization/*" element={<CustomizationPage />} />

          {/* Learn API (Coming Soon) */}
          <Route path="/learn/api" element={<APIComingSoon />} />
          <Route path="/learn/api/*" element={<APIComingSoon />} />

          {/* Reference Studio Routes */}
          <Route path="/reference/studio" element={<StudioReference />} />
          <Route path="/reference/studio/*" element={<StudioReference />} />

          {/* Reference API (Coming Soon) */}
          <Route path="/reference/api" element={<APIComingSoon />} />
          <Route path="/reference/api/*" element={<APIComingSoon />} />

          {/* Community */}
          <Route path="/community" element={<CommunityPage />} />

          {/* Blog */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
