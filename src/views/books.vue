<template>
  <div>
    <main class="books">
      <book :book="book" v-for="(book, index) in books" :key="index" />
    </main>
  </div>
</template>

<script>
import book from "../components/book";

export default {
  name: "books",
  components: {
    book
  },
  props: {
    books: Array
  },

  data: () => {
    return {
      bookCart: [],
      counter: 0
    };
  },
  watch: {
    bookCart() {
      localStorage.setItem("wishlist", JSON.stringify(this.bookCart));
      this.counter = this.bookCart.length;
    }
  },
  methods: {
    addBook(book) {
      let index = this.bookCart.indexOf(book);
      if (this.bookCart[index] != book) {
        this.bookCart.push(book);
      }
    }
  }
};
</script>

<style>
.books {
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  justify-content: center;
}

.overlay {
  background: linear-gradient(0deg, #222222, #222222), #eeeeee;
}
</style>
