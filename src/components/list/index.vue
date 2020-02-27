<script>
export default {
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
    this.fetchData();
  },
  methods: {
    fetchData(area = "") {
      let api = this.api + `&q=${area}`;
      this.axios.get(api).then(response => {
        let result = response.data.result;
        this.total = result.total == undefined ? 0 : result.total;
        this.records = result.records;
      });
    },
    gotoInside(index) {
      this.$router.push({
        name: "inside",
        query: { id: this.records[index].Id }
      });
    }
  },
  watch: {
    area(val) {
      this.fetchData(val);
    }
  }
};
</script>

<template src='./template.html'></template>

<style src='./style.css' scoped>
</style>