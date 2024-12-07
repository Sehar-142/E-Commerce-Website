import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid"; // Updated import
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // Replaced 'history' with 'useNavigate'
import { useSnackbar } from 'notistack'; // Replaced 'useAlert' with 'useSnackbar'
import { Button } from "@mui/material"; // Updated import
import MetaData from "../layout/Metadata";
import EditIcon from "@mui/icons-material/Edit"; // Updated import
import DeleteIcon from "@mui/icons-material/Delete"; // Updated import
import SideBar from "./Sidebar";
import { getAllUsers, clearError, deleteUser } from "../../actions/userAction";
import { DELETE_USER_RESET } from "../../constants/userConstants";

const UsersList = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar(); // Replaced 'alert' with 'enqueueSnackbar'
  const navigate = useNavigate(); // Use 'useNavigate' instead of 'history'

  const { error, users } = useSelector((state) => state.allUsers);

  const {
    error: deleteError,
    isDeleted,
    message,
  } = useSelector((state) => state.profile);

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' }); // Show error message
      dispatch(clearError());
    }

    if (deleteError) {
      enqueueSnackbar(deleteError, { variant: 'error' }); // Show delete error message
      dispatch(clearError());
    }

    if (isDeleted) {
      enqueueSnackbar(message, { variant: 'success' }); // Show success message
      navigate("/admin/users"); // Replaced 'history.push' with 'navigate'
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAllUsers());
  }, [dispatch, enqueueSnackbar, error, deleteError, navigate, isDeleted, message]); // Replaced 'alert' with 'enqueueSnackbar'

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 180, flex: 0.8 },
    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "role",
      headerName: "Role",
      minWidth: 150,
      flex: 0.3,
      cellClassName: (params) => {
        return params.row.role === "admin" ? "greenColor" : "redColor"; // Access params.row directly
      },
    },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/user/${params.row.id}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteUserHandler(params.row.id) // Use params.row to access the id
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        role: item.role,
        email: item.email,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL USERS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL USERS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default UsersList;
