import moment from "moment";
import { HRLine } from "../components/hr-line";
import { GetDailyLogs } from "../hooks/getTimelogs";

//1 óra legyen 50 pixel magas a grafikonon
const hourHeight = 50;

export function DailyView() {
  const date = moment().format("YYYY. MMMM DD:");

  const logs = GetDailyLogs(
    moment(date, "YYYY. MMMM DD:").format("YYYY-MM-DD")
  );

  return (
    <section className="flex flex-wrap md:flex-nowrap gap-5 p-5 flex-1 mb-12 lg:mb-0 overflow-y-auto md:overflow-y-hidden ">
      <section className="max-w-4xl w-full bg-slate-500 rounded-md p-2 overflow-y-auto">
        <h2 className="text-slate-200 font-bold text-lg p-3">
          {date.toString()}
        </h2>
        <HRLine slate="600" />

        <div className="mb-2 relative">
          <section className="max-w-full text-center">{hourBlocks}</section>

          {/* Listázza a logokat */}
          <ListLogs logs={logs} />
        </div>
      </section>

      <section className="bg-blue-200 w-full max-w-md">Overview</section>
    </section>
  );
}

//Generál óra blokkokat (1 nap = 24 blokk)
const hourBlocks = Array.from({ length: 24 }, (_, index) => (
  <div key={index} className="border-b-[1px] border-slate-600 w-full">
    <div
      className="bg-slate-600 text-slate-300 pt-2 w-16"
      style={{ height: `${hourHeight}px` }}
    >
      {index}:00
    </div>
  </div>
));

function ListLogs({ logs }) {
  return (
    <section className="absolute top-0 w-full">
      {logs.map((log, index) => {
        const startingHour = moment(log.startingTime, "HH:mm").hour();
        const startingMinute = moment(log.startingTime, "HH:mm").minute();
        const endingHour = moment(log.endingTime, "HH:mm").hour();
        const engingMinute = moment(log.endingTime, "HH:mm").minute();

        const top =
          hourHeight * startingHour +
          startingHour +
          (hourHeight / 60) * startingMinute;

        const height =
          endingHour * 50 - top + endingHour + (hourHeight / 60) * engingMinute;

        return (
          <div
            key={index}
            className="absolute bg-red-300 left-[70px] rounded-md"
            style={{
              top: `${top}px`,
              height: `${height}px`,
              width: "calc(100% - 68px)",
            }}
          >
            {log.description}
          </div>
        );
      })}
    </section>
  );
}
