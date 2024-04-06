import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";

const UserTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
  ];

  return (
    <div
      style={{
        textAlign: "center",
        position: "fixed",
        top: "0",
        left: "18rem",
        width: "1215px",
      }}
    >
      <Table dataSource={data} columns={columns} bordered />
    </div>
  );
};

export default UserTable;
