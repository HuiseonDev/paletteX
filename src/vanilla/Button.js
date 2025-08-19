import { getContrastColor } from "../vanilla-utils/color.js";
export function createButton({
  text,
  color = "#3b82f6",
  size = "medium",
  fullWidth = false,
}) {
  const btn = document.createElement("button");
  btn.textContent = text;

  // 클래스 처리
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };
  btn.className = `rounded ${sizeClasses[size]} ${
    fullWidth ? "w-full" : "inline-flex"
  } flex items-center justify-center`;

  // 색상 처리
  btn.style.backgroundColor = color;
  btn.style.color = getContrastColor(color);

  return btn;
}
