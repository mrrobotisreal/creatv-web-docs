type ComingSoonBadgeProps = {
  className?: string;
};

export const ComingSoonBadge = ({ className = "" }: ComingSoonBadgeProps) => (
  <span
    className={[
      "ml-2 inline-flex items-center rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold uppercase text-white shadow-[0_0_12px_rgba(16,185,129,0.6)]",
      className,
    ].join(" ")}
  >
    Coming Soon
  </span>
);

