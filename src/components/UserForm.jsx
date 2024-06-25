import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/userActions";

const UserForm = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;

    dispatch(addUser({ id: Date.now(), name }));
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
