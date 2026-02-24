"use client";

import React from "react";
import { usePageTransition } from "./PageTransitionProvider";

interface TransitionLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const TransitionLink = ({ href, className, children }: TransitionLinkProps) => {
  const { navigate } = usePageTransition();

  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(href);
      }}
    >
      {children}
    </a>
  );
};
