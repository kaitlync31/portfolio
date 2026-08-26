import type { ReactNode } from "react";
import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";

export function CaseStudyHeader({
  eyebrow,
  title,
  role,
  team,
  timeline,
}: {
  eyebrow: string;
  title: string;
  role: string;
  team: string;
  timeline: string;
}) {
  return (
    <header className="mx-auto max-w-3xl px-6 pt-14">
      <Link
        href="/#work"
        className="font-sans text-xs uppercase tracking-[0.14em] text-stone transition-colors hover:text-clay"
      >
        ← Work
      </Link>
      <p className="mt-10 font-sans text-xs uppercase tracking-[0.14em] text-clay">
        {eyebrow}
      </p>
      <h1 className="mt-4 font-serif text-4xl italic leading-tight text-ink sm:text-5xl">
        {title}
      </h1>
      <dl className="mt-10 grid grid-cols-1 gap-6 border-y border-line py-6 font-sans text-sm sm:grid-cols-3">
        <div>
          <dt className="text-xs uppercase tracking-[0.1em] text-stone-light">Role</dt>
          <dd className="mt-1 text-ink">{role}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.1em] text-stone-light">Team</dt>
          <dd className="mt-1 text-ink">{team}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.1em] text-stone-light">Timeline</dt>
          <dd className="mt-1 text-ink">{timeline}</dd>
        </div>
      </dl>
    </header>
  );
}

export function CaseStudyHero({
  label,
  caption,
  src,
  alt,
}: {
  label: string;
  caption: string;
  src?: string;
  alt?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-10">
      {src ? (
        <figure>
          <div className="overflow-hidden border border-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt ?? caption}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 font-sans text-xs italic text-stone">
            {caption}
          </figcaption>
        </figure>
      ) : (
        <PlaceholderImage label={label} caption={caption} className="aspect-[16/10] w-full" />
      )}
    </div>
  );
}

export function TLDR({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-14">
      <p className="font-serif text-2xl italic leading-relaxed text-ink sm:text-[1.75rem]">
        {children}
      </p>
    </div>
  );
}

export function CaseStudySection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ink">
        {heading}
      </h2>
      <div className="mt-6 space-y-5 font-sans text-base leading-8 text-stone">
        {children}
      </div>
    </section>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="!mt-10 font-serif text-lg italic text-ink first:!mt-0">
      {children}
    </h3>
  );
}

export function PullQuote({ children, attribution }: { children: ReactNode; attribution?: string }) {
  return (
    <blockquote className="my-8 border-l-2 border-clay pl-6">
      <p className="font-serif text-xl italic leading-relaxed text-ink">{children}</p>
      {attribution && (
        <cite className="mt-3 block font-sans text-sm not-italic text-stone">
          — {attribution}
        </cite>
      )}
    </blockquote>
  );
}

export function CaseList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-clay" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CaseTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="-mx-1 overflow-x-auto px-1">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="border-b border-line pb-3 pr-6 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-ink"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="align-top">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="border-b border-line py-4 pr-6 font-sans text-sm leading-6 text-stone last:pr-0"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CaseStudyImage({ label, caption }: { label: string; caption: string }) {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <PlaceholderImage label={label} caption={caption} className="aspect-[16/9] w-full" />
    </div>
  );
}

export function CaseStudyCredits({ children }: { children: ReactNode }) {
  return (
    <footer className="mx-auto max-w-3xl border-t border-line px-6 py-14">
      <p className="font-sans text-sm italic text-stone">{children}</p>
      <Link
        href="/#work"
        className="mt-8 inline-block font-sans text-sm text-ink transition-colors hover:text-clay"
      >
        ← Back to work
      </Link>
    </footer>
  );
}
