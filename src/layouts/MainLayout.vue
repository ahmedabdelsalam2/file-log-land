<template>
  <q-layout view="hHh lpR fFf">

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
import Tooltip from "components/Tooltip";

export default defineComponent({
  name: "MainLayout",
  components: {Tooltip},
  setup() {

    return {

    }

  },

})
</script>
