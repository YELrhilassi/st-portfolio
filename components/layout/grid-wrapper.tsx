export default function GridWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="grid grid-cols-6 gap-4">{children}</div>;
}
