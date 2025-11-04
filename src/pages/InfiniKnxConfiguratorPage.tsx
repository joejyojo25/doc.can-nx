import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Download, Eye, Settings, Moon, Sun, Ruler, Grid, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Switch } from '../components/ui/switch';
import { Slider } from '../components/ui/slider';
import { ScrollProgress } from '../components/ScrollProgress';
import { ProductBreadcrumb } from '../components/ProductBreadcrumb';
import { Alert, AlertDescription } from '../components/ui/alert';

// Constants
const LOGO_URL = "https://can-nx.com/wp-content/uploads/2022/09/logocan.png.webp";
const BOITIERS = {
  EU: { wPerGang: 86, h: 86, t: 3, visserie: true },
  UK: { wPerGang: 86, h: 146, t: 3, visserie: true },
  US: { wPerGang: 72, h: 115, t: 3, visserie: false }
};

const MELJAC_FINISHES = {
  bronze: [
    { code: "CA", name: "Bronze Médaille Cuir", color: "#B87333" },
    { code: "CB", name: "Bronze Médaille Cuir Vieilli Pro", color: "#A0693F" },
    { code: "CC", name: "Bronze Médaille Allemand", color: "#CD7F32" },
    { code: "CT", name: "Bronze Médaille Foncé", color: "#3D2817" },
    { code: "SV", name: "Black Stone Chelsea", color: "#1C1C1C" }
  ],
  laiton: [
    { code: "CH", name: "Champagne", color: "#F7E7CE" },
    { code: "CP", name: "Doré Patiné", color: "#D4AF37" },
    { code: "DT", name: "Doré 1 caillou", color: "#DAA520" },
    { code: "MK", name: "Laiton Vieilli Ciré", color: "#B8860B" },
    { code: "OU", name: "Antique Brass MA", color: "#CD9575" }
  ],
  cuivre: [
    { code: "KG", name: "Cuivre Patiné", color: "#B87333" },
    { code: "SR", name: "Cuivre Vieilli Bouchonné", color: "#C98566" },
    { code: "IS", name: "Cuivre Satiné", color: "#D2691E" },
    { code: "VT", name: "Cuivre Antique", color: "#CC6633" }
  ],
  nickel: [
    { code: "PA", name: "Nickel Brossé", color: "#8C8C8C" },
    { code: "PB", name: "Nickel Brillant", color: "#A8A8A8" },
    { code: "PC", name: "Microdalle Nickel", color: "#959595" },
    { code: "SA", name: "Nickel Noir Brillant", color: "#4A4A4A" },
    { code: "SE", name: "Nickel Noir Mat", color: "#3C3C3C" }
  ],
  chrome: [
    { code: "PD", name: "Chromé Mat", color: "#C0C0C0" },
    { code: "PE", name: "Chromé Vif", color: "#E8E8E8" },
    { code: "SP", name: "Microdalle Chrome", color: "#D3D3D3" },
    { code: "SS", name: "Etain Plaqué", color: "#A6A6A6" }
  ],
  argent: [
    { code: "FP", name: "Canon de Fusil Anthracite", color: "#5C5C5C" },
    { code: "SPF", name: "Microdalle Canon de Fusil", color: "#666666" },
    { code: "PN", name: "Canon de Fusil Sable", color: "#8B8B8B" },
    { code: "RP", name: "Canon de Fusil Beige", color: "#9F9F9F" },
    { code: "MS", name: "Argent Patiné", color: "#B8B8B8" },
    { code: "SQ", name: "Ebène", color: "#2B2B2B" }
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

export function InfiniKnxConfiguratorPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Existing states
  const [finBrand, setFinBrand] = useState("Meljac");
  const [finishCategory, setFinishCategory] = useState<"bronze" | "laiton" | "cuivre" | "nickel" | "chrome" | "argent">("bronze");
  const [selectedFinish, setSelectedFinish] = useState("CA");
  const [boitier, setBoitier] = useState<"EU" | "UK" | "US">("EU");
  const [gangs, setGangs] = useState(2);
  const [btnsPerGang, setBtnsPerGang] = useState<ButtonsPerGang>({ 1: 2, 2: 2, 3: 2, 4: 2 });
  const [gapMm, setGapMm] = useState(4);
  const [bord, setBord] = useState("Plat");
  const [engravings, setEngravings] = useState<Engravings>({});
  const [textSizeMm, setTextSizeMm] = useState(4);
  const [comments, setComments] = useState("");
  const [showTech, setShowTech] = useState(true);
  const [guides, setGuides] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [pdfPreview, setPdfPreview] = useState<string | null>(null);

  // New states for engraving customization
  const [numLines, setNumLines] = useState<1 | 2>(1);
  const [textPosition, setTextPosition] = useState<"above" | "below">("below");
  const [textCase, setTextCase] = useState<"uppercase" | "lowercase" | "mixed">("mixed");

  // New states for finish
  const [avecVis, setAvecVis] = useState(true);

  // New states for project
  const [projectName, setProjectName] = useState("");
  const [room, setRoom] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Helper functions
  const plateSize = (boitierType: string, numGangs: number, gap: number): PlateSize => {
    const p = BOITIERS[boitierType as keyof typeof BOITIERS];
    return {
      w: p.wPerGang * numGangs + gap * (numGangs - 1),
      h: p.h,
      t: p.t,
      wPerGang: p.wPerGang
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

  const applyTextCase = (text: string): string => {
    if (textCase === "uppercase") return text.toUpperCase();
    if (textCase === "lowercase") return text.toLowerCase();
    return text; // mixed
  };

  // Draw canvas
  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    ctx.fillStyle = darkMode ? '#0d1219' : '#ffffff';
    ctx.fillRect(0, 0, W, H);

    const p = plateSize(boitier, gangs, gapMm);
    const sx = (W - 40) / (p.w + 18);
    const sy = (H - 80) / (p.h + 22);
    const s = Math.min(sx, sy);
    const ox = (W - (p.w + 18) * s) / 2 + 9 * s;
    const oy = (H - (p.h + 22) * s) / 2 + 11 * s;

    // Get selected finish color
    const allFinishes = [...MELJAC_FINISHES.bronze, ...MELJAC_FINISHES.laiton, ...MELJAC_FINISHES.cuivre, 
                         ...MELJAC_FINISHES.nickel, ...MELJAC_FINISHES.chrome, ...MELJAC_FINISHES.argent];
    const finishDef = allFinishes.find(f => f.code === selectedFinish) || allFinishes[0];
    const finishColor = finishDef.color;

    const corner = bord === "Plat" ? 0 : 6;
    drawRoundedRect(ctx, ox, oy, p.w * s, p.h * s, corner * s);
    ctx.fillStyle = finishColor;
    ctx.fill();
    ctx.strokeStyle = "#8c93a0";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Draw gaps between modules
    if (gangs > 1) {
      const slotW = (p.w - gapMm * (gangs - 1)) / gangs;
      for (let i = 0; i < gangs - 1; i++) {
        const x = ox + ((i + 1) * slotW + i * gapMm) * s - (gapMm / 2) * s;
        ctx.fillStyle = "rgba(27,32,48,0.25)";
        ctx.fillRect(x, oy + 1, gapMm * s, p.h * s - 2);
      }
    }

    // Draw buttons and engravings
    const rBtn = 5.6 * s;
    const fontMm = textSizeMm;
    ctx.textBaseline = "alphabetic";
    ctx.textAlign = "center";

    for (let m = 1; m <= gangs; m++) {
      const list = centersPerGang(m, gangs, p.w, p.h, gapMm, btnsPerGang);
      list.forEach(pt => {
        const key = `G${pt.gang}-B${pt.idx}`;
        const label = engravings[key] || "";
        const displayLabel = applyTextCase(label);
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
          const lines = numLines === 2 ? [
            displayLabel.substring(0, MAX_CHARS),
            displayLabel.substring(MAX_CHARS, MAX_CHARS * 2)
          ].filter(l => l) : [displayLabel.substring(0, MAX_CHARS)];

          const lineHeight = fontMm * 1.2;
          const totalHeight = lines.length * lineHeight;
          
          let startY: number;
          if (textPosition === "above") {
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
  }, [finBrand, selectedFinish, boitier, gangs, btnsPerGang, gapMm, bord, engravings, textSizeMm, showTech, guides, darkMode, numLines, textPosition, textCase]);

  // Update buttons per gang when gangs change
  useEffect(() => {
    const newBtnsPerGang = { ...btnsPerGang };
    for (let m = 1; m <= MAX_MODULES; m++) {
      if (m > gangs) {
        delete newBtnsPerGang[m];
      } else if (!newBtnsPerGang[m]) {
        newBtnsPerGang[m] = 2;
      }
    }
    setBtnsPerGang(newBtnsPerGang);
  }, [gangs]);

  // Clean up engravings when configuration changes
  useEffect(() => {
    const valid = new Set();
    for (let m = 1; m <= gangs; m++) {
      const nb = btnsPerGang[m] || 2;
      for (let b = 1; b <= nb; b++) {
        valid.add(`G${m}-B${b}`);
      }
    }
    const newEngravings = { ...engravings };
    Object.keys(newEngravings).forEach(k => {
      if (!valid.has(k)) delete newEngravings[k];
    });
    setEngravings(newEngravings);
  }, [gangs, btnsPerGang]);

  // Update visserie availability based on boitier
  useEffect(() => {
    const boitierInfo = BOITIERS[boitier];
    if (!boitierInfo.visserie) {
      setAvecVis(false);
    }
  }, [boitier]);

  const handleEngravingChange = (key: string, value: string) => {
    // Limit to MAX_CHARS * numLines
    const maxLength = MAX_CHARS * numLines;
    const limitedValue = value.substring(0, maxLength);
    setEngravings({ ...engravings, [key]: limitedValue });
  };

  const handleBtnsPerGangChange = (module: number, value: number) => {
    setBtnsPerGang({ ...btnsPerGang, [module]: value });
  };

  const getCharCount = (text: string) => {
    return text.length;
  };

  // PDF Generation (placeholder - would need jsPDF and qrcode-generator libraries)
  const generatePDF = async (preview = false) => {
    // This would require importing jsPDF and qrcode-generator
    // For now, showing a placeholder message
    alert('Génération PDF - Nécessite l\'intégration de jsPDF et qrcode-generator');
  };

  const p = plateSize(boitier, gangs, gapMm);
  const boitierInfo = BOITIERS[boitier];
  const allFinishes = [...MELJAC_FINISHES.bronze, ...MELJAC_FINISHES.laiton, ...MELJAC_FINISHES.cuivre, 
                       ...MELJAC_FINISHES.nickel, ...MELJAC_FINISHES.chrome, ...MELJAC_FINISHES.argent];

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
            <h1 className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Configurateur Infini KNX
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Personnalisez votre bouton rotatif KNX avec gravures sur mesure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[380px_1fr] gap-4">
            {/* Configuration Panel */}
            <div className="space-y-3">
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

              {/* Finish Options */}
              <Card className="p-4 space-y-3">
                <h3 className="mb-2">1. Finition Meljac</h3>
                
                <div>
                  <Label className="text-sm">Catégorie</Label>
                  <Select value={finishCategory} onValueChange={(v) => {
                    setFinishCategory(v as typeof finishCategory);
                    setSelectedFinish(MELJAC_FINISHES[v as typeof finishCategory][0].code);
                  }}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bronze">Bronze</SelectItem>
                      <SelectItem value="laiton">Laiton</SelectItem>
                      <SelectItem value="cuivre">Cuivre</SelectItem>
                      <SelectItem value="nickel">Nickel</SelectItem>
                      <SelectItem value="chrome">Chrome - Etain</SelectItem>
                      <SelectItem value="argent">Canon de Fusil - Argent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm">Finition</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2 max-h-[280px] overflow-y-auto pr-1">
                    {MELJAC_FINISHES[finishCategory].map(finish => (
                      <button
                        key={finish.code}
                        className={`p-2 rounded-lg border-2 transition-all text-left ${
                          selectedFinish === finish.code ? 'border-indigo-600 bg-indigo-50 shadow-md' : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                        }`}
                        onClick={() => setSelectedFinish(finish.code)}
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
                    ))}
                  </div>
                </div>

                <Alert className="py-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    Consultez les images de référence Meljac pour voir les finitions réelles
                  </AlertDescription>
                </Alert>
              </Card>

              {/* Box Configuration */}
              <Card className="p-4 space-y-3">
                <h3 className="mb-2">2. Boîtier</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Type</Label>
                    <Select value={boitier} onValueChange={(v) => setBoitier(v as "EU" | "UK" | "US")}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="EU">EU</SelectItem>
                        <SelectItem value="UK">UK</SelectItem>
                        <SelectItem value="US">US</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Modules</Label>
                    <Select value={String(gangs)} onValueChange={(v) => setGangs(parseInt(v))}>
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
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Bord</Label>
                    <Select value={bord} onValueChange={setBord}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Plat">Plat</SelectItem>
                        <SelectItem value="Arrondi">Arrondi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Gap (mm)</Label>
                    <Input
                      type="number"
                      min="0"
                      max="10"
                      value={gapMm}
                      onChange={(e) => setGapMm(parseFloat(e.target.value) || 0)}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="vis">Avec visserie</Label>
                  <Switch 
                    id="vis" 
                    checked={avecVis} 
                    onCheckedChange={setAvecVis}
                    disabled={!boitierInfo.visserie}
                  />
                </div>
                {!boitierInfo.visserie && (
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Le boîtier {boitier} ne supporte pas la visserie
                    </AlertDescription>
                  </Alert>
                )}
              </Card>

              {/* Buttons per module */}
              <Card className="p-4">
                <h3 className="mb-2">3. Boutons par module</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[...Array(gangs)].map((_, i) => {
                    const m = i + 1;
                    return (
                      <div key={m} className="border border-gray-200 rounded-lg p-2.5">
                        <Label className="text-xs mb-1.5 block">Module M{m}</Label>
                        <Select
                          value={String(btnsPerGang[m] || 2)}
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

              {/* Engraving Customization */}
              <Card className="p-4 space-y-3">
                <h3 className="mb-2">4. Paramètres de gravure</h3>
                
                <Alert className="py-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    Police Helvetica 4mm standard
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-sm">Lignes</Label>
                    <Select value={String(numLines)} onValueChange={(v) => setNumLines(parseInt(v) as 1 | 2)}>
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
                    <Select value={textPosition} onValueChange={(v) => setTextPosition(v as "above" | "below")}>
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
                  <Select value={textCase} onValueChange={(v) => setTextCase(v as "uppercase" | "lowercase" | "mixed")}>
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

              {/* Engravings */}
              <Card className="p-4">
                <h3 className="mb-2">5. Textes de gravure</h3>
                <div className="space-y-3">
                  {[...Array(gangs)].map((_, i) => {
                    const m = i + 1;
                    const nb = btnsPerGang[m] || 2;
                    return (
                      <div key={m} className="border border-gray-200 rounded-lg p-2.5">
                        <Label className="text-sm mb-2 block">Module M{m}</Label>
                        <div className="grid grid-cols-1 gap-2">
                          {[...Array(nb)].map((_, j) => {
                            const b = j + 1;
                            const key = `G${m}-B${b}`;
                            const currentText = engravings[key] || "";
                            const charCount = getCharCount(currentText);
                            const maxChars = MAX_CHARS * numLines;
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
                                  placeholder="Texte (max 10 car. par ligne)"
                                  value={currentText}
                                  onChange={(e) => handleEngravingChange(key, e.target.value)}
                                  className={isOverLimit ? 'border-red-500' : ''}
                                />
                                {numLines === 2 && currentText.length > MAX_CHARS && (
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
                </div>
                <Alert className="mt-3">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    Maximum {MAX_CHARS} caractères par ligne (espaces compris)
                  </AlertDescription>
                </Alert>
              </Card>

              {/* Project Information */}
              <Card className="p-4 space-y-3">
                <h3 className="mb-2">6. Informations projet</h3>
                
                <div>
                  <Label>Nom du projet</Label>
                  <Input
                    type="text"
                    placeholder="Ex: Villa Moderne"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>

                <div>
                  <Label>Position / Pièce</Label>
                  <Input
                    type="text"
                    placeholder="Ex: Salon, Chambre 1, Bureau"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                  />
                </div>

                <div>
                  <Label>Quantité</Label>
                  <Input
                    type="number"
                    min="1"
                    max="999"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  />
                </div>
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

            {/* Preview and Summary */}
            <div className="space-y-4">
              {/* Canvas Preview - Sticky */}
              <div className="sticky top-4">
                <Card className="p-3">
                  <div className="bg-gray-50 rounded-lg overflow-hidden" style={{ minHeight: '320px' }}>
                    <canvas ref={canvasRef} className="w-full h-auto" />
                  </div>
                </Card>
              </div>

              {/* Summary Table */}
              <Card className="p-4">
                <h3 className="mb-3">Récapitulatif</h3>
                <div className="space-y-1 text-sm">
                  {projectName && (
                    <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                      <span className="text-gray-600">Projet</span>
                      <span>{projectName}</span>
                    </div>
                  )}
                  {room && (
                    <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                      <span className="text-gray-600">Pièce / Position</span>
                      <span>{room}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Quantité</span>
                    <span>{quantity}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Finition Meljac</span>
                    <span>{selectedFinish} - {allFinishes.find(f => f.code === selectedFinish)?.name}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Catégorie</span>
                    <span className="capitalize">{finishCategory}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Boîtier</span>
                    <span>{boitier} {avecVis ? '(avec vis)' : '(sans vis)'}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Nombre de modules</span>
                    <span>{gangs}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Boutons par module</span>
                    <span>{[...Array(gangs)].map((_, i) => `M${i + 1}=${btnsPerGang[i + 1] || 2}`).join(' · ')}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Bord</span>
                    <span>{bord}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Espacement</span>
                    <span>{gapMm} mm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Dimensions totales</span>
                    <span>{p.w.toFixed(1)} × {p.h.toFixed(1)} × {p.t} mm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Police / Taille</span>
                    <span>Helvetica {textSizeMm.toFixed(1)} mm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Position texte</span>
                    <span>{textPosition === 'above' ? 'Au-dessus' : 'Au-dessous'}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5 border-b">
                    <span className="text-gray-600">Lignes</span>
                    <span>{numLines}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1.5">
                    <span className="text-gray-600">Casse</span>
                    <span>{textCase === 'uppercase' ? 'Majuscules' : textCase === 'lowercase' ? 'Minuscules' : 'Mixte'}</span>
                  </div>
                </div>
              </Card>

              {pdfPreview && (
                <Card className="p-6">
                  <h3 className="text-lg mb-4">Aperçu PDF</h3>
                  <img src={pdfPreview} alt="PDF Preview" className="w-full rounded-lg border" />
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
