import { Hero, Process } from "@/components/project/thomas-pink";

//
//
//

export default async function ThomasPink({
  searchParams,
}: {
  searchParams: any;
}) {
  const search = await searchParams;

  return (
    <div className="">
      <Hero searchParams={search} />
      <Process />
    </div>
  );
}
