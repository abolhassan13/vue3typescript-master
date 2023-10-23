import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import i18n from "../src/i18n";

createApp(App).use(router).use(Antd).use(i18n).mount("#app");
