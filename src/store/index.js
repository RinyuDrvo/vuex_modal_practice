import Vue from 'vue'
import Vuex from 'vuex'
import basicModal from './modules/basicModal'

Vue.use(Vuex)

const state = {
  //
};

const modules = {
  basicModal
};

const store = new Vuex.Store({
  state,
  modules
});

export default store;