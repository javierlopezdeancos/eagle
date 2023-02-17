<script setup lang="ts">
import { ref, defineEmits } from "vue";
import type UserLoginFormLoginPayloadType from "@/users/types/UserLoginFormLoginPayloadType";

const username = ref("");
const password = ref("");
const showPassword = ref(false);

const emit = defineEmits<{
  (e: "login", payload: UserLoginFormLoginPayloadType): void;
}>();

const submit = async (): Promise<void> => {
  if (!username.value || !password.value) {
    return;
  }

  const userLoginFormLoginPayload = {
    username: username.value,
    password: password.value,
  };

  emit("login", userLoginFormLoginPayload);
};
</script>

<template>
  <form>
    <v-row align="center" justify="center" rows="4" sm="1" no-gutters>
      <v-col class="mb-8" cols="12" sm="12">
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
      <v-col class="mt-16" cols="12" sm="12">
        <v-btn
          class="w-100"
          :rounded="0"
          color="primary"
          size="x-large"
          @click="submit"
          >Entrar
        </v-btn>
      </v-col>
    </v-row>
  </form>
</template>
