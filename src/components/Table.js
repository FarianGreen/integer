import { h } from "sinuous";
import Row from "./Row.js";

const Table = ({ data }) => {
  return h(
    "table",
    { class: "table" },
    h(
      "thead",
      null,
      Row({
        rowData: ["ID", "Date", "Name"],
        isHeader: true,
      })
    ),
    h("tbody", null, () =>
      data().map((item) => Row({ rowData: [item.id, item.date, item.name] }))
    )
  );
};

export default Table;
