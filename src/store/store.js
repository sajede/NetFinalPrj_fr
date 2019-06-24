import Vue from 'vue';
import Vuex from 'vuex';

import user from './moduls/User';
import sessionId from './moduls/Session';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user,
    sessionId,
  }
});
