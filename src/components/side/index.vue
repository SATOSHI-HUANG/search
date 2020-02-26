<template>
  <div class="condition">
    <input type="checkbox" id="loc" />
    <div class="location">
      <div>
        <h2>地區</h2>
        <label for="loc"></label>
      </div>
      <div>
        <select @change="areaChange($event)">
          <option value>全部</option>
          <option v-for="area in areas" :key="area.zip" :value="area.name">{{ area.name }}</option>
        </select>
      </div>
    </div>
    <!-- <input type="checkbox" id="time"> -->
    <!-- <div class="date">
            <div>
                <h2>Date</h2>
                <label for="time"></label>
            </div>
            <div class="from">
                <label>from</label>
                <input type="date">
            </div>
            <div class="to">
                <label>to</label>
                <input type="date">
            </div>
    </div>-->
  </div>
</template>

<script>
import Kaohsiung from "../../assets/Kaohsiung.json"; // eslint-disable-line no-unused-vars

export default {
  data() {
    return {
      areas: []
    };
  },
  mounted() {
    Kaohsiung.AreaList.forEach(element => {
      this.areas.push({
        zip: element.ZipCode,
        name: element.AreaName
      });
    });
  },
  methods: {
    areaChange(event) {
      this.$store.commit("SET_AREA", event.target.value);
    }
  }
};
</script>

<style scoped>
.condition {
  width: 100%;
}

.location,
.date {
  height: 36px;
  position: relative;
  padding-bottom: 20px;
  background-color: #d7d7d7;
  overflow: hidden;
  transition: 0.3s;
}

.location::after,
.date::after {
  content: "";
  width: 100%;
  border: 1px solid #9b9b9b;
  position: absolute;
  bottom: 0;
  left: 0;
}

#loc,
#time {
  opacity: 0;
  position: absolute;
}

.location > div,
.date > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.location div,
.location select {
  width: 100%;
}

.location div,
.date div {
  padding: 0 9.7%;
  box-sizing: border-box;
}

.location h2,
.date h2 {
  font-size: 20px;
  font-weight: bold;
}

.location label,
.date label {
  position: relative;
}

.location label::before,
.date label:last-child::before {
  content: "";
  width: 17px;
  background: #9b9b9b;
  border: 1px solid #9b9b9b;
  position: absolute;
  top: 0;
  right: 0;
}

.location label::after,
.date label:last-child::after {
  content: "";
  width: 17px;
  background: #9b9b9b;
  border: 1px solid #9b9b9b;
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(90deg);
  transition: 0.3s;
}

.location select {
  height: 40px;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
}

#loc:checked + .location,
#time:checked + .date {
  background-color: #ebebeb;
}

#loc:checked + .location {
  height: 96px;
}

#time:checked + .date {
  height: 120px;
}

#loc:checked + .location label::after,
#time:checked + .date label:last-child::after {
  transform: rotate(180deg);
}

.from,
.to {
  display: flex;
  flex-direction: row;
}

.from {
  margin-bottom: 10px;
}

.from input,
.to input {
  height: 24px;
  border: none;
  border-radius: 2px;
}

@media screen and (min-width: 767px) {
  .condition {
    width: 39.1%;
    float: left;
  }

  .location {
    height: 96px;
  }

  .date {
    height: 120px;
  }

  .location,
  .date {
    background-color: #ebebeb;
  }

  .location label,
  .date label:last-child {
    display: none;
  }
}

@media screen and (min-width: 1200px) {
  .condition {
    width: 25%;
  }
}
</style>