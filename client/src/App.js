import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers, sortUsers } from "./store/actions";
import "./App.css";

function App() {
  let { users } = useSelector((state) => state);
  const [valueSelect, setvalueSelect] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleSort = (e) => {
    setvalueSelect(e.target.value);
    dispatch(sortUsers(users, e.target.value));
  };

  return (
    <div className="App">
      <h1>Customers Table</h1>
      <p>Sort by : </p>
      <select value={valueSelect} onChange={handleSort}>
        <option value="">--select--</option>
        <option value="firstName">name</option>
        <option value="gender">gender</option>
        <option value="address">address</option>
      </select>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>Gender</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.gender}</td>
                <td>
                  {user.addr.map((el) => {
                    return `${el.street} ${el.house} ${el.city} ${el.country} `;
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
