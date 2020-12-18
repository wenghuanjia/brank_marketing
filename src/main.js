import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible";
import "normalize.css";
import "./assets/style/reset.css";
import {
  Button,
  Tabbar,
  TabbarItem,
  Icon,
  Empty,
  Search,
  Tab,
  Tabs,
  Form,
  Field,
} from "vant";

const app = createApp(App);
app
  .use(Button)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Icon)
  .use(Empty)
  .use(Tabs)
  .use(Tab)
  .use(Form)
  .use(Field)
  .use(Search);

app
  .use(store)
  .use(router)
  .mount("#app");
