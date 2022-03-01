import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import { VueSpinners } from '@saeris/vue-spinners'

Vue.use(VueSpinners)
import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: "https://mdojcbpkrjwhyssjydwl.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0NDIwODIzOCwiZXhwIjoxOTU5Nzg0MjM4fQ.Mlcw3PC8bc-7p7vrcMNpRFd1FVs5kEOFAgpWb7B8dvQ",
  supabaseOptions: {},
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
