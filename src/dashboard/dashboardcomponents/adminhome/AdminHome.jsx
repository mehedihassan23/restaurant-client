import React from 'react'
import { FaWallet, FaUsers } from "react-icons/fa6";
import { FaUserSecret, FaTruck } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {Helmet} from "react-helmet"

import "./adminhome.css"
import useUser from '../../../hooks/useUser';
import useMenu from '../../../hooks/useMenu';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const AdminHome = () => {
   const [alluser] = useUser()
   const [menu, isMenuLoading] = useMenu()
  return (
    <div className='admin-home'>
      <Helmet>
        <title>। Admin Home</title>
        <link rel="shortcut icon" href="https://res.cloudinary.com/doolocyaf/image/upload/v1716610835/Resturant%20Project/home_icon_xh5cjh.jpg" type="image/x-icon" />
      </Helmet>
      <h1 className="welcome-message">Hi, John Doe, Welcome back</h1>

      <div className="admin-boxs">
        <div className="admin-box">
          <div className="icon">
            <FaWallet />
          </div>
          <div className="box-content">
            <p>$350</p>
            <p>revenue</p>
          </div>
        </div>

        <div className="admin-box">
          <div className="icon">
            <FaUsers />
          </div>
          <div className="box-content">
            <p>
              {alluser?.length<10 ? "0"+ alluser?.length : alluser?.length}   
            </p>
            <p>customers</p>
          </div>
        </div>

        <div className="admin-box">
          <div className="icon">
            <FaUserSecret />
          </div>
          <div className="box-content">
          <p>
              {menu?.length<10 ? "0"+ menu?.length : menu?.length}   
            </p>
            <p>products</p>
          </div>
        </div>

        <div className="admin-box">
          <div className="icon">
            <FaTruck />
          </div>
          <div className="box-content">
            <p>5</p>
            <p>orders</p>
          </div>
        </div>

      </div>

      <div className="charts">
      <div className="chart1">
          <ResponsiveContainer width="90%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        
     
      </div>

    </div>
  )
}

export default AdminHome
