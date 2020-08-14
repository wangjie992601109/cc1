<template>
  <div class="top">
    <span>最受欢迎水果单品</span>
    <Sop id="lines" :option = "option" ref="registers_creditChart" style="margin: 0 auto;"></Sop>
  </div>
</template>

<script>
import Sop from '../Echarts.vue'
 export default({
   name:'topEcharts',
   data(){
     return{


          chartData: {
              yData: ["0~5岁","5~10岁","10-30岁","30-50岁","50-70岁","70-100","100以上"],
              sData: [320, 302, 341, 374, 390, 650, 420],
              Color:"#fff",
               BackgroundColor: "#011c3a"
             },

          option:{
             grid: {
                    left: '10%',
                    right: '4%',
                    bottom: '3%',
                    top:'10%',
                    containLabel: true
                },
                xAxis: [{
                       splitLine: {
                           show: false
                       },
                       type: 'value',
                       show: false,
                   }],
                   yAxis: [{
                       splitLine: {
                           show: false
                       },
                       axisLine: { //y轴
                           show: false
                       },
                       type: 'category',
                       axisTick: {
                           show: false
                       },
                      data:[],
                       axisLabel: {

                       }
                   }],
                   series: [{
                       name: '标准化',
                       type: 'bar',
                       barWidth: 10, // 柱子宽度
                       label: {
                           show: true,
                           position: 'right', // 位置
                           color: '#1CD8A8',
                           fontSize: 14,
                           fontWeight: 'bold', // 加粗
                           distance: 5 // 距离
                       }, // 柱子上方的数值
                       itemStyle: {
                           barBorderRadius: [0, 20, 20, 0], // 圆角（左上、右上、右下、左下）
                           color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                               '#2FAEF2', '#1CD8A8'
                           ].map((color, offset) => ({
                               color,
                               offset
                           }))), // 渐变
                       },
                       data:[]
                   }, ]
          }
     }
   },

   components:{
     Sop
   },
   mounted() {

    this.resods()
   },

  methods:{

      resods(){
        this.option.yAxis[0].data = this.chartData.yData
        this.option.series[0].data = this.chartData.sData
        this.option.yAxis[0].axisLabel.color = this.chartData.Color
        this.option.backgroundColor = this.chartData.BackgroundColor
      }

  }

 })





</script>

<style scoped="scoped">
.top{
  height: 33%;
  color: #fff;
  font-size: 14px;
  line-height: 30px;
  text-indent: 5px;
  border: 0;
  margin: 0 auto;
}

.top span{
  border: 0;
  display: block;
  }

</style>
