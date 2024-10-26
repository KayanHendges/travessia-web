"use client";
import React from "react";

export const useHash = () => {
  const initialHash = typeof window !== "undefined" ? window.location.hash : "";
  const [hash, setHash] = React.useState(initialHash);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const onHashChange = () => {
      const newHash = typeof window !== "undefined" ? window.location.hash : "";
      setHash(newHash);
    };

    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return hash;
};
