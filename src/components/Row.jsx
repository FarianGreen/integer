import { h, html } from "sinuous";

const Row = ({ item }) => {
  return html`
    ${<tr>
    <td>{item.id}</td>
    <td>{item.date}</td>
    <td>{item.name}</td>
  </tr>}
  `
};

export default Row;
