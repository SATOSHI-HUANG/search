<script>
export default {
  methods: {
    gotoHome() {
      this.$router.push({ path: "/search" });
    }
  }
};
</script>

<template src="./template.html"></template>

<style scoped src='./style.css'></style>