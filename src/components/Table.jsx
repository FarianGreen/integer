import { h } from 'sinuous';
import Row from './Row';
import Column from './Column';


const Table = ({ data }) => (
  <table className="table">
    <thead>
      <tr>
        <Column columnData={['ID', 'Date', 'Name']} isHeader={true} />
      </tr>
    </thead>
    <tbody>
      {data().map((item) => (
        <Row key={item.id} item={item} />
      ))}
    </tbody>
  </table>
);

export default Table;
