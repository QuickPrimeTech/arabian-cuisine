import { ReservationMultiStepForm } from "@/sections/reserve/form";
import ReservationPage from "./reservation-page";
import { H1, Header, SubTitle } from "@/components/typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Mail, Phone, Users } from "lucide-react";

export default function Page() {
  return (
    <div className="section">
      <div className="h-96 flex justify-center items-center bg-background">
        <Header>
          <H1 id="menu-header" className="text-foreground">
            Make a Reservation
          </H1>
          <SubTitle>
            Reserve your table for an unforgettable dining experience
          </SubTitle>
        </Header>
      </div>
      <div className="min-h-screen">
        <div className="w-full grid md:grid-cols-2 gap-12">
          <ReservationMultiStepForm />
          {/* Sidebar Info */}
          <div className="space-y-8">
            <Card className="py-6">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>reservations@restaurant.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="py-6">
              <CardHeader>
                <CardTitle className="text-xl">Hours & Policies</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Operating Hours</h4>
                  <div className="space-y-1 text-sm">
                    <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                    <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                    <p>Sunday: 4:00 PM - 9:00 PM</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Reservation Policy</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Reservations recommended</li>
                    <li>• 24-hour cancellation policy</li>
                    <li>• Large parties (8+) require deposit</li>
                    <li>• 15-minute grace period</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">7</p>
                <p className="text-sm">Days a Week</p>
              </div>
              <div className="p-4 text-center">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">6</p>
                <p className="text-sm">Hours Daily</p>
              </div>
              <div className="p-4 text-center">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">120</p>
                <p className="text-sm">Seat Capacity</p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Callout */}
        <div className="py-8">
          <div className="container mx-auto px-4 text-center">
            <p>
              For immediate assistance or same-day reservations, please call us
              directly at <span className="font-semibold">(555) 123-4567</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
