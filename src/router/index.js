import Vue from "vue";
import VueRouter from "vue-router";
import books from "../views/books";
import wishList from "../views/wishList"
import bookInfo from "../views/bookInfo"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "books",
    component: books
  },
  {
    path: "/bookInfo/:book",
    name: "bookInfo",
    component: bookInfo
  },
  {
    path: "/wishList",
    name: "wishList",
    component: wishList
  },
];

const router = new VueRouter({
  routes
});

export default router;
