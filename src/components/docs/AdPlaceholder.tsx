interface AdPlaceholderProps {
  type: "banner" | "sidebar";
  className?: string;
}

export const AdPlaceholder = ({ type, className = "" }: AdPlaceholderProps) => {
  const baseClasses = type === "banner"
    ? "ad-banner-top"
    : "ad-sidebar";

  return (
    <div className={`${baseClasses} ${className}`}>
      {/* This div maintains fixed height even when no ad is present */}
      {/* Actual ad content would be injected here by an ad provider */}
      <div className="hidden">
        {/* Placeholder for ad content - hidden when no ad is available */}
      </div>
    </div>
  );
};
