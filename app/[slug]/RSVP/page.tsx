import Image from "next/image";
import { getAttendeeDetails } from "@/libs/firebase";

import Navbar from "../../components/Navbar";
import RSVPpage from "@/app/components/RSVPpage";

const getAttendeeData = async (slug: string) => {
  const data = await getAttendeeDetails("rsvp", slug).then((res) => res);
  return data.result;
};

export default async function RSVP({ params }: { params: any }) {
  const { slug } = params;

  const attendeeDetails = await getAttendeeData(slug);

  return (
    <main className="justify-between font-playfair">
      <Navbar slug={slug} />
      <RSVPpage attendeeDetails={attendeeDetails} slug={slug} />
    </main>
  );
}
