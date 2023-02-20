<script setup lang="ts">
import SideBarDrawerComponent from "./SideBarDrawerComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <v-layout>
    <SideBarDrawerComponent />
    <MainComponent>
      <HeaderComponent />
      <slot ref="content"> </slot>
      <FooterComponent />
    </MainComponent>
  </v-layout>
</template>
