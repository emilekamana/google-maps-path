import Map from "@/components/map";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center ">
      <p>Home</p>
      <Map
        start={{ lat: -1.939826787816454, lng: 30.0445426438232 }}
        stops={[
          { lat: -1.9355377074007851, lng: 30.060163829002217 },
          { lat: -1.9358808342336546, lng: 30.08024820994666 },
          { lat: -1.9489196023037583, lng: 30.092607828989397 },
          { lat: -1.9592132952818164, lng: 30.106684061788073 },
          { lat: -1.9487480402200394, lng: 30.126596781356923 },
        ]}
        end={{ lat: -1.9365670876910166, lng: 30.13020167024439 }}
      />
    </main>
  );
}
