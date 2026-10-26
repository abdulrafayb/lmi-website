export default function Eyebrow({
  as: Tag = "p",
  children,
  className = "",
  ...props
}) {
  return (
    <Tag
      {...props}
      className={`text-brand-red text-xs font-semibold tracking-[0.16em] uppercase ${className}`}
    >
      {children}
    </Tag>
  );
}
