<template>
  <div class="vertical">
    <h3 class="venti left"><b-icon-file-person-fill /> Profile</h3>
    <ul>
      <li v-for="profile in profiles" :key="profile.key">
        <h5 class="tall noline left" style="width: 100%">{{ profile.key }}:</h5>
        <h5 class="tall noline left" style="width: 100%">
          {{ profile.body }}
        </h5>
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
