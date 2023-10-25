import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import i18n from "../src/i18n";
import { todoStore } from './store/TodoStore'

createApp(App).use(router).use(Antd).use(i18n).use(todoStore).mount("#app");
