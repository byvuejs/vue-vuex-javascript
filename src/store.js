import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { //data
    allUsers: [
      {
        userId: 'hoza123',
        password: '123',
        name: 'Hoza',
        address: 'Seoul',
        src: 'https://goo.gl/oqLfJR'
      },
      {
        userId: 'max123',
        password: '456',
        name: 'Max',
        address: 'Berlin',
        src: 'https://goo.gl/Ksk9B9'
      },
      {
        userId: 'lego123',
        password: '789',
        name: 'Lego',
        address: 'Busan',
        src: 'https://goo.gl/x7SpCD'
      }
    ]
  },
  getters: { // computed
    allUsersCount: state => {
      return state.allUsers.length;
    },
    countOfSeoul: state => {
      return state.allUsers.filter(user => user.address === 'Seoul').length;
    },
    percentOfSeoul: (state, getters) => {
      return Math.round(getters.countOfSeoul / getters.allUsersCount * 100);
    }
  },
  mutations: { // methods - 동기식
    addUsers: (state, payload) => {
      state.allUsers.push(payload);
    }
  },
  actions: { // methods - 비동기
    addUsers: ({ commit }, payload) => {
      commit('addUsers', payload);
    }
  }
});
