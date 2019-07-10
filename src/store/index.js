import Vue from 'vue'
import Vuex from 'vuex'
import common from './common'
import user from './user'
import gallery from './gallery'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        common,
        user,
        gallery
    }
})

export default store