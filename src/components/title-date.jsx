import moment from "moment";

export function TitleDate() {
  const date = moment().format("YYYY. MMMM DD.");

  return (
    <>
      <section className="text-slate-300 text-2xl font-bold p-5">
        {date.toString()}
      </section>
      <hr className="border-slate-800" />
    </>
  );
}
