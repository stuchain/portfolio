import { motion } from "framer-motion";
import { useTheme, ACCENT_MAP, type BackgroundStyle } from "../../contexts/ThemeContext";

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

type BgProps = { rgb: string; baseLightness: number; accent: string };

/* ── 1. Blobs (original) ── */
const BLOBS = [
  { size: "45vmax", dur: 22, ox: ["-10%","15%","-5%","-10%"], oy: ["-15%","10%","5%","-15%"] },
  { size: "40vmax", dur: 26, ox: ["60%","50%","70%","60%"], oy: ["0%","20%","-10%","0%"] },
  { size: "35vmax", dur: 20, ox: ["20%","40%","10%","20%"], oy: ["60%","50%","75%","60%"] },
  { size: "30vmax", dur: 24, ox: ["70%","55%","80%","70%"], oy: ["70%","55%","80%","70%"] },
];
function BlobsBg({ rgb, baseLightness, accent }: BgProps) {
  return <>{BLOBS.map((b, i) => (
    <motion.div key={`${accent}-blob-${i}`} className="animated-bg-blob"
      style={{ width: b.size, height: b.size, background: `radial-gradient(circle, rgba(${rgb}, ${baseLightness + (i%2===0?.05:0)}) 0%, transparent 70%)` }}
      animate={{ left: b.ox, top: b.oy }} transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut" }} />
  ))}</>;
}

/* ── 2. Aurora ── */
function AuroraBg({ rgb, baseLightness, accent }: BgProps) {
  const layers = [
    { rotate: [0,15,-10,0], scale: [1,1.15,0.95,1], dur: 18 },
    { rotate: [0,-12,8,0], scale: [1.1,0.9,1.15,1.1], dur: 22 },
    { rotate: [5,-5,10,5], scale: [0.95,1.1,1,0.95], dur: 26 },
  ];
  return <>{layers.map((l, i) => (
    <motion.div key={`${accent}-aurora-${i}`} className="animated-bg-aurora"
      style={{ background: `conic-gradient(from ${i*120}deg, rgba(${rgb},${baseLightness+.08}) 0%, transparent 30%, rgba(${rgb},${baseLightness+.04}) 50%, transparent 70%, rgba(${rgb},${baseLightness+.06}) 100%)`, filter: "blur(60px)" }}
      animate={{ rotate: l.rotate, scale: l.scale }} transition={{ duration: l.dur, repeat: Infinity, ease: "easeInOut" }} />
  ))}</>;
}

/* ── 4. Grid ── */
function GridBg({ rgb, accent }: BgProps) {
  return <motion.div key={`${accent}-grid`} className="animated-bg-grid"
    style={{ backgroundImage: `linear-gradient(rgba(${rgb},0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(${rgb},0.25) 1px, transparent 1px)` }}
    animate={{ opacity: [0.12,0.18,0.12] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />;
}

/* ── 5. Orbs ── */
function OrbsBg({ rgb, baseLightness, accent }: BgProps) {
  const orbs = Array.from({ length: 10 }, (_, i) => ({
    size: 8 + Math.random() * 14 + "vmin",
    dur: 14 + i * 2,
    ox: [`${10+i*8}%`, `${20+i*6}%`, `${5+i*9}%`, `${10+i*8}%`],
    oy: [`${10+i*8}%`, `${30+i*5}%`, `${15+i*7}%`, `${10+i*8}%`],
  }));
  return <>{orbs.map((o, i) => (
    <motion.div key={`${accent}-orb-${i}`} className="animated-bg-blob"
      style={{ width: o.size, height: o.size, background: `radial-gradient(circle, rgba(${rgb},${baseLightness+.03}) 0%, transparent 70%)` }}
      animate={{ left: o.ox, top: o.oy }} transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut" }} />
  ))}</>;
}

/* ── 6. Plasma ── */
function PlasmaBg({ rgb, baseLightness, accent }: BgProps) {
  return <>{[0,1,2,3].map(i => (
    <motion.div key={`${accent}-plasma-${i}`} className="animated-bg-fullscreen"
      style={{ background: `radial-gradient(ellipse at ${25+i*20}% ${20+i*15}%, rgba(${rgb},${baseLightness+.08-i*.015}) 0%, transparent 55%)`, filter: "blur(50px)" }}
      animate={{ scale: [1, 1.2, 0.95, 1], rotate: [0, 5+i*3, -(3+i*2), 0] }}
      transition={{ duration: 16+i*4, repeat: Infinity, ease: "easeInOut" }} />
  ))}</>;
}

/* ── 7. Nebula ── */
function NebulaBg({ rgb, baseLightness, accent }: BgProps) {
  return <>{[0,1,2].map(i => (
    <motion.div key={`${accent}-nebula-${i}`} className="animated-bg-blob"
      style={{ width: "70vmax", height: "70vmax", background: `radial-gradient(ellipse, rgba(${rgb},${baseLightness+.06}) 0%, transparent 60%)`, filter: `blur(${60+i*20}px)` }}
      animate={{ left: [`${-10+i*25}%`,`${10+i*20}%`,`${-5+i*22}%`,`${-10+i*25}%`], top: [`${-10+i*20}%`,`${10+i*15}%`,`${-5+i*18}%`,`${-10+i*20}%`] }}
      transition={{ duration: 28+i*6, repeat: Infinity, ease: "easeInOut" }} />
  ))}</>;
}

/* ── 13. Lava ── */
function LavaBg({ rgb, baseLightness, accent }: BgProps) {
  return <>{[0,1,2].map(i => (
    <motion.div key={`${accent}-lava-${i}`} className="animated-bg-blob"
      style={{ width: `${25+i*8}vmax`, height: `${25+i*8}vmax`, background: `radial-gradient(circle, rgba(${rgb},${baseLightness+.1}) 0%, transparent 65%)`, filter: `blur(${50+i*15}px)` }}
      animate={{ left: [`${15+i*20}%`,`${25+i*15}%`,`${10+i*25}%`,`${15+i*20}%`], top: [`${70-i*20}%`,`${30+i*10}%`,`${60-i*15}%`,`${70-i*20}%`] }}
      transition={{ duration: 20+i*6, repeat: Infinity, ease: "easeInOut" }} />
  ))}</>;
}

/* ── 14. Rain ── */
function RainBg({ rgb, accent }: BgProps) {
  const drops = Array.from({ length: 20 }, (_, i) => ({ left: `${i*5+Math.random()*2}%`, dur: 1.5+Math.random()*2, delay: Math.random()*3 }));
  return <>{drops.map((d, i) => (
    <motion.div key={`${accent}-rain-${i}`}
      style={{ position: "absolute", left: d.left, top: "-5%", width: "1px", height: "8vh", background: `linear-gradient(180deg, transparent, rgba(${rgb},0.2))` }}
      animate={{ top: ["-5%","105%"] }}
      transition={{ duration: d.dur, repeat: Infinity, ease: "linear", delay: d.delay }} />
  ))}</>;
}

/* ── 15. Stars ── */
function StarsBg({ rgb, accent }: BgProps) {
  const stars = Array.from({ length: 40 }, () => ({ left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, size: 1+Math.random()*2, dur: 2+Math.random()*4, delay: Math.random()*4 }));
  return <>{stars.map((s, i) => (
    <motion.div key={`${accent}-star-${i}`}
      style={{ position: "absolute", left: s.left, top: s.top, width: s.size, height: s.size, borderRadius: "50%", background: `rgba(${rgb},0.6)` }}
      animate={{ opacity: [0.2,0.8,0.2], scale: [0.8,1.2,0.8] }}
      transition={{ duration: s.dur, repeat: Infinity, ease: "easeInOut", delay: s.delay }} />
  ))}</>;
}

/* ── 16. Vortex ── */
function VortexBg({ rgb, baseLightness, accent }: BgProps) {
  return <>{[0,1,2].map(i => (
    <motion.div key={`${accent}-vortex-${i}`}
      style={{ position: "absolute", left: "50%", top: "50%", width: `${50+i*20}vmin`, height: `${50+i*20}vmin`, transform: "translate(-50%,-50%)", borderRadius: "50%", border: `1px solid rgba(${rgb},${baseLightness+.04})`, background: `conic-gradient(from ${i*60}deg, rgba(${rgb},${baseLightness+.05}) 0%, transparent 25%, rgba(${rgb},${baseLightness+.03}) 50%, transparent 75%, rgba(${rgb},${baseLightness+.05}) 100%)`, filter: "blur(20px)" }}
      animate={{ rotate: [0, i%2===0?360:-360] }}
      transition={{ duration: 30+i*10, repeat: Infinity, ease: "linear" }} />
  ))}</>;
}

/* ── 17. Pulse ── */
function PulseBg({ rgb, baseLightness, accent }: BgProps) {
  return <>{[0,1,2,3,4].map(i => (
    <motion.div key={`${accent}-pulse-${i}`}
      style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: `${20+i*15}vmin`, height: `${20+i*15}vmin`, borderRadius: "50%", background: `radial-gradient(circle, rgba(${rgb},${baseLightness+.04}) 0%, transparent 70%)` }}
      animate={{ scale: [1,1.3,1], opacity: [0.3,0.6,0.3] }}
      transition={{ duration: 4+i*1.5, repeat: Infinity, ease: "easeInOut", delay: i*0.8 }} />
  ))}</>;
}

/* ── 18. Streak ── */
function StreakBg({ rgb, baseLightness, accent }: BgProps) {
  return <>{[0,1,2,3].map(i => (
    <motion.div key={`${accent}-streak-${i}`} className="animated-bg-layer"
      style={{ width: "150%", height: "2px", left: "-25%", top: `${15+i*22}%`, background: `linear-gradient(90deg, transparent, rgba(${rgb},${baseLightness+.15}), transparent)`, filter: "blur(3px)", transformOrigin: "center" }}
      animate={{ x: ["-30%","30%","-30%"], opacity: [0.2,0.6,0.2], rotate: [15+i*5, 18+i*5, 15+i*5] }}
      transition={{ duration: 10+i*3, repeat: Infinity, ease: "easeInOut", delay: i*2 }} />
  ))}</>;
}

/* ── 20. Sunset ── */
function SunsetBg({ rgb, baseLightness, accent }: BgProps) {
  const bands = [["255,140,50"],["255,90,90"],["200,80,200"],[rgb]];
  return <>{bands.map((c, i) => (
    <motion.div key={`${accent}-sunset-${i}`} className="animated-bg-fullscreen"
      style={{ background: `linear-gradient(180deg, transparent ${i*25}%, rgba(${c},${baseLightness+.06}) ${50+i*10}%, transparent 100%)`, filter: "blur(40px)" }}
      animate={{ y: [`${-3+i}%`,`${3-i}%`,`${-3+i}%`], opacity: [0.3,0.5,0.3] }}
      transition={{ duration: 14+i*4, repeat: Infinity, ease: "easeInOut" }} />
  ))}</>;
}

/* ── 23. Glow ── */
function GlowBg({ rgb, baseLightness, accent }: BgProps) {
  return <motion.div key={`${accent}-glow`}
    style={{ position: "absolute", left: "50%", top: "40%", width: "60vmax", height: "60vmax", transform: "translate(-50%,-50%)", borderRadius: "50%", background: `radial-gradient(circle, rgba(${rgb},${baseLightness+.12}) 0%, rgba(${rgb},${baseLightness+.04}) 40%, transparent 70%)`, filter: "blur(40px)" }}
    animate={{ scale: [1,1.15,1], opacity: [0.6,1,0.6] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />;
}

/* ── 24. Noise ── */
function NoiseBg({ accent }: BgProps) {
  return <motion.div key={`${accent}-noise`} className="animated-bg-fullscreen"
    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`, backgroundSize: "256px 256px", opacity: 0.5 }}
    animate={{ opacity: [0.4,0.6,0.4] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />;
}

/* ── Renderer map ── */
const BG_RENDERERS: Record<Exclude<BackgroundStyle, "none">, React.FC<BgProps>> = {
  blobs: BlobsBg, aurora: AuroraBg, grid: GridBg,
  orbs: OrbsBg, plasma: PlasmaBg, nebula: NebulaBg,
  lava: LavaBg, rain: RainBg, stars: StarsBg, vortex: VortexBg,
  pulse: PulseBg, streak: StreakBg, sunset: SunsetBg,
  glow: GlowBg, noise: NoiseBg,
};

export default function AnimatedBackground() {
  const { accent, mode, background } = useTheme();
  if (background === "none") return null;

  const accentHex = ACCENT_MAP[accent];
  const rgb = hexToRgb(accentHex);
  const baseLightness = mode === "dark" ? 0.15 : 0.12;
  const Renderer = BG_RENDERERS[background];

  return (
    <div className="animated-bg" aria-hidden="true">
      <Renderer rgb={rgb} baseLightness={baseLightness} accent={accent} />
    </div>
  );
}
