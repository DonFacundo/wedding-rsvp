import Navbar from "@/app/components/Navbar";
import AttirePage from "@/app/components/AttirePage";

export default async function Attire({ params }: { params: any }) {
  const { slug } = params;

  return (
    <main className="justify-between font-playfair">
      <Navbar slug={slug} />
      <AttirePage />
    </main>
  );
}
