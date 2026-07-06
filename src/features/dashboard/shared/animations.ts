import type { MotionProps } from "framer-motion";

export const hoverAnimation = {
  whileHover: {
    scale: 1.02,
    y: -2,
  },
  transition: {
    type: "spring" as const,
    stiffness: 300,
    damping: 20,
  },
} satisfies MotionProps;