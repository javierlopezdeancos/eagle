import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import eagleTheme from "./theme/theme";
import App from "./App.vue";
import router from "./router/router";

import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import "./style.css";

const vuetify = createVuetify({
  components,
  directives,
  theme: eagleTheme,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(vuetify).mount("#app");
