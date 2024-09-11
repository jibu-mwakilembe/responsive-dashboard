import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
function Layout() {
  return (
    <>
      <div className="flex flex-row h-screen w-screen bg-neutral-100">
        <Sidebar />
        <div>
          {/* <div className="bg-teal-200">header</div> */}
          <div>{<Outlet />}</div>
        </div>

       
      </div>
    </>
  );
}

export default Layout;
