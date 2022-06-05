<template>
<!--<div>-->

  <q-tooltip v-if="!$q.screen.lt.md" class="bg-black text-white">
    {{ text }}
  </q-tooltip>
<!--</div>-->

</template>

<script>
export default {
  props: ['text']
}
</script>
