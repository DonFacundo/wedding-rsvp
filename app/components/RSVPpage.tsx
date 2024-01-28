"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const RSVPpage = ({ attendeeDetails }: { attendeeDetails: any }) => {
  const [bg, setBg] = useState(`/assets/img/weddingrsvp1.JPG`);
  const [showPartialYesForm, setShowPartialYesForm] = useState(false);

  useEffect(() => {
    const bgChange = setInterval(() => {
      if (bg === "/assets/img/weddingrsvp1.JPG")
        setBg(`/assets/img/weddingrsvp2.JPG`);
      else setBg(`/assets/img/weddingrsvp1.JPG`);
    }, 5000);
    return () => clearInterval(bgChange);
  }, [bg]);

  return (
    <div
      className={`h-screen w-full bg-secondary bg-left bg-cover bg-no-repeat flex items-center`}
      style={{
        backgroundImage: `url(${bg})`,
        transition: `background-image 1s ease-in-out`,
      }}
    >
      <AnimatePresence key="rsvp-form">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          className="bg-secondary h-fit bg-opacity-60 p-4 sm:p-8 rounded-lg md:mr-20 mx-6 w-full md:w-2/5 md:order-2 md:ml-auto border-none drop-shadow-2xl"
        >
          <article className="prose text-center">
            <h1 className="text-primary font-bold text-4xl mb-4">R.S.V.P.</h1>
            <h2 className="text-primary my-0">
              We would love for you to come,
              <br />
              <span className="font-poiretone">{attendeeDetails.name}</span>
              <span>!</span>
            </h2>
            <p className="text-xs text-primary">
              (
              {attendeeDetails.attendees.map((attendee: any, index: number) => (
                <span key={attendee.firstName}>
                  {attendeeDetails.attendees.length > 1 &&
                  index === attendeeDetails.attendees.length - 1
                    ? " & " + attendee.firstName
                    : `${index === 0 ? "" : ", "}` + attendee.firstName}
                </span>
              ))}
              )
            </p>
          </article>
          <motion.div
            key="flower-divider-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
          >
            <Image
              className="mx-auto my-3"
              src={"/assets/img/flower-divider.png"}
              alt="flower divider"
              width={75}
              height={25}
            />
          </motion.div>
          <article className="prose text-center">
            <p className="text-primary text-md mb-0">
              {showPartialYesForm
                ? "Who's going to join"
                : "Will you be joining"}{" "}
              us on our special day?
            </p>
            <AnimatePresence mode="popLayout" key="show-partial">
              {showPartialYesForm ? (
                <motion.div
                  key="sexbam"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                  className="form-control"
                >
                  {attendeeDetails.attendees.map((attendee: any) => (
                    <motion.div
                      key={attendee.firstName}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.25 },
                      }}
                      className="flex justify-center mb-2"
                    >
                      <label className="label text-primary cursor-pointer w-fit py-0">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs mr-3"
                        />
                        <span className="label-text font-poiretone text-primary font-semibold">
                          {attendee.lastName + ", " + attendee.firstName}
                        </span>
                      </label>
                    </motion.div>
                  ))}
                  <motion.div
                    key="rsvp-confirm"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.25 },
                    }}
                    className="mt-2"
                  >
                    <button
                      className="btn btn-primary btn-sm w-36"
                      onClick={() => setShowPartialYesForm(false)}
                    >
                      Confirm
                    </button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="rsvp-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <motion.div
                      className="col-span-1"
                      key="rsvp-yes"
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.25 },
                      }}
                    >
                      <button className="btn btn-primary btn-sm w-36 float-end">
                        Yes
                      </button>
                    </motion.div>
                    <motion.div
                      key="rsvp-no"
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.25 },
                      }}
                      className="col-span-1"
                    >
                      <button className="btn btn-primary btn-sm btn-outline w-36 float-start">
                        No
                      </button>
                    </motion.div>
                  </div>
                  <div className="divider divider-primary text-primary my-2">
                    <em>OR</em>
                  </div>
                  <motion.div
                    key="rsvp-partial"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.25 },
                    }}
                    className="w-full flex justify-center"
                  >
                    <button
                      className="btn btn-primary btn-sm btn-outline w-36 float-start"
                      onClick={() => setShowPartialYesForm(true)}
                    >
                      <em>Partial yes</em>
                      <ChevronDownIcon className="h-4 w-4 text-primary font-bold" />
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RSVPpage;
