import Map from "@/components/map";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center ">
      <p>Home</p>
      <Map />
    </main>
  );
}
