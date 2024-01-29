import FAQsPage from "@/app/components/FAQsPage";
import Navbar from "@/app/components/Navbar";

export default async function FAQs({ params }: { params: any }) {
  const { slug } = params;
  return (
    <main className="justify-between font-playfair">
      <Navbar slug={slug} />
      <FAQsPage />
    </main>
  );
}
