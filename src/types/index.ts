import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonWidth = "fit" | "full";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: ButtonSize;
  width?: ButtonWidth;
  color?: string;
}
