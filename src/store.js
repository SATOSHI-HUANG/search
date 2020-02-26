import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        selectArea: ''
    },
    getters: {
        area(state) {
            return state.selectArea;
        }
    },
    mutations: {
        SET_AREA(state, area) {
            state.selectArea = area
        }
    }
})