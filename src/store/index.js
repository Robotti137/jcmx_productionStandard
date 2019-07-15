import Vue from 'vue'
import Vuex from 'vuex'
import common from './common'
import user from './user'
import gallery from './gallery'
import order from './order'
import houseOrder from './house_order'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        common,
        user,
        gallery,
        order,
        houseOrder
    }
})

export default store