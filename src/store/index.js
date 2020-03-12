import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    book: {},
    loading: false,
    order: {}
  },
  mutations: {
    bookInfo(state, book) {
      state.book = book;
    } /* ,
    order(state, order) {
      state.order = order;
    } */
  } /* ,
  actions: {
    async sendOrder(ctx) {
      ctx.state.loading = true;

      let order = {
        items: ctx.state.cart
      }

      ctx.state.loading = false;
      ctx.commit('order', response);
    }
  }, */,
  modules: {}
});
