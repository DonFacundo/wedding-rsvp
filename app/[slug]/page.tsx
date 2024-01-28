import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getAttendeeDetails } from "@/libs/firebase";

import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";

export default async function Home({ params }: { params: any }) {
  const { slug } = params;

  return (
    <main className="justify-between font-playfair">
      <Navbar slug={slug} />
      <Homepage />
    </main>
  );
}
