import Cadastro from "./components/cadastro/index.vue";
import Home from "./components/home/index.vue";

export const routes = [
  {
    path: "/",
    component: Home,
    name: "home"
  },
  {
    path: "/cadastro",
    component: Cadastro,
    name: "cadastro"
  }
];
