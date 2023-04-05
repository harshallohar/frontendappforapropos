import Login from "./views/examples/Login";
import Register from "./views/examples/Register";

const routes = [
    {
        path:"/login",
        name:"Login",
        icon: "fa-sharp fa-solid fa-user",
        component: Login,
        layout: "/auth",
      },
]

export default routes;