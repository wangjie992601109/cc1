<template>
  <div class="top">
    <span>门店受益赠品</span>
    <Sop id="linesa" :option="option" ref="registers_creditChart"></Sop>
  </div>
</template>

<script>
  import Sop from '../Echarts.vue'
  export default ({
    name: 'topEcharts',
    data() {
      return {
        chartData: {
          xData: ['喀什市','疏附县','疏勒县','英吉沙县','泽普县','岳普湖县'],
          sData: [254, 3254, 1654, 2454,3000,1000],
          BackgroundColor: "#011c3a"
        },

        option: {
          grid: {
            left: '5%',
            right: '4%',
            bottom: '10%',
            height: "80%",
            top: '15%',
            containLabel: true
          },
          xAxis: {
            data: [],
            axisLine: {
              lineStyle: {
                color: '#3d5269'
              }
            },
            axisLabel: {
              color: '#fff',
              fontSize: 10,
              interval:0,
                 rotate:40
            }
          },
          yAxis: {
            name: "单位:次",
            nameTextStyle: {
              color: '#fff',
              fontSize: 12
            },
            axisLine: {
              lineStyle: {
                color: '#3d5269'
              }
            },
            axisLabel: {
              color: '#fff',
              fontSize: 12,

            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#2d3d53'
              }
            },
            interval: 500,

          },
          series: [{
            type: 'bar',
            barWidth: 25,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00fcae'
                }, {
                  offset: 1,
                  color: '#006388'
                }]),
                opacity: 1,
              }
            },
            label: {
              normal: {
                show: true,
                fontSize: 12,
                fontWeight: 'bold',
                color: '#ffffff',
                position: 'top',
              }
            },
            data:[]
          }]
        }
      }
    },

    components: {
      Sop
    },
    mounted() {

      this.resods()
    },

    methods: {

      resods() {
        this.option.xAxis.data = this.chartData.xData
        this.option.series[0].data = this.chartData.sData
        this.option.backgroundColor = this.chartData.BackgroundColor
      }

    }

  })
</script>

<style scoped="scoped">
  .top {
    height: 33%;
    color: #fff;
    font-size: 14px;
    line-height: 30px;
    text-indent: 5px;
    border: 0;
  }

  .top span {
    border: 0;
  }

</style>
