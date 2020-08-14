<template>
  <div class="contenr">
    <Headers></Headers>
    <Box></Box>
  </div>
</template>

<script>
// const Headers = () => import("./nav/headers")
// const Box = () => import("./contnetss/boxs")
  export default({
   components:{
     Headers:resolve =>require (['./nav/headers'],resolve),
     Box:resolve =>require (['./contentss/boxs'],resolve)
   }

  })
</script>

<style scoped="scoped">

</style>
