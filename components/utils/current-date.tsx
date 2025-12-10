
type TCurrentDate = {
  className?: React.ComponentProps<"div">["className"];

};
const NOW = new Date();
const FORMATTED = NOW.toLocaleDateString("en-GB", {
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
});
const ISO = NOW.toISOString();


export default function CurrentDate({ className }: TCurrentDate) {
  return (
    <time dateTime={ISO} className={className}>
      {FORMATTED}
    </time>
  );
}
