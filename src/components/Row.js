import { h } from "sinuous";
import Cell from "./Cell.js";

const Row = ({ rowData, isHeader = false }) => {
  return h(
    "tr",
    null,
    rowData.map((cellData) => Cell({ cellData, isHeader }))
  );
};

export default Row;
