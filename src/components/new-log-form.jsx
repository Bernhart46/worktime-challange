import { createPortal } from "react-dom";
import { GetLog } from "../hooks/getLog";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editTimeLog } from "../store/slices/timeLogs";

export function NewLogForm({ setIsShowed, id }) {
  const log = GetLog(id);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [tags, setTags] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(log.description);
    setDate(log.date);
    setStartTime(log.startingTime);
    setEndTime(log.endingTime);
    setTags(log.tags.join(","));
  }, [id]);

  return createPortal(
    <>
      <div
        className="absolute top-0 left-0 w-screen h-screen z-0"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        onClick={() => setIsShowed(false)}
      ></div>
      <main
        className="absolute top-[50%] left-[50%] w-[80%] h-[80%] lg:w-2/4 lg:h-4/5 bg-slate-600 max-w-[600px] max-h-800px rounded-md"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1 className="text-center text-slate-200 text-2xl font-bold my-4">
          Bejegyzés szerkesztő
        </h1>
        <form className="flex flex-col items-center">
          <div className="w-[80%] flex flex-col">
            <label
              htmlFor="description"
              className="text-slate-200 text-lg font-bold"
            >
              Leírás
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className=" mt-2 w-[90%] p-1"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <label
              htmlFor="date"
              className="text-slate-200 text-lg font-bold mt-2"
            >
              Dátum
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="mt-2 w-[90%] p-1"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
            <label
              htmlFor="starttime"
              className="text-slate-200 text-lg font-bold mt-2"
            >
              Dátum
            </label>
            <input
              type="time"
              name="starttime"
              id="starttime"
              className="mt-2 w-[90%] p-1"
              onChange={(e) => setStartTime(e.target.value)}
              value={startTime}
            />
            <label
              htmlFor="endtime"
              className="text-slate-200 text-lg font-bold mt-2"
            >
              Dátum
            </label>
            <input
              type="time"
              name="endtime"
              id="endtime"
              className="mt-2 w-[90%] p-1"
              onChange={(e) => setEndTime(e.target.value)}
              value={endTime}
            />
            <label
              htmlFor="tags"
              className="text-slate-200 text-lg font-bold mt-2"
            >
              Tag-ek
            </label>
            <input
              type="text"
              name="tags"
              id="tags"
              className="mt-2 w-[90%] p-1"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
            />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                editTimeLog({
                  id,
                  newData: {
                    description,
                    date,
                    startingTime: startTime,
                    endingTime: endTime,
                    tags: tags.trim().split(","),
                  },
                })
              );
              setIsShowed(false);
            }}
          >
            Szerkesztés
          </button>
        </form>
      </main>
    </>,
    document.body
  );
}
