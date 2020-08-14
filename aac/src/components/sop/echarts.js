<template>
  <div class="top">
    折线图
    <Sop id="linesa" :option = "option"></Sop>
  </div>
</template>

<script>
import Sop from '../Echarts.vue'
 export default({
   name:'topEcharts',
   data(){
     return{

       chartData: {

           yData:['0~5岁', '5~10岁', '10-30岁', '30-50岁', '50-70岁', '70-100', '100以上'],
           sData:[320, 302, 341, 374, 390, 650, 420]
          },
          option:{
             grid: {
                    left: '10%',
                    right: '4%',
                    bottom: '3%',
                    top:'0%',
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
                       // data: ['0~5岁', '5~10岁', '10-30岁', '30-50岁', '50-70岁', '70-100', '100以上'],
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
                           // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                           //     '#2FAEF2', '#1CD8A8'
                           // ].map((color, offset) => ({
                           //     color,
                           //     offset
                           // }))), // 渐变
                       },
                       data: [320, 302, 341, 374, 390, 650, 420]
                   }, ]
          }
     }
   },
   components:{
     Sop
   },
   mounted() {
     this.refData()
   },
  methods:{
    refData(){
      let yData = this.chartData.yData,
      sData = this.chartData.sData;

      for(let i = 0; i<yData.length; i++){
          this.option.xAxis.data.push(yData[i])
          this.option.series[0].data.push(sData[i])

      }
    }
  }

 })





</script>

<style scoped="scoped">
.top{
  height: 33%;
}
/*
.line{
  width: 100%;
  height: 90%;
} */
</style>


<template>
  <div class="top">
    折线图
    <Sop id="linesa" :option = "option"></Sop>
  </div>
</template>

<script>
import Sop from '../Echarts.vue'
 export default({
   name:'topEcharts',
   data(){
     return{

       chartData: {
           xData: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
           sData: [5, 20, 36, 10, 10, 70]
          },
          option:{
               xAxis: {
                    type: 'category',
                    data:[]
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [],
                    type: 'bar',
                    showBackground: true,
                    barWidth:'30',
                    backgroundStyle: {
                        color: 'rgba(220, 220, 220, 0.8)'
                    }
                }]
          }
     }
   },
   components:{
     Sop
   },
   mounted() {
     this.refData()
   },
  methods:{
    refData(){
      let xData = this.chartData.xData,

      sData = this.chartData.sData;
      console.log(xData)

      for(let i = 0; i<xData.length; i++){


          this.option.xAxis.data.push(xData[i])
          this.option.series[0].data.push(sData[i])

      }
    }
  }

 })





</script>

<style scoped="scoped">
.top{
  height: 33%;
}
/*
.line{
  width: 100%;
  height: 90%;
} */
</style>
