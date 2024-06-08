import { Button as AriaButton } from "@ariakit/react";
import React from "react";

type PropType = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ onClick, children }: PropType) {
  return (
    <AriaButton
      onClick={onClick}
      className="focusable clickable rounded-2xl text-slate-100 bg-slate-500 font-semibold pl-3 pr-3"
    >
      <div className="flex items-center gap-1">{children}</div>
    </AriaButton>
  );
}
