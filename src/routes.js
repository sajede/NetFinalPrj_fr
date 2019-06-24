import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Register/Login";

export const routes = [
  { path: '', component: Home},
  { path: '/Register', component: Register},
  { path: '/Login', component: Login}
];
