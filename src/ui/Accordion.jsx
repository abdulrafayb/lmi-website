import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";

export default function Accordion({
  items,
  defaultOpenIndex = 0,
  columns = 1,
  className = "",
}) {
  const id = useId();
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(
    defaultOpenIndex >= 0 && defaultOpenIndex < items.length
      ? defaultOpenIndex
      : null,
  );
  const splitAt = columns === 2 ? Math.ceil(items.length / 2) : items.length;
  const groups =
    columns === 2 ? [items.slice(0, splitAt), items.slice(splitAt)] : [items];

  return (
    <div
      className={`grid items-start ${columns === 2 ? "lg:grid-cols-2 lg:gap-x-12" : "grid-cols-1"} ${className}`}
    >
      {groups.map((group, groupIndex) => (
        <div key={groupIndex}>
          {group.map(({ question, answer }, localIndex) => {
            const index = groupIndex * splitAt + localIndex;
            const isOpen = index === openIndex;
            const buttonId = `${id}-trigger-${index}`;
            const panelId = `${id}-panel-${index}`;

            return (
              <div key={question} className="border-trust-border border-t">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="text-hero-heading outline-brand-red hover:text-brand-red relative min-h-14 w-full py-4 pr-7 pl-7 text-center text-base leading-snug font-bold transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 lg:pl-0 lg:text-left"
                  >
                    {question}
                    <motion.span
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.2 }}
                      className="text-brand-red absolute top-4 right-1 grid size-5 place-items-center"
                      aria-hidden="true"
                    >
                      <CaretDown size={18} />
                    </motion.span>
                  </button>
                </h3>
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.25,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-hero-copy pb-5 text-center text-sm leading-relaxed lg:text-left">
                    {answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
