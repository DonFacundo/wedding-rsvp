"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
const VenuePage = () => {
  return (
    <AnimatePresence key="venue-page">
      <div className="h-fit w-full flex flex-col justify-center items-center bg-secondary pt-48 pb-32">
        <motion.div
          key="settlers-logo"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ ease: "easeInOut", duration: 2 }}
        >
          <Image
            src="/assets/img/settlers-logo.png"
            alt="settlers-logo"
            width={150}
            height={150}
            className="mb-4 w-full h-full"
          />
        </motion.div>
        <article className="prose text-center">
          <motion.div
            key="settlers-logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <h1 className="text-2xl text-primary mb-0">
              Settlers Country Manor
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
              className="mx-auto my-1 w-full h-full"
              src={"/assets/img/flower-divider.png"}
              alt="flower divider"
              width={75}
              height={25}
            />
          </motion.div>
          <motion.div
            key="street-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
          >
            <p className="text-base text-primary my-1">
              <em>81 Waimauku Station Road</em>
            </p>
          </motion.div>

          <motion.div
            key="street-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
          >
            <p className="text-base text-primary my-1">
              <em>Waimauku 0812</em>
            </p>
          </motion.div>
        </article>
      </div>

      <motion.div
        key="carousel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.25, delay: 0.75 }}
      >
        <div className="carousel carousel-center -mb-10">
          <div className="carousel-item mt-2 w-fit h-96">
            <Image
              src="/assets/img/settlers-1.jpg"
              alt="settlers-1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-full h-full"
            />
          </div>
          <div className="carousel-item mt-2 w-fit h-96">
            <Image
              src="/assets/img/settlers-2.jpg"
              alt="settlers-2"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-full h-full"
            />
          </div>
          <div className="carousel-item mt-2 w-fit h-96">
            <Image
              src="/assets/img/settlers-3.jpg"
              alt="settlers-3"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-full h-full"
            />
          </div>
          <div className="carousel-item mt-2 w-fit h-96">
            <Image
              src="/assets/img/settlers-4.jpg"
              alt="settlers-4"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-full h-full"
            />
          </div>
          <div className="carousel-item mt-2 w-fit h-96">
            <Image
              src="/assets/img/settlers-5.jpg"
              alt="settlers-5"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-full h-full"
            />
          </div>
          <div className="carousel-item mt-2 w-fit h-96">
            <Image
              src="/assets/img/settlers-1.jpg"
              alt="settlers-1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-full h-full"
            />
          </div>
          <div className="carousel-item mt-2 w-fit h-96">
            <Image
              src="/assets/img/settlers-2.jpg"
              alt="settlers-2"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-full h-full"
            />
          </div>
          <div className="carousel-item mt-2 w-fit h-96">
            <Image
              src="/assets/img/settlers-3.jpg"
              alt="settlers-3"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-full h-full"
            />
          </div>
          <div className="carousel-item mt-2 w-fit h-96">
            <Image
              src="/assets/img/settlers-4.jpg"
              alt="settlers-4"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-full h-full"
            />
          </div>
          <div className="carousel-item mt-2 w-fit h-96">
            <Image
              src="/assets/img/settlers-5.jpg"
              alt="settlers-5"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-full h-full"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        key="g-map"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51140.090244166844!2d174.45070753331203!3d-36.764434297645586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d13b837e4d0eb%3A0x7024081373c36d80!2sSettlers%20Country%20Manor%20-%20Auckland%20Wedding%20Venue%2C%20Restaurant%2C%20Auckland%20venue%20hire!5e0!3m2!1sen!2sus!4v1706479782966!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{
            border: 0,
          }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </AnimatePresence>
  );
};

export default VenuePage;
