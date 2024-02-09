"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GiAmpleDress } from "react-icons/gi";

const AttirePage = () => {
  return (
    <motion.div
      key="attire"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="min-h-screen w-full flex flex-col items-center justify-center bg-base-100 bg-autumn-leaves-alt bg-center bg-no-repeat bg-cover py-16 px-8"
    >
      <article className="prose w-full mt-8">
        <motion.div
          key="attire-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
        >
          <h1 className="text-4xl text-secondary text-center">
            <GiAmpleDress size={55} className="mx-auto mb-4" />
            We request everyone to be in formal attire.
          </h1>
        </motion.div>
        <motion.div
          key="attire-mens"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.75 }}
        >
          <p className="text-lg text-secondary text-center font-poiretone">
            Men are highly encouraged to wear{" "}
            <strong className="text-secondary">
              <em>barong</em>
            </strong>
            .
          </p>
        </motion.div>
        <motion.div
          key="flower-divider-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
        >
          <Image
            className="mx-auto my-4 w-fit h-fit"
            src={"/assets/img/flower-divider.png"}
            alt="flower divider"
            width={50}
            height={50}
          />
        </motion.div>
        <motion.div
          key="attire-ladies"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 1.25 }}
        >
          <p className="text-lg text-secondary text-center font-poiretone">
            Ladies, we respectfully ask that attendees refrain from wearing
            black, white, cream, beige or off-white (or anything of the same
            colour).
            <br />
            We suggest opting for colours that complement the{" "}
            <strong className="text-secondary">
              <em>autumn</em>
            </strong>{" "}
            theme instead.
          </p>
        </motion.div>
        <motion.div
          key="attire-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 1.5 }}
        >
          <p className="text-lg text-secondary text-center font-poiretone">
            Your cooperation in adhering to this dress code is greatly
            appreciated.
            <br />
            <br />
            Thank you for your understanding.
          </p>
        </motion.div>
      </article>
    </motion.div>
  );
};

export default AttirePage;
