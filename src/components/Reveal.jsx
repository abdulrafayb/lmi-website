import { motion, useReducedMotion } from "framer-motion";

const elements = { div: motion.div, li: motion.li };

export default function Reveal({ as = "div", delay = 0, children, ...props }) {
  const reduceMotion = useReducedMotion();
  const Element = elements[as];

  return (
    <Element
      {...props}
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
    >
      {children}
    </Element>
  );
}
