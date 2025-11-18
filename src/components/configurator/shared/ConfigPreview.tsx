import { useEffect, useRef } from 'react';
import { RoomConfig } from '../hooks/useConfiguratorState';
import { MELJAC_FINISHES, MAX_CHARS, PLATE_TYPES } from '../constants';
import {
  plateSize,
  centersPerGang,
  drawRoundedRect,
  applyTextCase,
  drawScrew,
  shouldRotateVertical
} from '../utils/canvasUtils';

interface ConfigPreviewProps {
  room: RoomConfig;
  width?: number;
  height?: number;
  showTech?: boolean;
  showGuides?: boolean;
  darkMode?: boolean;
  className?: string;
}

export function ConfigPreview({
  room,
  width = 600,
  height = 400,
  showTech = true,
  showGuides = false,
  darkMode = false,
  className = ''
}: ConfigPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !room) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas resolution for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Clear canvas
    const W = width;
    const H = height;
    ctx.fillStyle = darkMode ? '#0d1219' : '#ffffff';
    ctx.fillRect(0, 0, W, H);

    // Get plate type info
    const plateTypeInfo = PLATE_TYPES[room.type];
    if (!plateTypeInfo) return;

    // Calculate plate dimensions - always vertical orientation
    const numGangs = plateTypeInfo.supportsGangs ? (room.gangs || 1) : 1;
    const gapMm = plateTypeInfo.supportsGangs ? (room.gapMm || 0) : 0;
    let p = plateSize(room.type, numGangs, gapMm);
    
    // Ensure vertical orientation (height > width)
    if (p.w > p.h) {
      p = { w: p.h, h: p.w, t: p.t, wPerGang: p.wPerGang };
    }
    
    const sx = (W - 40) / (p.w + 18);
    const sy = (H - 80) / (p.h + 22);
    const s = Math.min(sx, sy);
    const ox = (W - (p.w + 18) * s) / 2 + 9 * s;
    const oy = (H - (p.h + 22) * s) / 2 + 11 * s;

    // Get selected finish color (Meljac finishes apply to all types)
    const allFinishes = [
      ...MELJAC_FINISHES.chaudes,
      ...MELJAC_FINISHES.froides,
      ...MELJAC_FINISHES.speciales
    ];
    const finishDef = allFinishes.find((f) => f.code === room.selectedFinish) || allFinishes[0];
    const finishColor = finishDef.color;

    // Draw main plate
    const corner = (room.bord === 'Plat' || !room.bord) ? 0 : 6;
    drawRoundedRect(ctx, ox, oy, p.w * s, p.h * s, corner * s);
    ctx.fillStyle = finishColor;
    ctx.fill();
    ctx.strokeStyle = '#8c93a0';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Draw gaps between modules (for Standard types only)
    if (plateTypeInfo.supportsGangs && numGangs > 1 && gapMm > 0) {
      const slotW = (p.w - gapMm * (numGangs - 1)) / numGangs;
      for (let i = 0; i < numGangs - 1; i++) {
        const x = ox + ((i + 1) * slotW + i * gapMm) * s - (gapMm / 2) * s;
        ctx.fillStyle = 'rgba(27,32,48,0.25)';
        ctx.fillRect(x, oy + 1, gapMm * s, p.h * s - 2);
      }
    }

    // Draw screws if selected - 2 screws centered on entire plate
    if (room.visserie === 'vissee' && plateTypeInfo.visserie) {
      const screwRadius = 2 * s;
      const screwMargin = 7 * s;
      
      // Center X position of entire plate
      const plateCenterX = ox + (p.w * s) / 2;
      
      // Place only 2 screws vertically centered (top and bottom)
      drawScrew(ctx, plateCenterX, oy + screwMargin, screwRadius);
      drawScrew(ctx, plateCenterX, oy + p.h * s - screwMargin, screwRadius);
    }

    // Draw buttons and engravings
    const rBtn = 5.6 * s;
    const fontMm = 4; // Fixed at 4mm
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'center';

    const btnsPerGang = room.btnsPerGang || { 1: 2 };
    for (let m = 1; m <= numGangs; m++) {
      const list = centersPerGang(m, numGangs, p.w, p.h, gapMm, btnsPerGang, true);
      list.forEach((pt) => {
        const key = `${m}-${pt.idx}`;
        const label = room.engravings[key] || '';
        const displayLabel = applyTextCase(label, room.textCase);
        const cx = ox + pt.cx * s;
        const cy = oy + pt.cy * s;

        if (showGuides) {
          ctx.strokeStyle = '#a0aec0';
          ctx.lineWidth = 0.4;
          ctx.beginPath();
          ctx.arc(cx, cy, rBtn + 0.8 * s, 0, Math.PI * 2);
          ctx.stroke();
          ctx.font = `${(3.2 * s).toFixed(2)}px Arial`;
          ctx.fillStyle = '#7a879b';
          ctx.fillText(`M${m}`, cx, oy + 6 * s);
        }

        // Button circle
        ctx.beginPath();
        ctx.arc(cx, cy, rBtn, 0, Math.PI * 2);
        ctx.fillStyle = '#eef2f7';
        ctx.fill();
        ctx.strokeStyle = '#6a738a';
        ctx.lineWidth = 0.7;
        ctx.stroke();

        // Engraving text
        if (displayLabel) {
          const lines =
            room.numLines === 2
              ? [
                  displayLabel.substring(0, MAX_CHARS),
                  displayLabel.substring(MAX_CHARS, MAX_CHARS * 2)
                ].filter((l) => l)
              : [displayLabel.substring(0, MAX_CHARS)];

          const lineHeight = fontMm * 1.2;
          const totalHeight = lines.length * lineHeight;

          let startY: number;
          if (room.textPosition === 'above') {
            startY = pt.cy - (5.6 + 3.5) - totalHeight + lineHeight;
          } else {
            startY = pt.cy + (5.6 + 3.5) + fontMm;
          }

          ctx.font = `${(fontMm * s).toFixed(2)}px Helvetica, sans-serif`;
          ctx.fillStyle = '#2b3445';

          lines.forEach((line, idx) => {
            const yText = oy + (startY + idx * lineHeight) * s;

            if (showGuides) {
              ctx.strokeStyle = '#a0aec0';
              ctx.lineWidth = 0.4;
              ctx.beginPath();
              ctx.moveTo(cx - 14 * s, yText);
              ctx.lineTo(cx + 14 * s, yText);
              ctx.stroke();
            }

            ctx.fillText(line, cx, yText);
          });
        }
      });
    }

    // Technical overlay
    if (showTech) {
      ctx.strokeStyle = '#1a1d24';
      ctx.lineWidth = 0.6;
      ctx.strokeRect(ox + 0.5, oy + 0.5, p.w * s - 1, p.h * s - 1);

      // Width dimension
      const yDim = oy + p.h * s + 6 * s;
      ctx.beginPath();
      ctx.moveTo(ox, yDim);
      ctx.lineTo(ox + p.w * s, yDim);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(ox, yDim - 3 * s);
      ctx.lineTo(ox, yDim + 3 * s);
      ctx.moveTo(ox + p.w * s, yDim - 3 * s);
      ctx.lineTo(ox + p.w * s, yDim + 3 * s);
      ctx.stroke();
      ctx.fillStyle = '#111';
      ctx.textAlign = 'center';
      ctx.font = `${(4 * s).toFixed(2)}px Arial`;
      ctx.fillText(`${Math.round(p.w)} mm`, ox + (p.w * s) / 2, yDim + 7 * s);

      // Height dimension
      const xDim = ox + p.w * s + 6 * s;
      ctx.beginPath();
      ctx.moveTo(xDim, oy);
      ctx.lineTo(xDim, oy + p.h * s);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(xDim - 3 * s, oy);
      ctx.lineTo(xDim + 3 * s, oy);
      ctx.moveTo(xDim - 3 * s, oy + p.h * s);
      ctx.lineTo(xDim + 3 * s, oy + p.h * s);
      ctx.stroke();

      ctx.save();
      ctx.translate(xDim + 7 * s, oy + (p.h * s) / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillText(`${Math.round(p.h)} mm`, 0, 0);
      ctx.restore();
    }
  }, [room, width, height, showTech, showGuides, darkMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`border border-gray-200 rounded-lg ${className}`}
    />
  );
}
