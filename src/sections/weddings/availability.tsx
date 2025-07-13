import { Button } from "@/components/ui/button";
import { ArrowDown, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export function AvailabilityBooking() {
  return (
    <section className="py-20 bg-light-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Availability & Booking
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Check our available dates and secure your perfect wedding day
            </p>
          </div>

          <Card className="p-8 md:p-12">
            {/* Booking Information */}
            <h3 className="text-2xl font-serif text-foreground mb-6">
              Booking Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/20 p-2 rounded-full">
                  <Clock className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Booking Timeline
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We recommend booking 6-12 months in advance for your
                    preferred date
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary/20 p-2 rounded-full">
                  <Users className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Guest Capacity
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Flexible seating for 20-150 guests depending on your
                    celebration style
                  </p>
                </div>
              </div>

              <div className="bg-secondary/20 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-3">
                  Next Steps:
                </h4>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• Schedule a venue tour and tasting</li>
                  <li>• Discuss your vision with our wedding coordinator</li>
                  <li>• Customize your package and menu</li>
                  <li>• Secure your date with a deposit</li>
                </ul>
              </div>
              <Button asChild>
                <Link href={"#inquire-now"}>
                  Inquire Now
                  <ArrowDown />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
