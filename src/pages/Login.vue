<template>
  <q-page class="container flex flex-center">

    <q-card
      :style="$q.screen.lt.md ? 'width: 80vw;' : ''"
      bordered
      class="card-shadow q-pa-md">

      <!--  Card Header  -->
      <div
        class="text-h3 q-mt-lg text-center"
        style="font-weight: 200;"> Login
      </div>

      <!--  Card SVG  -->
      <Login/>

      <!--  Card Form  -->
      <q-card-section :style="!$q.screen.lt.md ? 'width: 25vw' : '' " class="q-gutter-md">

        <!--  User Name  -->
        <q-input
          v-model="auth.username"
          :rules="[ val => val && val.length > 0 || 'Please type your username']"
          label="Username"
          lazy-rules
          stack-label
          outlined
        />

        <!--  Password  -->
        <q-input
          v-model="auth.password"
          :rules="[
            val => val && val.length > 0 || 'Please type your age',
          ]"
          label="Password"
          :type="isPwd ? 'password' : 'text'"
          lazy-rules
          stack-label
          outlined
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'eva-lock-outline' : 'eva-unlock-outline'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <!--  Form Action  -->
        <div align="right">
          <q-btn
            color="red-4"
            label="login"
            @click="login"
            outline
            type="submit"
            :loading="loading"
          />
        </div>

      </q-card-section>

      <!--  Inner Loading  -->
      <q-inner-loading :showing="loading">
        <q-spinner-gears size="50px" style="color: #ff725e !important;" />
      </q-inner-loading>

    </q-card>

  </q-page>
</template>

<script>
import Login from "components/UI/Login";
import {handelError} from "src/mixins/HandelErrors";

export default {
  components: {Login},
  mixins: [handelError],
  data() {
    return {
      auth: {
        username: '',
        password: ''
      },
      isPwd: true,
      loading: false
    }
  },
  methods: {
    async login () {
      // Start Loading
      this.loading = true
      // send login credentials
      await this.$api.post('login', this.auth).then(({data}) => {
        // stop Loading
        this.loading = false
        // Success massage
        this.$q.notify({
          message: 'Welcom back Admin'
        })
        // Store Dispatch
        this.$store.dispatch('auth/login', data )

      }).catch(err => {
        // Handel Errors Massage
        this.error(err)
        // Stop Loading
        this.loading = false
      })
    }
  }
}
</script>
