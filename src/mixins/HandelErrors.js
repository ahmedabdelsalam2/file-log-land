export const handelError = {
  methods: {
    error(err) {
      const errors = {}
      Object.assign(errors, err.response.data.errors)
      console.log('error => ', errors);
      for (const err in errors) {
        this.$q.notify({
          message: errors[err],
          color: 'red-4',
          textColor: 'white',
          position : 'bottom-right',

        })
      }
    }
  }
}
