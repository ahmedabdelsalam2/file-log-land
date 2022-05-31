<template>

  <div class="flex q-mb-md">
    <q-input outlined dense v-model="path" style="width: 87%" label="FUll Path" placeholder="/path/to/file" />
    <q-space/>
    <q-btn
      :loading="loading"
      label="view"
      @click="$emit('getFile', path)"
      style="width: 10%"
      color="grey-5"  />
  </div>

</template>

<script>

export default {
  props: ['loading'],
  data () {
    return {
      path: 'C:\\Temp\\test.txt',
    }
  },
}

</script>
