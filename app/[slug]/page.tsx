import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getDaysLeftBeforeEvent } from "@/libs/firebase";

import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";

const getDaysLeft = async () => {
  const data = await getDaysLeftBeforeEvent().then((res) => res);
  return data;
};

export default async function Home({ params }: { params: any }) {
  const { slug } = params;

  const daysLeft = await getDaysLeft();

  return (
    <main className="justify-between font-playfair">
      <Navbar slug={slug} />
      <Homepage slug={slug} daysLeft={daysLeft} />
    </main>
  );
}
