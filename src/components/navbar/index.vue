<script>
export default {
  methods: {
    gotoHome() {
      if (this.$route.name == "list") return;
      this.$router.push({ path: "/search" });
    }
  }
};
</script>

<template src="./template.html"></template>

<style scoped src='./style.css'></style>