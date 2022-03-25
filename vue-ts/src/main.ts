import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

//Antd import
// app.use(Antd);
// app.use(Button);
// app.use(Menu);
// app.config.globalProperties.$message = message;

app.mount("#app");
