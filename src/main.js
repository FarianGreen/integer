import { h, observable } from "sinuous";
import Table from "./components/Table.js";
import "./style.scss";

const app = document.getElementById("app");
const data = observable([]);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    data(
      users.map((user) => ({
        id: user.id,
        date: new Date().toLocaleDateString("ru-RU"),
        name: user.name,
      }))
    );
  });

app.appendChild(Table({ data }));
