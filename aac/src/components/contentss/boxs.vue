<template>
  <div class="Box">
    <Lefts></Lefts>
    <Conts></Conts>
    <Rigths></Rigths>
  </div>
</template>

<script>

  export default({
  components:{
    Lefts:resolve=>require(['./lefts'],resolve),
    Conts:resolve=>require(['./contnerts'],resolve),
    Rigths:resolve=>require(['./rigths'],resolve),
  }
  })
</script>

<style scoped="scoped">
  .Box{
    border: 0;
    width: 100%;
    height: 93%;
    position: absolute;
    display: flex;

  }

</style>
