import React from "react";

import Table from "../../components/Table/index"

import useStore from "../../store/Home";

const Index = () => {
  const fetchUser = useStore((state) => state.fetchUser);
  const dataUsers = useStore((state) => state.users);

  const columns = [
    // { id: "lookup_code", label: "Lookup Code" },
    // { id: "description", label: "Description" },
    { id: "name", name: "Name" },
    { id: "username", name: "Username" },
    { id: "website", name: "Website" },
    { id: "email", name: "Email", },
  ];

  console.log(dataUsers);
  return (
    <div>
      <p>Ini Home Index</p>
      {dataUsers ? (
        <>
        <Table data={dataUsers} column={columns} />
        </>
      ) : (
        <h4>LOADING</h4>
      )}
    </div>
  );
};

export default Index;
