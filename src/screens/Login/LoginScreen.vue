<script lang="ts">
import { defineComponent } from "vue";
import LogoComponent from "../../components/Logo/LogoComponent.vue";

export default defineComponent({
  data() {
    return {
      username: undefined,
      password: undefined,
      showPassword: false,
    };
  },
  components: {
    LogoComponent,
  },
  methods: {
    login() {
      this.$router.push("/issues");
    },
  },
});
</script>

<template>
  <v-container>
    <v-row
      class="egl-header"
      align="center"
      justify="center"
      rows="3"
      sm="1"
      tag="header"
    >
      <v-col cols="12" sm="4" align="center" justify="center">
        <LogoComponent />
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
      rows="3"
      sm="1"
      tag="main"
      no-gutters
    >
      <v-col cols="12" sm="8">
        <v-container>
          <form>
            <v-row align="center" justify="center" rows="4" sm="1" no-gutters>
              <v-col class="egl-username" cols="12" sm="12">
                <v-text-field
                  v-model="username"
                  label="Usuario"
                  name="login-username"
                  variant="underlined"
                  placeholder="mariapacheco"
                  type="text"
                  clearable
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-spacer></v-spacer>
            <v-row align="center" justify="center" rows="4" sm="1" no-gutters>
              <v-col cols="12" sm="12">
                <v-text-field
                  v-model="password"
                  variant="underlined"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  name="login-password"
                  label="Contraseña"
                  hint="Al menos 8 characters"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row align="center" justify="center" rows="4" sm="1" no-gutters>
              <v-col class="egl-login" cols="12" sm="12">
                <v-btn
                  class="w-100"
                  :rounded="0"
                  color="primary"
                  size="x-large"
                  @click="login"
                  >Entrar
                </v-btn>
              </v-col>
            </v-row>
          </form>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.egl-header {
  margin: 0 0 var(--egl-space) 0;
}

.egl-username {
  margin: 0 0 var(--egl-space-sm) 0;
}

.egl-login {
  margin: var(--egl-space-md) 0 0 0;
}
</style>
