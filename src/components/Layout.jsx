import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import FloatingBreadcrumb from "./FloatingBreadcrumb";
import BottomLinks from "./BottomLinks";

export default function Layout() {
  return (
    <>
      <TopBar />
      <FloatingBreadcrumb />
      <Outlet />
      <BottomLinks />
    </>
  );
}
