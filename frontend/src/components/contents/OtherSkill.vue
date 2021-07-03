<template>
  <div class="vertical">
    <h3 class="venti left"><b-icon-bookmarks-fill /> Other Skills</h3>
    <ul>
      <li class="left" v-for="skill in oskills" :key="skill.id">
        <h5 class="tall noline left" style="width: 100%">{{ skill }},</h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OtherSkill",
  props: ["oskills"],
};
</script>
