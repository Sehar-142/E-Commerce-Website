import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid"; 
import "./myOrders.css";
import { useSelector, useDispatch } from "react-redux";
import { clearError, myOrders } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import { useSnackbar } from 'notistack'; 
import Typography from "@mui/material/Typography"; 
import MetaData from "../layout/Metadata";
import LaunchIcon from "@mui/icons-material/Launch"; 

const MyOrders = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar(); 

  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        return params.row.status === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 270,
      flex: 0.5,
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
          <Link to={`/order/${params.row.id}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];

  const rows = orders?.map((item) => ({
    itemsQty: item.orderItems.length,
    id: item._id,
    status: item.orderStatus,
    amount: item.totalPrice,
  }));

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" }); // Trigger error notification
      dispatch(clearError());
    }

    dispatch(myOrders());
  }, [dispatch, error, enqueueSnackbar]);

  return (
    <Fragment>
      <MetaData title={`${user.name} - Orders`} />

      {loading ? (
        <Loader />
      ) : (
        <div className="myOrdersPage">
          <Typography variant="h4" id="myOrdersHeading">
            {user.name}'s Orders
          </Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />
        </div>
      )}
    </Fragment>
  );
};

export default MyOrders;
