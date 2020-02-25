<template>
  <div @click="bookInfo">
    <article class="book" :style="{ backgroundColor: color }">
      <section class="bg"></section>
      <section class="content">
        <aside></aside>
        <section class="title">
          <h2>{{ title }}</h2>
          <h3>{{ author }}</h3>
        </section>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: "book",
  props: {
    book: Object
  },
  computed: {
    title() {
      return this.book.title;
    },
    author() {
      return this.book.author;
    },
    color() {
      return this.book.color;
    }
  },
  methods: {
    bookInfo() {
      // skicka bokens id, param i bookInfo
      this.$router.push("/bookInfo/"+this.book.id);
    }
  }
};
</script>

<style>
.book {
  border-radius: 5px;
  width: 18rem;
  height: 25rem;
  margin: 1rem;
}

.content {
  font-weight: 900;
  font-size: 1.2rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(
    190deg,
    rgba(255, 255, 255, 0.335) 0%,
    rgba(0, 0, 0, 0.103) 100%
  );
}
.content h3 {
  font-size: 1rem;
}
.book aside {
  height: 100%;
  background: rgba(0, 0, 0, 0.342);
  width: 4px;
  margin: 0 1rem;
}

.title {
  padding: 0 5px 15px 5px;
}
</style>