<template>

  <div class="flex q-mb-md">
    <q-input
      outlined
      dense
      v-model="path"
      :style="$q.screen.lt.md ? 'width: 80%' : 'width: 87%'"
      label="FUll Path"
      v-on:keyup.enter="$emit('getFile', path)"
      placeholder="/path/to/file" />
    <q-space/>
    <q-btn
      :loading="loading"
      label="view"
      @click="$emit('getFile', path)"
      :style="$q.screen.lt.md ? 'width: 17%' : 'width: 10%'"
      color="blue-grey"  />
  </div>

</template>

<script>

export default {
  props: ['loading'],
  data () {
    return {
      path: '',
    }
  },
}

</script>
