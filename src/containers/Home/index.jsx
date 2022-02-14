import React, { useEffect, useState } from "react";
// import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

import Table from "../../components/Table/index"

import useStore from "../../store/Home";

const Index = () => {
  const fetchUser = useStore((state) => state.fetchUser);
  const dataUsers = useStore((state) => state.users);

  const [dataTable, setDataTable] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  useEffect(() => {
    console.log("1");
    fetchUser();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
