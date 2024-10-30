import { h, html } from "sinuous";
const Cell = ({ cellData, isHeader }) => {
  return isHeader ? html`<th>${cellData}</th>` : html`<td>${cellData}</td>`;
};

export default Cell;
