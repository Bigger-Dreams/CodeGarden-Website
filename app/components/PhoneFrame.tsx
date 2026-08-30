import type { ReactNode } from "react";

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
};

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div
      className={`relative rounded-[45px] bg-[#0a0a0a] p-3 shadow-2xl shadow-black/40 ${className ?? ""}`}
    >
      <div className="relative overflow-hidden rounded-[33px]">
        {children}
        <div className="absolute left-1/2 top-2 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-[#0a0a0a]" />
      </div>
    </div>
  );
}
