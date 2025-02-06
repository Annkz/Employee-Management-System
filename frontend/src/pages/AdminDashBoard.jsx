// import React from 'react'
import { useAuth } from "../context/AuthContext";

const AdminDashBoard = () => {
  const { user } = useAuth();
  return <div>AdminDashboard {user.name}</div>;
};

export default AdminDashBoard;
