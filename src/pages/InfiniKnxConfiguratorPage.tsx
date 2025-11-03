import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Download, Eye, Settings, Moon, Sun, Ruler, Grid } from 'lucide-react';
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

// Constants
const LOGO_URL = "https://can-nx.com/wp-content/uploads/2022/09/logocan.png.webp";
const BOITIERS = {
  EU: { wPerGang: 86, h: 86, t: 3 },
  UK: { wPerGang: 86, h: 146, t: 3 },
  US: { wPerGang: 72, h: 115, t: 3 }
};

const VIBGYOR = [
  { key: "Violet", c1: "#7F00FF", c2: "#9F4DFF" },
  { key: "Indigo", c1: "#4B0082", c2: "#6A2FBF" },
  { key: "Bleu", c1: "#1976D2", c2: "#64B5F6" },
  { key: "Vert", c1: "#2E7D32", c2: "#66BB6A" },
  { key: "Jaune", c1: "#F9A825", c2: "#FFD54F" },
  { key: "Orange", c1: "#EF6C00", c2: "#FFA726" },
  { key: "Rouge", c1: "#C62828", c2: "#EF5350" }
];

const MAX_MODULES = 4;

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
  const [finBrand, setFinBrand] = useState("Orsteel");
  const [gradient, setGradient] = useState("Bleu");
  const [boitier, setBoitier] = useState<"EU" | "UK" | "US">("EU");
  const [gangs, setGangs] = useState(2);
  const [btnsPerGang, setBtnsPerGang] = useState<ButtonsPerGang>({ 1: 2, 2: 2, 3: 2, 4: 2 });
  const [gapMm, setGapMm] = useState(4);
  const [bord, setBord] = useState("Plat");
  const [engravings, setEngravings] = useState<Engravings>({});
  const [textSizeMm, setTextSizeMm] = useState(3.4);
  const [comments, setComments] = useState("");
  const [showTech, setShowTech] = useState(true);
  const [guides, setGuides] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [pdfPreview, setPdfPreview] = useState<string | null>(null);

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

    const gradDef = VIBGYOR.find(v => v.key === gradient) || VIBGYOR[2];
    const grad = ctx.createLinearGradient(ox, oy, ox + p.w * s, oy + p.h * s);
    grad.addColorStop(0, gradDef.c1);
    grad.addColorStop(1, gradDef.c2);

    const corner = bord === "Plat" ? 0 : 6;
    drawRoundedRect(ctx, ox, oy, p.w * s, p.h * s, corner * s);
    ctx.fillStyle = grad;
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
        const desiredYm = pt.cy + (5.6 + 3.5) + fontMm;
        const clampedYm = Math.min(Math.max(desiredYm, 4 + fontMm), p.h - 4);
        const yText = oy + clampedYm * s;

        if (guides) {
          ctx.strokeStyle = "#a0aec0";
          ctx.lineWidth = 0.4;
          ctx.beginPath();
          ctx.moveTo(cx - 14 * s, yText);
          ctx.lineTo(cx + 14 * s, yText);
          ctx.stroke();
        }

        ctx.font = `${(fontMm * s).toFixed(2)}px Arial, Helvetica, sans-serif`;
        ctx.fillStyle = "#2b3445";
        ctx.fillText(label, cx, yText);
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
  }, [finBrand, gradient, boitier, gangs, btnsPerGang, gapMm, bord, engravings, textSizeMm, showTech, guides, darkMode]);

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

  const handleEngravingChange = (key: string, value: string) => {
    setEngravings({ ...engravings, [key]: value });
  };

  const handleBtnsPerGangChange = (module: number, value: number) => {
    setBtnsPerGang({ ...btnsPerGang, [module]: value });
  };

  // PDF Generation (placeholder - would need jsPDF and qrcode-generator libraries)
  const generatePDF = async (preview = false) => {
    // This would require importing jsPDF and qrcode-generator
    // For now, showing a placeholder message
    alert('Génération PDF - Nécessite l\'intégration de jsPDF et qrcode-generator');
  };

  const p = plateSize(boitier, gangs, gapMm);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <ProductBreadcrumb productName="Infini KNX Configurateur" className="relative bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50" />

      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Configurateur Infini KNX
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personnalisez votre bouton rotatif KNX avec gravures sur mesure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[400px_1fr] gap-6">
            {/* Configuration Panel */}
            <div className="space-y-6">
              {/* Toolbar */}
              <Card className="p-4">
                <div className="flex flex-wrap gap-3 items-center justify-between">
                  <div className="flex gap-2">
                    <Button onClick={() => generatePDF(true)} variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Aperçu
                    </Button>
                    <Button onClick={() => generatePDF(false)} size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                  <div className="flex gap-3 items-center">
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

              {/* Options */}
              <Card className="p-6 space-y-4">
                <div>
                  <Label>1. Finition — Marque</Label>
                  <Select value={finBrand} onValueChange={setFinBrand}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Meljac">Meljac</SelectItem>
                      <SelectItem value="Orsteel">Orsteel</SelectItem>
                      <SelectItem value="Autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>1b. Finition — Dégradé</Label>
                  <div className="flex gap-2 flex-wrap mt-2">
                    {VIBGYOR.map(color => (
                      <button
                        key={color.key}
                        className={`w-8 h-8 rounded-lg border-2 transition-all ${
                          gradient === color.key ? 'border-indigo-600 scale-110' : 'border-gray-300'
                        }`}
                        style={{ background: `linear-gradient(135deg, ${color.c1}, ${color.c2})` }}
                        onClick={() => setGradient(color.key)}
                        title={color.key}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <Label>2. Boîtier</Label>
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
                    <Label>3. Modules</Label>
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

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>4. Bord</Label>
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
                    <Label>Taille texte: {textSizeMm.toFixed(1)} mm</Label>
                    <Slider
                      value={[textSizeMm]}
                      onValueChange={(v) => setTextSizeMm(v[0])}
                      min={2.4}
                      max={5.2}
                      step={0.1}
                      className="mt-2"
                    />
                  </div>
                </div>
              </Card>

              {/* Buttons per module */}
              <Card className="p-6">
                <Label className="mb-4 block">5. Boutons par module</Label>
                <div className="grid grid-cols-2 gap-3">
                  {[...Array(gangs)].map((_, i) => {
                    const m = i + 1;
                    return (
                      <div key={m} className="border border-gray-200 rounded-lg p-3">
                        <Label className="text-sm mb-2 block">Module M{m}</Label>
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

              {/* Engravings */}
              <Card className="p-6">
                <Label className="mb-4 block">6. Gravures</Label>
                <div className="space-y-4">
                  {[...Array(gangs)].map((_, i) => {
                    const m = i + 1;
                    const nb = btnsPerGang[m] || 2;
                    return (
                      <div key={m} className="border border-gray-200 rounded-lg p-3">
                        <Label className="text-sm mb-3 block">Module M{m}</Label>
                        <div className="grid grid-cols-2 gap-2">
                          {[...Array(nb)].map((_, j) => {
                            const b = j + 1;
                            const key = `G${m}-B${b}`;
                            return (
                              <div key={key}>
                                <Label className="text-xs text-gray-500 mb-1 block">Bouton {b}</Label>
                                <Input
                                  type="text"
                                  maxLength={18}
                                  placeholder="Texte"
                                  value={engravings[key] || ""}
                                  onChange={(e) => handleEngravingChange(key, e.target.value)}
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Comments */}
              <Card className="p-6">
                <Label className="mb-2 block">Commentaires</Label>
                <Textarea
                  placeholder="Notes à inclure dans le PDF..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  rows={4}
                />
              </Card>
            </div>

            {/* Preview and Summary */}
            <div className="space-y-6">
              {/* Canvas Preview */}
              <Card className="p-4">
                <div className="bg-gray-50 rounded-lg overflow-hidden" style={{ minHeight: '320px' }}>
                  <canvas ref={canvasRef} className="w-full h-auto" />
                </div>
              </Card>

              {/* Summary Table */}
              <Card className="p-6">
                <h3 className="text-lg mb-4">Configuration</h3>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-2 gap-4 py-2 border-b">
                    <span className="text-gray-600">Finition — Marque</span>
                    <span>{finBrand}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 border-b">
                    <span className="text-gray-600">Finition — Dégradé</span>
                    <span>{gradient}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 border-b">
                    <span className="text-gray-600">Boîtier</span>
                    <span>{boitier}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 border-b">
                    <span className="text-gray-600">Nombre de modules</span>
                    <span>{gangs}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 border-b">
                    <span className="text-gray-600">Boutons par module</span>
                    <span>{[...Array(gangs)].map((_, i) => `M${i + 1}=${btnsPerGang[i + 1] || 2}`).join(' · ')}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 border-b">
                    <span className="text-gray-600">Bord</span>
                    <span>{bord}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 border-b">
                    <span className="text-gray-600">Espacement</span>
                    <span>{gapMm} mm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 border-b">
                    <span className="text-gray-600">Dimensions totales</span>
                    <span>{p.w.toFixed(1)} × {p.h.toFixed(1)} × {p.t} mm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2">
                    <span className="text-gray-600">Taille gravure</span>
                    <span>{textSizeMm.toFixed(1)} mm</span>
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
