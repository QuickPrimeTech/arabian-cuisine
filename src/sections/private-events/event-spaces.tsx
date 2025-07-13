import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Heart, Users } from "lucide-react";
import { Section, Header, Title, SubTitle } from "@/components/typography";

const EventSpaces = () => {
  return (
    <Section>
      <Header>
        <Title>Events We Host</Title>
        <SubTitle>From intimate gatherings to grand celebrations</SubTitle>
      </Header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Corporate Events</h3>
            <p className="text-muted-foreground mb-4">
              Impress clients and colleagues with business lunches, team
              dinners, or holiday parties in our sophisticated spaces.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Weddings & Celebrations
            </h3>
            <p className="text-muted-foreground mb-4">
              Create lasting memories with rehearsal dinners, intimate wedding
              receptions, or anniversary celebrations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Social Gatherings</h3>
            <p className="text-muted-foreground mb-4">
              Celebrate birthdays, graduations, or simply gather with friends
              and family in our welcoming atmosphere.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default EventSpaces;
