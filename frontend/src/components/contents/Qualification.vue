<template>
  <div class="vertical">
    <h3 class="venti"><b-icon-pencil-fill /> Qualification</h3>
    <ul v-for="qualification in qualifications" :key="qualification.id">
      <li>
        <h5 class="tall">{{ qualification }},</h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Qualification",
  props: ["qualifications"],
};
</script>