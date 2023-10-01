import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);

  // 原來這一段就是輸出時間的資料
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
