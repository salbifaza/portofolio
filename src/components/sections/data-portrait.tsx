'use client';

import {useEffect, useRef} from 'react';
import {profile} from '@/content';
import {assetPath} from '@/lib/asset-path';

const COLS = 96;
const ROWS = 128;
const CELL = 5;
const TOTAL = COLS * ROWS;
const LOAD_MS = 2600;
const RADIUS = 9;
const PUSH = 5;

const fmt = (n: number) => n.toLocaleString('en-US');

/** The portrait lands row by row like a batch load once scrolled into view; pointer hover scatters nearby pixels. */
export function DataPortrait() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const counter = counterRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !counter || !ctx) return;

    const animate = document.documentElement.getAttribute('data-motion') === 'on';
    const gray = new Uint8ClampedArray(TOTAL);
    const dx = new Float32Array(TOTAL);
    const dy = new Float32Array(TOTAL);
    const pointer = {x: -999, y: -999, active: false};
    let raf = 0;
    let startedAt = 0;
    let loaded = animate ? 0 : ROWS;
    let settled = false;
    let imageReady = false;
    let visible = !animate;

    const draw = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim().split(/\s+/).join(',');
      for (let r = 0; r < Math.min(ROWS, Math.ceil(loaded)); r++) {
        for (let c = 0; c < COLS; c++) {
          const i = r * COLS + c;
          const g = gray[i];
          if (g < 6) continue;
          ctx.fillStyle = `rgb(${g},${g},${g})`;
          ctx.fillRect((c + dx[i]) * CELL, (r + dy[i]) * CELL, CELL, CELL);
        }
      }
      if (loaded < ROWS) {
        ctx.fillStyle = `rgb(${accent})`;
        ctx.fillRect(0, Math.floor(loaded) * CELL, canvas.width, CELL);
      }
      counter.textContent = fmt(Math.min(TOTAL, Math.round((loaded / ROWS) * TOTAL)));
    };

    const step = (now: number) => {
      if (!startedAt) startedAt = now;
      if (loaded < ROWS) loaded = Math.min(ROWS, ((now - startedAt) / LOAD_MS) * ROWS);

      let moving = false;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const i = r * COLS + c;
          let tx = 0;
          let ty = 0;
          if (pointer.active) {
            const ox = c - pointer.x;
            const oy = r - pointer.y;
            const d = Math.hypot(ox, oy);
            if (d < RADIUS && d > 0) {
              const k = (1 - d / RADIUS) * PUSH;
              tx = (ox / d) * k;
              ty = (oy / d) * k;
            }
          }
          dx[i] += (tx - dx[i]) * 0.18;
          dy[i] += (ty - dy[i]) * 0.18;
          if (Math.abs(dx[i]) > 0.02 || Math.abs(dy[i]) > 0.02) moving = true;
          else {
            dx[i] = 0;
            dy[i] = 0;
          }
        }
      }
      draw();
      settled = loaded >= ROWS && !moving && !pointer.active;
      raf = settled ? 0 : requestAnimationFrame(step);
    };

    const wake = () => {
      if (!raf) raf = requestAnimationFrame(step);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * COLS;
      pointer.y = ((e.clientY - rect.top) / rect.height) * ROWS;
      pointer.active = true;
      wake();
    };
    const onLeave = () => {
      pointer.active = false;
      wake();
    };

    const begin = () => {
      if (imageReady && visible && !raf && !startedAt) raf = requestAnimationFrame(step);
    };

    let observer: IntersectionObserver | undefined;
    if (animate) {
      counter.textContent = '0';
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          visible = true;
          observer?.disconnect();
          begin();
        },
        {threshold: 0.35},
      );
      observer.observe(canvas);
    }

    const img = new Image();
    img.onload = () => {
      const off = document.createElement('canvas');
      off.width = COLS;
      off.height = ROWS;
      const octx = off.getContext('2d');
      if (!octx) return;
      octx.drawImage(img, 0, 0, COLS, ROWS);
      const {data} = octx.getImageData(0, 0, COLS, ROWS);
      for (let i = 0; i < TOTAL; i++) {
        gray[i] = Math.round(0.299 * data[i * 4] + 0.587 * data[i * 4 + 1] + 0.114 * data[i * 4 + 2]);
      }
      imageReady = true;
      if (animate) {
        canvas.addEventListener('pointermove', onMove);
        canvas.addEventListener('pointerleave', onLeave);
        begin();
      } else {
        draw();
      }
    };
    img.src = assetPath(profile.photo);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(raf);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <figure className="w-full max-w-[360px]">
      <canvas
        ref={canvasRef}
        width={COLS * CELL}
        height={ROWS * CELL}
        role="img"
        aria-label={`Pixel-art portrait of ${profile.name}`}
        className="aspect-[3/4] w-full rounded-image bg-black [image-rendering:pixelated]"
      />
      <figcaption aria-hidden className="eyebrow-sm mt-3 flex justify-between">
        <span>rows loaded</span>
        <span ref={counterRef} className="tabular-nums">{fmt(TOTAL)}</span>
      </figcaption>
    </figure>
  );
}
