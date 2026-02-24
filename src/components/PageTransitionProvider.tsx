"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

interface TransitionContextType {
  navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  navigate: () => { },
});

export const usePageTransition = () => useContext(TransitionContext);

const ENTER_DURATION = 0.38;
const EXIT_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

// Shared entrance props for both halves —
// both start as a thin line at the screen centre, stretch left-to-right,
// then each half expands toward its own edge.
const halfEnter = {
  initial: { scaleX: 0, scaleY: 0.004 },
  animate: { scaleX: 1, scaleY: 1 },
  transition: {
    scaleX: { duration: ENTER_DURATION, ease: [0.76, 0, 0.24, 1] as const },
    scaleY: { duration: ENTER_DURATION, delay: ENTER_DURATION, ease: [0.76, 0, 0.24, 1] as const },
  },
};

export const PageTransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const pendingHref = useRef<string | null>(null);
  const navigated = useRef(false);

  const navigate = useCallback(
    (href: string) => {
      if (show) return;

      // Same-page hash → just scroll, no transition
      const hrefPath = href.split("#")[0] || "/";
      if (hrefPath === pathname) {
        const hash = href.split("#")[1];
        if (hash) {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }

      pendingHref.current = href;
      navigated.current = false;
      setShow(true);
    },
    [show, pathname]
  );

  // When the new page has loaded (pathname changed), start the reveal
  useEffect(() => {
    if (navigated.current) {
      const timer = setTimeout(() => setShow(false), 60);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Called when the entrance finishes — screen is fully covered, safe to route
  const handleEntranceComplete = () => {
    if (!navigated.current && pendingHref.current) {
      navigated.current = true;
      router.push(pendingHref.current);
      pendingHref.current = null;
    }
  };

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}

      <AnimatePresence>
        {show && (
          <>
            {/* Top half — entrance grows upward from centre;
                exit slides UP, the growing gap reveals the new page */}
            <motion.div
              key="curtain-top"
              className="fixed top-0 left-0 right-0 bg-[#FFF3EB] z-200"
              style={{ height: "50vh", transformOrigin: "bottom center" }}
              {...halfEnter}
              exit={{
                y: "-100%",
                transition: { duration: 0.22, ease: EXIT_EASE },
              }}
              onAnimationComplete={handleEntranceComplete}
            />

            {/* Bottom half — entrance grows downward from centre;
                exit slides DOWN, widening the same gap */}
            <motion.div
              key="curtain-bottom"
              className="fixed bottom-0 left-0 right-0 bg-[#FFF3EB] z-200"
              style={{ height: "50vh", transformOrigin: "top center" }}
              {...halfEnter}
              exit={{
                y: "100%",
                transition: { duration: 0.22, ease: EXIT_EASE },
              }}
            />
          </>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
};
