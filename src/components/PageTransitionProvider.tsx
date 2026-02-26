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

const TRANSITION_DURATION = 0.5;
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

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
      setShow(true); // Close curtain
    },
    [show, pathname]
  );

  // When the new page has loaded (pathname changed), open the curtain
  useEffect(() => {
    if (navigated.current) {
      const timer = setTimeout(() => {
        setShow(false);
        pendingHref.current = null;
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Called when the entrance finishes — screen is fully covered, safe to switch pages underneath
  const handleEntranceComplete = () => {
    if (!navigated.current && pendingHref.current) {
      navigated.current = true;
      router.push(pendingHref.current);
    }
  };

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}

      <AnimatePresence>
        {show && (
          <>
            {/* Top half — entrance slides down from top to centre;
                exit slides UP, revealing the new page */}
            <motion.div
              key="curtain-top"
              className="fixed top-0 left-0 right-0 bg-[#FFF3EB] z-[200]"
              style={{ height: "50vh" }}
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: TRANSITION_DURATION, ease: EASE }}
              exit={{
                y: "-100%",
                transition: { duration: TRANSITION_DURATION, ease: EASE },
              }}
              onAnimationComplete={handleEntranceComplete}
            />

            {/* Bottom half — entrance slides up from bottom to centre;
                exit slides DOWN, revealing the new page */}
            <motion.div
              key="curtain-bottom"
              className="fixed bottom-0 left-0 right-0 bg-[#FFF3EB] z-[200]"
              style={{ height: "50vh" }}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: TRANSITION_DURATION, ease: EASE }}
              exit={{
                y: "100%",
                transition: { duration: TRANSITION_DURATION, ease: EASE },
              }}
            />

            {/* Subtle Loading indicator to ease the "blank screen" feeling if page load takes too long */}
            <motion.div
              key="curtain-loader"
              className="fixed inset-0 z-[201] flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <span className="text-[11px] font-medium uppercase tracking-[3px] text-[#b5754d] animate-pulse">
                Kansept Plus
              </span>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
};

