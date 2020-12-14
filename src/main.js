import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible";
import "normalize.css";
import "./assets/style/reset.css";
import { Button, Tabbar, TabbarItem, Icon, Empty, Search } from "vant";

const app = createApp(App);
app
  .use(Button)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Icon)
  .use(Empty)
  .use(Search);

app
  .use(store)
  .use(router)
  .mount("#app");
