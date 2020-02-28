<script>
import Pages from "../pages/index.vue";

export default {
  components: {
    Pages
  },
  data() {
    return {
      records: [],
      classification: {
        "1": "文化類",
        "2": "生態類",
        "3": "古蹟類",
        "4": "廟宇類",
        "5": "藝術類",
        "6": "小吃 / 特產類",
        "7": "國家公園類",
        "8": "國家風景區類",
        "9": "休閒農業類",
        "10": "溫泉類",
        "11": "自然風景類",
        "12": "遊憩類",
        "13": "體育健身類",
        "14": "觀光工廠類",
        "15": "都會公園類",
        "16": "森林遊樂區類",
        "17": "林場類",
        "18": "其他"
      },
      total: 0,
      limit: 10,
      currentPage: 1,
      api:
        "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97"
    };
  },
  computed: {
    area() {
      return this.$store.getters["area"];
    }
  },
  mounted() {
    let query = this.$route.query;
    let _area = query["area"] == undefined ? "all" : query["area"];
    this.currentPage = query["page"] == undefined ? 1 : parseInt(query["page"]);
    let _offset = (this.currentPage - 1) * this.limit;

    this.fetchData(_area, this.limit, _offset);
  },
  methods: {
    fetchData(area = "", limit = 10, offset = 0) {
      let _area = area == "all" ? "" : area;

      let api = this.api + `&q=${_area}&limit=${limit}&offset=${offset}`;
      this.axios.get(api).then(response => {
        let result = response.data.result;
        this.total = result.total == undefined ? 0 : result.total;
        this.records = result.records;

        let path = this.$router.history.current.path;
        this.$router.push({
          path,
          query: {
            area: area,
            page: this.currentPage
          }
        });
      });
    },
    gotoInside(index) {
      this.$router.push({
        name: "inside",
        query: { id: this.records[index].Id }
      });
    },
    changePage(val) {
      let offset = (val - 1) * this.limit;
      this.fetchData(this.area, this.limit, offset);

      this.currentPage = val;
    }
  },
  watch: {
    area(val) {
      this.fetchData(val, this.limit);
    }
  }
};
</script>

<template src='./template.html'></template>

<style src='./style.css' scoped>
</style>