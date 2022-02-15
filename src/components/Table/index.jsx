import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

import React from "react";

const Index = (props) => {
  console.log(props.column);
  const buttons = (
    <>
      {/* <Button variant="contained">Edit</Button>{" "}
      <Button variant="contained" color="error">Delete</Button> */}
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
