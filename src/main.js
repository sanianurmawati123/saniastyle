import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import { VueSpinners } from '@saeris/vue-spinners'

Vue.use(VueSpinners)
import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: "https://pvpidowkusvbyvweljcq.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyOTk4NDUzLCJleHAiOjE5NTg1NzQ0NTN9.A8jln5O9-YqP-yFYX0499KvaVA5Q7aLyO0AXTSXszdQ",
  supabaseOptions: {},
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
