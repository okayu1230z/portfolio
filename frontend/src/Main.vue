<template>
  <div>
    <div id="top">
      <Top />
    </div>
    <div id="content">
      <Content />
    </div>
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Content from "@/components/Content.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Main",
  components: {
    Top,
    Content,
    Footer,
  },
};
</script>

<!-- CSS to apply to the entire portfolio -->
<style>
#top {
  font-family: "Meiryo", sans-serif;
}
#content {
  font-family: "Meiryo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000b6;
  margin-top: 60px;
}
#footer {
  font-family: "Meiryo", sans-serif;
  text-align: center;
  color: #ffffffb6;
  margin-top: 60px;
}
</style>
