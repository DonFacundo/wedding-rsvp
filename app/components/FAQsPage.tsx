"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FAQsPage = () => {
  return (
    <motion.div
      key="attire"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="min-h-screen w-full flex flex-col items-center bg-secondary bg-autumn-leaves-alt bg-center bg-no-repeat bg-cover py-16 px-8"
    >
      <article className="prose w-full mt-8">
        <motion.div
          key="faq-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <h1 className="text-4xl text-primary text-center">FAQs</h1>
        </motion.div>
        <motion.div
          key="pre-wed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.25 }}
        >
          <h2 className="text-xl text-primary font-bold">Pre-Wedding</h2>
        </motion.div>
        <motion.div
          key="pre-wed-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
        >
          <p className="text-lg text-primary font-semibold mb-2">
            When is the RSVP Deadline?
          </p>
          <p className="text-base text-primary font-poiretone mt-0">
            The RSVP deadline is on the 25th of February 2024.
          </p>
        </motion.div>
        <motion.div
          key="flower-divider-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
        >
          <Image
            className="mx-auto my-4 w-fit h-fit"
            src={"/assets/img/flower-divider.png"}
            alt="flower divider"
            width={75}
            height={50}
          />
        </motion.div>
        <motion.div
          key="cerem"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.75 }}
        >
          <h2 className="text-xl text-primary font-bold mt-0">
            The Ceremony and Reception
          </h2>
        </motion.div>
        <motion.div
          key="cerem-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
        >
          <p className="text-lg text-primary font-semibold mb-2">
            What time should I arrive?
          </p>
          <p className="text-base text-primary font-poiretone mt-0">
            Help us get the party started as scheduled! We recommend that you
            arrive <strong>half an hour</strong> before the start of the
            ceremony to ensure everyone is seated on time.
          </p>
        </motion.div>
        <motion.div
          key="cerem-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 1.25 }}
        >
          <p className="text-lg text-primary font-semibold mb-2">
            Where should guests park? Is parking free?
          </p>
          <p className="text-base text-primary font-poiretone mt-0">
            Guests can park at the parking area adjacent to Settlers Country
            Manor.
          </p>
        </motion.div>
        <motion.div
          key="cerem-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 1.5 }}
        >
          <p className="text-lg text-primary font-semibold mb-2">
            Will the ceremony be indoors or outdoors?
          </p>
          <p className="text-base text-primary font-poiretone mt-0">
            If weather permits, our ceremony will be held in Settler’s beautiful
            outdoor garden. We recommend bringing a shawl or light jacket in
            case of cooler temperatures! We want everyone to be comfortable and
            enjoy the celebration to the fullest.
          </p>
        </motion.div>
        <motion.div
          key="cerem-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 1.75 }}
        >
          <p className="text-lg text-primary font-semibold mb-2">
            Can I take pictures during the ceremony to post on social media?
          </p>
          <p className="text-base text-primary font-poiretone mt-0">
            We&apos;re so glad you&apos;re as excited as we are about our
            special day! We kindly ask for an unplugged ceremony to fully
            preserve the solemnity of the event. We encourage everyone to be
            present in the moment as we have a dedicated photographer to capture
            our magical moments in photos.
            <br />
            <br />
            Guests are welcome to take pictures once the cocktail hour begins.
          </p>
        </motion.div>
        <motion.div
          key="cerem-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 2 }}
        >
          <p className="text-lg text-primary font-semibold mb-2">
            What happens after the ceremony?
          </p>
          <p className="text-base text-primary font-poiretone mt-0">
            We will be serving light passed hors d&apos;oeuvres after the
            ceremony, preceding our formal transition to the wedding reception.
          </p>
        </motion.div>
        <motion.div
          key="cerem-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 2.25 }}
        >
          <p className="text-lg text-primary font-semibold mb-2">
            Will there be an open bar?
          </p>
          <p className="text-base text-primary font-poiretone mt-0">
            Yes. We are thrilled to have a 6-hour open bar for you. While
            cocktails are not included, we invite you to toast to our nuptials
            with a curated selection of wine and beers.
          </p>
        </motion.div>
        <motion.div
          key="cerem-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 2.5 }}
        >
          <p className="text-lg text-primary font-semibold mb-2">
            What can we bring you as a wedding gift?
          </p>
          <p className="text-base text-primary font-poiretone mt-0">
            You sharing this special day with us is the best gift we could ask
            for, but if you would like to give us a gift, a contribution to our
            future plans through our wishing well would be sincerely appreciated
            as we embark on this new chapter together. Your love and support
            means the world to us.
          </p>
        </motion.div>
      </article>
    </motion.div>
  );
};

export default FAQsPage;
