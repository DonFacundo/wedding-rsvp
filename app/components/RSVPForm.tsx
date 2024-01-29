"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TConductorInstance } from "react-canvas-confetti/dist/types";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

import { updateRSVP } from "@/libs/firebase";

const RSVPForm = ({
  attendeeDetails,
  slug,
}: {
  attendeeDetails: any;
  slug: string;
}) => {
  const router = useRouter();
  const [showPartialYesForm, setShowPartialYesForm] = useState(false);
  const [updateRSVPForm, setUpdateShowRSVPForm] = useState(false);
  const [partialSelections, setPartialSelections] = useState<any>([]);
  const [conductor, setConductor] = useState<TConductorInstance>();

  const handleUpdateRSVP = async (type: string) => {
    switch (type) {
      case "yesToAll":
        attendeeDetails.attendees = attendeeDetails.attendees.map(
          (attendee: any) => ({ ...attendee, rsvp: true })
        );
        await updateRSVP("rsvp", slug, attendeeDetails);
        conductor?.shoot();
        setUpdateShowRSVPForm(false);
        router.refresh();
        break;
      case "noToAll":
        attendeeDetails.attendees = attendeeDetails.attendees.map(
          (attendee: any) => ({ ...attendee, rsvp: false })
        );
        await updateRSVP("rsvp", slug, attendeeDetails);
        setUpdateShowRSVPForm(false);
        router.refresh();
        break;
      case "partialYes":
        attendeeDetails.attendees = attendeeDetails.attendees.map(
          (attendee: any) => ({
            ...attendee,
            rsvp: partialSelections.includes(attendee.firstName),
          })
        );
        await updateRSVP("rsvp", slug, attendeeDetails);
        conductor?.shoot();
        setUpdateShowRSVPForm(false);
        setShowPartialYesForm(false);
        router.refresh();
        break;

      default:
        break;
    }
  };

  const handlePartialYesCheckbox = (e: any, attendee: any) => {
    e.target.checked
      ? setPartialSelections([...partialSelections, attendee.firstName])
      : setPartialSelections(
          partialSelections.filter((ps: any) => ps !== attendee.firstName)
        );
  };

  const onInitCanvassConfetti = ({
    conductor,
  }: {
    conductor: TConductorInstance;
  }) => {
    setConductor(conductor);
  };

  const confirmedAttendees = () =>
    attendeeDetails.attendees
      .filter((attendees: any) => attendees.rsvp)
      .map((attendees: any) => attendees.firstName);

  return (
    <AnimatePresence key="rsvp-ap">
      <Fireworks
        onInit={onInitCanvassConfetti}
        decorateOptions={(options: any) => ({
          ...options,
          colors: ["#59362f", "#ddbaa2", "#B16B5E"],
          particleCount: 700,
        })}
      />
      <motion.div
        key="rsvp-form1"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        exit={{ opacity: 0, x: 20 }}
        className="bg-secondary h-fit bg-opacity-60 p-4 sm:p-8 rounded-lg md:mr-20 mx-6 max-w-xl w-full md:w-2/5 md:order-2 md:ml-auto border-none drop-shadow-2xl"
      >
        {attendeeDetails.lastUpdated && !updateRSVPForm ? (
          <>
            <article className="prose text-center">
              <h1 className="text-primary font-bold text-4xl mb-4">R.S.V.P.</h1>
              <p className="text-primary my-0 text-sm">
                {confirmedAttendees().length > 0
                  ? "We're glad you could make it."
                  : "Sucks you can't make it."}
              </p>
              <h2 className="text-primary my-0 text-md">
                {confirmedAttendees().length > 0
                  ? "We'll See you there "
                  : `But if you ever change you mind${
                      attendeeDetails.attendees.length > 1 ? "s" : ""
                    } `}
                <br />
                <span className="font-poiretone">{attendeeDetails.name}</span>
              </h2>
              {confirmedAttendees().length > 0 ? (
                <p className="text-xs text-primary">
                  (
                  {confirmedAttendees().map(
                    (attendee: string, index: number) => (
                      <span key={attendee}>
                        {confirmedAttendees().length > 1 &&
                        index === confirmedAttendees().length - 1
                          ? " & " + attendee
                          : `${index === 0 ? "" : ", "}` + attendee}
                      </span>
                    )
                  )}
                  )
                </p>
              ) : (
                <></>
              )}
              <p className="text-primary mt-10 text-sm">
                {confirmedAttendees().length > 0 ? (
                  <span>
                    If you want to make changes to your response{" "}
                    <a
                      className="cursor-pointer"
                      onClick={() => setUpdateShowRSVPForm(true)}
                    >
                      click here
                    </a>
                  </span>
                ) : (
                  <span>
                    You can always{" "}
                    <a
                      className="cursor-pointer"
                      onClick={() => setUpdateShowRSVPForm(true)}
                    >
                      click here
                    </a>{" "}
                    to update the R.S.V.P. form.
                  </span>
                )}
              </p>
            </article>
          </>
        ) : (
          <>
            <article className="prose text-center">
              <h1 className="text-primary font-bold text-4xl mb-4">R.S.V.P.</h1>
              <h2 className="text-primary my-0 text-md">
                We would love for you to come,
                <br />
                <span className="font-poiretone">{attendeeDetails.name}</span>
                <span>!</span>
              </h2>
              <p className="text-xs text-primary">
                (
                {attendeeDetails.attendees.map(
                  (attendee: any, index: number) => (
                    <span key={attendee.firstName}>
                      {attendeeDetails.attendees.length > 1 &&
                      index === attendeeDetails.attendees.length - 1
                        ? " & " + attendee.firstName
                        : `${index === 0 ? "" : ", "}` + attendee.firstName}
                    </span>
                  )
                )}
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
                className="mx-auto sm:my-2 md:my-3"
                src={"/assets/img/flower-divider.png"}
                alt="flower divider"
                width={75}
                height={25}
              />
            </motion.div>
            <article className="prose text-center">
              <p className="text-primary text-md mb-0 font-semibold">
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
                            checked={partialSelections.includes(
                              attendee.firstName
                            )}
                            onChange={(e) =>
                              handlePartialYesCheckbox(e, attendee)
                            }
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
                        onClick={() => handleUpdateRSVP("partialYes")}
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
                        <button
                          className="btn btn-primary btn-outline btn-sm w-36 float-end"
                          onClick={() => handleUpdateRSVP("yesToAll")}
                        >
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
                        <button
                          className="btn btn-primary btn-sm btn-outline w-36 float-start"
                          onClick={() => handleUpdateRSVP("noToAll")}
                        >
                          No
                        </button>
                      </motion.div>
                    </div>
                    {attendeeDetails.attendees.length > 1 ? (
                      <>
                        <div className="flex justify-center">
                          <div className="divider divider-primary text-primary my-2 w-3/4">
                            <em>OR</em>
                          </div>
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
                      </>
                    ) : (
                      attendeeDetails.type === "single" && (
                        <>
                          <div className="flex justify-center">
                            <div className="divider divider-primary text-primary my-2 w-3/4">
                              <em>AND</em>
                            </div>
                          </div>
                          <p className="text-primary text-md my-0  font-semibold">
                            Will you be bringing a +1?
                          </p>
                          <div className="grid grid-cols-2 gap-4 mb-2">
                            <motion.div
                              className="col-span-1"
                              key="plus1-yes"
                              whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.25 },
                              }}
                            >
                              <button className="btn btn-primary btn-outline btn-sm w-36 float-end">
                                Yes
                              </button>
                            </motion.div>
                            <motion.div
                              key="plus1-no"
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
                        </>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default RSVPForm;
