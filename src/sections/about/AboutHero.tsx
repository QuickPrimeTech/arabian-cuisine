export default function AboutHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-display">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Three decades of culinary excellence, passionate craftsmanship, and
            unforgettable dining experiences in the heart of the city.
          </p>
        </div>
      </div>
    </section>
  );
}
