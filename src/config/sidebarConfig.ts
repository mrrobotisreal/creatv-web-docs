import { SidebarSection } from "@/components/docs/DocsSidebar";

export const studioLearnSidebar: SidebarSection[] = [
  {
    title: "Get Started",
    items: [
      { label: "Overview", href: "/learn/studio" },
      { label: "Quick Start", href: "/learn/studio/quick-start" },
      { label: "Your First Video", href: "/learn/studio/first-video" },
    ],
  },
  {
    title: "Studio Basics",
    items: [
      {
        label: "Dashboard",
        href: "/learn/studio/dashboard",
        items: [
          { label: "Navigation", href: "/learn/studio/dashboard/navigation" },
          { label: "Metrics Overview", href: "/learn/studio/dashboard/metrics" },
        ],
      },
      {
        label: "Content",
        href: "/learn/studio/content",
        items: [
          { label: "Uploading Videos", href: "/learn/studio/content/uploading" },
          { label: "Video Details", href: "/learn/studio/content/details" },
          { label: "Thumbnails", href: "/learn/studio/content/thumbnails" },
          { label: "Playlists", href: "/learn/studio/content/playlists" },
        ],
      },
      { label: "Analytics", href: "/learn/studio/analytics" },
      { label: "Community", href: "/learn/studio/community" },
    ],
  },
  {
    title: "Monetization",
    items: [
      { label: "Earn", href: "/learn/studio/earn" },
      { label: "Memberships", href: "/learn/studio/earn/memberships" },
      { label: "Super Chat", href: "/learn/studio/earn/super-chat" },
    ],
  },
  {
    title: "Channel Setup",
    items: [
      { label: "Customization", href: "/learn/studio/customization" },
      { label: "Branding", href: "/learn/studio/customization/branding" },
      { label: "Layout", href: "/learn/studio/customization/layout" },
    ],
  },
];

export const studioReferenceSidebar: SidebarSection[] = [
  {
    title: "Studio Reference",
    items: [
      { label: "Overview", href: "/reference/studio" },
    ],
  },
  {
    title: "Dashboard",
    items: [
      { label: "Dashboard Overview", href: "/reference/studio/dashboard" },
      { label: "Channel Dashboard", href: "/reference/studio/dashboard/channel" },
      { label: "Video Dashboard", href: "/reference/studio/dashboard/video" },
    ],
  },
  {
    title: "Content",
    items: [
      { label: "Content Overview", href: "/reference/studio/content" },
      { label: "Videos", href: "/reference/studio/content/videos" },
      { label: "Shorts", href: "/reference/studio/content/shorts" },
      { label: "Live", href: "/reference/studio/content/live" },
      { label: "Posts", href: "/reference/studio/content/posts" },
      { label: "Playlists", href: "/reference/studio/content/playlists" },
      { label: "Podcasts", href: "/reference/studio/content/podcasts" },
    ],
  },
  {
    title: "Analytics",
    items: [
      { label: "Analytics Overview", href: "/reference/studio/analytics" },
      { label: "Channel Analytics", href: "/reference/studio/analytics/channel" },
      { label: "Video Analytics", href: "/reference/studio/analytics/video" },
      { label: "Revenue Analytics", href: "/reference/studio/analytics/revenue" },
      { label: "Research", href: "/reference/studio/analytics/research" },
    ],
  },
  {
    title: "Community",
    items: [
      { label: "Comments", href: "/reference/studio/community/comments" },
      { label: "Mentions", href: "/reference/studio/community/mentions" },
      { label: "Subtitles", href: "/reference/studio/community/subtitles" },
    ],
  },
  {
    title: "Earn",
    items: [
      { label: "Earn Overview", href: "/reference/studio/earn" },
      { label: "Memberships", href: "/reference/studio/earn/memberships" },
      { label: "Shopping", href: "/reference/studio/earn/shopping" },
      { label: "Super Thanks", href: "/reference/studio/earn/super-thanks" },
    ],
  },
  {
    title: "Customization",
    items: [
      { label: "Customization Overview", href: "/reference/studio/customization" },
      { label: "Basic Info", href: "/reference/studio/customization/basic-info" },
      { label: "Branding", href: "/reference/studio/customization/branding" },
      { label: "Layout", href: "/reference/studio/customization/layout" },
    ],
  },
];
