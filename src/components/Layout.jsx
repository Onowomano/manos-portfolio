import { Outlet } from "react-router-dom";
import TopLinks from "./TopLinks";
import TopRightWidget from "./TopRightWidget";
import FloatingBreadcrumb from "./FloatingBreadcrumb";
import BottomLinks from "./BottomLinks";

export default function Layout() {
  return (
    <>
      <TopLinks />
      <TopRightWidget />
      <FloatingBreadcrumb />
      <BottomLinks />
      <Outlet />
    </>
  );
}
