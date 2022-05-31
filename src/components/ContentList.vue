<template>
  <q-list flat bordered>

    <q-item
      v-for="(line, i) in lines"
      :key="i"
      class="q-pa-none"
      style="line-break: anywhere;"
    >

      <q-item-section
        :style="!$q.screen.lt.md ? 'width: 6vw' : 'width: 18vw'"
        class="bg-grey-3 text-center inline-block q-pa-md" side   >
        {{ i + 1 }}
      </q-item-section>
      <q-item-section class="text-left q-pa-md inline-block"   >
        {{ line }}
      </q-item-section>

    </q-item>
    <q-inner-loading :showing="innerLoading">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </q-list>
</template>
<script>
export default {
  props: ['lines', 'innerLoading']
}
</script>
