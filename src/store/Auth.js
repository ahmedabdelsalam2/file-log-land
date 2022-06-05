import {api} from 'boot/axios'
import { Cookies } from 'quasar'
const state = {
  login: false,
  token: ''
};

const mutations = {
  AUTH_STATUS (state, payload) {
    state.login = payload.status
    state.login = payload.token
  },
};

const actions = {
  login ( { commit }, payload) {
    Cookies.set('token', payload.token)
    commit('AUTH_STATUS', { ...payload, status : true })
    // Redirect
    this.$router.push('/')
  },
  logout ( { commit } ) {
    Cookies.remove('token')
    commit('AUTH_STATUS', { token: '', status : false })
    // Redirect
    this.$router.push('/login')
  },
};

const getters = {
  clients: (store) => store.clients,
  clientInfo: (store) => store.clientInfo
};

export default {
  namespaced: true,
  mutations,
  actions,
  state,
  getters
};
