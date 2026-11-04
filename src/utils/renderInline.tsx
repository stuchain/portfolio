import type { ReactNode } from "react";

const LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

// Renders [text](url) links inside a line of profile text; everything else stays plain text.
export function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK_RE)) {
    const start = m.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    parts.push(
      <a key={start} href={m[2]} target="_blank" rel="noopener noreferrer">
        {m[1]}
      </a>
    );
    last = start + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
