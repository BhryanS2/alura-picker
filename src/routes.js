import Cadastro from "./components/cadastro/index.vue";
import Home from "./components/home/index.vue";

export const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
    titulo: "Home",
    menu: true
  },
  {
    path: "/cadastro",
    component: Cadastro,
    name: "cadastro",
    titulo: "Cadastro",
    menu: true
  },
  {
    path: "/cadastro/:id",
    component: Cadastro,
    name: "alterar",
    titulo: "Alterar",
    menu: false
  },
  {
    path: "*",
    component: Home,
    menu: false
  }
];
