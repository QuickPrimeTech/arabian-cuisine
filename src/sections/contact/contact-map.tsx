"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import Link from "next/link";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -1.300612532662261,
  lng: 36.81649406166091,
};

export default function ContactMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  return (
    <section className="section">
      <div className="text-center mb-8">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
          Find Us
        </h2>
        <p className="text-muted-foreground">
          Located in the heart of Seaside Bay with stunning ocean views
        </p>
      </div>

      <Card className="overflow-hidden shadow-lg bg-light-black border border-gray-700 h-fit">
        <CardContent className="p-0">
          <div className="">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={20}
              >
                <Marker position={center} />
              </GoogleMap>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-300">Loading map...</p>
              </div>
            )}
          </div>
          <div className="p-4">
            <Button asChild>
              <Link
                href={`https://www.google.com/maps/place/The+Arabian+Cuisine/@-1.2973776,36.7832904,14z/data=!4m10!1m2!2m1!1sarabian+cuisine+upper+hill+facebook!3m6!1s0x182f10ef5e0ff10d:0x95530e4b72df263!8m2!3d-1.3006283!4d36.8164967!15sCiNhcmFiaWFuIGN1aXNpbmUgdXBwZXIgaGlsbCBmYWNlYm9va1olIiNhcmFiaWFuIGN1aXNpbmUgdXBwZXIgaGlsbCBmYWNlYm9va5IBCnJlc3RhdXJhbnSaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTmZjazFmVDJ4M1JSQUKqAWgKDS9nLzExZHpkMjExejcQASoMIghmYWNlYm9vaygAMh4QASIaw-EhjVR28IqnG506gt9gkg_L0nuYMV_onh4yJxACIiNhcmFiaWFuIGN1aXNpbmUgdXBwZXIgaGlsbCBmYWNlYm9va-ABAPoBBQjBARAm!16s%2Fg%2F11dzd211z7?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
