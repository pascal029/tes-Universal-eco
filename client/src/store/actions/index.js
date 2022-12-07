const basedUrl = `http://localhost:4001/users`;

export const fetchUsers = () => {
  return (dispatch, getState) => {
    fetch(`${basedUrl}`)
      .then((response) => {
        if (!response.ok) throw new Error(response);
        return response.json();
      })
      .then((users) => {
        dispatch({
          type: "users/fetchSuccess",
          payload: users,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const sortUsers = (users, sorter) => {
  return (dispatch, getState) => {
    users = users.sort((a, b) => {
      if (sorter == "firstName") {
        return a.firstName.localeCompare(b.firstName);
      }
      if (sorter == "gender") {
        return a.gender.localeCompare(b.gender);
      }
      if (sorter == "address") {
        return a.addr.length - b.addr.length;
      }
    });
    dispatch({ type: "users/sort", payload: users });
  };
};
