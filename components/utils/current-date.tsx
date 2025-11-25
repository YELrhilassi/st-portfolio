type TCurrentDate = {
  className?: React.ComponentProps<"div">["className"];
  date?: Date | string;
};

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default function CurrentDate({ date, className }: TCurrentDate) {
  const _date = new Date();
  const formated = dateFormatter.format(_date);

  return (
    <time dateTime={_date.toISOString()} className={className}>
      {formated}
    </time>
  );
}
