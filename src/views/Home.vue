<template>
  <div class="home">
    <Title />
    <!-- <div id="nav">
      <div>魏著琴 -- 13194870803</div>
      <router-link to="/GameIndex">游戏</router-link>
    </div> -->
    <router-link to="/GameIndex">游戏</router-link>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
import Title from "../components/title";
export default {
  name: "Home",
  components: { Title }
};
</script>
<style lang="less"></style>
