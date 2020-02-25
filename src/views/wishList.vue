<template>
  <div class="wrapper">
    <section class="wishList">
      <button @click="back" class="return">
        <i class="fas fa-arrow-circle-left"></i>
      </button>
      <h1>Wish List</h1>
      <span class="divider"></span>
      <div class="book-list">
        <li v-for="(book, index) in cart" :key="index" class="book">
          <button @click="remove" class="dot">
            <i class="far fa-circle"></i>
          </button>
          <h2 class="book-name">{{ book.title }} - {{ book.author }}</h2>
          <button @click="remove(index)" class="remove">
            <i class="fas fa-times"></i>
          </button>
        </li>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "wishList",
  data: () => {
    return {
     cart: []
    }
  },
  watch: {
    cart() {
      localStorage.setItem("wishList", JSON.stringify(this.cart));
    }
  },
  methods: {
    back() {
      this.$router.push('/')
    },
    remove(index) {
      this.cart = JSON.parse(localStorage.getItem("wishList"));
      this.cart.splice(index, 1)
      localStorage.setItem("wishList", JSON.stringify(this.cart));
    }
  },
    mounted() {   
      this.cart = JSON.parse(localStorage.getItem("wishList"));   
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

h1 {
  font-size: 2.25rem;
}

h2 {
  font-size: 1.25rem;
  font-weight: 100;
}

p {
  font-size: 1rem;
  font-weight: 100;
}

.wrapper {
  display: grid;
  width: 100vw;
}

.wishList {
  height: 100vh;
  grid-template-areas: "return headline" "divider divider" "book book";
  grid-template-rows: 5rem 1rem auto;
  background: linear-gradient(0deg, #222222, #222222), #eeeeee;
  display: grid;
  justify-content: center;
  align-content: center;
}

.return {
  grid-area: return;
  background: none;
  border: none;
  font-size: 2.5rem;
  height: 5rem;
  width: 16.5rem;
  display: flex;
  color: white;
  padding-bottom: 0.5rem;
}

h1 {
  grid-area: headline;
  display: flex;
  width: 23.5rem;
  align-items: center;
  justify-content: flex-end;
}

.divider {
  grid-area: divider;
  border-bottom: 1px solid white;
  margin-bottom: 1rem;
}

.book-list {
  grid-area: book;
}

.book {
  display: grid;
  grid-template-columns: 10% 80% 10%;
  height: 5rem;
  align-items: center;
  width: 40rem;
}

button {
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
}

.dot {
  font-size: 0.8rem;
}

.book-name {
  margin-left: 1rem;
  width: 100%;
}

.remove {
  font-size: 1.2rem;
}
</style>
