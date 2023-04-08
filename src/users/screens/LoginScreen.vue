<script setup lang="ts">
import { useRouter } from "vue-router";
import LogoComponent from "../../components/LogoComponent.vue";
import { useUserStore } from "../stores/useUserStore";
import UserLoginFormComponent from "@/users/components/UserLoginFormComponent.vue";
import { loginUserMutation } from "@/users/mutations/loginUserMutation";
import type UserLoginFormLoginPayloadType from "@/users/types/LoginUserMutationPayloadType";

const userStore = useUserStore();
const router = useRouter();

const loginUser = async (
  payload: UserLoginFormLoginPayloadType
): Promise<void> => {
  const { username, password } = payload;

  const user = await loginUserMutation(username, password);

  if (!user) {
    console.error("error login the user");
    return;
  }

  userStore.addUser(user);
  router.push("/issues");
};
</script>

<template>
  <v-container>
    <v-row class="mb-15" align="center" justify="center" rows="2" tag="header">
      <v-col cols="12" align="center" justify="center">
        <LogoComponent height="3rem" />
      </v-col>
    </v-row>
    <v-row align="center" justify="center" rows="2" tag="main" no-gutters>
      <v-col cols="12" sm="8">
        <UserLoginFormComponent @login="loginUser" />
      </v-col>
    </v-row>
  </v-container>
</template>
