<template>
  <div class="full">
    <!-- top tool bar https://bootstrap-vue.org/docs/directives/scrollspy#scrollspy here -->
    <h1 class="background_text">okmt's portfolio</h1>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
.full {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url("../assets/png/background.png") center / cover;
}
.background_text {
  margin: 0;
  position: absolute;
  top: calc(50% - 0.5em);
  width: 100%;
  font-size: 5em;
  text-align: center;
  line-height: 0.95em;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 1);
}
</style>
