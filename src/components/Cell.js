import { h } from "sinuous";

const Cell = ({ cellData, isHeader = false }) => {
  return isHeader ? h("th", null, cellData) : h("td", null, cellData);
};

export default Cell;
