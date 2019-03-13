import Dashboard from "views/Dashboard/Dashboard.jsx";
import UiProgrammingPage from "views/UiProgramming/UiProgrammingPage.jsx";

let dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard
  },
  {
    path: "/ui-programming",
    name: "Ui-programming",
    icon: "nc-icon nc-single-02",
    component: UiProgrammingPage
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];

export default dashRoutes;
