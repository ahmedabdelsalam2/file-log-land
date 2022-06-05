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
        class="bg-blue-grey text-white text-center inline-block q-pa-md" side   >
        {{ i + offset + 1 }}
      </q-item-section>
      <q-item-section class="text-left q-pa-md inline-block row items-center"   >
          -- {{ line }}
      </q-item-section>

    </q-item>
    <q-inner-loading :showing="innerLoading">
      <q-spinner-gears size="50px" style="color:#ff725e !important;" />
    </q-inner-loading>
  </q-list>
</template>
<script>
export default {
  props: ['lines', 'innerLoading', 'offset']
}
</script>
