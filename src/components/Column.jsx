import { html } from "sinuous";
import Cell from "./Cell";

const Column = ({ columnData, isHeader }) => {
  return html`
    ${columnData.map(
      (data, index) =>
        html`<${Cell} key=${index} cellData=${data} isHeader=${isHeader} />`
    )}
  `;
};

export default Column;
