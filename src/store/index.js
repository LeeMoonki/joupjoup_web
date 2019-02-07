import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

// Vue에 middleware 등록
Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

// 브라우저가 열렸을 때 체크하여 state 관리를 할 때 사용한다
// ex)
// const { token } = localStorage;
// store.commit('LOGIN', token);

export default store;