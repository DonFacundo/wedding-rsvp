import Image from "next/image";
import Navbar from "../../components/Navbar";
import VenuePage from "@/app/components/VenuePage";

export default async function Venue({ params }: { params: any }) {
  const { slug } = params;

  return (
    <main className="justify-between font-playfair">
      <Navbar slug={slug} />
      <VenuePage />
    </main>
  );
}
