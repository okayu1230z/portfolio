<template>
  <div class="vertical">
    <h3 class="venti"><b-icon-bookmarks-fill /> Other Skills</h3>
    <li v-for="skill in oskills" :key="skill.id">
      <h5 class="tall">{{ skill }},</h5>
    </li>
  </div>
</template>

<script>
export default {
  name: "OtherSkill",
  props: ["oskills"],
};
</script>