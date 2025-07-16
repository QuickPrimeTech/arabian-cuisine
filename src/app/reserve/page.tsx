import { ReservationMultiStepForm } from "@/sections/reserve/form";
import { H1, Header, SubTitle } from "@/components/typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Mail, Phone, Users } from "lucide-react";
const statsData = [
  {
    icon: Calendar,
    value: "7",
    label: "Days a Week",
  },
  {
    icon: Clock,
    value: "6",
    label: "Hours Daily",
  },
  {
    icon: Users,
    value: "120",
    label: "Seat Capacity",
  },
];

const contactData = [
  {
    icon: Phone,
    label: "Phone",
    value: "0722 720697",
  },
  {
    icon: Mail,
    label: "Email",
    value: "reservations@restaurant.com",
  },
];

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
                {contactData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="rounded-full p-2 bg-secondary/20 text-secondary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">{item.label}</p>
                        <p>{item.value}</p>
                      </div>
                    </div>
                  );
                })}
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
              {statsData.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="p-4 flex flex-col items-center">
                    <div className="rounded-full p-3 bg-secondary/20 text-secondary mb-2 w-fit">
                      <Icon className="size-6 mx-auto" />
                    </div>
                    <p className="font-bold">{stat.value}</p>
                    <p className="text-sm">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Footer Callout */}
        <div className="py-8">
          <div className="container mx-auto px-4 text-center">
            <p>
              For immediate assistance or same-day reservations, please call us
              directly at <span className="font-semibold">0722 720697</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
