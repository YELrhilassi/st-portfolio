import { Hero } from "@/components/project/personalization-report";





export default async function ({
  searchParams,
}: {
  searchParams: any;
}) {
  const search = await searchParams;

  return (
    <div className="">
      <Hero searchParams={search} />
      <div>
        
      </div>
    </div>
  );
}

