<template>
  <div class="vertical">
    <h3 class="venti"><b-icon-file-person-fill /> Profile</h3>
    <ul v-for="profile in profiles" :key="profile.key">
      <li>
        <h5 class="tall">{{ profile.key }}:</h5>
      </li>
      <li>
        <h5 class="tall">{{ profile.body }}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: ["profiles"],
};
</script>
