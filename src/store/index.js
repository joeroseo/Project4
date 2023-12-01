import { createStore } from 'vuex';

export default createStore({
  state: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    gender: '',
    water: 0,
    meals: 0,
    dairy: '',
    wheat: '',
    sugar: '',
    walk: '',
    weight: 0,
    primaryKey: '',
    key: '',
  },
  mutations: {
    setFirstName(state, value) {
      console.log('Setting firstName:', value);
      state.firstName = value;
    },
  },
  actions: {},
  modules: {}
});
