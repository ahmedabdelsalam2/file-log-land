<template>
  <q-layout view="hHh lpR fFf" class="main-background-color">
    <q-img src="right.png" class="absolute-bottom-right"  width="600px"/>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: "LoginLayout",
  data() {
    return {

    }
  },
}
</script>
