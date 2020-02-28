<template>
  <div class="pages" v-if="total != 0">
    <div class="page" @click="changePage(currentPage - 1)">«</div>
    <div
      class="page"
      v-for="page in showPages"
      :key="page"
      @click="changePage(page)"
      :class="{active: currentPage == page}"
    >{{ page }}</div>
    <div class="page" @click="changePage(currentPage + 1)">»</div>
  </div>
</template>

<script>
export default {
  props: {
    total: Number,
    currentPage: Number,
    limit: Number
  },
  data() {
    return {
      pages: 0,
      showPages: []
    };
  },
  mounted() {
    this._total = this.total;
  },
  methods: {
    changePage(page) {
      if (this.currentPage == page || page < 1) return;

      this.$emit("change", page);
    },
    pagesArray(current, pages) {
      let start = 0;
      let end = 0;

      if (pages > 5 && current < 4) {
        start = 1;
        end = 5;
      } else if (pages > 5 && current >= pages - 2) {
        start = pages - 4;
        end = pages;
      } else {
        start = current - 2 <= 0 ? 1 : current - 2;
        end = current + 2 > pages ? pages : current + 2;
      }

      this.showPages = this.createShowPages(start, end);
    },
    createShowPages(start = 0, end = 0) {
      let ary = [];

      for (let i = start; i <= end; i++) {
        ary.push(i);
      }

      return ary;
    }
  },
  watch: {
    total(val) {
      if (val == 0) return;

      this.pages = Math.ceil(val / this.limit);

      this.pagesArray(this.currentPage, this.pages);
    },
    currentPage(val) {
      this.pagesArray(val, this.pages);
    }
  }
};
</script>

<style scoped>
.pages {
  display: flex;
  justify-content: center;
  margin: 10px auto;
  text-align: center;
}

.page {
  float: left;
  width: 42px;
  line-height: 42px;
  background-color: white;
  color: #9013fe;
  cursor: pointer;
  margin: 0 1px;
}

.page:hover {
  background-color: #9013fe;
  color: white;
}

.active {
  background-color: #9013fe;
  color: white;
}

@media screen and (min-width: 767px) {
  .pages {
    float: right;
  }
}
</style>