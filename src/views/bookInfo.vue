<template>
  <div>
    <section class="book-view">
      <button @click="back" class="return">
        <i class="fas fa-arrow-circle-left"></i>
      </button>
      <button @click="wishList" class="bookshelf">
        <i class="fas fa-clipboard-list"></i>
      </button>
      <section class="content" :style="{ backgroundColor: book.color }">
        <aside></aside>
        <section class="title">
          <h1>{{ book.title }}</h1>
          <h2>{{ book.author }}</h2>
        </section>
      </section>
      <div class="book-info">
        <div>
          <h1>{{ book.title }}</h1>
          <h2>{{ book.author }}</h2>
        </div>
        <p class="plot">{{ book.plot }}</p>
        <div class="short-info">
          <p>
            Audience:
            <span>{{ book.audience }}</span>
          </p>
          <p>
            Pages:
            <span>{{ book.pages }}</span>
          </p>
          <p>
            First Published:
            <span>{{ book.year }}</span>
          </p>
          <p>
            Publisher:
            <span>{{ book.publisher }}</span>
          </p>
        </div>
        <button @click="add(book)" class="add">Add to Wish List</button>
      </div>
      <p v-show="display" class="book-added">Book added to wishlist</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "bookInfo",
  props: {
    books: Array
  },
  //filtrerar ut ett object från books: Array genom book.id som skickats som param genom route.push från book.vue
  computed: {
    book() {
      return this.books.filter(book => book.id == this.$route.params.book)[0]
    },
  },
  watch: {
    cart() {
      localStorage.setItem("wishList", JSON.stringify(this.cart));
    }
  },
  data: () => {
    return {
      index: 0,
      display: false,
      cart: []
    };
  },
  methods: {
    add(book) {
        this.cart = JSON.parse(localStorage.getItem("wishList"));

        if(this.cart.indexOf(book) === -1) {
        this.cart.push(book);
        localStorage.setItem("wishList", JSON.stringify(this.cart));
        this.display = true;
        }
    },
    back() {
      this.$router.push('/')
    },
    wishList() {
      this.$router.push('/wishList')
    }
  }
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

.book-view {
  max-width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, #222222, #222222), #eeeeee;
  display: grid;
  grid-template-areas: "return mybooks" "cover info" ". added";
  grid-template-columns: 400px 460px;
  grid-template-rows: 10rem 30rem 3rem;
  justify-content: center;
  align-content: center;
}

.return {
  grid-area: return;
  background: none;
  border: none;
  font-size: 2.5rem;
  height: 5rem;
  display: flex;
  color: white;
  align-self: end;
  padding-bottom: 0.5rem;
}

.bookshelf {
  grid-area: mybooks;
  background: none;
  border: none;
  font-size: 2.5rem;
  height: 5rem;
  display: flex;
  color: white;
  align-self: end;
  padding-bottom: 0.5rem;
  justify-content: flex-end;
}
.counter {
  font-size: 1.2rem;
  background: red;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  font-family: roboto;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  grid-area: cover;
  font-size: 1.2rem;
  display: flex;
  align-items: flex-end;
  width: 400px;
  justify-self: flex-end;
  height: auto;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  background: linear-gradient(
    190deg,
    rgba(255, 255, 255, 0.335) 0%,
    rgba(0, 0, 0, 0.103) 100%
  );
}

.content aside {
  height: 100%;
  background: rgba(0, 0, 0, 0.342);
  width: 4px;
  margin: 0 1rem;
}

.title {
  color: rgba(0, 0, 0, 0.787);
  padding: 0 5px 15px 5px;
}

.book-info {
  margin-left: 2rem;
  max-width: 460px;
  grid-area: info;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.plot {
  line-height: 1.5;
}

.short-info {
  height: 5rem;
  width: 25rem;
  display: flex;
  flex-flow: column wrap;
  padding: 10px;
  background: rgba(196, 196, 196, 0.08);
  border-radius: 5px;
}

.short-info p {
  margin: 10px 0 10px 20px;
  font-weight: 600;
}

span {
  font-weight: 100;
}

.add {
  display: flex;
  align-self: flex-start;
  padding: 8px 20px;
  background: white;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.book-added {
  grid-area: added;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  font-style: italic;
}
</style>
