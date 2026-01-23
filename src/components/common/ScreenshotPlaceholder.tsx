export const ScreenshotPlaceholder = ({ label }: { label: string }) => (
  <div className="my-6 rounded-xl border border-border bg-secondary/30 p-6">
    <p className="text-sm font-medium">Screenshot placeholder</p>
    <p className="text-sm text-muted-foreground mt-1">{label}</p>
  </div>
);
