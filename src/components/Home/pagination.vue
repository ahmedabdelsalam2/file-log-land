<template>

  <div class="q-py-md q-mb-xl">



    <q-btn-group outline spread class="full-width">
      <q-btn
        outline
        color="blue-grey"
        @click="pagination(data.first_page_url)"
        icon="eva-skip-back-outline"
      > <Tooltip text="First page" /> </q-btn>
      <q-btn
        outline
        color="blue-grey"
        @click="pagination(data.prev_page_url)"
        icon="eva-chevron-left-outline"
      > <Tooltip text="Previous page" /> </q-btn>

      <q-btn
        outline
        color="blue-grey"
        :label="data.current_page"
      />

      <q-btn
        outline
        color="blue-grey"
        @click="pagination(data.next_page_url)"
        icon="eva-chevron-right-outline"
      > <Tooltip text="Next page" /> </q-btn>
      <q-btn
        outline
        color="blue-grey"
        @click="pagination(data.last_page_url)"
        icon="eva-skip-forward-outline"
      > <Tooltip text="Last page" /> </q-btn>
    </q-btn-group>
  </div>


</template>

<script>
import Tooltip from "components/UI/Tooltip";
export default {
  components: {Tooltip},
  props: ['data'],
  methods: {
    pagination (url) {
      if (url !== null)
        this.$emit('pagination', url)
    }
  }
}
</script>
