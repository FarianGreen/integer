import { h } from "sinuous";

const Row = ({ item }) => (
  <tr>
    <td>{item.id}</td>
    <td>{item.date}</td>
    <td>{item.name}</td>
  </tr>
);

export default Row;
