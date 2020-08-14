<template>
  <div class="lefts">
  
    <Top></Top>
    <Box></Box>
    <Footer></Footer>
  </div>
</template>

<script>
  export default({
    components:{
      Top:resolve=>require(['../sop/LeftEac/topEcharts'],resolve),
      Box:resolve=>require(['../sop/LeftEac/boxEcharts'],resolve),
      Footer:resolve=>require(['../sop/LeftEac/footerEcharts'],resolve)
    }
  })
</script>

<style scoped="scoped">
  .lefts{
    width: 25%;
  }

</style>
