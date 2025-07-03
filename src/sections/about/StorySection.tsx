import Image from "next/image";

export default function StorySection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-heading-1 mb-6">A Legacy of Excellence</h2>
              <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Founded in 1985 by Chef Antonio Bella and his wife Maria
                  Vista, Bella Vista Restaurant began as a dream to bring
                  authentic Italian cuisine and warm hospitality to the heart of
                  the city. What started as a small family restaurant has grown
                  into one of the most celebrated dining destinations in the
                  region.
                </p>
                <p>
                  Our commitment to culinary excellence has remained unwavering
                  throughout the decades. We source the finest ingredients from
                  local farms and trusted suppliers, ensuring that every dish
                  reflects our passion for quality and authenticity. Our kitchen
                  combines traditional techniques with innovative approaches,
                  creating a menu that honors our heritage while embracing
                  contemporary culinary artistry.
                </p>
                <p>
                  Today, under the leadership of Executive Chef Marco Bella,
                  Antonio's son, we continue to evolve while staying true to our
                  founding principles: exceptional food, impeccable service, and
                  an atmosphere that makes every guest feel like family.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Bella Vista Restaurant interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--secondary)] rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-center text-[var(--primary)]">
                <div className="text-3xl font-bold font-heading">38+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
