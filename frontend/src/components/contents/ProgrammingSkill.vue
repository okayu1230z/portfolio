<template>
  <div class="horizontal">
    <h3 class="venti left">
      <b-icon-code-slash />
      Programming Skills
    </h3>
    <ul class="mt-3">
      <li>
        <h4 class="tall noline">Language:</h4>
      </li>
      <li class="noline ml-2" v-for="pskill in pskills" :key="pskill.name">
        <b-img v-bind:src="pskill.icon" width="32" :alt="pskill.name" />
      </li>
    </ul>
    <ul>
      <li>
        <h4 class="tall noline">Framework:</h4>
      </li>
      <li class="noline ml-2" v-for="fskill in fskills" :key="fskill.name">
        <b-img v-bind:src="fskill.icon" width="32" :alt="fskill.name" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProgrammingSkill",
  props: ["pskills", "fskills"],
};
</script>
