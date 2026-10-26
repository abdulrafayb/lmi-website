import { Link } from "react-router-dom";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:opacity-50";

const variants = {
  primary: `${base} border-brand-red bg-brand-red text-surface outline-brand-red hover:border-brand-red-dark hover:bg-brand-red-dark`,
  secondary: `${base} secondary outline-brand-red`,
  tertiary: `${base} tertiary outline-surface`,
  link: "inline-flex min-h-11 items-center justify-center gap-1 text-sm font-medium text-brand-red underline-offset-4 outline-brand-red hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
};

export default function Button({
  children,
  variant = "primary",
  href,
  to,
  newTab = false,
  action,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  ...props
}) {
  const destination = to ?? href;
  const classes = `${variants[variant] ?? variants.primary} ${className}`;
  const handleClick = (event) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    (onClick ?? action)?.(event);
  };

  if (destination != null) {
    const linkProps = {
      ...props,
      className: classes,
      onClick: handleClick,
      target: newTab ? "_blank" : undefined,
      rel: newTab ? "noopener noreferrer" : undefined,
      "aria-disabled": disabled || undefined,
      tabIndex: disabled ? -1 : props.tabIndex,
    };
    const isInternal = to != null || /^\/(?!\/)|^\?/.test(destination);

    return isInternal ? (
      <Link {...linkProps} to={destination}>
        {children}
      </Link>
    ) : (
      <a {...linkProps} href={destination}>
        {children}
      </a>
    );
  }

  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={classes}
    >
      {children}
    </button>
  );
}
