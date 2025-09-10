export default function Loading() {
  return (
    <div className="flex-1 py-8 lg:py-12">
      {/* Header Skeleton */}
      <header className="mb-12 lg:mb-16">
        <div className="mb-6">
          <div className="h-4 w-24 bg-gray-200 animate-pulse mb-2 rounded"></div>
          <div className="h-12 lg:h-16 w-3/4 bg-gray-200 animate-pulse mb-4 rounded"></div>
          <div className="h-6 w-1/2 bg-gray-200 animate-pulse mb-6 rounded"></div>
          <div className="space-y-2 max-w-3xl">
            <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-4/5 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <div className="h-6 w-16 bg-gray-200 animate-pulse rounded-full"></div>
          <div className="h-6 w-20 bg-gray-200 animate-pulse rounded-full"></div>
          <div className="h-6 w-14 bg-gray-200 animate-pulse rounded-full"></div>
        </div>
      </header>

      {/* Content Skeleton */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20">
        {/* Left Column - Text Skeleton */}
        <div className="space-y-16 lg:space-y-24">
          {[1, 2, 3].map((index) => (
            <div key={index} className="min-h-[60vh] flex items-center">
              <div className="w-full space-y-4">
                <div className="h-6 w-3/4 bg-gray-200 animate-pulse rounded"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
                  <div className="h-4 w-11/12 bg-gray-200 animate-pulse rounded"></div>
                  <div className="h-4 w-5/6 bg-gray-200 animate-pulse rounded"></div>
                  <div className="h-4 w-4/5 bg-gray-200 animate-pulse rounded"></div>
                </div>
                <div className="space-y-2 mt-6">
                  <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
                  <div className="h-4 w-10/12 bg-gray-200 animate-pulse rounded"></div>
                  <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Image Skeleton */}
        <div className="hidden lg:block relative">
          <div className="sticky top-8 h-[80vh]">
            <div className="relative h-full w-full max-w-md mx-auto bg-gray-200 animate-pulse rounded-lg shadow-2xl"></div>
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <footer className="mt-16 lg:mt-24 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="h-4 w-32 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-4 w-28 bg-gray-200 animate-pulse rounded"></div>
        </div>
      </footer>
    </div>
  );
}
