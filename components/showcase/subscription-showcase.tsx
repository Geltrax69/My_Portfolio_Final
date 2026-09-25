"use client"

import type { PointerEvent, SVGProps } from "react";
import type { MotionProps } from "motion/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Category = {
  label: string;
  percentage: number;
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
};

type CategoryRowProps = Category & {
  shouldShowFill: boolean;
  transition: MotionProps["transition"];
};

const ChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    height="18"
    viewBox="0 0 24 24"
    width="18"
    {...props}
  >
    <path
      d="m9 18 6-6-6-6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
    />
  </svg>
);

const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    height="18"
    viewBox="0 0 24 24"
    width="18"
    {...props}
  >
    <path
      d="m18 15-6-6-6 6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.4"
    />
  </svg>
);

const ClaudeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07"
      stroke="#D97757"
      strokeLinecap="round"
      strokeWidth="2.6"
    />
  </svg>
);

const categories: Category[] = [
  { label: "Claude Code Pro Plan", percentage: 100, icon: ClaudeIcon },
];

const CategoryRow = ({
  icon: Icon,
  label,
  percentage,
  shouldShowFill,
  transition,
}: CategoryRowProps) => (
  <motion.button
    aria-label={`${label}, ${percentage}% of monthly spend`}
    className="relative flex h-16 w-full shrink-0 items-center gap-3 overflow-hidden rounded-[17px] border-[1.5px] border-solid border-zinc-100 bg-white px-4.5 pl-3.5 text-left text-foreground shadow-[0_2px_8px_#0F11150E] transition-transform duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground dark:border-white/10 dark:bg-background/65 dark:shadow-none"
    type="button"
    transition={transition}
    variants={{
      collapsed: { opacity: 0, y: 8 },
      expanded: { opacity: 1, y: 0 },
    }}
  >
    <motion.span
      aria-hidden="true"
      animate={{ width: shouldShowFill ? `${percentage}%` : "0%" }}
      className="absolute inset-y-0 left-0 bg-zinc-100 dark:bg-white/[0.06]"
      initial={false}
      transition={{ duration: shouldShowFill ? 0.42 : 0, ease: "linear" }}
    />
    <span className="relative z-10 flex size-8.5 shrink-0 items-center justify-center">
      <Icon className="size-[25px] shrink-0 text-foreground" />
    </span>
    <span className="relative z-10 min-w-0 flex-1 basis-0 truncate font-['Inter',system-ui,sans-serif] text-lg leading-6 font-medium tracking-[-0.01em]">
      {label}
    </span>
    <span className="relative z-10 w-13 shrink-0 text-right font-sans text-lg leading-6 font-medium">
      {percentage}%
    </span>
    <span className="relative z-10 flex h-6 w-5 shrink-0 items-center justify-end">
      <ChevronRightIcon className="shrink-0 text-foreground" />
    </span>
  </motion.button>
);

export const SubscriptionShowcase = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [shouldShowRowFill, setShouldShowRowFill] = useState(true);
  const fillDelayTimeoutRef = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    return () => {
      if (fillDelayTimeoutRef.current === null) {
        return;
      }

      window.clearTimeout(fillDelayTimeoutRef.current);
    };
  }, []);

  const handleToggleCategories = () => {
    if (fillDelayTimeoutRef.current !== null) {
      window.clearTimeout(fillDelayTimeoutRef.current);
      fillDelayTimeoutRef.current = null;
    }

    setShouldShowRowFill(false);
    setIsExpanded((currentIsExpanded) => !currentIsExpanded);
  };

  const handleTogglePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleStaggerComplete = () => {
    if (!isExpanded) {
      return;
    }

    fillDelayTimeoutRef.current = window.setTimeout(() => {
      setShouldShowRowFill(true);
      fillDelayTimeoutRef.current = null;
    }, 3);
  };

  const listTransition = shouldReduceMotion
    ? { duration: 0 }
    : {
        type: "spring" as const,
        stiffness: 400,
        damping: 30,
        mass: 1.5,
      };

  const rowListVariants = shouldReduceMotion
    ? {
        collapsed: {},
        expanded: {},
      }
    : {
        collapsed: {
          transition: {
            staggerChildren: 0.035,
            staggerDirection: -1,
          },
        },
        expanded: {
          transition: {
            delayChildren: 0.05,
            staggerChildren: 0.055,
          },
        },
      };

  const rowTransition = shouldReduceMotion
    ? { duration: 0 }
    : {
        type: "spring" as const,
        stiffness: 400,
        damping: 30,
        mass: 1.5,
      };

  return (
    <section
      aria-label="Monthly AI spend summary"
      className="flex h-[600px] items-start justify-center p-6"
    >
      <div className="flex w-[410px] flex-col rounded-[28px] bg-white px-4.5 pt-5.5 pb-5 font-['Inter',system-ui,sans-serif] text-foreground antialiased shadow-[0_20px_45px_#1012180F] dark:bg-white/[0.055] dark:shadow-none">
        <header className="flex w-full items-start justify-between px-0.5">
          <div className="flex flex-col gap-1">
            <p className="text-sm leading-4.5 font-medium text-zinc-500 dark:text-muted-foreground">
              May 2025
            </p>
            <h2 className="text-[28px] leading-8 font-bold tracking-normal text-foreground">
              $20.00
            </h2>
            <p className="text-base leading-5.5 font-medium text-emerald-700 dark:text-emerald-400">
              You spent 22% less than last month!
            </p>
          </div>
          <button
            aria-controls="monthly-spend-categories"
            aria-expanded={isExpanded}
            aria-label={
              isExpanded
                ? "Collapse monthly spend categories"
                : "Expand monthly spend categories"
            }
            className="flex size-7.5 shrink-0 items-center justify-center text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            onClick={handleToggleCategories}
            onPointerDown={handleTogglePointerDown}
            type="button"
          >
            <motion.span
              animate={{ rotate: isExpanded ? 0 : 180 }}
              className="flex shrink-0"
              transition={listTransition}
            >
              <ChevronUpIcon className="shrink-0" />
            </motion.span>
          </button>
        </header>

        <AnimatePresence initial={false}>
          {isExpanded ? (
            <motion.div
              animate={{ height: "auto", marginTop: 32, opacity: 1 }}
              className="overflow-hidden will-change-auto"
              exit={{ height: 0, marginTop: 0, opacity: 0 }}
              id="monthly-spend-categories"
              initial={{ height: 0, marginTop: 0, opacity: 0 }}
              transition={listTransition}
            >
              <motion.div
                animate="expanded"
                className="flex w-full flex-col gap-3.5"
                initial="collapsed"
                onAnimationComplete={handleStaggerComplete}
                variants={rowListVariants}
              >
                {categories.map((category) => (
                  <CategoryRow
                    key={category.label}
                    shouldShowFill={shouldShowRowFill}
                    transition={rowTransition}
                    {...category}
                  />
                ))}
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
};
