"use client";

import { useState, useEffect } from "react";
import RSVPForm from "./RSVPForm";

const RSVPpage = ({ attendeeDetails }: { attendeeDetails: any }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [bg, setBg] = useState(
    width < 426
      ? `/assets/img/weddingrsvp1-mob.JPG`
      : `/assets/img/weddingrsvp1.JPG`
  );

  useEffect(() => {
    const bgChange = setInterval(() => {
      if (
        bg === "/assets/img/weddingrsvp1.JPG" ||
        "/assets/img/weddingrsvp1-mob.JPG"
      )
        setBg(
          width < 426
            ? `/assets/img/weddingrsvp2-mob.JPG`
            : `/assets/img/weddingrsvp2.JPG`
        );
      else
        setBg(
          width < 426
            ? `/assets/img/weddingrsvp1-mob.JPG`
            : `/assets/img/weddingrsvp1.JPG`
        );
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
      <RSVPForm attendeeDetails={attendeeDetails} />
    </div>
  );
};

export default RSVPpage;
