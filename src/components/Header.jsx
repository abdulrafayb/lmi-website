import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { CaretDown, CaretRight, List, X } from "@phosphor-icons/react";
import headerData from "../../data/Header.json";

const { links, logo } = headerData;

const isSectionActive = (pathname, item) =>
  [item.path, ...(item.children?.map((child) => child.path) ?? [])].some(
    (path) =>
      path &&
      (pathname === path || (path !== "/" && pathname.startsWith(`${path}/`))),
  );

// "Overview" is detected by label, not by path — most dropdown parents
// (Services, Industries, Fleet & Visibility, HSSE, Insights) have no
// top-level "path" of their own, only "children", so a path-based check
// never matched and the divider silently never rendered for them.
const isOverviewChild = (child) =>
  child.label.trim().toLowerCase() === "overview";

/* DESKTOP DROPDOWN */
function DesktopDropdown({ item, alignRight, isOpen, onOpen, onClose }) {
  const { pathname } = useLocation();
  const panelId = useId();
  const buttonRef = useRef(null);
  const sectionActive = isSectionActive(pathname, item);

  return (
    <li
      className="relative flex h-full items-center"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          onClose();
          buttonRef.current?.focus();
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={isOpen ? panelId : undefined}
        onClick={isOpen ? onClose : onOpen}
        className={`group focus-visible:outline-brand-red relative flex items-center gap-1 py-2 text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${
          sectionActive || isOpen
            ? "text-brand-red"
            : "text-brand-black hover:text-brand-red"
        }`}
      >
        {item.label}
        <CaretDown
          aria-hidden="true"
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />

        {!sectionActive && (
          <span
            aria-hidden="true"
            className={`bg-brand-red absolute inset-x-0 -bottom-0.5 h-0.75 origin-left transition-transform duration-200 group-hover:scale-x-100 ${
              isOpen ? "scale-x-100" : "scale-x-0"
            }`}
          />
        )}

        {sectionActive && (
          <motion.span
            layoutId="nav-active-bar"
            aria-hidden="true"
            className="bg-brand-red absolute inset-x-0 -bottom-0.5 h-0.75"
            transition={{ type: "spring", stiffness: 500, damping: 40 }}
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            id={panelId}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`border-brand-black/10 border-t-brand-red absolute top-full z-50 w-max max-w-sm min-w-64 border border-t-[3px] bg-white py-2 shadow-[0_20px_40px_-12px_rgba(16,18,19,0.22)] ${
              alignRight ? "right-0" : "left-0"
            }`}
          >
            {item.children.map((child) => {
              const isOverview = isOverviewChild(child);

              return (
                <li
                  key={child.path}
                  className={
                    isOverview ? "border-brand-black/10 mt-2 border-t pt-2" : ""
                  }
                >
                  <NavLink
                    to={child.path}
                    end
                    onClick={onClose}
                    className={({ isActive }) =>
                      `focus-visible:outline-brand-red block border-l-4 px-5 py-2.5 text-[15px] transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 ${
                        isActive
                          ? "border-brand-red bg-brand-black/5 text-brand-red font-semibold"
                          : `text-brand-black hover:bg-brand-black border-transparent hover:text-white ${
                              isOverview ? "font-semibold" : "font-medium"
                            }`
                      }`
                    }
                  >
                    {child.label}
                  </NavLink>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

/* NAVBAR (desktop + mobile live in this one file) */
export default function Header() {
  const { pathname, key: locationKey } = useLocation();
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const mobileMenuId = useId();

  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [previousLocationKey, setPreviousLocationKey] = useState(locationKey);

  // Reset disclosure state before rendering a newly navigated page.
  if (previousLocationKey !== locationKey) {
    setPreviousLocationKey(locationKey);
    setOpen(false);
    setOpenMenu(null);
    setExpanded(null);
  }

  const activeSection =
    links.find((l) => l.children && isSectionActive(pathname, l))?.label ??
    null;

  const toggleMobileMenu = () => {
    if (!open) setExpanded(activeSection);
    setOpen((v) => !v);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpointChange = () => {
      setOpen(false);
      setOpenMenu(null);
      setExpanded(null);
    };
    desktop.addEventListener("change", onBreakpointChange);
    return () => desktop.removeEventListener("change", onBreakpointChange);
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (e) => {
      if (!navRef.current?.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openMenu]);

  return (
    <MotionConfig reducedMotion="user">
      <header
        className={`border-brand-black/10 sticky top-0 z-50 border-b bg-white transition-shadow duration-200 ${
          scrolled
            ? "shadow-[0_4px_12px_-2px_rgba(16,18,19,0.12)]"
            : "shadow-none"
        }`}
      >
        <div className="bg-brand-red h-1 w-full" aria-hidden="true" />

        <div className="wrapper flex h-20 items-center justify-between">
          <Link
            to="/"
            aria-label="Go to homepage"
            className="inline-flex min-w-0"
          >
            <img src={logo.src} alt={logo.alt} className="w-52 max-w-full" />
          </Link>

          {/* DESKTOP MENU */}
          <nav
            ref={navRef}
            aria-label="Main"
            className="hidden h-full lg:block"
          >
            <ul className="flex h-full items-center gap-5">
              {links.map((item, index) =>
                item.children ? (
                  <DesktopDropdown
                    key={item.path ?? item.label}
                    item={item}
                    alignRight={index >= links.length - 3}
                    isOpen={openMenu === item.label}
                    onOpen={() => setOpenMenu(item.label)}
                    onClose={() => setOpenMenu(null)}
                  />
                ) : (
                  <li key={item.path ?? item.label}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `group focus-visible:outline-brand-red relative block py-2 text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${
                          isActive
                            ? "text-brand-red"
                            : "text-brand-black hover:text-brand-red"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {item.label}

                          {!isActive && (
                            <span
                              aria-hidden="true"
                              className="bg-brand-red absolute inset-x-0 -bottom-0.5 h-0.75 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
                            />
                          )}

                          {isActive && (
                            <motion.span
                              layoutId="nav-active-bar"
                              aria-hidden="true"
                              className="bg-brand-red absolute inset-x-0 -bottom-0.5 h-0.75"
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 40,
                              }}
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            ref={toggleRef}
            type="button"
            onClick={toggleMobileMenu}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={open ? mobileMenuId : undefined}
            className={`focus-visible:outline-brand-red grid size-11 place-items-center border-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden ${
              open
                ? "border-brand-red bg-brand-red text-white"
                : "border-brand-black text-brand-black hover:bg-brand-black hover:text-white"
            }`}
          >
            {open ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <List size={22} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              id={mobileMenuId}
              aria-label="Mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="border-brand-black/10 overflow-hidden border-t bg-white lg:hidden"
            >
              <ul className="wrapper max-h-[calc(100dvh-5.25rem)] overflow-y-auto">
                {links.map((item, i) => {
                  const isExpanded = expanded === item.label;
                  const sectionActive =
                    item.children && isSectionActive(pathname, item);

                  return (
                    <motion.li
                      key={item.path ?? item.label}
                      initial={{ x: -16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.04 * i + 0.05, duration: 0.2 }}
                      className="border-brand-black/10 border-b last:border-b-0"
                    >
                      {item.children ? (
                        <>
                          <button
                            type="button"
                            aria-expanded={isExpanded}
                            aria-controls={
                              isExpanded
                                ? `${mobileMenuId}-section-${i}`
                                : undefined
                            }
                            onClick={() =>
                              setExpanded(isExpanded ? null : item.label)
                            }
                            className={`focus-visible:outline-brand-red flex w-full items-center justify-between border-l-4 py-4 pl-4 text-left text-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 ${
                              sectionActive
                                ? "border-brand-red text-brand-red"
                                : "text-brand-black hover:border-brand-black hover:bg-brand-black/5 border-transparent"
                            }`}
                          >
                            {item.label}
                            <CaretDown
                              aria-hidden="true"
                              size={20}
                              className={`transition-transform duration-200 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.ul
                                id={`${mobileMenuId}-section-${i}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="bg-brand-black/4 overflow-hidden"
                              >
                                {item.children.map((child) => {
                                  const isOverview = isOverviewChild(child);
                                  return (
                                    <li key={child.path}>
                                      <NavLink
                                        to={child.path}
                                        end
                                        onClick={() => setOpen(false)}
                                        className={({ isActive }) =>
                                          `focus-visible:outline-brand-red block border-l-4 py-3 pr-4 pl-8 text-base transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 ${
                                            isActive
                                              ? "border-brand-red text-brand-red font-semibold"
                                              : `text-brand-black hover:border-brand-black border-transparent ${
                                                  isOverview
                                                    ? "font-semibold"
                                                    : "font-medium"
                                                }`
                                          }`
                                        }
                                      >
                                        {child.label}
                                      </NavLink>
                                    </li>
                                  );
                                })}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        // Plain link (Contact Us)
                        <NavLink
                          to={item.path}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `focus-visible:outline-brand-red flex items-center justify-between border-l-4 py-4 pl-4 text-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 ${
                              isActive
                                ? "border-brand-red text-brand-red"
                                : "text-brand-black hover:border-brand-black hover:bg-brand-black/5 border-transparent"
                            }`
                          }
                        >
                          {item.label}
                          <CaretRight size={20} aria-hidden="true" />
                        </NavLink>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </MotionConfig>
  );
}
