import React, { useState } from "react";

export interface InputProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "size"> {
  variant?: "text" | "password" | "number" | "search";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showToggle?: boolean;
  color?: string;
}

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Input = ({
  size = "medium",
  fullWidth,
  variant = "text",
  leftIcon,
  rightIcon,
  color = "#1e57c7",
  showToggle = false,
  ...props
}: InputProps) => {
  const [showPassword, setShowPasswored] = useState(false);
  const isPassword = variant === "password";
  const inputType =
    isPassword && showToggle ? (showPassword ? "text" : "password") : variant;

  return (
    <div
      className={`flex item-center gap-2 rounded border ${sizeClasses[size]} ${
        fullWidth ? "w-full" : "inline-flex"
      }`}
      style={{ color: color }}
    >
      {leftIcon && <span>{leftIcon}</span>}
      <input
        type={inputType}
        className="flex-1 bg-transparent outline-none"
        {...props}
      />
      {isPassword && showToggle && (
        <button
          type="button"
          onClick={() => setShowPasswored((prev) => !prev)}
          className="text-sm px-2"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      )}
      {rightIcon && <span>{rightIcon}</span>}
    </div>
  );
};

export default Input;
