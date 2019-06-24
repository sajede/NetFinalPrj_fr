import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Register/Login";
import Forget from "./components/Register/Forget";
import User from "./components/User/User";

export const routes = [
  { path: '', component: Home},
  { path: '/register', component: Register},
  { path: '/login', component: Login},
  { path: '/forget', component: Forget},
  { path: '/user', component: User },

];
