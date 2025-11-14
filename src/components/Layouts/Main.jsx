import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Main = () => {
  return (
    <div
      className="object-cover bg-cover bg-center bg-no-repeat text-center"
    >
      <Header />
      <div className="flex justify-center items-center">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
