"use client";

import { useState, useEffect } from "react";
import RSVPForm from "./RSVPForm";

const RSVPpage = ({
  attendeeDetails,
  slug,
}: {
  attendeeDetails: any;
  slug: string;
}) => {
  const [bg, setBg] = useState(1);

  useEffect(() => {
    const bgChange = setInterval(() => {
      bg === 1 ? setBg(2) : setBg(1);
    }, 5000);
    return () => clearInterval(bgChange);
  }, [bg]);

  return (
    <div
      className={`h-screen w-full bg-secondary 
      ${
        bg === 1
          ? "bg-wedding-1-mob md:bg-wedding-1"
          : "bg-wedding-2-mob md:bg-wedding-2"
      }
      
      bg-left bg-cover bg-no-repeat flex items-center`}
      style={{
        transition: `background-image 1s ease-in-out`,
      }}
    >
      <RSVPForm attendeeDetails={attendeeDetails} slug={slug} />
    </div>
  );
};

export default RSVPpage;
