import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const whatsappNumber = "254717448835";
  const whatsappMessage = encodeURIComponent(
    "Hey I checked out the homepage demo and I like it. Can we start working on the other pages"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <Card className="shadow-lg bg-light-black borderborder-gray-700 max-w-md w-full py-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white font-serif text-center">
            Page Not Found
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <p className="text-gray-300 text-sm leading-relaxed">
            Oops! This page doesn&apos;t exist yet. This is just a homepage
            demo. To get all the pages completed, please contact the developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">Back to Homepage</Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact developer via WhatsApp"
              >
                <span>Contact Developer</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
