"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  { label: "reading", value: "add a book title" },
  { label: "listening to", value: "add an artist or album" },
  { label: "thinking about", value: "add a live question" },
];

export default function Currently() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      const timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % ITEMS.length);
        setVisible(true);
      }, 300);
      return () => clearTimeout(timeout);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const item = ITEMS[index];

  return (
    <p className="pt-2 font-sans text-sm text-stone-light">
      Currently{" "}
      <span
        className={`transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {item.label} — {item.value}
      </span>
    </p>
  );
}
