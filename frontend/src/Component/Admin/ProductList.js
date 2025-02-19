import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearError,
  getAdminProduct,
  deleteProduct,
} from "../../actions/productAction";
import { Link} from "react-router-dom";
import { useSnackbar } from "notistack"; // Using notistack for notifications
import { Button } from "@mui/material";
import MetaData from "../layout/Metadata";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SideBar from "./Sidebar";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";
import { useNavigate } from "react-router-dom"; // useNavigate instead of history

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // using useNavigate hook
  const { enqueueSnackbar } = useSnackbar(); // using notistack for notifications

  const { error, products } = useSelector((state) => state.products);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" }); // Replace alert.error with enqueueSnackbar
      dispatch(clearError());
    }

    if (deleteError) {
      enqueueSnackbar(deleteError, { variant: "error" }); // Replace alert.error with enqueueSnackbar
      dispatch(clearError());
    }

    if (isDeleted) {
      enqueueSnackbar("Product Deleted Successfully", { variant: "success" }); // Replace alert.success with enqueueSnackbar
      navigate("/admin/dashboard"); // Replace history.push with navigate
      dispatch({ type: DELETE_PRODUCT_RESET });
    }

    dispatch(getAdminProduct());
  }, [dispatch, enqueueSnackbar, error, deleteError, isDeleted, navigate]);

  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "price",
      headerName: "Price",
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
          <Fragment>
            <Link to={`/admin/product/${params.row.id}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() => deleteProductHandler(params.row.id)}
              style={{ color: "red" }}
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        stock: item.Stock,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL PRODUCTS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>

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

export default ProductList;
