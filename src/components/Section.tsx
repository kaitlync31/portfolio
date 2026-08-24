import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 border-t border-line px-6 py-24">
      <div className="mb-14 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
        <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-ink">
          {title}
        </h2>
        {subtitle && (
          <p className="font-serif text-lg italic text-stone">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}
