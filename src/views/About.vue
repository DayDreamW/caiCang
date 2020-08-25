<template>
  <div class="about">
    <h1>
      This is an about page
      <span class="border_1px"></span>
    </h1>
    <ul>
      <li v-for="(item, index) in 10" :key="index">{{index+item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  //const {reactive}
}
</script>
<style scoped lang="less">
//@import '../style/base.less';
.about { 
  
  font-size: 16px;
  h1 {
    font-size: 50px;
    position: relative;
  }
}
</style>
