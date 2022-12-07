export default function BodyTable({ user }) {
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
        <button>Edit</button>
      </td>
    </tr>
  );
}
