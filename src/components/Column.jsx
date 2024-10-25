import { h } from "sinuous";
import Cell from "./Cell";

const Column = ({ columnData, isHeader }) => {
  return columnData.map((data, index) => (
    <Cell key={index} cellData={data} isHeader={isHeader} />
  ));
};

export default Column;
