<template>
  <div id="app">
    <router-view :books="books" />
  </div>
</template>

<script>
import books from "./assets/childrensBooks.json";

export default {
  name: "App",
  computed: {
    books() {
      return books.books;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  font-family: "Roboto", sans-serif;
  color: white;
}
</style>
