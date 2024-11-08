import moment from "moment";
import { HRLine } from "../components/hr-line";
import { GetDailyLogs } from "../hooks/getTimelogs";
import { useState } from "react";
import { NewLogForm } from "../components/new-log-form";

//1 óra legyen 50 pixel magas a grafikonon
const hourHeight = 50;

export function DailyView() {
  const [date, setDate] = useState(() => {
    return moment().format("YYYY-MM-DD");
  });

  const logs = GetDailyLogs(date);

  const increaseDay = () => {
    setDate(moment(date).add(1, "days").format("YYYY-MM-DD"));
  };

  const decreaseDay = () => {
    setDate(moment(date).subtract(1, "days").format("YYYY-MM-DD"));
  };

  return (
    <section className="flex flex-wrap md:flex-nowrap gap-5 p-5 flex-1 mb-12 lg:mb-0 overflow-y-auto md:overflow-y-hidden ">
      <section className="max-w-4xl w-full bg-slate-500 rounded-md p-2 overflow-y-auto">
        <div
          className="grid mb-2"
          style={{
            gridTemplateColumns: "8fr 1fr 1fr",
          }}
        >
          <h2 className="text-slate-200 font-bold text-lg p-3">
            {moment(date, "YYYY-MM-DD").format("YYYY. MMMM DD:").toString()}
          </h2>

          <div
            className="text-slate-300 text-4xl flex justify-center rounded-md items-center hover:bg-slate-600 cursor-pointer select-none"
            onClick={decreaseDay}
          >
            {"<"}
          </div>
          <div
            className="text-slate-300 text-4xl flex justify-center rounded-md items-center hover:bg-slate-600 cursor-pointer select-none"
            onClick={increaseDay}
          >
            {">"}
          </div>
        </div>
        <HRLine slate="600" />

        <div className="mb-2 relative">
          <section className="max-w-full text-center">{hourBlocks}</section>

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
  const [isShowed, setIsShowed] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

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
            className="absolute bg-red-300 left-[74px] rounded-md p-4 grid justify-center items-end cursor-pointer gap-2 text-center"
            style={{
              top: `${top}px`,
              height: `${height}px`,
              width: "calc(100% - 76px)",
            }}
            onClick={() => {
              setIsShowed(true);
              setSelectedId(log.id);
            }}
          >
            <h3>{log.description}</h3>
            <div className="self-start flex flex-wrap gap-2 justify-center">
              {log.tags.map((tag, index) => {
                return (
                  <span
                    className="px-2 py-1 text-white bg-red-500 rounded-md mx-1"
                    key={index}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
      {isShowed ? (
        <NewLogForm setIsShowed={setIsShowed} id={selectedId} />
      ) : (
        <></>
      )}
    </section>
  );
}
