<template>
  <q-page class="container">

    <div class="text-h3 q-mt-xl">
      Log files Viewer.
    </div>

    <div class=" q-mt-xl text-center">

      <ActionBox @getFile="val =>{getLogFile(val); btnLoading = true }" :loading="btnLoading" />

      <LoadingContetn v-if="btnLoading" />

      <template v-else >

        <ContentList v-if="data.data" :lines="data.data" :innerLoading="innerLoading" />

        <div v-if="error" class="bg-red-1 text-body-1 text-left q-pa-md"  >
          <q-icon size="md" name="lar la-surprise" color="red" />
          This file is not exist.
        </div>

        <NoContent v-if="!btnLoading && !data.data" :lines="data.data" />

        <div v-if="data.data">
          <div class="q-py-md q-mb-xl">
            <q-btn-group outline spread class="full-width">
              <q-btn outline color="grey" @click="getLogFile(null, data.first_page_url);innerLoading = true" icon="eva-skip-back-outline" />
              <q-btn outline color="grey" @click="getLogFile(null, data.prev_page_url);innerLoading = true" icon="eva-chevron-left-outline" />
              <q-btn outline color="grey" @click="getLogFile(null, data.next_page_url);innerLoading = true" icon="eva-chevron-right-outline" />
              <q-btn outline color="grey" @click="getLogFile(null, data.last_page_url);innerLoading = true" icon="eva-skip-forward-outline" />
            </q-btn-group>
          </div>

        </div>

      </template>

    </div>

  </q-page>
</template>

<script>

import ContentList from "components/ContentList";
import ActionBox from "components/ActionBox";
import NoContent from "components/NoContent";
import LoadingContetn from "components/LoadingContetn";
export default {
  name: "PageIndex",
  components: {LoadingContetn, NoContent, ActionBox, ContentList},
  data () {
    return {
      path: '',
      data: {
        data: false
      },
      current: 3,
      btnLoading: false,
      innerLoading: false
    }
  },
  methods: {
    getLogFile(path, pageNum = null) {

      this.path = path ? path : this.path
      const page = pageNum ? pageNum : ''

      this.$api.post(`get-file${page}`, { path: this.path }).then( ({ data }) => {

        if (data.status)
          this.data = data.file
        else {
         this.data = { data: false }
          this.error = true
        }
        this.btnLoading = false
        this.innerLoading = false

      }).catch(err => {

        this.btnLoading = false
        this.innerLoading = false

        console.log(err)

      })
    }
  }
};
</script>
