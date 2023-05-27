import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { DefaultCotainer } from "./DefaultLayout.styles";

export function DefaultLayout() {
  return (
    <DefaultCotainer>
      <Header />
      <Outlet />
    </DefaultCotainer>
  );
}
