<template>
  <div class="vcenter ml-2">
    <!-- check icons this site:  https://icons.getbootstrap.com/ -->
    <Profile id="profile" :profiles="profiles" />
    <ProgrammingSkill :pskills="pskills" :fskills="fskills" />
    <OtherSkill :oskills="oskills" />
    <Qualification :qualifications="qualifications" />
    <Work :works="works" />
    <Article :articles="articles" />
  </div>
</template>

<script>
import Profile from "@/components/contents/Profile.vue";
import ProgrammingSkill from "@/components/contents/ProgrammingSkill.vue";
import OtherSkill from "@/components/contents/OtherSkill.vue";
import Qualification from "@/components/contents/Qualification.vue";
import Work from "@/components/contents/Work.vue";
import Article from "@/components/contents/Article.vue";

export default {
  name: "Content",
  components: {
    Profile,
    ProgrammingSkill,
    OtherSkill,
    Qualification,
    Work,
    Article,
  },
  data: function () {
    return {
      // my profile data
      profiles: [
        { key: "Name", body: "Yuki Okamoto" },
        { key: "Handle Name", body: "okmt" },
        { key: "Country", body: "Japan" },
        { key: "Job", body: "Software Enginner" },
      ],
      // programming lang skills
      pskills: [
        { name: "Ruby", icon: require("@/assets/png/ruby.png") },
        { name: "JavaScript", icon: require("@/assets/png/javascript.png") },
        { name: "Python", icon: require("@/assets/png/python.png") },
        { name: "Dart", icon: require("@/assets/png/dart.png") },
        { name: "Golang", icon: require("@/assets/png/golang.png") },
      ],
      // framework skills
      fskills: [
        { name: "Rails", icon: require("@/assets/png/rails.png") },
        { name: "Vue", icon: require("@/assets/png/vue.png") },
        { name: "Flask", icon: require("@/assets/png/flask.png") },
        { name: "Django", icon: require("@/assets/png/django.png") },
        { name: "Flutter", icon: require("@/assets/png/flutter.png") },
        { name: "gin", icon: require("@/assets/png/gin.png") },
      ],
      // other skills
      oskills: [
        "Constraint Programming",
        "Linux",
        "Docker",
        "Git",
        "Internet of Things",
        "Computer Network",
      ],
      // qualifications
      qualifications: [
        {
          name: "LPIC level 1",
          date: "2021/07/24",
        },
        {
          name: "応用情報技術者", //"Applied Information Technology Engineer Examination",
          date: "2021/10/10",
        },
      ],
      // my works
      works: [
        {
          title: "Sudoku Solver",
          image: require("@/assets/png/sudoku_solver.png"),
          body: "Web service using high-speed SAT solver to solve Sudoku. The solver can only solve Sudoku in 9x9 format. A new version will be released soon.",
          link: "http://okmt1230z.com/sudoku/sudoku.html",
          work_active: true,
          link_active: true,
        },
        {
          title: "DIY-SDFS",
          image: require("@/assets/png/diy-sdfs.png"),
          body: "We propose a Network Attached Storage (NAS) integrated file system called the “Do It Yourself-Sensor Data File System (DIY-SDFS)”, which has advantages of being on-site, low-cost, and highly scalable.",
          link: "https://github.com/watalabo/DIY-SDFS",
          work_active: true,
          link_active: true,
        },
        {
          title: "Wani CTF",
          image: require("@/assets/png/wanictf.png"),
          body: "WaniCTF is a CTF for beginners organized by Wani Hackase, a circle at Osaka University. I have created web and misc issues at the WaniCTF, which has been held twice.",
          link: "https://wanictf.org/",
          work_active: true,
          link_active: true,
        },
        {
          title: "Compact-CAS",
          image: require("@/assets/png/ccas.jpg"),
          body: "This is Compact-CAS (Compact-CameraAndStorage), which provides cameras, storage, and even a web service to check the data. Based on this manual, you can inexpensively build a surveillance camera system for which you want historical data.",
          link: "https://github.com/okayu1230z/c-cas",
          work_active: true,
          link_active: true,
        },
      ],
      // my article
      articles: [
        // I'd like to built computer
        //{
        //  title: "Homebuilt computer manual",
        //  link: "https://www.okmt.dev/article/homebuilt",
        //},
        {
          title: "CTF Writeup | Lord of SQLi",
          link: "https://github.com/okayu1230z/LordOfSQLi",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 小さな画面 */
@media screen and (max-width: 600px) {
  .vcenter {
    width: 400px;
    text-align: center;
    display: inline-block;
  }
}
/* 大きな画面 */
@media screen and (min-width: 600px) {
  .vcenter {
    width: 900px;
    text-align: center;
    display: inline-block;
  }
}
.vertical ::v-deep .venti {
  margin: 48px 0px 16px;
  font-size: 32px;
  font-weight: bold;
}
.vertical ::v-deep .grande {
  margin: 0px 0px 0px;
  font-size: 20px;
  font-weight: bold;
}
.vertical ::v-deep .tall {
  margin: 0px 0px 0px;
  font-size: 16px;
  font-weight: bold;
}
.vertical ::v-deep .left {
  text-align: left;
}
.vertical ::v-deep .right {
  text-align: right;
}
.vertical ::v-deep .noline {
  display: inline;
}
.vertical ::v-deep ul {
  width: 400px;
  padding-left: 0;
  list-style: none;
  display: inline-block;
}
.vertical ::v-deep li {
  display: flex;
  margin: 16px 0px;
}
.vertical ::v-deep .link {
  transition: color 0.3s;
  font-weight: bold;
}
.vertical ::v-deep .link:hover {
  color: #4ab866;
}
.horizontal ::v-deep .venti {
  margin: 48px 0px 16px;
  font-size: 32px;
  font-weight: bold;
}
.horizontal ::v-deep .grande {
  margin: 0px 0px 0px;
  font-size: 20px;
  font-weight: bold;
}
.horizontal ::v-deep .tall {
  margin: 0px 0px 0px;
  font-size: 16px;
  font-weight: bold;
}
.horizontal ::v-deep .left {
  text-align: left;
}
.horizontal ::v-deep .right {
  text-align: right;
}
.horizontal ::v-deep .noline {
  display: inline;
}
.horizontal ::v-deep ul {
  width: 400px;
  padding-left: 0;
  list-style: none;
  display: inline-block;
  text-align: left;
}
.horizontal ::v-deep li {
  display: flex;
  margin: 16px 0px;
  display: inline;
}
.horizontal ::v-deep .link {
  transition: color 0.3s;
  font-weight: bold;
}
.horizontal ::v-deep .link:hover {
  color: #4ab866;
}
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
  font-size: 2em;
  padding: 0.2em;
  vertical-align: middle;
}
</style>
