import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <h1>layout</h1>
      <Outlet />
    </>
  );
}
