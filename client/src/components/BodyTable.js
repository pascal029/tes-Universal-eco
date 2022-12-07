import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function BodyTable({ user }) {
  const navigate = useNavigate();

  const fetchUser = (id) => {
    navigate(`/edit/${id}`);
  };

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
      <td>
        <button onClick={() => fetchUser(user._id)}>Edit</button>
      </td>
    </tr>
  );
}
