"use client";
import { PeelBack, PeelTop, PeelWrapper } from "react-peel";
import { cn } from "../utils";
import { ComponentProps, useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

function getStyles(className?: string) {
  if (!className) return { width: 0, height: 0 };

  const wMatch = className.match(/w-\[(\d+)\]/);
  const hMatch = className.match(/h-\[(\d+)\]/);

  return {
    width: wMatch ? Number(wMatch[1]) : 0,
    height: hMatch ? Number(hMatch[1]) : 0,
  };
}

export function PeelButton({
  children,
  className: clx,
  href,
  external = false,
}: {
  children: React.ReactNode;
  className: ComponentProps<"button">["className"];
  href: string;
  external?: boolean;
}) {
  const router = useRouter();
  const { width, height } = getStyles(clx);
  const CLICK_THRESHOLD = 5; // px
  const [isDragging, setIsDragging] = useState(false);
  const [pointerDownPos, setPointerDownPos] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const peelRef = useRef<any>(null);
  const animRef = useRef<any>(null);
  const isPeelOpenedRef = useRef(false); // track if peel navigation has been triggered

  const peelPosition = { x: width * 0.1, y: height * 0.75 };

  const constraints: any = ["TOP_RIGHT", { x: width * 0.8, y: height * 0.1 }];
  const navigate = () => {
    if (isPeelOpenedRef.current) return;
    isPeelOpenedRef.current = true;
    if (!external) window.open(href, "_blank");
    else router.push(href);
  };

  // Auto-animation on click
  const animatePeel = () => {
    if (!peelRef.current || isDragging) return;

    const peel = peelRef.current;

    if (!animRef.current) {
      peel.t = 0;

      animRef.current = gsap.to(peel, {
        duration: 1.2,
        t: 1,
        paused: true,
        ease: "power2.out",
        onUpdate() {
          peel.setTimeAlongPath(peel.t);
        },
        onComplete() {
          navigate();
        },
      });
    }

    const tween = animRef.current;

    if (peel.t > 0.5) {
      tween.reverse();
      isPeelOpenedRef.current = false;
    } else {
      isPeelOpenedRef.current = false;
      tween.play();
    }
  };

  // Determine if pointer movement was a click
  const handlePointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!pointerDownPos) return;
    const dx = e.clientX - pointerDownPos.x;
    const dy = e.clientY - pointerDownPos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < CLICK_THRESHOLD) {
      animatePeel(); // treat as click
    }

    setPointerDownPos(null); // reset
  };

  const handlePeelDrag = (_: any, __: number, ___: number, peel: any) => {
    const amount = peel.getAmountClipped(); // 0 -> 1

    if (!isPeelOpenedRef.current && amount > 0.1) {
      setTimeout(() => navigate(), 500);
      peel.removeEvents?.();
    }
  };
  return (
    <button
      className={clx}
      onPointerDown={(e) => setPointerDownPos({ x: e.clientX, y: e.clientY })}
      onPointerUp={handlePointerUp}
    >
      <PeelWrapper
        ref={peelRef}
        drag
        handleDrag={handlePeelDrag}
        handlePress={() => {
          // Only animate if it wasn't a drag
          if (!isDragging) animatePeel();
          setIsDragging(false); // reset drag state after press
        }}
        width={width}
        height={height}
        peelPath={[peelPosition.x, peelPosition.y, width * 1.5, -height * 0.2]}
        peelPosition={peelPosition}
        constraints={constraints}
        options={{
          backShadowAlpha: 0,
          bottomShadowDarkAlpha: 0,
          bottomShadowLightAlpha: 0,
        }}
        corner="BOTTOM_LEFT"
      >
        <PeelTop
          className={cn(
            "shadow-l bg-paper bg-blend-multiply bg-white mask-[url(/ui/bg-clip2.svg)] mask-no-repeat mask-cover"
          )}
        >
          {children}
        </PeelTop>

        <PeelBack
          className={cn(
            "relative bg-white mask-[url(/ui/bg-clip2.svg)] mask-no-repeat mask-cover"
          )}
        />
      </PeelWrapper>
    </button>
  );
}
