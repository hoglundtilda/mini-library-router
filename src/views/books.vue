<template>
  <div>
    <main class="books">
      <div class="container">
        <book :book="book" v-for="(book, index) in books" :key="index" />
      </div>
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
.container {
  width: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.books {
  display: flex;
  width: 100%;
  justify-content: center;
}

.overlay {
  background: linear-gradient(0deg, #222222, #222222), #eeeeee;
}
</style>
