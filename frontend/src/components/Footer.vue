<template>
  <div>
    <footer>
      <link
        href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
        rel="stylesheet"
      />
      <p class="sns-links">
        <!--
        <a class="white" href="https://twitter.com/okmt1230z"
          ><i class="fab fa-twitter sns-fa"></i
        ></a>
        <a class="white" href="https://qiita.com/okmt1230z">
          <i class="fas fa-search sns-fa"></i
        ></a>
        -->
        <a class="white" href="https://github.com/okayu1230z"
          ><i class="fab fa-github sns-fa"></i
        ></a>
      </p>
      <p class="sign">&copy; 2021 Yuki Okamoto</p>
    </footer>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #4a86b8;
  font-size: 16px;
  font-weight: bold;
}
.white {
  color: #ffffff;
}
footer {
  width: 100%;
  height: 100px;
  background-color: #2e3234;
  padding: 10px;
  color: #f8f8f8;
}
.sns-links {
  margin: 0 auto;
  text-align: center;
  height: 60px;
  padding: 5px;
}
.sns-fa {
  font-size: 32px;
  padding: 0.2px;
  vertical-align: middle;
}
</style>
