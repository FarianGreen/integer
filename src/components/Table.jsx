import { html } from "sinuous";
import Row from "./Row";
import Column from "./Column";
import { map } from "sinuous/map";

const Table = ({ data }) => {
  return html`
    <table class="table">
      <thead>
        <tr>
          <${Column} columnData=${["ID", "Date", "Name"]} isHeader=${true} />
        </tr>
      </thead>
      <tbody>
        ${map(data, (item) => html`<${Row} key=${item.id} item=${item} />`)}
      </tbody>
    </table>
  `;
};

export default Table;
