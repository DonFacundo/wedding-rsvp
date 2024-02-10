import { getAttendees } from "@/libs/firebase";

import Navbar from "@/app/components/Navbar";

const getAttendeeData = async (slug: string) => {
  const data = await getAttendees("rsvp").then((res) => res);
  return slug === "GertrudeArabella"
    ? data.result.sort((a, b) => {
        if (a.type < b.type) {
          return 1;
        }
        if (a.type > b.type) {
          return -1;
        }
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
    : null;
};

export default async function RSVP({ params }: { params: any }) {
  const { slug } = params;

  const attendees = await getAttendeeData(slug);
  return (
    <main className="font-playfair h-screen">
      <Navbar slug={slug} />
      <div className="pt-16 flex flex-col h-full">
        <div className="overflow-x-auto h-auto text-secondary">
          <table className="table table-zebra table-pin-rows">
            {/* head */}
            <thead>
              <tr className="text-secondary text-xl bg-base-200">
                <th>Group Name</th>
                <th>Type</th>
                <th>Invited</th>
                <th>Coming</th>
                <th>Expected Headcount</th>
                <th>Actual Headcount</th>
              </tr>
            </thead>
            <tbody className="text-base font-poiretone font-semibold">
              {/* row 1 */}

              {attendees?.map((attendee: any) => (
                <tr key={attendee.id}>
                  <td>{attendee.name}</td>
                  <td>{attendee.type}</td>
                  <td>
                    {attendee.attendees.map((att: any) => (
                      <p key={att.firstName}>{att.firstName}</p>
                    ))}
                  </td>
                  <td className="text-center">
                    {attendee.attendees
                      .filter((att: any) => att.rsvp)
                      .map((att: any) => (
                        <p key={att.firstName}>{att.firstName}</p>
                      ))}
                    {attendee.plusOne ? <p>and + 1</p> : <></>}
                  </td>
                  <td className="text-center">
                    {attendee.attendees.filter((att: any) => att.headcount)
                      .length + (attendee.allowPlusOne ? 1 : 0)}
                  </td>
                  <td className="text-center">
                    {attendee.attendees.filter(
                      (att: any) => att.rsvp && att.headcount
                    ).length + (attendee.plusOne ? 1 : 0)}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="text-center text-lg">TOTALS:</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="text-center text-lg">
                  {attendees?.reduce((acc: number, cur: any) => {
                    return (
                      acc +
                      cur.attendees.filter((att: any) => att.headcount).length +
                      (cur.allowPlusOne ? 1 : 0)
                    );
                  }, 0)}
                </td>
                <td className="text-center text-lg">
                  {attendees?.reduce((acc: number, cur: any) => {
                    return (
                      acc +
                      cur.attendees.filter(
                        (att: any) => att.headcount && att.rsvp
                      ).length +
                      (cur.plusOne ? 1 : 0)
                    );
                  }, 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
