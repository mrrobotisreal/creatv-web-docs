import { DocsLayout } from "@/components/docs/DocsLayout";
import { studioLearnSidebar } from "@/config/sidebarConfig";
import {
  DocsBreadcrumb,
  DocsHeading,
  DocsNote,
  DocsList,
  DocsLink,
  DocsCodeBlock,
} from "@/components/docs/DocsContent";
import { TocItem } from "@/components/docs/OnThisPage";

const tocItems: TocItem[] = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "content-types", title: "Content Types", level: 2 },
  { id: "uploading-videos", title: "Uploading Videos", level: 2 },
  { id: "managing-content", title: "Managing Content", level: 2 },
  { id: "visibility-settings", title: "Visibility Settings", level: 2 },
];

const ContentPage = () => {
  return (
    <DocsLayout sidebarSections={studioLearnSidebar} tocItems={tocItems}>
      <DocsBreadcrumb
        items={[
          { label: "Learn CreaTV Studio", href: "/learn/studio" },
          { label: "Content" },
        ]}
      />

      <DocsHeading level={1}>Content</DocsHeading>

      <p className="text-lg text-muted-foreground mb-6">
        The Content section is your library of all uploads. Manage videos, shorts, live streams,
        and posts from one central location.
      </p>

      <DocsHeading id="overview">Overview</DocsHeading>

      <p className="mb-4">
        Content management in CreaTV Studio gives you complete control over everything you've
        published or are preparing to publish. From here, you can edit details, check performance,
        and organize your content.
      </p>

      <DocsHeading id="content-types">Content Types</DocsHeading>

      <DocsList>
        <li><strong>Videos</strong> - Standard horizontal videos up to 12 hours long</li>
        <li><strong>Shorts</strong> - Vertical videos up to 60 seconds</li>
        <li><strong>Live</strong> - Livestream recordings and scheduled streams</li>
        <li><strong>Posts</strong> - Community posts, polls, and updates</li>
        <li><strong>Playlists</strong> - Collections of videos</li>
      </DocsList>

      <DocsHeading id="uploading-videos">Uploading Videos</DocsHeading>

      <p className="mb-4">
        To upload a new video:
      </p>

      <DocsCodeBlock language="steps">
{`1. Click the "Create" button in the top navigation
2. Select "Upload video" from the dropdown
3. Drag and drop your file or click to browse
4. While uploading, fill in:
   - Title (required)
   - Description
   - Thumbnail
   - Playlist assignment
   - Tags
5. Choose visibility (Public, Unlisted, or Private)
6. Click "Publish" or "Schedule"`}
      </DocsCodeBlock>

      <DocsNote>
        <p>
          Videos can be up to 256GB or 12 hours, whichever is less. For videos longer than 15 minutes,
          you'll need to verify your account first.
        </p>
      </DocsNote>

      <DocsHeading id="managing-content">Managing Content</DocsHeading>

      <p className="mb-4">
        The content table shows all your uploads with key information:
      </p>

      <DocsList>
        <li><strong>Thumbnail</strong> - Visual preview of the video</li>
        <li><strong>Visibility</strong> - Public, Unlisted, Private, or Scheduled</li>
        <li><strong>Restrictions</strong> - Age restrictions or copyright claims</li>
        <li><strong>Date</strong> - When the video was published</li>
        <li><strong>Views</strong> - Total view count</li>
        <li><strong>Comments</strong> - Number of comments</li>
        <li><strong>Likes</strong> - Percentage of likes vs dislikes</li>
      </DocsList>

      <DocsHeading id="visibility-settings">Visibility Settings</DocsHeading>

      <DocsList>
        <li><strong>Public</strong> - Anyone can search for and view</li>
        <li><strong>Unlisted</strong> - Only people with the link can view</li>
        <li><strong>Private</strong> - Only you can view</li>
        <li><strong>Scheduled</strong> - Will become public at a set time</li>
      </DocsList>

      <DocsNote type="pitfall" title="Pitfall">
        <p>
          Changing a video from Public to Private will remove it from search results and subscribers'
          feeds. The video URL will stop working for viewers.
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

export default ContentPage;
