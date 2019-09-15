import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import Cookies from "js-cookie";

Vue.use(Vuex);

// Modules

const vuexCookie = new VuexPersistence({
    restoreState: (key, storage) => Cookies.getJSON(key),
    saveState: (key, state, storage) =>
      Cookies.set(key, state, {
        expires: 3
      }),
  })

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    modules: [],
});

export default new Vuex.Store({
    modules: {
    },
    plugins: [vuexCookie.plugin, vuexLocal.plugin]
});