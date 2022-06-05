import {Cookies, Platform, Loading, QSpinnerIos} from "quasar";

export default async ( { store, router } ) => {

  /*
***********************
******* Loading *******
***********************
 */

  Loading.show({
    spinner: QSpinnerIos
  })

  router.beforeEach( ( to, from, next ) => {

    const logedin = Cookies.has('token')

    if (!logedin && to.path === '/') {
      return next('/login')
    }
    else if (logedin && to.path === '/login') {
      return next('/')
    }

    next()

  })

  router.afterEach((to, from, next) => {
    /*
    ***********************
    ******* Loading *******
    ***********************
     */
    Loading.hide()

  })

}
