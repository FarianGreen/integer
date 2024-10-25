import { h, observable, computed } from "sinuous";
import Table from "./components/Table";
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

computed(() => {
  app.innerHTML = "";
  app.appendChild(<Table data={data} />);
});
