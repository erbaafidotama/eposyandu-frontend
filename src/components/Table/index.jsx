import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

import React from "react";

const Index = (props) => {
  console.log(props.column);
  const buttons = (
    <>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Edit
      </button>
      <button
        type="button"
        class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Delete
      </button>
    </>
  );
  const columns = props.column;
  const columnsButtons = columns.concat({
    name: "Actions",
    formatter: (cell) => _(buttons),
  });
  return (
    <div>
      {/* <Button variant="contained">New</Button> */}
      <Grid
        data={props.data}
        columns={columnsButtons}
        // search={true}
        pagination={{
          enabled: true,
          limit: 5,
        }}
      />
    </div>
  );
};

export default Index;
