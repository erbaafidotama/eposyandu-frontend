import React, { useEffect } from "react";

import Table from "../../components/Table/index";

import useStore from "../../store/Home";

const Index = () => {
  const fetchUser = useStore((state) => state.fetchUser);
  const dataUsers = useStore((state) => state.users);

  useEffect(() => {
    fetchUser();
  }, []);

  const columns = [
    // { id: "lookup_code", label: "Lookup Code" },
    // { id: "description", label: "Description" },
    { id: "name", name: "Name" },
    { id: "username", name: "Username" },
    { id: "website", name: "Website" },
    { id: "email", name: "Email" },
  ];

  console.log(dataUsers);
  return (
    <div>
      {dataUsers ? (
        <>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            New
          </button>
          <Table data={dataUsers} column={columns} />
        </>
      ) : (
        <h4>LOADING</h4>
      )}
    </div>
  );
};

export default Index;
