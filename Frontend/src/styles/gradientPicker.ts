// frontend/src/styles/gradientPicker.ts
import { GRADIENTS, Gradient } from "./gradientPresets";

// djb2 string hash → positive index
export function hashToIndex(str: string, modulo = GRADIENTS.length): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++)
    hash = (hash << 5) + hash + str.charCodeAt(i);
  return Math.abs(hash) % modulo;
}

export function pickGradient(key: string): Gradient {
  const idx = hashToIndex(key);
  return GRADIENTS[idx];
}

export function gradientClassOrStyle(key: string): {
  className?: string;
  style?: React.CSSProperties;
} {
  const g = pickGradient(key);
  // Tailwind detection: check for Tailwind class in DOM (runtime) or assume true in SSR
  const hasTailwind =
    typeof window === "undefined"
      ? true
      : !!document.querySelector("[class*=bg-gradient-to-]");
  if (hasTailwind && g.tw) return { className: g.tw };
  if (g.css) return { style: { backgroundImage: g.css } };
  // final fallback
  return {
    style: { backgroundImage: "linear-gradient(135deg,#475569,#0EA5E9)" },
  };
}
