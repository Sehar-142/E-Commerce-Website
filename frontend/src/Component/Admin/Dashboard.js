
import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import MetaData from "../layout/Metadata";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction.js";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import { LineChart, Line, PieChart, Pie, Tooltip, Cell, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { orders } = useSelector((state) => state.allOrders);
  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);
    let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  // Sample data for charts
  const lineData = [
    { name: "Initial Amount", total: 0 },
    { name: "Amount Earned", total: 4000 },
  ];

  const pieData = [
    { name: "Out of Stock", value: outOfStock },
    { name: "In Stock", value: products.length - outOfStock },
  ];

  const COLORS = ["#FF6347", "#4675DA" ]; 

  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br />
              ₹{totalAmount}
            
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Products</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
                   <p>{users && users.length}</p>
        
            </Link>
          </div>
        </div>

        {/* Line Chart */}
        <div className="lineChart" style={{ marginBottom: "2rem" }}>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="name" stroke="#555" />
              <YAxis stroke="#555" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  borderRadius: "5px",
                }}
              />
              <Line
                type="monotone"
                dataKey="total"
                stroke="url(#colorUv)"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 8 }}
              />
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="tomato" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="tomato" stopOpacity={0} />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Display real-time stock data above the pie chart */}
        <div className="stockInfo" style={{ textAlign: "center", marginBottom: "-3rem" }}>
          <p>
            <span style={{ color: "#4675DA" }}>In Stock: {products.length - outOfStock}</span> |{" "}
            <span style={{ color: "#FF6347" }}>Out of Stock: {outOfStock}</span>
          </p>
        </div>

        {/* Pie/Doughnut Chart */}
        <div className="doughnutChart">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={120}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                stroke="none"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  borderRadius: "5px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
