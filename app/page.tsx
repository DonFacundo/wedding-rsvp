"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="justify-between font-playfair">
      <div className="text-center w-full bg-[url('/assets/img/flower-border3.png')] bg-center bg-cover bg-no-repeat py-28 h-screen flex flex-col lg:flex-row justify-center items-center">
        <motion.div
          key="groom-name"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ ease: "easeInOut", duration: 0.25, delay: 0 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.25 },
          }}
        >
          <h1 className="text-3xl md:text-5xl text-white font-light font-poiretone">
            GERALD DWYNE M. DE LEON
          </h1>
        </motion.div>
        <motion.div
          key="and"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ ease: "easeInOut", duration: 0.25, delay: 0.25 }}
        >
          <h1 className="text-xl text-white font-light my-10 mx-6">&</h1>
        </motion.div>
        <motion.div
          key="bride-name"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ ease: "easeInOut", duration: 0.25, delay: 0.5 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.25 },
          }}
        >
          <h1 className="text-3xl md:text-5xl text-white font-light font-poiretone">
            ARVELYN CLAIRE T. TAMSE
          </h1>
        </motion.div>
      </div>
    </main>
  );
}
