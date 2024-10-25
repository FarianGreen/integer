import { h } from 'sinuous';
const Cell = ({ cellData, isHeader = false }) => {
  return isHeader ? <th>{cellData}</th> : <td>{cellData}</td>;
};

export default Cell;
