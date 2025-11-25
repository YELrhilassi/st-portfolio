import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <h1 className="text-4xl">Instrument Serif Heading</h1>

      <p className="font-varta text-lg">Varta body text</p>
      <Link href="/about">about</Link>
    </div>
  );
}
