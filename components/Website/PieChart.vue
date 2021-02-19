<template>
  <div class="is-flex is-align-center mr-2">
    <div class="chart">
      <div class="d1">
        <div><span></span></div>
      </div>
      <div class="d2">
        <div><span></span></div>
      </div>
    </div>
    <p>{{ percentage }}%</p>
  </div>
</template>

<script>
export default {
  name: 'PieChart',
  props: {
    percentage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      value: 150,
    }
  },
}
</script>

<style lang="scss" scoped>
.chart {
  width: 150px;
  height: 150px;
  background: #f0ffd4;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  transform: rotate(161.1deg);
}
.chart .d1 {
  width: 300px;
  height: 300px;
  position: absolute;
  top: -75px;
  left: -75px;
  transform: rotate(0deg);
}
.chart .d1 div {
  width: 300px;
  height: 300px;
}
.chart .d1 div:after {
  content: '';
  width: 0;
  height: 0;
  display: block;
  border: solid transparent;
  border-width: 150px;
  border-top-color: #f0ffd4;
  position: relative;
  transform: scaleX(-0.34238);
}
.chart .d1 div span {
  display: block;
  width: 100%;
  position: absolute;
  left: 0;
  top: 34%;
  font-size: 12px;
  text-align: center;
  z-index: 100;
  color: #fff;
  transform: rotate(-161.1deg);
}
.chart .d2 {
  width: 300px;
  height: 300px;
  position: absolute;
  top: -75px;
  left: -75px;
  transform: rotate(180deg);
}
.chart .d2 div {
  width: 300px;
  height: 300px;
}
.chart .d2 div:after {
  content: '';
  width: 0;
  height: 0;
  display: block;
  border: solid transparent;
  border-width: 150px;
  border-top-color: #8cc63f;
  position: relative;
  transform: scaleX(0.34238);
}
.chart .d2 div span {
  display: block;
  width: 100%;
  position: absolute;
  left: 0;
  top: 34%;
  font-size: 12px;
  text-align: center;
  z-index: 100;
  color: #fff;
  transform: rotate(-341.1deg);
}

p {
  font-size: 0.875rem;
  font-weight: 600;
  margin-left: 15px;
}
</style>
