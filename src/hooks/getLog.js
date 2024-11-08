import { useSelector } from "react-redux";

export function GetLog(id) {
  const logs = useSelector((state) => state.timelogs);

  return logs.find((log) => log.id === id);
}
