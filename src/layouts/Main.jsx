import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Payment from "../components/Payment";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className='w-full h-screen bg-slate-950'>
      <Navbar />
      <Outlet />
      <Payment />
      <Footer />
    </div>
  );
};

export default Main;
