import { motion, useReducedMotion } from 'motion/react';

const PageSkeleton = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      role="status"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[60] overflow-y-auto bg-cream px-6"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-5">
          <div className="skeleton-shimmer h-6 w-28 rounded" />
          <div className="hidden md:flex gap-8">
            <div className="skeleton-shimmer h-4 w-12 rounded" />
            <div className="skeleton-shimmer h-4 w-12 rounded" />
            <div className="skeleton-shimmer h-4 w-16 rounded" />
            <div className="skeleton-shimmer h-4 w-12 rounded" />
          </div>
          <div className="skeleton-shimmer hidden md:block h-10 w-28 rounded-full" />
        </div>

        <div className="skeleton-shimmer grid min-h-[26rem] md:grid-cols-2 gap-10 rounded-3xl p-8 md:p-14">
          <div className="flex flex-col justify-center gap-5">
            <div className="skeleton-shimmer h-4 w-36 rounded" />
            <div className="skeleton-shimmer h-12 w-4/5 rounded" />
            <div className="skeleton-shimmer h-12 w-3/5 rounded" />
            <div className="skeleton-shimmer h-4 w-full max-w-md rounded" />
            <div className="skeleton-shimmer h-4 w-4/5 max-w-md rounded" />
            <div className="skeleton-shimmer mt-3 h-12 w-36 rounded-full" />
          </div>
          <div className="skeleton-shimmer min-h-56 rounded-2xl" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 py-16 md:py-24">
          <div className="skeleton-shimmer min-h-72 rounded-2xl" />
          <div className="flex flex-col justify-center gap-5">
            <div className="skeleton-shimmer h-4 w-24 rounded" />
            <div className="skeleton-shimmer h-9 w-full rounded" />
            <div className="skeleton-shimmer h-9 w-4/5 rounded" />
            <div className="skeleton-shimmer h-4 w-full rounded" />
            <div className="skeleton-shimmer h-4 w-5/6 rounded" />
            <div className="grid grid-cols-3 gap-4 pt-3">
              <div className="skeleton-shimmer h-20 rounded-xl" />
              <div className="skeleton-shimmer h-20 rounded-xl" />
              <div className="skeleton-shimmer h-20 rounded-xl" />
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="skeleton-shimmer mb-4 h-4 w-28 rounded" />
          <div className="skeleton-shimmer mb-8 h-9 w-3/5 rounded" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="skeleton-shimmer h-52 rounded-2xl" />
            <div className="skeleton-shimmer h-52 rounded-2xl" />
            <div className="skeleton-shimmer h-52 rounded-2xl" />
            <div className="skeleton-shimmer h-52 rounded-2xl" />
          </div>
        </div>

        <div className="py-12">
          <div className="skeleton-shimmer mb-4 h-4 w-24 rounded" />
          <div className="skeleton-shimmer mb-8 h-9 w-3/5 rounded" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="skeleton-shimmer h-72 rounded-2xl" />
            <div className="skeleton-shimmer h-72 rounded-2xl" />
          </div>
        </div>

        <div className="skeleton-shimmer my-12 h-72 rounded-3xl" />
      </div>
    </motion.div>
  );
};

export default PageSkeleton;
