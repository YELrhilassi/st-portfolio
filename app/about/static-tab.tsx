export function SmallStaticPeel() {
  return (
    <div className="absolute top-0 h-[30] w-[100] bg-[url(/paper_fibers.png)] bg-blend-multiply mask-[url(/path16.svg)] mask-no-repeat mask-cover">
      <div className="w-full h-[70%] bg-pink-200 bg-[url(/paper_fibers.png)] bg-blend-multiply mask-[url(/path16.svg)] mask-no-repeat mask-cover " />
    </div>
  );
}

export function MediumStaticPeel({
  handle,
  icon,
}: {
  handle: string;
  icon?: React.JSX.Element;
}) {
  return (
    <div className="absolute top-0 h-[163] w-[100] bg-[url(/paper_fibers.png)] bg-blend-multiply mask-[url(/path18-back.svg)] mask-no-repeat">
      <div className="w-full h-[160] shadow-lg p-3 pt-4 bg-pink-200 bg-[url(/paper_fibers.png)] bg-blend-multiply mask-[url(/path18.svg)] mask-no-repeat">
        <p className="flex flex-col leading-5 tracking-wider text-gray-700 font-bold uppercase">
          <span>Also</span>
          <span>Find me</span>
          <span>At:</span>
        </p>
        <div
          className={`flex flex-col items-center justify-end gap-12 text-gray-700 w-full h-40`}
        >
          <div className="text-lg font-bold -rotate-90">{handle}</div>
        </div>
      </div>
    </div>
  );
}

export function LargeStaticPeel({
  handle,
  icon,
}: {
  handle: string;
  icon?: React.JSX.Element;
}) {
  return (
    <div className="absolute top-0 h-[267] w-[100] bg-[url(/paper_fibers.png)] bg-blend-multiply mask-[url(/path17-back.svg)] mask-no-repeat">
      <div className="w-full h-[262] shadow-lg p-3 pt-4 bg-pink-200 bg-[url(/paper_fibers.png)] bg-blend-multiply mask-[url(/path17.svg)] mask-no-repeat">
        <p className="flex flex-col leading-5 tracking-wider text-gray-700 font-bold uppercase">
          <span>Also</span>
          <span>Find me</span>
          <span>At:</span>
        </p>
        <div
          className={`flex flex-col items-center justify-end gap-12
              text-gray-700
              w-full h-40
              `}
        >
          <div className="text-lg font-bold -rotate-90">{handle}</div>
          <div className="text-gray-700">{icon}</div>
        </div>
      </div>
    </div>
  );
}
