<template>
  <div class="inside">
    <ol class="bread-crumbs">
      <li @click="gotoHome">首頁</li>
      <li>{{ record.Name }}</li>
    </ol>
    <div class="content">
      <div class="pic">
        <img :src="record.Picture1" />
      </div>
      <div class="text">
        <h1>{{ record.Name }}</h1>
        <div class="zone">
          <h3 class="zone">{{ record.Zone }}</h3>
          <!-- <h3 class="classification">{{ classification[record.Class1] }}</h3> -->
        </div>
        <div class="add">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <p>{{ record.Add }}</p>
        </div>
        <div class="date">
          <i class="fa fa-calendar" aria-hidden="true"></i>
          <p>{{ record.Opentime }}</p>
        </div>
        <article>{{ record.Toldescribe }}</article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      record: [],
      api:
        "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97"
    };
  },
  mounted() {
    this.fetchData(this.$route.query["id"]);
  },
  methods: {
    fetchData(id = "") {
      if (id == "") return;

      this.axios.get(this.api + `&q=${id}`).then(response => {
        this.record = response.data.result.records[0];
      });
    },
    gotoHome() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.bread-crumbs {
  margin: 20px 4.8%;
  padding: 10px 4.8%;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  background: #ebebeb;
}

.bread-crumbs li:first-child {
  margin-right: 10px;
  color: #9013fe;
}

.bread-crumbs li:first-child::after {
  content: "/";
  margin-left: 10px;
}

.bread-crumbs li:not(first-chile) {
  color: #888;
}

.content {
  background-color: white;
}

.pic {
  width: 100%;
  margin: 20px 0;
}

.pic img {
  width: 100%;
  height: 100%;
}

.text {
  padding: 0 9.7% 20px;
}

.text h1 {
  font-size: 36px;
  color: #9013fe;
  line-height: 45px;
}

.add i,
.date i {
  margin-right: 10px;
  float: left;
}

.add p,
.date p {
  font-size: 16px;
  color: #9b9b9b;
}

.text article {
  font-size: 16px;
  line-height: 24px;
}

@media screen and (min-width: 767px) {
  .inside {
    width: 50.5%;
    margin: 0 5.2%;
    float: left;
  }

  .bread-crumbs {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>