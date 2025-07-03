export default function EventsHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=700&width=1400')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-display">Private Events</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Create unforgettable memories with personalized dining experiences.
            From intimate celebrations to grand corporate events, we provide the
            perfect setting for your special occasions.
          </p>
        </div>
      </div>
    </section>
  );
}
