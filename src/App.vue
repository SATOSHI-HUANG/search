<template>
  <div id="app">
    <navbar></navbar>
    <div class="wrap">
      <side></side>
      <search></search>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar/index.vue";
import Side from "./components/side/index.vue";
import Search from "./components/search/index.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Side,
    Search
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #f2f2f2;
}

@media screen and (min-width: 1200px) {
  .wrap {
    max-width: 1440px;
    margin: auto;
  }
}
</style>
