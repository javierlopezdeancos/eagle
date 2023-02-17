<script setup lang="ts">
import SideBarDrawerComponent from "./SideBarDrawerComponent.vue";
import MainContentComponent from "./MainContentComponent.vue";
</script>

<template>
  <v-card>
    <v-layout>
      <SideBarDrawerComponent />
      <MainContentComponent>
        <slot ref="content"></slot>
      </MainContentComponent>
    </v-layout>
  </v-card>
</template>
