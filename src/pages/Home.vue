<template>

  <q-page class="container">

    <!--  Page Header  -->
    <div class="text-h3 q-mt-xl">
      Log files Viewer.
    </div>

    <!--  Page Container  -->
    <div class=" q-mt-xl text-center">

      <!--  Action Form  -->
      <ActionBox @getFile="val =>{getLogFile(val); loadingBtn = true }" :loading="loadingBtn" />

      <!--  Loading content  -->
      <LoadingContetn v-if="loadingBtn" />

      <!--  Content Handler  -->
      <template v-else >

        <!--  Content Box  -->
        <ContentList
          v-if="data.data"
          :lines="data.data"
          :offset="data.offset"
          :innerLoading="innerLoading" />

        <!--  No Content SVG  -->
        <NoContent v-if="!loadingBtn && !data.data" :lines="data.data" />

        <!--  Pagination  -->
        <div v-if="data.data">

          <pagination :data="data" @pagination="pagination" />

        </div>

      </template>

    </div>

  </q-page>

</template>

<script>

import ContentList from "components/Home/ContentList";
import ActionBox from "components/Home/ActionBox";
import NoContent from "components/UI/NoContent";
import LoadingContetn from "components/Home/LoadingContetn";
import Pagination from "components/Home/pagination";
import {handelError} from "src/mixins/HandelErrors";
import {Cookies} from "quasar";

export default {
  name: "PageIndex",
  components: {
    Pagination,
    LoadingContetn,
    NoContent,
    ActionBox,
    ContentList
  },
  mixins: [
    handelError
  ],
  data () {
    return {
      path: '',
      data: {
        data: false
      },
      current: 3,
      loadingBtn: false,
      innerLoading: false
    }
  },
  methods: {
    pagination (url) {

      this.innerLoading = true
      this.getLogFile(this.path, url)

    },
    getLogFile(path = null, pageNum = null) {

      this.path = path

      // Handel pagination URL
      const page = pageNum ? pageNum : ''

      // Handel Payload object
      const payload = {
        path  : this.path ,
        token : Cookies.get('token')
      }

      // Request
      this.$api.post(`get-file${page}`, payload )
        .then( ({ data }) => {

          // Get file data
          this.data = data.file

          // Stop loading
          this.loadingBtn = false
          this.innerLoading = false

        }).catch(err => {

          this.data = { data: false }

          // Stop loading
          this.loadingBtn = false
          this.innerLoading = false

          // Handel error
          this.error(err)

        })
    }
  }
};
</script>
