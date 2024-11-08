import moment from "moment";
import { useSelector } from "react-redux";

export function GetDailyLogs(date) {
  const data = useSelector((state) => state.timelogs);

  return data.filter((log) => log.date === date);
}

export function GetWeeklyLogs(date) {
  const data = useSelector((state) => state.timelogs);

  return data.filter((log) => {
    const logWeek = moment(log.date, "YYYY-MM-DD").weeks();
    const inputWeek = moment(date, "YYYY-MM-DD").weeks();

    if (logWeek === inputWeek) {
      return log;
    }
  });
}

export function GetMonthlyLogs(date) {
  const data = useSelector((state) => state.timelogs);

  return data.filter((log) => {
    const logMonth = moment(log.date, "YYYY-MM-DD").month();
    const inputMonth = moment(date, "YYYY-MM-DD").month();

    if (logMonth === inputMonth) {
      return log;
    }
  });
}
