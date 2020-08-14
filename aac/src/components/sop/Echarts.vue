<template>
  <div  :id="id" :style="style"></div>

</template>

<script>
  export default({
    name:'Echarts',
    props:{
      id:{
        type:String,

      },
      width:{
        type:String,
        default:"95%"
      },
      height:{
        type:String,
        default:"85%"
      },
      option:{
        type:Object,
        default(){
          return{

            grid: {
                   left: '10%',
                   right: '4%',
                   bottom: '3%',
                   top:'0%',
                   containLabel: true
               },
             xAxis: {

                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                  type: 'line',
                    data: [120, 200, 150, 80, 70, 110, 130],

                }]
          }
        }
      }
    },
    data(){
      return{
        MyEcharts:''
      }
    },
    computed:{
      style(){
        return{
          height:this.height,
          width:this.width
        }
      }
    },
    methods:{
      init(){

        this.MyEcharts = this.$echarts.init(document.getElementById(this.id))
        this.MyEcharts.setOption(this.option)
      }
    },
    mounted(){

      	this.resizefun = ()=>{
                      this.$echarts.init(document.getElementById(this.id)).resize(); //这里的myChart就是要自适应的图表容器Id
                  }
                  window.addEventListener('resize',this.resizefun)

      this.init()
    },

    beforeDestroy() {
        		window.removeEventListener('resize', this.resizefun)
        		this.resizefun = null
      		},

    watch:{
     option:{
       handler(newVal,oldVal){
           if(this.MyEcharts){
             if(newVal){
               this.MyEcharts.setOption(newVal)

             }else{
               this.MyEcharts.setOption(oldVal)

             }
           }
         else{
           this.init()
         }
       },
        deep:true
     }
    }

  })
</script>

<style scoped="scoped">


</style>
