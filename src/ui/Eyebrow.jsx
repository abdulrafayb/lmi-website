export default function Eyebrow({
  as: Tag = "p",
  children,
  className = "",
  tone = "brand",
  ...props
}) {
  return (
    <Tag
      {...props}
      className={`text-xs font-semibold tracking-[0.16em] uppercase ${tone === "light" ? "text-surface" : "text-brand-red"} ${className}`}
    >
      {children}
    </Tag>
  );
}
