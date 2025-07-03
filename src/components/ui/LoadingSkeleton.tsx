interface LoadingSkeletonProps {
  type: "menu-highlights" | "testimonials" | "instagram" | "default";
}

export default function LoadingSkeleton({ type }: LoadingSkeletonProps) {
  if (type === "menu-highlights") {
    return (
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="skeleton-title mx-auto mb-6" />
            <div className="skeleton-text max-w-3xl mx-auto" />
            <div className="skeleton-text max-w-2xl mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <div className="skeleton-image aspect-[4/3]" />
                <div className="skeleton-title" />
                <div className="skeleton-text" />
                <div className="skeleton-text w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (type === "testimonials") {
    return (
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-custom">
          <div className="skeleton-title mx-auto mb-12" />
          <div className="max-w-3xl mx-auto">
            <div className="skeleton-card" />
          </div>
        </div>
      </section>
    );
  }

  if (type === "instagram") {
    return (
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-custom">
          <div className="skeleton-title mx-auto mb-8" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="skeleton aspect-square" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="section-padding">
      <div className="container-custom space-y-4">
        <div className="skeleton-title" />
        <div className="skeleton-text" />
        <div className="skeleton-text w-3/4" />
      </div>
    </div>
  );
}
