"use client";

import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Homepage = ({ slug, daysLeft }: { slug: string; daysLeft: number }) => {
  return (
    <>
      <div className="text-center w-full bg-[url('/assets/img/flower-border3.png')] bg-center bg-cover bg-no-repeat py-28">
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
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.25 },
          }}
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
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.25 },
          }}
        >
          <h1 className="text-xl md:text-3xl text-white font-poiretone">
            MAY 9, 2024
          </h1>
        </motion.div>
        <motion.div
          key="wedding-venue"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ ease: "easeInOut", duration: 0.25, delay: 1.25 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.25 },
          }}
        >
          <p className="text-sm text-white font-poiretone">
            <em>
              at Settlers Country Manor
              <br />
              81 Waimauku Station Road Waimauku 0812
            </em>
          </p>
        </motion.div>
        <motion.div
          key="wedding-rsvp"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ ease: "easeInOut", duration: 0.25, delay: 1.5 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.25 },
          }}
          className="w-full flex justify-center mt-8"
        >
          <Link href={`/${slug}/RSVP`}>
            <button className="btn btn-secondary btn-md btn-outline w-fit px-8 float-start">
              RSVP
              <ChevronDoubleRightIcon className="h-4 w-4" />
            </button>
          </Link>
        </motion.div>
        <motion.div
          key="days-left"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ ease: "easeInOut", duration: 0.25, delay: 1.75 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.25 },
          }}
          className="w-full flex justify-center mt-2"
        >
          <p className="font-poiretone text-secondary text-xs">
            {daysLeft} day{daysLeft > 1 && "s"} to go.
          </p>
        </motion.div>
      </div>
      <div className="w-full py-16 bg-secondary flex flex-col items-center text-secondary px-12">
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
    </>
  );
};

export default Homepage;
