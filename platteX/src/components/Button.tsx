import React from "react";
import { getContrastColor } from "../utils/color";

export interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  color = "#3b82f6",
  size = "medium",
  fullWidth = false,
  leftIcon,
  rightIcon,
}) => {
  const textColor = getContrastColor(color);
  return (
    <button
      className={`rounded ${sizeClasses[size]} ${
        fullWidth ? "w-full" : "inline-flex"
      } items-center justify-center gap-2`}
      style={{ backgroundColor: color, color: textColor }}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;
