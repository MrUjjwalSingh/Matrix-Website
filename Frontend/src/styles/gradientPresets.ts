// frontend/src/styles/gradientPresets.ts
export type Gradient = {
  id: string;
  name: string;
  tw?: string; // Tailwind class
  css?: string; // CSS fallback
};

export const GRADIENTS: Gradient[] = [
  {
    id: "indigo-purple",
    name: "Indigo → Purple",
    tw: "bg-gradient-to-br from-indigo-500 to-purple-500",
    css: "linear-gradient(135deg,#6366F1,#A855F7)",
  },
  {
    id: "violet-fuchsia",
    name: "Violet → Fuchsia",
    tw: "bg-gradient-to-br from-violet-500 to-fuchsia-500",
    css: "linear-gradient(135deg,#7C3AED,#D946EF)",
  },
  {
    id: "blue-cyan",
    name: "Blue → Cyan",
    tw: "bg-gradient-to-br from-blue-500 to-cyan-500",
    css: "linear-gradient(135deg,#3B82F6,#06B6D4)",
  },
  {
    id: "cyan-teal",
    name: "Cyan → Teal",
    tw: "bg-gradient-to-br from-cyan-500 to-teal-500",
    css: "linear-gradient(135deg,#06B6D4,#14B8A6)",
  },
  {
    id: "teal-emerald",
    name: "Teal → Emerald",
    tw: "bg-gradient-to-br from-teal-500 to-emerald-500",
    css: "linear-gradient(135deg,#14B8A6,#10B981)",
  },
  {
    id: "green-lime",
    name: "Green → Lime",
    tw: "bg-gradient-to-br from-green-500 to-lime-500",
    css: "linear-gradient(135deg,#22C55E,#84CC16)",
  },
  {
    id: "amber-orange",
    name: "Amber → Orange",
    tw: "bg-gradient-to-br from-amber-500 to-orange-500",
    css: "linear-gradient(135deg,#F59E0B,#F97316)",
  },
  {
    id: "orange-red",
    name: "Orange → Red",
    tw: "bg-gradient-to-br from-orange-500 to-red-500",
    css: "linear-gradient(135deg,#F97316,#EF4444)",
  },
  {
    id: "rose-pink",
    name: "Rose → Pink",
    tw: "bg-gradient-to-br from-rose-500 to-pink-500",
    css: "linear-gradient(135deg,#F43F5E,#EC4899)",
  },
  {
    id: "pink-fuchsia",
    name: "Pink → Fuchsia",
    tw: "bg-gradient-to-br from-pink-500 to-fuchsia-500",
    css: "linear-gradient(135deg,#EC4899,#D946EF)",
  },
  {
    id: "purple-rose",
    name: "Purple → Rose",
    tw: "bg-gradient-to-br from-purple-500 to-rose-500",
    css: "linear-gradient(135deg,#A855F7,#F43F5E)",
  },
  {
    id: "sky-blue",
    name: "Sky → Blue",
    tw: "bg-gradient-to-br from-sky-500 to-blue-500",
    css: "linear-gradient(135deg,#0EA5E9,#3B82F6)",
  },
  {
    id: "slate-indigo",
    name: "Slate → Indigo",
    tw: "bg-gradient-to-br from-slate-600 to-indigo-500",
    css: "linear-gradient(135deg,#475569,#6366F1)",
  },
  {
    id: "zinc-slate",
    name: "Zinc → Slate",
    tw: "bg-gradient-to-br from-zinc-600 to-slate-600",
    css: "linear-gradient(135deg,#52525B,#475569)",
  },
  {
    id: "emerald-cyan",
    name: "Emerald → Cyan",
    tw: "bg-gradient-to-br from-emerald-500 to-cyan-500",
    css: "linear-gradient(135deg,#10B981,#06B6D4)",
  },
  {
    id: "indigo-sky",
    name: "Indigo → Sky",
    tw: "bg-gradient-to-br from-indigo-500 to-sky-500",
    css: "linear-gradient(135deg,#6366F1,#0EA5E9)",
  },
];
