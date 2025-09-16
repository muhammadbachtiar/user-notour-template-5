export default function StaticPageSkeleton() {
  return (
    <div className="container mx-auto px-4 flex justify-between mb-10 mt-10">
      <div className="container mx-auto px-4 py-8 max-w-8xl">
        <div className="box-border flex flex-wrap mx-auto justify-between gap-4">
          {/* Konten Utama */}
          <div className="w-full md:w-1.5/5 lg:w-3/5 space-y-4">
            <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
          </div>

          {/* ArtikelPopuler Placeholder */}
          <div className="w-full md:w-1/5 space-y-2">
            <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
          </div>

          {/* ArtikelIklan Placeholder */}
          <div className="w-full md:w-1/5 space-y-2">
            <div className="h-32 bg-gray-300 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
