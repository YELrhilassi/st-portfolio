"use client";
import { cn } from "@/components/utils/cn";
import { useEffect, useRef, useState } from "react";
import { PeelWrapper, PeelTop, PeelBack } from "react-peel";
import {
  LargeStaticPeel,
  MediumStaticPeel,
  SmallStaticPeel,
} from "./static-tab";

type TFlyerTab = {
  handle: string;
  icon?: React.JSX.Element;
  isStatic?: boolean;
};

export default function FlayerTab({ handle, icon, isStatic }: TFlyerTab) {
  const [isOpened, setIsOpened] = useState(false);

  //
  //
  const isPeelOpenedRef = useRef<boolean>(false);
  const peelWrapperRef = useRef<any>(null);
  const backPeelRef = useRef<HTMLDivElement>(null);
  //
  //
  const handlePeelDrag = (_: any, __: number, ___: number, p: any) => {
    const amount = p.getAmountClipped();

    if (!isPeelOpenedRef.current && amount > 0.8) {
      isPeelOpenedRef.current = true;

      p.removeEvents?.();
      const el = peelWrapperRef.current.el as HTMLDivElement;
      if (el) {
        el.style.transition = "opacity 0.2s ease";
        el.style.opacity = "0";
        el.style.cursor = "pointer";
      }

      setIsOpened(true);
      setTimeout(() => {
        const socialLink = "https://twitter.com/username";
        window.open(socialLink, "_blank");
      }, 1000);
    }
  };
  return (
    <>
      <PeelWrapper
        ref={peelWrapperRef}
        width={100}
        height={260}
        options={{
          backShadowAlpha: 0.1,
          bottomShadowDarkAlpha: 0.1,
          bottomShadowLightAlpha: 0,
        }}
        corner="BOTTOM_LEFT"
        constraints={["TOP_RIGHT", { x: 50, y: 0 }]}
        peelPosition={{ x: 7, y: 230 }}
        handleDrag={handlePeelDrag}
        drag
      >
        <PeelTop
          className="shadow-lg p-3 pt-4 bg-red-100 bg-paper bg-blend-multiply hover:cursor-grab"
        >
          <p className="flex flex-col leading-5 tracking-wider text-gray-700 font-bold uppercase">
            <span>Also</span>
            <span>Find me</span>
            <span>At:</span>
          </p>
          <div
            className={`flex flex-col items-center justify-end gap-12 text-gray-700 w-full h-40 `}
          >
            <div className="text-lg font-bold -rotate-90">{handle}</div>
            <div className="text-gray-700">{icon}</div>
          </div>
        </PeelTop>
        <PeelBack
          ref={backPeelRef}
          className={cn("relative bg-pink-100 hover:cursor-grab")}
        />
      </PeelWrapper>
      {isOpened ? <SmallStaticPeel /> : null}
    </>
  );
}
