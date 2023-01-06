/* 
  Implement a button which makes a get request to https://reqres.in/ to get a list of users and display them.
  100% free reign to accomplish this goal however you wish, within the context of react.

  apiMethods.js file has already been stubbed out for you. Feel free to use it or not.

  ****Make any changes to this boilerplate that you want to.*****
  ****The included code is only provided as a convienence.****

  Bonus 1:  Add a button for each user to make a delete request to delete that user. 
          Update the displayed users excluding the deleted user.

  Bonus 2: Make a filter box to filter the displayed users by name.
*/
import "./styles.css";
import { useState } from "react";
import Card from "./card.js";
export default function App() {
  const [users, setusers] = useState([]);
  const getusers = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setusers(data.data));
  };
  const deleteusers = (user) => {
    console.log("delete : ", user.id);
    fetch("https://reqres.in/api/users/1", { method: "DELETE" }).then((res) =>
      console.log(res)
    );
  };

  return (
    <div className="App">
      <h1 className="head">User Data</h1>
      {!users.length && (
        <button className="btn btn-primary user" onClick={() => getusers()}>
          Get Users
        </button>
      )}
      <div className="row">
        {users.map((item) => (
          <div className="col-4" key={item.id}>
            <Card
              key={item.id}
              email={item.email}
              first_name={item.first_name}
              last_name={item.last_name}
              avatar={item.avatar}
              deleteusers={deleteusers}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
