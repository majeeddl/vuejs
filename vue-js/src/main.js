import { createApp } from "vue";
import { createPinia } from "pinia";
import { Layout, Menu, Button, message } from "ant-design-vue";

import App from "./App.vue";
import router from "./router";

import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Layout).use(Button).use(Menu);

app.config.globalProperties.$message = message;

app.mount("#app");
