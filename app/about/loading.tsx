


export default function() {
  return (
    <div className="grid grid-cols-[1fr_1fr] gap-14 min-h-screen animate-pulse">
      {/* Left side */}
      <section className="flex flex-col pt-[12vh] pr-[8vh] border-r border-primary">
        {/* Title + Description */}
        <div className="h-20 w-40 bg-gray-200 rounded" />

        {/* Image */}
        <div className="relative w-full h-[600px] mt-8">
          <div className="w-full h-full bg-gray-300 rounded-lg" />
        </div>
      </section>

      {/* Right side */}
      <section className="flex flex-col justify-start max-w-4xl gap-12 pt-[11vh]">
        {/* Footer heading */}
        <div className="h-20 w-80 bg-gray-300 rounded" />

        {/* Form + Contact Info */}
        <div className="flex flex-col gap-12 w-full">
          {/* Form skeleton */}
          <div className="flex-1 w-full pr-12">
            <div className="space-y-8 w-full">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-6 w-32 bg-gray-200 rounded" />
                  <div className="h-12 w-full bg-gray-300 rounded" />
                </div>
              ))}
              <div className="flex">
                <div className="h-14 w-1/2 bg-gray-400 rounded-full m-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
