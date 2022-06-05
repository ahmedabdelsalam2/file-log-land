<template>
  <q-layout view="hHh lpR fFf" class="main-background-color">
    <img src="/right.png" class="absolute-bottom-right"
         :width="$q.screen.lt.md ? '400' : '600'"
    />
    <q-header bordered class="bg-white text-black">
      <q-toolbar class="container q-px-none">

        <q-toolbar-title>
          File Log Reader
        </q-toolbar-title>

        <q-space/>

        <q-icon
          name="las la-sign-out-alt"
          size="sm"
          class="cursor-pointer"
          @click="$store.dispatch('auth/logout')"
        >
          <Tooltip text="Logout" />
        </q-icon>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import Tooltip from "components/UI/Tooltip";
export default{
  name: "MainLayout",
  components: {Tooltip},
}
</script>
