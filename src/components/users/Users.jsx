import { useState, useRef, useEffect } from "react";
import "./Users.scss";
import initialUsers from "../../data/showCaseUsers.json";

function Users() {
  const [users, setUsers] = useState(initialUsers);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const firstNameRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
    const lsUsers = JSON.parse(localStorage.getItem("users"));
    if (lsUsers !== null) {
      setUsers(lsUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const addUser = () => {
    if (firstName !== "" && lastName !== "") {
      setUsers((n) => [...n, { firstName, lastName }]);
      setFirstName("");
      setLastName("");
      firstNameRef.current.focus();
      setMessage("");
    } else {
      setMessage("Please enter a first and last name.");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addUser();
    }
  };
  const handleAddUser = () => {
    addUser();
  };
  return (
    <div className="Users">
      <table>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td></td>
              </tr>
            );
          })}
          <tr>
            <td>
              <input
                type="text"
                ref={firstNameRef}
                value={firstName}
                onChange={handleChangeFirstName}
              />
            </td>
            <td>
              <input
                type="text"
                value={lastName}
                onKeyPress={handleKeyPress}
                onChange={handleChangeLastName}
              />
            </td>
            <td>
              <button onClick={handleAddUser}>Add User</button>
            </td>
          </tr>
        </tbody>
      </table>
      {message !== "" && <div className="message">{message}</div>}
    </div>
  );
}

export default Users;
