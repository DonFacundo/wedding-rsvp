"use client";

import { useState, useEffect } from "react";
import RSVPForm from "./RSVPForm";
import useWindowDimensions from "@/hooks/useWindowDimension";

const RSVPpage = ({
  attendeeDetails,
  slug,
}: {
  attendeeDetails: any;
  slug: string;
}) => {
  const { width, height } = useWindowDimensions();

  const [bg, setBg] = useState(
    width && width < 500
      ? `/assets/img/weddingrsvp1-mob.JPG`
      : `/assets/img/weddingrsvp1.JPG`
  );

  useEffect(() => {
    const bgChange = setInterval(() => {
      if (
        bg === "/assets/img/weddingrsvp1.JPG" ||
        bg === "/assets/img/weddingrsvp1-mob.JPG"
      )
        setBg(
          width && width < 500
            ? `/assets/img/weddingrsvp2-mob.JPG`
            : `/assets/img/weddingrsvp2.JPG`
        );
      else
        setBg(
          width && width < 500
            ? `/assets/img/weddingrsvp1-mob.JPG`
            : `/assets/img/weddingrsvp1.JPG`
        );
    }, 5000);
    return () => clearInterval(bgChange);
  }, [bg]);

  return (
    <>
      {width && (
        <div
          className={`h-screen w-full bg-secondary bg-left bg-cover bg-no-repeat flex items-center`}
          style={{
            backgroundImage: `url(${bg})`,
            transition: `background-image 1s ease-in-out`,
          }}
        >
          <RSVPForm attendeeDetails={attendeeDetails} slug={slug} />
        </div>
      )}
    </>
  );
};

export default RSVPpage;
