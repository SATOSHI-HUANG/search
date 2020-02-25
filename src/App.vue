<template>
  <div id="app">
    <navbar></navbar>
    <search></search>
  </div>
</template>

<script>
import Navbar from "./components/navbar/index.vue";
import Search from "./components/search/index.vue";

export default {
  name: "App",
  components: {
    Navbar,
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
</style>
