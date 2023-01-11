import React, { useEffect, useState } from "react";
import styles from "../styles/Content.module.css";

type dataType = {
  id: number;
  name: string;
  email: string;
};

type stateType = dataType[];

const ShowUsers = () => {
  const [users, setUsers] = useState<stateType>([]);

  const fetchUsers = async () => {
    const response = await fetch("/api/registerUserApi");
    const data = await response.json();
    setUsers(data);
  };

  const deleteUser = async (userId: any) => {
    const response = await fetch(`/api/${userId}`, {
      method: "DELETE",
    });
    console.log(response);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {users.map((ur) => {
        return (
          <div className={styles.showUserContent} key={ur.id}>
            <h4>{ur.id}</h4>
            <h4>{ur.name}</h4>
            <h4>{ur.email}</h4>
            <button onClick={() => deleteUser(ur.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowUsers;
