import { cn } from "../utils/cn";

type TGridWrapper = {
  children: React.ReactNode;
  className?: React.ComponentProps<"div">["className"];
};

export default function GridWrapper({
  children,
  className: clx,
}: TGridWrapper) {
  return <div className={cn("grid grid-cols-6 gap-0", clx)}>{children}</div>;
}
