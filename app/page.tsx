"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <main className="justify-between font-playfair">
      <div className="text-center w-full bg-[url('/assets/img/flower-border3.png')] bg-center bg-cover bg-no-repeat py-28">
        <motion.div
          key="groom-name"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ ease: "easeInOut", duration: 0.25, delay: 0 }}
        >
          <h1 className="text-3xl md:text-5xl text-white font-light mb-2 font-poiretone">
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
          <h1 className="text-xl text-white font-light mb-2">&</h1>
        </motion.div>
        <motion.div
          key="bride-name"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ ease: "easeInOut", duration: 0.25, delay: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl text-white font-light mb-10 font-poiretone">
            ARVELYN CLAIRE T. TAMSE
          </h1>
        </motion.div>
        <motion.div
          key="flower-divider-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
        >
          <Image
            className="mx-auto mb-10"
            src={"/assets/img/flower-divider.png"}
            alt="flower divider"
            width={150}
            height={50}
          />
        </motion.div>
        <motion.div
          key="home-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ ease: "easeInOut", duration: 0.25, delay: 0.75 }}
        >
          <p className="text-lg md:text-xl text-white font-light mb-5">
            <em>Requests the honour of your presence on</em>
          </p>
        </motion.div>
        <motion.div
          key="wedding-date"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ ease: "easeInOut", duration: 0.25, delay: 1 }}
        >
          <h1 className="text-xl md:text-3xl text-white font-poiretone">
            MAY 9, 2024
          </h1>
        </motion.div>
      </div>

      <div className="w-full min-h-96 py-16 bg-secondary flex flex-col items-center text-secondary px-12">
        <motion.div
          key="welcome-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0 }}
        >
          <article className="prose text-center text-md md:text-xl">
            <p className="text-primary font-poiretone">
              To our Beloved Family and Friends,
            </p>
            <p className="text-primary font-poiretone">This is it!</p>
            <p className="text-primary font-poiretone">
              We are absolutely delighted to share with you this special chapter
              in our lives.
            </p>
            <p className="text-primary font-poiretone">
              Your presence in the celebration of our love means the world to us
              and we can’t wait for you to share in the joy and excitement of
              this magical day.
            </p>
            <p className="text-primary font-poiretone">
              Please feel free to explore the various sections of this website,
              and most importantly, save the date as we count down to the moment
              we say “I do”.
            </p>
            <p className="text-primary font-poiretone">
              Thank you for being part of our love story. We can’t wait to
              create more wonderful memories with you.
            </p>
            <p className="text-primary font-poiretone">With love,</p>
            <p className="text-primary font-poiretone">Gerald and Claire</p>
          </article>
        </motion.div>
      </div>
    </main>
  );
}
