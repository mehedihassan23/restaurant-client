import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayOut from "../layouts/MainLayOut";
import Menu from "../pages/menu/Menu";
import Shop from "../pages/shop/Shop";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import DashboardLayout from "../dashboard/dashboardlayout/DashboardLayout";
import AddItem from "../dashboard/dashboardcomponents/additem/AddItem";
import ManageItem from "../dashboard/dashboardcomponents/manageitem/ManageItem";
import ManageALlBooking from "../dashboard/dashboardcomponents/managebooking/ManageALlBooking";
import AllUser from "../dashboard/dashboardcomponents/alluser/AllUser";
import Reservation from "../dashboard/dashboardcomponents/reservation/Reservation";
import PaymentHistory from "../dashboard/dashboardcomponents/payment/PaymentHistory";
import MyCart from "../dashboard/dashboardcomponents/mycart/MyCart";
import UserReview from "../dashboard/dashboardcomponents/userreview/UserReview";
import DashboardHome from "../dashboard/dashboardcomponents/dashboardHome/DashboardHome";
import AdminOnly from "../components/adminroute/AdminOnly";
import PaymentSuccess from "../pages/paymentSuccess/PaymentSuccess";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },{
          path: "/menu",
          element: <Menu></Menu>
        },{
          path: "/shop",
          element: <Shop></Shop>
        },{
          path: "/contact",
          element: <Contact></Contact>
        }
      ]
    },{ 
      path: "/dashboard",
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path: "/dashboard",
          element: <DashboardHome></DashboardHome> 
        },{
          path: "/dashboard/admin/additem",
          element: <AdminOnly>
            <AddItem></AddItem>
          </AdminOnly>
        },{
          path: "/dashboard/admin/manageitem",
          element: <AdminOnly>
            <ManageItem></ManageItem>
          </AdminOnly>
        },{
          path: "/dashboard/admin/manageallbooking",
          element: <AdminOnly>
            <ManageALlBooking></ManageALlBooking>
          </AdminOnly>
        },{
          path: "/dashboard/admin/alluser",
          element: <AdminOnly>
             <AllUser></AllUser>
          </AdminOnly>
        },{
          path: "/dashboard/user/reservation",
          element: <Reservation></Reservation>
        },{
          path: "/dashboard/user/paymenthistory",
          element: <PaymentHistory></PaymentHistory>
        },{
          path: "/dashboard/user/mycart",
          element: <MyCart></MyCart>
        },{
          path: "/dashboard/user/review",
          element: <UserReview></UserReview>
        }
      ]
    },
    {
      path: "/login",
      element: <Login></Login>
    },{
      path: "/signup",
      element: <SignUp></SignUp>
    },{
      path: "/payment/success",
      element: <PaymentSuccess></PaymentSuccess>
    }
     
  ])
  export default router;