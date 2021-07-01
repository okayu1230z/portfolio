<template>
  <div class="vertical">
    <h3 class="venti">
      <b-icon-code-slash />
      Programming Skills
    </h3>
    <div>
      <ul>
        <li>
          <b-card
            bg-variant="light"
            header="Language"
            style="width: 25rem"
            class="text-center"
          >
            <template #header>
              <h4 class="grande">Language</h4>
            </template>
            <b-card-text>
              <ul v-for="pskill in pskills" :key="pskill.name">
                <li>
                  <h5 class="tall">{{ pskill.name }}</h5>
                </li>
                <li>
                  <b-img
                    v-bind:src="pskill.icon"
                    width="32"
                    :alt="pskill.name"
                  />
                </li></ul
            ></b-card-text>
          </b-card>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <b-card
            bg-variant="light"
            header="Framework"
            style="width: 25rem"
            class="text-center"
          >
            <template #header>
              <h4 class="grande">Framework</h4>
            </template>
            <b-card-text>
              <ul v-for="fskill in fskills" :key="fskill.name">
                <li>
                  <h5 class="tall">{{ fskill.name }}</h5>
                </li>
                <li>
                  <b-img :src="fskill.icon" width="32" :alt="fskill.name" />
                </li></ul
            ></b-card-text>
          </b-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgrammingSkill",
  props: ["pskills", "fskills"],
};
</script>
