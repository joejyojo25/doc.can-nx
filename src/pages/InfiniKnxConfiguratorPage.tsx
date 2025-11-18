import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Download, Eye, Settings, Moon, Sun, Ruler, Grid, AlertCircle, Plus, Trash2, X, GripVertical, ZoomIn, Maximize2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Switch } from '../components/ui/switch';
import { Slider } from '../components/ui/slider';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { ScrollProgress } from '../components/ScrollProgress';
import { ProductBreadcrumb } from '../components/ProductBreadcrumb';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../components/ui/resizable';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import finitionsChaudesImg from 'figma:asset/1586723d2b7772188c34d5c2019a517fedf7e10c.png';
import finitionsFroidesImg from 'figma:asset/cf9e6a8c2243fd2c7bad69f9a8adbdfb4f356dc6.png';

// Constants
const LOGO_URL = "https://can-nx.com/wp-content/uploads/2022/09/logocan.png.webp";

// Unified plate types (replaces old brand + boitier system)
// NOTE: Les types 'eu', 'uk', 'us' sont des boîtiers standards qui utilisent 
// les finitions Meljac (configurées à l'étape 4). Seul le boîtier arrière est standard,
// la face avant utilise toujours les finitions Meljac.
const PLATE_TYPES = {
  'eu': { 
    name: 'Standard EU',
    brand: 'standard',
    wPerGang: 86, 
    h: 86, 
    t: 3, 
    visserie: true,
    supportsGangs: true, // Uses gang system
    supportsRotative: false,
    screwOrientation: 'horizontal'
  },
  'uk': { 
    name: 'Standard UK',
    brand: 'standard',
    wPerGang: 86, 
    h: 146, 
    t: 3, 
    visserie: true,
    supportsGangs: true,
    supportsRotative: false,
    screwOrientation: 'horizontal'
  },
  'us': { 
    name: 'Standard US',
    brand: 'standard',
    wPerGang: 72, 
    h: 115, 
    t: 3, 
    visserie: false,
    supportsGangs: true,
    supportsRotative: false,
    screwOrientation: 'horizontal'
  },
  'legrand-1m': {
    name: 'Legrand 1 Module',
    brand: 'legrand',
    w: 80,
    h: 80,
    t: 3,
    modules: 1,
    buttonsPerModule: 4,
    visserie: true,
    screwOrientation: 'horizontal',
    supportsGangs: false,
    supportsRotative: true
  },
  'legrand-2m': {
    name: 'Legrand 2 Modules',
    brand: 'legrand',
    w: 80,
    h: 154, // Vertical orientation
    t: 3,
    modules: 2,
    buttonsPerModule: 4,
    visserie: true,
    screwOrientation: 'vertical',
    supportsGangs: false,
    supportsRotative: true
  }
} as const;

type PlateType = keyof typeof PLATE_TYPES;

const FINISH_CATEGORY_INFO = {
  chaudes: {
    name: "Teintes chaudes",
    description: "Bronze, Laiton (7 finitions)",
    image: finitionsChaudesImg
  },
  froides: {
    name: "Teintes froides", 
    description: "Nickel, Chrome, Canon de Fusil (7 finitions)",
    image: finitionsFroidesImg
  },
  speciales: {
    name: "Teintes spéciales",
    description: "Finitions patinées, vieillis, noires (15 finitions)",
    image: null
  }
};

const MELJAC_FINISHES = {
  chaudes: [
    // Bronze (Warm)
    { code: "CA", name: "Bronze Médaille Clair", nameEn: "Golden Bronze", color: "#B87333", description: "Bronze doré avec léger brossage. Vernis satiné." },
    { code: "CB", name: "Bronze Médaille Clair Vernis Mat", nameEn: "Golden Bronze Matte", color: "#A0693F", description: "Bronze doré avec léger brossage. Vernis mat." },
    { code: "CC", name: "Bronze Médaille Allemand", nameEn: "German Bronze", color: "#CD7F32", description: "Brossage linéaire. Bronze moyen." },
    { code: "CD", name: "Bronze Médaille Foncé", nameEn: "Dark Bronze", color: "#3D2817", description: "Teinte sombre, marron foncé." },
    // Laiton / Brass (Warm)
    { code: "CE", name: "Champagne", nameEn: "Champagne", color: "#F7E7CE", description: "Laiton brossé. Vernis mat." },
    { code: "CF", name: "Doré Patiné", nameEn: "Aged Gold", color: "#D4AF37", description: "Teinte jaune or. Léger brossage et vernis satiné." },
    { code: "D1", name: "Dorure 1 Brillant", nameEn: "Bright Gold 1", color: "#DAA520", description: "Surface miroir." }
  ],
  froides: [
    // Nickel (Cool)
    { code: "FA", name: "Nickel Brossé", nameEn: "Brushed Nickel", color: "#8C8C8C", description: "Aspect inox." },
    { code: "FB", name: "Nickel Brillant", nameEn: "Bright Nickel", color: "#A8A8A8", description: "Effet miroir, ton légèrement plus chaud que le chrome." },
    { code: "FC", name: "Microbillé Nickel", nameEn: "Sandblasted Nickel", color: "#959595", description: "Surface sablée, vernis mat." },
    // Chrome - Étain (Cool)
    { code: "FD", name: "Chromé Mat", nameEn: "Matte Chrome", color: "#C0C0C0", description: "Brossage linéaire. Teinte gris bleuté." },
    { code: "FE", name: "Chromé Vif", nameEn: "Bright Chrome", color: "#E8E8E8", description: "Miroir aux reflets bleutés." },
    // Canon de Fusil (Cool)
    { code: "FF", name: "Canon de Fusil Anthracite", nameEn: "Gunmetal Anthracite", color: "#5C5C5C", description: "Brossage. Ton gris foncé/brun." },
    { code: "FH", name: "Canon de Fusil Sablé", nameEn: "Sandblasted Gunmetal", color: "#666666", description: "Aspect granité. Ton gris foncé." }
  ],
  speciales: [
    // Bronze spécial
    { code: "SV", name: "Black Stone Chelsea", nameEn: "Black Stone Chelsea", color: "#1C1C1C", description: "Ton bronze foncé/noir. Surface mate. Liseré laiton." },
    // Laiton spécial
    { code: "SR", name: "Laiton Vieilli Ciré", nameEn: "Waxed Aged Brass", color: "#B8860B", description: "Laiton brillant clair. Nuage de tons irisés bruns, évolutif par oxydation." },
    { code: "SU", name: "Antique Brass NA", nameEn: "Antique Brass NA", color: "#CD9575", description: "Laiton frotté. Alternance de zones sombres et claires." },
    // Cuivre (tous spéciaux)
    { code: "SG", name: "Cuivre Patiné", nameEn: "Patinated Copper", color: "#B87333", description: "Brossage et patine gris-noir." },
    { code: "SH", name: "Cuivre Vieilli Bouchonné", nameEn: "Aged Rubbed Copper", color: "#C98566", description: "Brossage aléatoire." },
    { code: "SI", name: "Cuivre Satiné", nameEn: "Satin Copper", color: "#D2691E", description: "Brossage. Vernis satiné." },
    { code: "ST", name: "Cuivre Antique", nameEn: "Antique Copper", color: "#CC6633", description: "Nuage de tons clairs et sombres." },
    // Nickel spécial
    { code: "SA", name: "Nickel Noir Brillant", nameEn: "Bright Black Nickel", color: "#4A4A4A", description: "Effet miroir." },
    { code: "SB", name: "Nickel Noir Mat", nameEn: "Matte Black Nickel", color: "#3C3C3C", description: "Surface noire mate." },
    // Chrome spécial
    { code: "SF", name: "Microbillé Chromé", nameEn: "Sandblasted Chrome", color: "#D3D3D3", description: "Surface sablée. Teinte gris bleuté. Vernis mat." },
    { code: "SS", name: "Étain Moyen", nameEn: "Medium Pewter", color: "#A6A6A6", description: "Dégradé de tons gris. Surface mate." },
    // Canon de Fusil spécial
    { code: "SM", name: "Microbillé Canon de Fusil Anthracite", nameEn: "Sandblasted Gunmetal Anthracite", color: "#666666", description: "Surface sablée. Ton gris foncé/brun." },
    { code: "SP", name: "Canon de Fusil Beige", nameEn: "Beige Gunmetal", color: "#9F9F9F", description: "Léger brossage. Ton gris/noir. Vernis satiné." },
    // Argent
    { code: "SE", name: "Argent Patiné", nameEn: "Patinated Silver", color: "#B8B8B8", description: "Gris argenté. Patine gris-noir." },
    // Ébène
    { code: "SQ", name: "Ébène", nameEn: "Ebony", color: "#2B2B2B", description: "Brossage linéaire marqué. Teinte noire mate." }
  ]
};

const MAX_MODULES = 4;
const MAX_CHARS = 10;

interface ButtonsPerGang {
  [key: number]: number;
}

interface Engravings {
  [key: string]: string;
}

interface PlateSize {
  w: number;
  h: number;
  t: number;
  wPerGang: number;
}

interface RoomConfig {
  id: string;
  roomName: string;
  quantity: number;
  type: PlateType; // Replaces brand + boitier
  
  // Meljac-specific (when type starts with 'meljac-')
  finishCategory?: "chaudes" | "froides" | "speciales";
  selectedFinish?: string;
  gangs?: number;
  btnsPerGang?: ButtonsPerGang;
  gapMm?: number;
  bord?: string;
  
  // Legrand-specific (when type starts with 'legrand-')
  buttonTypes?: { [buttonIndex: string]: 'push' | 'rotative' }; // e.g., { '0': 'push', '1': 'rotative' }
  
  // Common fields
  engravings: Engravings;
  numLines: 1 | 2;
  textPosition: "above" | "below";
  textCase: "uppercase" | "lowercase" | "mixed";
  visserie: "vissee" | "magnet";
}

export function InfiniKnxConfiguratorPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Global project info
  const [projectName, setProjectName] = useState("");
  const [comments, setComments] = useState("");
  
  // Image zoom modal
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);
  
  // Room management
  const [rooms, setRooms] = useState<RoomConfig[]>([
    {
      id: '1',
      roomName: 'Salon',
      quantity: 1,
      type: 'eu',
      finishCategory: 'chaudes',
      selectedFinish: 'CA',
      gangs: 2,
      btnsPerGang: { 1: 2, 2: 2 },
      gapMm: 0,
      bord: 'Plat',
      buttonTypes: {}, // For Legrand plates
      engravings: {},
      numLines: 1,
      textPosition: 'below',
      textCase: 'mixed',
      visserie: 'vissee'
    }
  ]);
  const [activeRoomId, setActiveRoomId] = useState('1');
  
  // Display options (global)
  const [showTech, setShowTech] = useState(true);
  const [guides, setGuides] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [pdfPreview, setPdfPreview] = useState<string | null>(null);
  
  // Inline editing state
  const [editingRoomId, setEditingRoomId] = useState<string | null>(null);
  const [editingRoomName, setEditingRoomName] = useState("");

  // Get active room
  const activeRoom = rooms.find(r => r.id === activeRoomId) || rooms[0];

  // Update active room config
  const updateActiveRoom = (updates: Partial<RoomConfig>) => {
    setRooms(rooms.map(room => 
      room.id === activeRoomId ? { ...room, ...updates } : room
    ));
  };

  // Add new room
  const addRoom = () => {
    const newId = String(Math.max(...rooms.map(r => parseInt(r.id))) + 1);
    const newRoom: RoomConfig = {
      id: newId,
      roomName: `Pièce ${newId}`,
      quantity: 1,
      type: 'eu',
      finishCategory: 'chaudes',
      selectedFinish: 'CA',
      gangs: 2,
      btnsPerGang: { 1: 2, 2: 2 },
      gapMm: 0,
      bord: 'Plat',
      engravings: {},
      numLines: 1,
      textPosition: 'below',
      textCase: 'mixed',
      visserie: 'vissee'
    };
    setRooms([...rooms, newRoom]);
    setActiveRoomId(newId);
  };

  // Delete room
  const deleteRoom = (id: string) => {
    if (rooms.length === 1) return; // Keep at least one room
    const newRooms = rooms.filter(r => r.id !== id);
    setRooms(newRooms);
    if (activeRoomId === id) {
      setActiveRoomId(newRooms[0].id);
    }
  };

  // Start editing room name
  const startEditingRoom = (room: RoomConfig) => {
    setEditingRoomId(room.id);
    setEditingRoomName(room.roomName);
  };

  // Save room name
  const saveRoomName = (roomId: string) => {
    if (editingRoomName.trim()) {
      setRooms(rooms.map(r => 
        r.id === roomId ? { ...r, roomName: editingRoomName.trim() } : r
      ));
    }
    setEditingRoomId(null);
    setEditingRoomName("");
  };

  // Cancel editing
  const cancelEditingRoom = () => {
    setEditingRoomId(null);
    setEditingRoomName("");
  };

  // Helper functions
  const plateSize = (room: RoomConfig): PlateSize => {
    const plateType = PLATE_TYPES[room.type];
    
    // Legrand system (fixed size based on modules)
    if (plateType.brand === 'legrand') {
      return {
        w: plateType.w!,
        h: plateType.h!,
        t: plateType.t,
        wPerGang: plateType.w! // Not really used for Legrand
      };
    }
    
    // Standard plates system (gang-based)
    const numGangs = room.gangs || 1;
    const gap = room.gapMm || 0;
    return {
      w: plateType.wPerGang! * numGangs + gap * (numGangs - 1),
      h: plateType.h,
      t: plateType.t,
      wPerGang: plateType.wPerGang!
    };
  };

  const centersPerGang = (m: number, numGangs: number, w: number, h: number, gap: number, btns: ButtonsPerGang) => {
    const slotW = (w - gap * (numGangs - 1)) / numGangs;
    const x0 = (m - 1) * (slotW + gap);
    const cx = x0 + slotW / 2;
    const nb = btns[m] || 2;
    if (nb === 1) return [{ cx, cy: h * 0.50, gang: m, idx: 1 }];
    return [
      { cx, cy: h * 0.36, gang: m, idx: 1 },
      { cx, cy: h * 0.64, gang: m, idx: 2 }
    ];
  };

  const drawRoundedRect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
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
  };

  const applyTextCase = (text: string, textCase: "uppercase" | "lowercase" | "mixed"): string => {
    if (textCase === "uppercase") return text.toUpperCase();
    if (textCase === "lowercase") return text.toLowerCase();
    return text; // mixed
  };

  // Draw canvas
  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas || !activeRoom) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    ctx.fillStyle = darkMode ? '#0d1219' : '#ffffff';
    ctx.fillRect(0, 0, W, H);

    const p = plateSize(activeRoom);
    const sx = (W - 40) / (p.w + 18);
    const sy = (H - 80) / (p.h + 22);
    const s = Math.min(sx, sy);
    const ox = (W - (p.w + 18) * s) / 2 + 9 * s;
    const oy = (H - (p.h + 22) * s) / 2 + 11 * s;

    // Get plate type and determine rendering approach
    const currentPlateType = PLATE_TYPES[activeRoom.type];
    const isStandardPlate = currentPlateType.brand === 'standard';
    const isLegrandPlate = currentPlateType.brand === 'legrand';
    
    // Get selected finish color (Standard plates use Meljac finishes)
    let finishColor = '#C0C0C0'; // Default silver/gray
    if (isStandardPlate && activeRoom.selectedFinish) {
      const allFinishes = [...MELJAC_FINISHES.chaudes, ...MELJAC_FINISHES.froides, ...MELJAC_FINISHES.speciales];
      const finishDef = allFinishes.find(f => f.code === activeRoom.selectedFinish) || allFinishes[0];
      finishColor = finishDef.color;
    }

    const corner = (isStandardPlate && activeRoom.bord === "Plat") ? 0 : 6;
    drawRoundedRect(ctx, ox, oy, p.w * s, p.h * s, corner * s);
    ctx.fillStyle = finishColor;
    ctx.fill();
    ctx.strokeStyle = "#8c93a0";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Draw gaps between modules (Standard plates only)
    if (isStandardPlate && activeRoom.gangs && activeRoom.gangs > 1) {
      const slotW = (p.w - activeRoom.gapMm! * (activeRoom.gangs - 1)) / activeRoom.gangs;
      for (let i = 0; i < activeRoom.gangs - 1; i++) {
        const x = ox + ((i + 1) * slotW + i * activeRoom.gapMm!) * s - (activeRoom.gapMm! / 2) * s;
        ctx.fillStyle = "rgba(27,32,48,0.25)";
        ctx.fillRect(x, oy + 1, activeRoom.gapMm! * s, p.h * s - 2);
      }
    }

    // Draw screws if "Avec vis" is selected - always in the last module
    if (activeRoom.visserie === 'vissee') {
      const screwRadius = 2 * s;
      const screwMargin = 7 * s;

      // Helper function to draw a screw
      const drawScrew = (x: number, y: number) => {
        // Screw head circle
        ctx.beginPath();
        ctx.arc(x, y, screwRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#9ca3af";
        ctx.fill();
        ctx.strokeStyle = "#6b7280";
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Vertical slot (fente verticale)
        const slotLength = screwRadius * 0.7;
        ctx.strokeStyle = "#4b5563";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(x, y - slotLength);
        ctx.lineTo(x, y + slotLength);
        ctx.stroke();
      };

      // Center X position of entire plate
      const plateCenterX = ox + (p.w * s) / 2;
      
      // Place only 2 screws vertically centered (top and bottom)
      drawScrew(plateCenterX, oy + screwMargin);
      drawScrew(plateCenterX, oy + p.h * s - screwMargin);
    }

    // Draw buttons and engravings
    const rBtn = 5.6 * s;
    const fontMm = 4; // Fixed at 4mm
    ctx.textBaseline = "alphabetic";
    ctx.textAlign = "center";

    if (isStandardPlate && activeRoom.gangs) {
      // Standard gang-based button drawing
      for (let m = 1; m <= activeRoom.gangs; m++) {
        const list = centersPerGang(m, activeRoom.gangs, p.w, p.h, activeRoom.gapMm!, activeRoom.btnsPerGang!);
        list.forEach(pt => {
          const key = `G${pt.gang}-B${pt.idx}`;
        const label = activeRoom.engravings[key] || "";
        const displayLabel = applyTextCase(label, activeRoom.textCase);
        const cx = ox + pt.cx * s;
        const cy = oy + pt.cy * s;

        if (guides) {
          ctx.strokeStyle = "#a0aec0";
          ctx.lineWidth = 0.4;
          ctx.beginPath();
          ctx.arc(cx, cy, rBtn + 0.8 * s, 0, Math.PI * 2);
          ctx.stroke();
          ctx.font = `${(3.2 * s).toFixed(2)}px Arial`;
          ctx.fillStyle = "#7a879b";
          ctx.fillText(`M${m}`, cx, oy + 6 * s);
        }

        // Button circle
        ctx.beginPath();
        ctx.arc(cx, cy, rBtn, 0, Math.PI * 2);
        ctx.fillStyle = "#eef2f7";
        ctx.fill();
        ctx.strokeStyle = "#6a738a";
        ctx.lineWidth = 0.7;
        ctx.stroke();

        // Engraving text
        if (displayLabel) {
          const lines = activeRoom.numLines === 2 ? [
            displayLabel.substring(0, MAX_CHARS),
            displayLabel.substring(MAX_CHARS, MAX_CHARS * 2)
          ].filter(l => l) : [displayLabel.substring(0, MAX_CHARS)];

          const lineHeight = fontMm * 1.2;
          const totalHeight = lines.length * lineHeight;
          
          let startY: number;
          if (activeRoom.textPosition === "above") {
            startY = pt.cy - (5.6 + 3.5) - totalHeight + lineHeight;
          } else {
            startY = pt.cy + (5.6 + 3.5) + fontMm;
          }

          ctx.font = `${(fontMm * s).toFixed(2)}px Helvetica, sans-serif`;
          ctx.fillStyle = "#2b3445";

          lines.forEach((line, idx) => {
            const yText = oy + (startY + idx * lineHeight) * s;
            
            if (guides) {
              ctx.strokeStyle = "#a0aec0";
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
    } else if (isLegrandPlate) {
      // Legrand: Simple grid layout for buttons
      const maxBtns = currentPlateType.maxButtons || 4;
      const cols = 2; // Always 2 columns for Legrand
      const rows = Math.ceil(maxBtns / cols);
      const buttonSpacing = 15; // mm between buttons
      const totalWidth = (cols - 1) * buttonSpacing;
      const totalHeight = (rows - 1) * buttonSpacing;
      const startX = (p.w - totalWidth) / 2;
      const startY = (p.h - totalHeight) / 2;

      for (let btnIdx = 0; btnIdx < maxBtns; btnIdx++) {
        const row = Math.floor(btnIdx / cols);
        const col = btnIdx % cols;
        const cx = ox + (startX + col * buttonSpacing) * s;
        const cy = oy + (startY + row * buttonSpacing) * s;
        const key = `G1-B${btnIdx + 1}`;
        const label = activeRoom.engravings[key] || "";
        const displayLabel = applyTextCase(label, activeRoom.textCase);
        const buttonType = activeRoom.buttonTypes?.[btnIdx] || 'push';

        // Draw button (push = circle, rotative = different style)
        ctx.beginPath();
        if (buttonType === 'push') {
          ctx.arc(cx, cy, rBtn, 0, Math.PI * 2);
        } else {
          // Rotative: draw a slightly different shape
          ctx.arc(cx, cy, rBtn * 1.1, 0, Math.PI * 2);
        }
        ctx.fillStyle = buttonType === 'push' ? "#eef2f7" : "#e0e7ff";
        ctx.fill();
        ctx.strokeStyle = "#6a738a";
        ctx.lineWidth = 0.7;
        ctx.stroke();

        // Add rotative indicator
        if (buttonType === 'rotative') {
          ctx.strokeStyle = "#4338ca";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(cx, cy, rBtn * 0.6, -Math.PI / 2, Math.PI / 2);
          ctx.stroke();
        }

        // Engraving text
        if (displayLabel) {
          const lines = activeRoom.numLines === 2 ? [
            displayLabel.substring(0, MAX_CHARS),
            displayLabel.substring(MAX_CHARS, MAX_CHARS * 2)
          ].filter(l => l) : [displayLabel.substring(0, MAX_CHARS)];

          const lineHeight = fontMm * 1.2;
          const totalHeight = lines.length * lineHeight;
          
          let startYText: number;
          if (activeRoom.textPosition === "above") {
            startYText = cy / s - (5.6 + 3.5) - totalHeight + lineHeight;
          } else {
            startYText = cy / s + (5.6 + 3.5) + fontMm;
          }

          ctx.font = `${(fontMm * s).toFixed(2)}px Helvetica, sans-serif`;
          ctx.fillStyle = "#2b3445";

          lines.forEach((line, idx) => {
            const yText = oy + (startYText + idx * lineHeight) * s;
            ctx.fillText(line, cx, yText);
          });
        }
      }
    }

    // Technical overlay
    if (showTech) {
      ctx.strokeStyle = "#1a1d24";
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
      ctx.fillStyle = "#111";
      ctx.textAlign = "center";
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
      ctx.translate(xDim + 6 * s, oy + (p.h * s) / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillText(`${Math.round(p.h)} mm`, 0, 0);
      ctx.restore();

      // Title dimension
      ctx.textAlign = "center";
      ctx.font = `${(4.4 * s).toFixed(2)}px Arial`;
      ctx.fillText(
        `${Math.round(p.w)} × ${Math.round(p.h)} × ${p.t} mm`,
        ox + (p.w * s) / 2,
        oy - 4 * s
      );
    }
  };

  // Resize canvas
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const cssW = parent.clientWidth - 16;
    const cssH = Math.max(320, Math.round(cssW * 0.52));
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    canvas.width = Math.floor(cssW * dpr);
    canvas.height = Math.floor(cssH * dpr);
    canvas.style.width = cssW + "px";
    canvas.style.height = cssH + "px";

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    draw();
  };

  // Effects
  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  useEffect(() => {
    draw();
  }, [activeRoom, showTech, guides, darkMode]);

  // Update buttons per gang when gangs change
  useEffect(() => {
    if (!activeRoom) return;
    const newBtnsPerGang = { ...activeRoom.btnsPerGang };
    for (let m = 1; m <= MAX_MODULES; m++) {
      if (m > activeRoom.gangs) {
        delete newBtnsPerGang[m];
      } else if (!newBtnsPerGang[m]) {
        newBtnsPerGang[m] = 2;
      }
    }
    updateActiveRoom({ btnsPerGang: newBtnsPerGang });
  }, [activeRoom?.gangs]);

  // Clean up engravings when configuration changes
  useEffect(() => {
    if (!activeRoom) return;
    const valid = new Set();
    for (let m = 1; m <= activeRoom.gangs; m++) {
      const nb = activeRoom.btnsPerGang[m] || 2;
      for (let b = 1; b <= nb; b++) {
        valid.add(`G${m}-B${b}`);
      }
    }
    const newEngravings = { ...activeRoom.engravings };
    Object.keys(newEngravings).forEach(k => {
      if (!valid.has(k)) delete newEngravings[k];
    });
    updateActiveRoom({ engravings: newEngravings });
  }, [activeRoom?.gangs, activeRoom?.btnsPerGang]);

  // Update visserie availability based on plate type
  useEffect(() => {
    if (!activeRoom) return;
    const plateType = PLATE_TYPES[activeRoom.type];
    if (!plateType.visserie) {
      updateActiveRoom({ visserie: 'magnet' });
    }
  }, [activeRoom?.type]);

  const handleEngravingChange = (key: string, value: string) => {
    if (!activeRoom) return;
    // Limit to MAX_CHARS * numLines
    const maxLength = MAX_CHARS * activeRoom.numLines;
    const limitedValue = value.substring(0, maxLength);
    updateActiveRoom({ 
      engravings: { ...activeRoom.engravings, [key]: limitedValue }
    });
  };

  const handleBtnsPerGangChange = (module: number, value: number) => {
    if (!activeRoom) return;
    updateActiveRoom({
      btnsPerGang: { ...activeRoom.btnsPerGang, [module]: value }
    });
  };

  const getCharCount = (text: string) => {
    return text.length;
  };

  // PDF Generation
  const generatePDF = async (preview = false) => {
    try {
      const { jsPDF } = await import('jspdf');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 20;
      let currentY = margin;

      // Get all finishes
      const allFinishes = [...MELJAC_FINISHES.chaudes, ...MELJAC_FINISHES.froides, ...MELJAC_FINISHES.speciales];

      // Helper to add new page
      const addNewPage = () => {
        pdf.addPage();
        currentY = margin;
      };

      // Cover page
      pdf.setFillColor(13, 18, 25);
      pdf.rect(0, 0, pageWidth, pageHeight, 'F');
      
      // Logo
      let logoAdded = false;
      try {
        const logoImg = new Image();
        logoImg.crossOrigin = 'anonymous';
        logoImg.src = LOGO_URL;
        
        const logoLoaded = await new Promise((resolve) => {
          logoImg.onload = () => resolve(true);
          logoImg.onerror = () => resolve(false);
          // Timeout after 2 seconds
          setTimeout(() => resolve(false), 2000);
        });
        
        if (logoLoaded && logoImg.complete && logoImg.naturalWidth > 0) {
          pdf.addImage(logoImg, 'PNG', margin, margin, 40, 10);
          logoAdded = true;
        }
      } catch (e) {
        console.warn('Could not add logo image to PDF:', e);
      }
      
      // Fallback: if logo failed to load, display text logo
      if (!logoAdded) {
        pdf.setTextColor(11, 177, 75); // Can-nX green color
        pdf.setFontSize(24);
        pdf.text('Can-nX', margin, margin + 8);
      }

      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(32);
      pdf.text('Configurateur Infini KNX', pageWidth / 2, 80, { align: 'center' });
      
      pdf.setFontSize(18);
      pdf.setTextColor(200, 200, 200);
      if (projectName) {
        pdf.text(projectName, pageWidth / 2, 100, { align: 'center' });
      }
      
      pdf.setFontSize(12);
      pdf.text(new Date().toLocaleDateString('fr-FR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }), pageWidth / 2, 120, { align: 'center' });

      pdf.setFontSize(10);
      pdf.text(`Nombre de pièces: ${rooms.length}`, pageWidth / 2, 140, { align: 'center' });

      // Generate a page for each room
      for (let i = 0; i < rooms.length; i++) {
        const room = rooms[i];
        addNewPage();

        // Room header
        pdf.setFillColor(79, 70, 229);
        pdf.rect(0, 0, pageWidth, 30, 'F');
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(18);
        pdf.text(`${room.roomName} (x${room.quantity})`, pageWidth / 2, 20, { align: 'center' });

        currentY = 40;

        // Create a temporary canvas for this room
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        if (!tempCtx) continue;

        const canvasWidth = 800;
        const canvasHeight = 420;
        tempCanvas.width = canvasWidth;
        tempCanvas.height = canvasHeight;

        // Draw room configuration on temp canvas
        const W = canvasWidth;
        const H = canvasHeight;
        tempCtx.fillStyle = '#ffffff';
        tempCtx.fillRect(0, 0, W, H);

        const p = plateSize(room);
        const sx = (W - 40) / (p.w + 18);
        const sy = (H - 80) / (p.h + 22);
        const s = Math.min(sx, sy);
        const ox = (W - (p.w + 18) * s) / 2 + 9 * s;
        const oy = (H - (p.h + 22) * s) / 2 + 11 * s;

        const finishDef = allFinishes.find(f => f.code === room.selectedFinish) || allFinishes[0];
        const finishColor = finishDef.color;

        const corner = room.bord === "Plat" ? 0 : 6;
        drawRoundedRect(tempCtx, ox, oy, p.w * s, p.h * s, corner * s);
        tempCtx.fillStyle = finishColor;
        tempCtx.fill();
        tempCtx.strokeStyle = "#8c93a0";
        tempCtx.lineWidth = 1;
        tempCtx.stroke();

        // Draw gaps (Standard plates only)
        const roomPlateType = PLATE_TYPES[room.type];
        const isRoomStandard = roomPlateType.brand === 'standard';
        if (isRoomStandard && room.gangs && room.gangs > 1) {
          const slotW = (p.w - room.gapMm! * (room.gangs - 1)) / room.gangs;
          for (let j = 0; j < room.gangs - 1; j++) {
            const x = ox + ((j + 1) * slotW + j * room.gapMm!) * s - (room.gapMm! / 2) * s;
            tempCtx.fillStyle = "rgba(27,32,48,0.25)";
            tempCtx.fillRect(x, oy + 1, room.gapMm! * s, p.h * s - 2);
          }
        }

        // Draw screws if "Avec vis" is selected
        if (room.visserie === 'vissee') {
          const screwRadius = 2 * s;
          const screwMargin = 7 * s;

          const drawScrew = (x: number, y: number) => {
            tempCtx.beginPath();
            tempCtx.arc(x, y, screwRadius, 0, Math.PI * 2);
            tempCtx.fillStyle = "#9ca3af";
            tempCtx.fill();
            tempCtx.strokeStyle = "#6b7280";
            tempCtx.lineWidth = 0.5;
            tempCtx.stroke();

            // Vertical slot (fente verticale)
            const slotLength = screwRadius * 0.7;
            tempCtx.strokeStyle = "#4b5563";
            tempCtx.lineWidth = 1.2;
            tempCtx.beginPath();
            tempCtx.moveTo(x, y - slotLength);
            tempCtx.lineTo(x, y + slotLength);
            tempCtx.stroke();
          };

          // Center X position of entire plate
          const plateCenterX = ox + (p.w * s) / 2;
          
          // Place only 2 screws vertically centered (top and bottom)
          drawScrew(plateCenterX, oy + screwMargin);
          drawScrew(plateCenterX, oy + p.h * s - screwMargin);
        }

        // Draw buttons and engravings (Standard plates only for now)
        if (isRoomStandard && room.gangs) {
          for (let m = 1; m <= room.gangs; m++) {
            const centers = centersPerGang(m, room.gangs, p.w, p.h, room.gapMm!, room.btnsPerGang!);
          centers.forEach(({ cx, cy, gang, idx }) => {
            const px = ox + cx * s;
            const py = oy + cy * s;
            const r = 18 * s;

            tempCtx.beginPath();
            tempCtx.arc(px, py, r, 0, 2 * Math.PI);
            tempCtx.fillStyle = "#f3f4f6";
            tempCtx.fill();
            tempCtx.strokeStyle = "#9ca3af";
            tempCtx.lineWidth = 1.4;
            tempCtx.stroke();

            tempCtx.beginPath();
            tempCtx.arc(px, py, r * 0.88, 0, 2 * Math.PI);
            tempCtx.strokeStyle = "#d1d5db";
            tempCtx.lineWidth = 0.7;
            tempCtx.stroke();

            const key = `G${gang}-B${idx}`;
            const txt = room.engravings[key] || '';
            if (txt) {
              tempCtx.fillStyle = "#1f2937";
              tempCtx.textAlign = "center";
              tempCtx.textBaseline = "middle";
              const fontSize = 3.6 * s;
              tempCtx.font = `${fontSize}px Arial`;

              if (room.numLines === 1) {
                const displayText = applyTextCase(txt, room.textCase);
                const yPos = room.textPosition === "above" ? py - r - 4 * s : py + r + 6 * s;
                tempCtx.fillText(displayText, px, yPos);
              } else {
                const line1 = txt.substring(0, MAX_CHARS);
                const line2 = txt.substring(MAX_CHARS, MAX_CHARS * 2);
                const displayLine1 = applyTextCase(line1, room.textCase);
                const displayLine2 = applyTextCase(line2, room.textCase);
                
                if (room.textPosition === "above") {
                  tempCtx.fillText(displayLine1, px, py - r - 7 * s);
                  if (displayLine2) tempCtx.fillText(displayLine2, px, py - r - 2 * s);
                } else {
                  tempCtx.fillText(displayLine1, px, py + r + 4 * s);
                  if (displayLine2) tempCtx.fillText(displayLine2, px, py + r + 9 * s);
                }
              }
            }
            });
          }
        }

        // Add canvas to PDF
        const imgData = tempCanvas.toDataURL('image/png');
        const imgWidth = pageWidth - 2 * margin;
        const imgHeight = (imgWidth * canvasHeight) / canvasWidth;
        pdf.addImage(imgData, 'PNG', margin, currentY, imgWidth, imgHeight);
        currentY += imgHeight + 10;

        // Add summary
        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(12);
        pdf.setFont(undefined, 'bold');
        pdf.text('Récapitulatif:', margin, currentY);
        currentY += 7;

        pdf.setFont(undefined, 'normal');
        pdf.setFontSize(10);

        const summaryData: [string, string][] = [
          ['Quantité', room.quantity.toString()],
          ['Boîtier', roomPlateType.name],
          ['Fixation', room.visserie === 'vissee' ? 'Avec vis' : 'Sans vis'],
          ['Dimensions', `${Math.round(p.w)} × ${Math.round(p.h)} × ${p.t} mm`],
          ['Texte', `${room.numLines} ligne(s), ${room.textCase}, ${room.textPosition === 'above' ? 'au-dessus' : 'en-dessous'}`]
        ];
        
        // Add finish fields (always Meljac, even for Legrand backboxes)
        if (room.selectedFinish && room.finishCategory) {
          const finishDef = allFinishes.find(f => f.code === room.selectedFinish) || allFinishes[0];
          summaryData.splice(1, 0,
            ['Finition Meljac', `${room.selectedFinish} - ${finishDef.name}`],
            ['Catégorie', FINISH_CATEGORY_INFO[room.finishCategory].name]
          );
          // Add Standard plate specific gang system fields
          if (isRoomStandard && room.gangs) {
            summaryData.push(
              ['Modules', room.gangs.toString()],
              ['Boutons/module', Object.entries(room.btnsPerGang || {}).map(([k, v]) => `M${k}:${v}btn`).join(', ')],
              ['Bord', room.bord || 'N/A']
            );
          }
        }

        summaryData.forEach(([label, value]) => {
          if (currentY > pageHeight - margin - 10) {
            addNewPage();
          }
          pdf.text(`${label}: ${value}`, margin, currentY);
          currentY += 6;
        });

        // Engravings
        if (Object.keys(room.engravings).length > 0) {
          currentY += 3;
          if (currentY > pageHeight - margin - 10) {
            addNewPage();
          }
          pdf.setFont(undefined, 'bold');
          pdf.text('Gravures:', margin, currentY);
          currentY += 6;
          pdf.setFont(undefined, 'normal');

          Object.entries(room.engravings).forEach(([key, value]) => {
            if (value) {
              if (currentY > pageHeight - margin - 10) {
                addNewPage();
              }
              pdf.text(`${key}: ${value}`, margin + 5, currentY);
              currentY += 5;
            }
          });
        }
      }

      // Comments page
      if (comments && comments.trim()) {
        addNewPage();
        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(14);
        pdf.setFont(undefined, 'bold');
        pdf.text('Commentaires:', margin, currentY);
        currentY += 10;
        pdf.setFontSize(10);
        pdf.setFont(undefined, 'normal');
        const splitComments = pdf.splitTextToSize(comments, pageWidth - 2 * margin);
        pdf.text(splitComments, margin, currentY);
      }

      // Generate preview or download
      if (preview) {
        const pdfDataUrl = pdf.output('dataurlstring');
        setPdfPreview(pdfDataUrl);
      } else {
        const filename = projectName ? `${projectName}_InfiniKNX.pdf` : 'InfiniKNX_Configuration.pdf';
        pdf.save(filename);
      }

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Erreur lors de la génération du PDF. Veuillez réessayer.');
    }
  };

  if (!activeRoom) return null;

  const p = plateSize(activeRoom);
  const plateType = PLATE_TYPES[activeRoom.type];
  const isStandard = plateType.brand === 'standard';
  const isLegrand = plateType.brand === 'legrand';
  const allFinishes = [...MELJAC_FINISHES.chaudes, ...MELJAC_FINISHES.froides, ...MELJAC_FINISHES.speciales];

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <ProductBreadcrumb productName="Infini KNX Configurateur" className="relative bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50" />

      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Configuration Avancée
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Personnalisez votre bouton rotatif KNX avec gravures sur mesure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ResizablePanelGroup direction="horizontal" className="gap-4">
            {/* Configuration Panel */}
            <ResizablePanel defaultSize={30} minSize={25} maxSize={40}>
            <div className="space-y-3 pr-2">
              {/* Toolbar */}
              <Card className="p-3">
                <div className="flex flex-wrap gap-2 items-center justify-between">
                  <div className="flex gap-2">
                    <Button onClick={() => generatePDF(true)} size="sm" className="border-2 border-gray-300 bg-white text-gray-900 hover:bg-gray-50">
                      <Eye className="w-4 h-4 mr-2" />
                      Aperçu
                    </Button>
                    <Button onClick={() => generatePDF(false)} size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="flex items-center gap-2">
                      <Switch checked={darkMode} onCheckedChange={setDarkMode} id="dark" />
                      <Label htmlFor="dark" className="text-sm cursor-pointer">
                        {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch checked={showTech} onCheckedChange={setShowTech} id="tech" />
                      <Label htmlFor="tech" className="text-sm cursor-pointer">
                        <Ruler className="w-4 h-4" />
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch checked={guides} onCheckedChange={setGuides} id="guides" />
                      <Label htmlFor="guides" className="text-sm cursor-pointer">
                        <Grid className="w-4 h-4" />
                      </Label>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Step 1: Project Information & Room Management */}
              <Card className="p-4 space-y-3">
                <h3 className="mb-2">1. Informations projet</h3>
                
                <div>
                  <Label>Nom du projet</Label>
                  <Input
                    type="text"
                    placeholder="Ex: Villa Moderne"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>

                <div className="border-t pt-3 mt-3">
                  <div className="flex items-center justify-between mb-2">
                    <Label>Pièces configurées</Label>
                    <Button 
                      onClick={addRoom} 
                      size="sm" 
                      className="bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white shadow-lg shadow-[#0CB14B]/30"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Ajouter
                    </Button>
                  </div>

                  <Tabs value={activeRoomId} onValueChange={setActiveRoomId} className="w-full">
                    <TabsList className="w-full grid grid-cols-2 gap-1 bg-gray-100 p-1 h-auto">
                      {rooms.map((room) => (
                        <TabsTrigger 
                          key={room.id} 
                          value={room.id}
                          className="relative data-[state=active]:bg-white data-[state=active]:shadow-sm px-2 py-2"
                          onDoubleClick={(e) => {
                            e.stopPropagation();
                            startEditingRoom(room);
                          }}
                        >
                          {editingRoomId === room.id ? (
                            <input
                              type="text"
                              value={editingRoomName}
                              onChange={(e) => setEditingRoomName(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  saveRoomName(room.id);
                                } else if (e.key === 'Escape') {
                                  cancelEditingRoom();
                                }
                                e.stopPropagation();
                              }}
                              onBlur={() => saveRoomName(room.id)}
                              onClick={(e) => e.stopPropagation()}
                              autoFocus
                              className="text-xs w-full bg-white border border-indigo-500 rounded px-1 py-0.5 outline-none"
                            />
                          ) : (
                            <span className="text-xs truncate max-w-[80px]">{room.roomName}</span>
                          )}
                          {rooms.length > 1 && editingRoomId !== room.id && (
                            <span
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteRoom(room.id);
                              }}
                              className="absolute -top-1 -right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5 cursor-pointer"
                              role="button"
                              aria-label={`Supprimer ${room.roomName}`}
                            >
                              <X className="w-3 h-3" />
                            </span>
                          )}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {rooms.map((room) => (
                      <TabsContent key={room.id} value={room.id} className="mt-3 space-y-3">
                        <Alert className="py-2">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription className="text-xs">
                            Double-cliquez sur l'onglet pour renommer la pièce
                          </AlertDescription>
                        </Alert>

                        <div>
                          <Label className="text-sm">Quantité</Label>
                          <Input
                            type="number"
                            min="1"
                            max="999"
                            value={room.quantity}
                            onChange={(e) => {
                              setRooms(rooms.map(r => 
                                r.id === room.id ? { ...r, quantity: parseInt(e.target.value) || 1 } : r
                              ));
                            }}
                          />
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              </Card>

              {/* Step 2: Finish Options (always Meljac, even for Legrand backboxes) */}
              <Card className="p-4 space-y-3">
                <h3 className="mb-2">2. Finition Meljac</h3>
                <p className="text-xs text-gray-500 mb-3">
                  {isLegrand ? 'Les finitions avant sont toujours Meljac (Legrand fournit uniquement le boîtier arrière)' : 'Sélectionnez la finition métallique de vos plaques'}
                </p>
                
                <div>
                  <Label className="text-sm">Catégorie</Label>
                  <Select value={activeRoom.finishCategory || 'chaudes'} onValueChange={(v) => {
                    const cat = v as "chaudes" | "froides" | "speciales";
                    updateActiveRoom({ 
                      finishCategory: cat,
                      selectedFinish: MELJAC_FINISHES[cat][0].code
                    });
                  }}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chaudes">🟠 Teintes chaudes (Bronze, Laiton, Cuivre)</SelectItem>
                      <SelectItem value="froides">⚪ Teintes froides (Nickel, Chrome, Argent)</SelectItem>
                      <SelectItem value="speciales">⚫ Teintes spéciales (Finitions noires)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Image de référence des finitions */}
                {activeRoom.finishCategory && FINISH_CATEGORY_INFO[activeRoom.finishCategory].image && (
                  <div 
                    className="relative rounded-lg overflow-hidden border border-gray-200 cursor-pointer group transition-all hover:border-indigo-400 hover:shadow-lg"
                    onClick={() => setZoomedImage({
                      src: FINISH_CATEGORY_INFO[activeRoom.finishCategory].image!,
                      alt: `Catalogue Meljac - ${FINISH_CATEGORY_INFO[activeRoom.finishCategory].name}`
                    })}
                  >
                    <img 
                      src={FINISH_CATEGORY_INFO[activeRoom.finishCategory].image}
                      alt={`Finitions ${FINISH_CATEGORY_INFO[activeRoom.finishCategory].name}`}
                      className="w-full h-auto transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg">
                        <Maximize2 className="w-6 h-6 text-indigo-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                      <p className="text-white text-xs text-center flex items-center justify-center gap-2">
                        <ZoomIn className="w-3 h-3" />
                        Catalogue Meljac - {FINISH_CATEGORY_INFO[activeRoom.finishCategory].name}
                        <span className="text-xs opacity-75">(cliquer pour agrandir)</span>
                      </p>
                    </div>
                  </div>
                )}

                <div>
                  <Label className="text-sm">Finition</Label>
                  <TooltipProvider delayDuration={300}>
                    <div className="grid grid-cols-2 gap-2 mt-2 max-h-[280px] overflow-y-auto pr-1">
                      {MELJAC_FINISHES[activeRoom.finishCategory || 'chaudes'].map(finish => (
                        <Tooltip key={finish.code}>
                          <TooltipTrigger asChild>
                            <button
                              className={`p-2 rounded-lg border-2 transition-all text-left ${
                                activeRoom.selectedFinish === finish.code ? 'border-indigo-600 bg-indigo-50 shadow-md' : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                              }`}
                              onClick={() => updateActiveRoom({ selectedFinish: finish.code })}
                            >
                              <div 
                                className="w-full h-8 rounded mb-1.5 shadow-inner" 
                                style={{ 
                                  backgroundColor: finish.color,
                                  backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%)'
                                }}
                              />
                              <div className="text-xs">
                                <div className="text-gray-900">{finish.code}</div>
                                <div className="text-gray-600 text-[10px] leading-tight line-clamp-2">{finish.name}</div>
                              </div>
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="right" className="max-w-xs">
                            <div className="space-y-1">
                              <p className="font-semibold">{finish.code} - {finish.name}</p>
                              {finish.nameEn && <p className="text-xs text-gray-400 italic">{finish.nameEn}</p>}
                              {finish.description && <p className="text-xs">{finish.description}</p>}
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TooltipProvider>
                </div>

                <Alert className="py-2">
                  <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      Consultez les images de référence Meljac pour voir les finitions réelles
                    </AlertDescription>
                  </Alert>
              </Card>

              {/* Step 3: Backbox Type Configuration */}
              <Card className="p-4 space-y-3">
                <h3 className="mb-2">3. Boîtier</h3>
                
                <div>
                  <Label>Type de Boîtier</Label>
                  <Select value={activeRoom.type} onValueChange={(v) => {
                    const newType = v as PlateType;
                    const newPlateType = PLATE_TYPES[newType];
                    
                    // Reset configuration based on new type
                    if (newPlateType.brand === 'legrand') {
                      const maxButtons = newPlateType.modules! * newPlateType.buttonsPerModule!;
                      const buttonTypes: { [key: string]: 'push' | 'rotative' } = {};
                      for (let i = 0; i < maxButtons; i++) {
                        buttonTypes[i.toString()] = 'push';
                      }
                      updateActiveRoom({ 
                        type: newType,
                        buttonTypes,
                        gangs: undefined,
                        btnsPerGang: undefined,
                        gapMm: undefined,
                        bord: undefined
                      });
                    } else {
                      // Standard - use gang system
                      updateActiveRoom({ 
                        type: newType,
                        gangs: 2,
                        btnsPerGang: { 1: 2, 2: 2 },
                        gapMm: 0,
                        bord: 'Plat',
                        buttonTypes: undefined
                      });
                    }
                  }}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eu">Standard EU (86×86mm)</SelectItem>
                      <SelectItem value="uk">Standard UK (86×146mm)</SelectItem>
                      <SelectItem value="us">Standard US (72×115mm)</SelectItem>
                      <SelectItem value="legrand-1m">Legrand 1 Module (80×80mm)</SelectItem>
                      <SelectItem value="legrand-2m">Legrand 2 Modules (80×154mm)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-gray-500 mt-1">
                    {plateType.name} - {plateType.brand === 'legrand' ? `${plateType.modules} module(s), ${plateType.modules! * plateType.buttonsPerModule!} boutons max` : `Système modulaire (gangs)`}
                  </p>
                </div>

                {/* Standard plate-specific options */}
                {isStandard && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label>Modules (Gangs)</Label>
                        <Select value={String(activeRoom.gangs || 1)} onValueChange={(v) => updateActiveRoom({ gangs: parseInt(v) })}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Écart (mm)</Label>
                        <Input
                          type="number"
                          min="0"
                          max="10"
                          value={activeRoom.gapMm || 0}
                          onChange={(e) => updateActiveRoom({ gapMm: parseInt(e.target.value) || 0 })}
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Bord</Label>
                      <Select value={activeRoom.bord || 'Plat'} onValueChange={(v) => updateActiveRoom({ bord: v })}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Plat">Plat</SelectItem>
                          <SelectItem value="Arrondi">Arrondi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                {/* Legrand-specific options */}
                {isLegrand && (
                  <div className="space-y-3">
                    <Alert className="py-2">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription className="text-xs">
                        Chaque module Legrand peut contenir jusqu'à {plateType.buttonsPerModule} boutons. 
                        Chaque bouton peut être un bouton poussoir ou un bouton rotatif.
                      </AlertDescription>
                    </Alert>

                    <div>
                      <Label>Type de bouton par position</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {Array.from({ length: plateType.modules! * plateType.buttonsPerModule! }).map((_, idx) => {
                          const moduleNum = Math.floor(idx / plateType.buttonsPerModule!) + 1;
                          const btnInModule = (idx % plateType.buttonsPerModule!) + 1;
                          const buttonType = activeRoom.buttonTypes?.[idx.toString()] || 'push';
                          
                          return (
                            <div key={idx} className="flex items-center gap-2 p-2 border rounded-lg">
                              <span className="text-xs font-medium min-w-[60px]">
                                M{moduleNum}-B{btnInModule}
                              </span>
                              <Select 
                                value={buttonType} 
                                onValueChange={(v) => {
                                  const newButtonTypes = { ...activeRoom.buttonTypes };
                                  newButtonTypes[idx.toString()] = v as 'push' | 'rotative';
                                  updateActiveRoom({ buttonTypes: newButtonTypes });
                                }}
                              >
                                <SelectTrigger className="h-8 text-xs">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="push">🔘 Poussoir</SelectItem>
                                  <SelectItem value="rotative">🔄 Rotatif</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Bord</Label>
                    <Select value={activeRoom.bord} onValueChange={(v) => updateActiveRoom({ bord: v })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Plat">Plat</SelectItem>
                        <SelectItem value="Arrondi">Arrondi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                </div>

                <div>
                  <Label className="mb-2 block">Type de fixation</Label>
                  <RadioGroup 
                    value={activeRoom.visserie} 
                    onValueChange={(value: "vissee" | "magnet") => updateActiveRoom({ visserie: value })}
                    disabled={!plateType.visserie}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-3 border rounded-lg p-3 hover:bg-gray-50 transition-colors">
                      <RadioGroupItem value="vissee" id="vissee" />
                      <Label htmlFor="vissee" className="cursor-pointer flex-1">Avec vis</Label>
                    </div>
                    <div className="flex items-center space-x-3 border rounded-lg p-3 hover:bg-gray-50 transition-colors">
                      <RadioGroupItem value="magnet" id="magnet" />
                      <Label htmlFor="magnet" className="cursor-pointer flex-1">Sans vis</Label>
                    </div>
                  </RadioGroup>
                </div>
                {!plateType.visserie && (
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Le type {plateType.name} ne supporte pas la visserie
                    </AlertDescription>
                  </Alert>
                )}
              </Card>

              {/* Step 4: Buttons per module (Standard plates only) */}
              {isStandard && (
                <Card className="p-4">
                  <h3 className="mb-2">4. Boutons par module</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[...Array(activeRoom.gangs || 1)].map((_, i) => {
                    const m = i + 1;
                    return (
                      <div key={m} className="border border-gray-200 rounded-lg p-2.5">
                        <Label className="text-xs mb-1.5 block">Module M{m}</Label>
                        <Select
                          value={String(activeRoom.btnsPerGang?.[m] || 2)}
                          onValueChange={(v) => handleBtnsPerGangChange(m, parseInt(v))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 bouton</SelectItem>
                            <SelectItem value="2">2 boutons</SelectItem>
                          </SelectContent>
                          </Select>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              )}

              {/* Step 5: Engraving Customization */}
              <Card className="p-4 space-y-3">
                <h3 className="mb-2">5. Paramètres de gravure</h3>
                
                <Alert className="py-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    Police Helvetica 4mm standard
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-sm">Lignes</Label>
                    <Select value={String(activeRoom.numLines)} onValueChange={(v) => updateActiveRoom({ numLines: parseInt(v) as 1 | 2 })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm">Position</Label>
                    <Select value={activeRoom.textPosition} onValueChange={(v) => updateActiveRoom({ textPosition: v as "above" | "below" })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="above">Au-dessus</SelectItem>
                        <SelectItem value="below">Au-dessous</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="text-sm">Casse du texte</Label>
                  <Select value={activeRoom.textCase} onValueChange={(v) => updateActiveRoom({ textCase: v as "uppercase" | "lowercase" | "mixed" })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="uppercase">MAJUSCULES</SelectItem>
                      <SelectItem value="lowercase">minuscules</SelectItem>
                      <SelectItem value="mixed">Mixte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>

              {/* Step 6: Engravings */}
              <Card className="p-4">
                <h3 className="mb-2">6. Textes de gravure</h3>
                <div className="space-y-3">
                  {/* Standard plates: Gang-based layout */}
                  {isStandard && [...Array(activeRoom.gangs || 1)].map((_, i) => {
                    const m = i + 1;
                    const nb = activeRoom.btnsPerGang?.[m] || 2;
                    return (
                      <div key={m} className="border border-gray-200 rounded-lg p-2.5">
                        <Label className="text-sm mb-2 block">Module M{m}</Label>
                        <div className="grid grid-cols-1 gap-2">
                          {[...Array(nb)].map((_, j) => {
                            const b = j + 1;
                            const key = `G${m}-B${b}`;
                            const currentText = activeRoom.engravings[key] || "";
                            const charCount = getCharCount(currentText);
                            const maxChars = MAX_CHARS * activeRoom.numLines;
                            const isOverLimit = charCount > maxChars;
                            
                            return (
                              <div key={key}>
                                <div className="flex justify-between items-center mb-1">
                                  <Label className="text-xs text-gray-500">Bouton {b}</Label>
                                  <span className={`text-xs ${isOverLimit ? 'text-red-600' : 'text-gray-500'}`}>
                                    {charCount}/{maxChars}
                                  </span>
                                </div>
                                <Input
                                  type="text"
                                  placeholder={activeRoom.numLines === 2 ? "Texte (max 20 car.)" : "Texte (max 10 car.)"}
                                  value={currentText}
                                  onChange={(e) => handleEngravingChange(key, e.target.value)}
                                  maxLength={maxChars}
                                  className={isOverLimit ? 'border-red-500' : ''}
                                />
                                {activeRoom.numLines === 2 && currentText.length > MAX_CHARS && (
                                  <p className="text-xs text-gray-500 mt-1">
                                    Ligne 1: {currentText.substring(0, MAX_CHARS)}<br/>
                                    Ligne 2: {currentText.substring(MAX_CHARS, MAX_CHARS * 2)}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Legrand: Module-based layout */}
                  {isLegrand && (
                    <div className="border border-gray-200 rounded-lg p-2.5">
                      <Label className="text-sm mb-2 block">Boutons</Label>
                      <div className="grid grid-cols-1 gap-2">
                        {Array.from({ length: plateType.maxButtons || 4 }).map((_, btnIdx) => {
                          const key = `G1-B${btnIdx + 1}`; // Use G1 for compatibility
                          const currentText = activeRoom.engravings[key] || "";
                          const charCount = getCharCount(currentText);
                          const maxChars = MAX_CHARS * activeRoom.numLines;
                          const isOverLimit = charCount > maxChars;
                          const buttonType = activeRoom.buttonTypes?.[btnIdx] || 'push';
                          
                          return (
                            <div key={key}>
                              <div className="flex justify-between items-center mb-1">
                                <Label className="text-xs text-gray-500">
                                  Bouton {btnIdx + 1} ({buttonType === 'push' ? '🔘 Push' : '🔄 Rotatif'})
                                </Label>
                                <span className={`text-xs ${isOverLimit ? 'text-red-600' : 'text-gray-500'}`}>
                                  {charCount}/{maxChars}
                                </span>
                              </div>
                              <Input
                                type="text"
                                placeholder={activeRoom.numLines === 2 ? "Texte (max 20 car.)" : "Texte (max 10 car.)"}
                                value={currentText}
                                onChange={(e) => handleEngravingChange(key, e.target.value)}
                                maxLength={maxChars}
                                className={isOverLimit ? 'border-red-500' : ''}
                              />
                              {activeRoom.numLines === 2 && currentText.length > MAX_CHARS && (
                                <p className="text-xs text-gray-500 mt-1">
                                  Ligne 1: {currentText.substring(0, MAX_CHARS)}<br/>
                                  Ligne 2: {currentText.substring(MAX_CHARS, MAX_CHARS * 2)}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                <Alert className="mt-3">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    Maximum {MAX_CHARS} caractères par ligne (espaces compris)
                  </AlertDescription>
                </Alert>
              </Card>

              {/* Comments */}
              <Card className="p-4">
                <Label className="mb-2 block text-sm">Commentaires</Label>
                <Textarea
                  placeholder="Notes à inclure dans le PDF..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  rows={3}
                />
              </Card>
            </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Preview and Summary */}
            <ResizablePanel defaultSize={70} minSize={60}>
              <div className="pl-2 h-full flex flex-col">
                {/* Canvas Preview */}
                <Card className="p-3 mb-4">
                  <div className="mb-2 space-y-1">
                    {projectName && (
                      <div className="text-base font-bold text-gray-900">
                        {projectName}
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm">Aperçu: {activeRoom.roomName}</h3>
                      <span className="text-xs text-gray-500">Qté: {activeRoom.quantity}</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg overflow-hidden" style={{ minHeight: '320px' }}>
                    <canvas ref={canvasRef} className="w-full h-auto" />
                  </div>
                </Card>

                {/* Summary Table */}
                <Card className="p-4 flex-1 overflow-auto">
                <h3 className="mb-3">Récapitulatif - {activeRoom.roomName}</h3>
                <div className="space-y-1 text-sm">
                  {projectName && (
                    <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                      <span className="text-gray-600">Projet</span>
                      <span>{projectName}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Pièce / Position</span>
                    <span>{activeRoom.roomName}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Quantité</span>
                    <span>{activeRoom.quantity}</span>
                  </div>
                  {/* Finish summary (always Meljac, even for Legrand backboxes) */}
                  {activeRoom.selectedFinish && activeRoom.finishCategory && (
                    <>
                      <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                        <span className="text-gray-600">Finition Meljac</span>
                        <span>{activeRoom.selectedFinish} - {allFinishes.find(f => f.code === activeRoom.selectedFinish)?.name}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                        <span className="text-gray-600">Catégorie</span>
                        <span>{FINISH_CATEGORY_INFO[activeRoom.finishCategory!].name}</span>
                      </div>
                    </>
                  )}
                  
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Boîtier</span>
                    <span>{plateType.name}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Fixation</span>
                    <span>{activeRoom.visserie === 'vissee' ? `Plaque vissée (${plateType.screwOrientation === 'vertical' ? 'verticales' : 'horizontales'})` : 'Magnet'}</span>
                  </div>
                  
                  {/* Standard plates gang system */}
                  {isStandard && (
                    <>
                      <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                        <span className="text-gray-600">Nombre de modules</span>
                        <span>{activeRoom.gangs}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                        <span className="text-gray-600">Boutons par module</span>
                        <span>{[...Array(activeRoom.gangs || 1)].map((_, i) => `M${i + 1}=${activeRoom.btnsPerGang?.[i + 1] || 2}`).join(' · ')}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                        <span className="text-gray-600">Bord</span>
                        <span>{activeRoom.bord}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                        <span className="text-gray-600">Espacement</span>
                        <span>{activeRoom.gapMm} mm</span>
                      </div>
                    </>
                  )}
                  
                  {/* Legrand module system */}
                  {isLegrand && (
                    <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                      <span className="text-gray-600">Boutons</span>
                      <span className="text-xs">
                        {Object.entries(activeRoom.buttonTypes || {}).map(([idx, type]) => {
                          const moduleNum = Math.floor(parseInt(idx) / plateType.buttonsPerModule!) + 1;
                          const btnInModule = (parseInt(idx) % plateType.buttonsPerModule!) + 1;
                          return `M${moduleNum}-B${btnInModule}: ${type === 'push' ? '🔘' : '🔄'}`;
                        }).join(' · ')}
                      </span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Dimensions totales</span>
                    <span>{p.w.toFixed(1)} × {p.h.toFixed(1)} × {p.t} mm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Police / Taille</span>
                    <span>Helvetica 4.0 mm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Position texte</span>
                    <span>{activeRoom.textPosition === 'above' ? 'Au-dessus' : 'Au-dessous'}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Lignes</span>
                    <span>{activeRoom.numLines}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5">
                    <span className="text-gray-600">Casse</span>
                    <span>{activeRoom.textCase === 'uppercase' ? 'Majuscules' : activeRoom.textCase === 'lowercase' ? 'Minuscules' : 'Mixte'}</span>
                  </div>
                </div>
              </Card>

              {pdfPreview && (
                <Card className="p-4 mt-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm">Aperçu PDF</h3>
                    <Button 
                      onClick={() => setPdfPreview(null)} 
                      variant="ghost" 
                      size="sm"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="border rounded-lg overflow-hidden" style={{ height: '600px' }}>
                    <iframe 
                      src={pdfPreview} 
                      className="w-full h-full"
                      title="PDF Preview"
                    />
                  </div>
                </Card>
              )}
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </section>

      {/* Image Zoom Modal */}
      <Dialog open={!!zoomedImage} onOpenChange={(open) => !open && setZoomedImage(null)}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[95vh] overflow-hidden p-2">
          <DialogHeader className="px-4 pt-4 pb-2">
            <DialogTitle className="flex items-center gap-2">
              <ZoomIn className="w-5 h-5 text-indigo-600" />
              {zoomedImage?.alt}
            </DialogTitle>
            <DialogDescription>
              Image agrandie du catalogue Meljac. Cliquez en dehors ou appuyez sur Échap pour fermer.
            </DialogDescription>
          </DialogHeader>
          <div className="overflow-auto max-h-[calc(95vh-80px)] p-4">
            {zoomedImage && (
              <img 
                src={zoomedImage.src} 
                alt={zoomedImage.alt}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
