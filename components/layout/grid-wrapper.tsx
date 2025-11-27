import { cn } from "../utils/cn";

type TGridWrapper = React.ComponentProps<"div"> & {
  children: React.ReactNode;
};

export default function GridWrapper({
  children,
  className: clx,
  ...rest
}: TGridWrapper) {
  return (
    <div className={cn("grid grid-cols-6 gap-0 h-fit", clx)} {...rest}>
      {children}
    </div>
  );
}
