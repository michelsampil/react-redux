import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllUsers } from "../redux/selectors/userSelectors";
import { deleteUser } from "../redux/actions/userActions";

const UserList = () => {
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  function handleDeleteUser(userId) {
    dispatch(deleteUser(userId));
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
