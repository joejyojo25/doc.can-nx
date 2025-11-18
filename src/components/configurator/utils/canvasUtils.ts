import { PLATE_TYPES, PlateType, MAX_CHARS } from '../constants';
import { ButtonsPerGang } from '../hooks/useConfiguratorState';

export interface PlateSize {
  w: number;
  h: number;
  t: number;
  wPerGang: number;
}

export function plateSize(plateType: PlateType, numGangs: number = 1, gap: number = 0): PlateSize {
  const p = PLATE_TYPES[plateType];
  
  // For Legrand types, dimensions are fixed
  if ('w' in p && 'h' in p) {
    return {
      w: p.w,
      h: p.h,
      t: p.t,
      wPerGang: p.w
    };
  }
  
  // For Standard types (eu, uk, us), calculate based on gangs
  if ('wPerGang' in p) {
    return {
      w: p.wPerGang * numGangs + gap * (numGangs - 1),
      h: p.h,
      t: p.t,
      wPerGang: p.wPerGang
    };
  }
  
  // Fallback
  return { w: 86, h: 86, t: 3, wPerGang: 86 };
}

export function shouldRotateVertical(plateWidth: number, plateHeight: number): boolean {
  // Return true if plate needs to be rotated to be vertical (height > width)
  return plateWidth > plateHeight;
}

export interface ButtonCenter {
  cx: number;
  cy: number;
  gang: number;
  idx: number;
}

export function centersPerGang(
  m: number,
  numGangs: number,
  w: number,
  h: number,
  gap: number,
  btns: ButtonsPerGang,
  isVertical?: boolean
): ButtonCenter[] {
  const nb = btns[m] || 2;
  
  // If vertical layout (h > w after swap), modules are stacked vertically
  if (isVertical || (h > w && numGangs > 1)) {
    const slotH = (h - gap * (numGangs - 1)) / numGangs;
    const y0 = (m - 1) * (slotH + gap);
    const cy = y0 + slotH / 2;
    
    if (nb === 1) return [{ cx: w * 0.50, cy, gang: m, idx: 1 }];
    return [
      { cx: w * 0.36, cy, gang: m, idx: 1 },
      { cx: w * 0.64, cy, gang: m, idx: 2 }
    ];
  }
  
  // Horizontal layout (original behavior)
  const slotW = (w - gap * (numGangs - 1)) / numGangs;
  const x0 = (m - 1) * (slotW + gap);
  const cx = x0 + slotW / 2;
  
  if (nb === 1) return [{ cx, cy: h * 0.50, gang: m, idx: 1 }];
  return [
    { cx, cy: h * 0.36, gang: m, idx: 1 },
    { cx, cy: h * 0.64, gang: m, idx: 2 }
  ];
}

export function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const rr = Math.max(0, Math.min(r, w / 2, h / 2));
  ctx.beginPath();
  if (rr === 0) {
    ctx.rect(x, y, w, h);
  } else {
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
  }
  ctx.closePath();
}

export function applyTextCase(
  text: string,
  textCase: 'uppercase' | 'lowercase' | 'mixed'
): string {
  if (textCase === 'uppercase') return text.toUpperCase();
  if (textCase === 'lowercase') return text.toLowerCase();
  return text; // mixed
}

export function drawScrew(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number
) {
  // Screw head circle
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = '#9ca3af';
  ctx.fill();
  ctx.strokeStyle = '#6b7280';
  ctx.lineWidth = 0.5;
  ctx.stroke();

  // Vertical slot (fente verticale)
  const slotLength = radius * 0.7;
  ctx.strokeStyle = '#4b5563';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(x, y - slotLength);
  ctx.lineTo(x, y + slotLength);
  ctx.stroke();
}
