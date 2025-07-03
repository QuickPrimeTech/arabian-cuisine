export default function MenuHero() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-display">Our Menu</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Discover our carefully crafted dishes made with the finest
            ingredients and prepared with passion by our expert chefs.
          </p>
        </div>
      </div>
    </section>
  );
}
