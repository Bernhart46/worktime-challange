import { useSelector } from "react-redux";

export function GetDailyLogs(date) {
  const data = useSelector((state) => state.timelogs);

  return data.filter((log) => log.date === date);
}
