import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Register/Login";
import Forget from "./components/Register/Forget";

export const routes = [
  { path: '', component: Home},
  { path: '/Register', component: Register},
  { path: '/Login', component: Login},
  { path: '/forget', component: Forget}
];
