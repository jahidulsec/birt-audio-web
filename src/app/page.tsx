import { Card, CardContainer } from "@/features/home/components/card";
import { Navbar } from "@/features/home/components/nav-bar";
import { getPlaces } from "@/features/home/db/places";
import { Place } from "@/types/places";
import React from "react";

export default async function HomePage() {
  const places = await getPlaces();

  return (
    <div className="relative">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-0 mt-5">
        <section className="text-center">
          <h3 className="">Hot Playlist</h3>
          <h3 className="font-Semibold text-2xl">This Month</h3>
        </section>

        <CardContainer className="my-6 flex flex-col gap-6">
          {places?.data &&
            places.data.map((item: Place) => (
              <Card key={item.id} place={item} />
            ))}
        </CardContainer>
      </main>
    </div>
  );
}
