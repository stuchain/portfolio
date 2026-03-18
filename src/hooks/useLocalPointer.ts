import { useCallback, useRef, type MouseEvent as ReactMouseEvent } from "react";

const LERP = 0.12;
const SNAP_THRESHOLD = 0.1;
const CENTER = 50;

export default function useLocalPointer() {
  const targetX = useRef(CENTER);
  const targetY = useRef(CENTER);
  const currentX = useRef(CENTER);
  const currentY = useRef(CENTER);
  const raf = useRef(0);
  const activeEl = useRef<HTMLElement | null>(null);
  const hovering = useRef(false);

  const tick = useCallback(() => {
    const el = activeEl.current;
    if (!el) return;

    const dx = targetX.current - currentX.current;
    const dy = targetY.current - currentY.current;

    if (Math.abs(dx) < SNAP_THRESHOLD && Math.abs(dy) < SNAP_THRESHOLD) {
      currentX.current = targetX.current;
      currentY.current = targetY.current;
      el.style.setProperty("--local-x", `${currentX.current}`);
      el.style.setProperty("--local-y", `${currentY.current}`);

      if (!hovering.current) {
        raf.current = 0;
        return;
      }
    } else {
      currentX.current += dx * LERP;
      currentY.current += dy * LERP;
      el.style.setProperty("--local-x", `${currentX.current}`);
      el.style.setProperty("--local-y", `${currentY.current}`);
    }

    raf.current = requestAnimationFrame(tick);
  }, []);

  const onMouseMove = useCallback((e: ReactMouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    targetX.current = ((e.clientX - rect.left) / rect.width) * 100;
    targetY.current = ((e.clientY - rect.top) / rect.height) * 100;
  }, []);

  const onMouseEnter = useCallback((e: ReactMouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    activeEl.current = el;
    hovering.current = true;
    el.style.setProperty("--hovering", "1");

    const rect = el.getBoundingClientRect();
    targetX.current = ((e.clientX - rect.left) / rect.width) * 100;
    targetY.current = ((e.clientY - rect.top) / rect.height) * 100;
    currentX.current = targetX.current;
    currentY.current = targetY.current;
    el.style.setProperty("--local-x", `${currentX.current}`);
    el.style.setProperty("--local-y", `${currentY.current}`);

    if (!raf.current) {
      raf.current = requestAnimationFrame(tick);
    }
  }, [tick]);

  const onMouseLeave = useCallback((e: ReactMouseEvent<HTMLElement>) => {
    hovering.current = false;
    e.currentTarget.style.setProperty("--hovering", "0");
    if (raf.current) {
      cancelAnimationFrame(raf.current);
      raf.current = 0;
    }
  }, []);

  return { onMouseMove, onMouseEnter, onMouseLeave };
}
