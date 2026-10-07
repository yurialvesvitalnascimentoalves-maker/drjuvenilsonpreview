import type { SVGProps } from "react";

export function ToothIcon({ size = 24, strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 6c-4-3-10-3-11 3-1 4 1 7 2 11 1 5 2 8 4 8 3 0 2-9 5-9s2 9 5 9c2 0 3-3 4-8 1-4 3-7 2-11-1-6-7-6-11-3Z" />
      <path d="M11 8c2 0 3 1 5 1" />
    </svg>
  );
}
