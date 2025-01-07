
export const BlogSkeleton = () => {
  return (
    <div className="p-4 border-b-2 border-slate-200 bg-slate-100 mt-1 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex gap-2 items-center">
        {/* Avatar Skeleton */}
        <div className="w-7 h-7 bg-gray-300 rounded-full"></div>
        <div className="flex flex-col gap-1">
          <div className="w-24 h-4 bg-gray-300 rounded"></div>
          <div className="w-16 h-3 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Title Skeleton */}
      <div className="mt-4 w-3/4 h-6 bg-gray-300 rounded"></div>

      {/* Content Skeleton */}
      <div className="mt-3 space-y-2">
        <div className="w-full h-4 bg-gray-200 rounded"></div>
        <div className="w-full h-4 bg-gray-200 rounded"></div>
        <div className="w-3/5 h-4 bg-gray-200 rounded"></div>
      </div>

      {/* Footer Skeleton */}
      <div className="mt-3 w-1/4 h-4 bg-gray-300 rounded"></div>
    </div>
  );
};
