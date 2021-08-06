<template>
  <div class="vertical">
    <h3 class="venti left"><b-icon-pencil-fill /> Qualification</h3>
    <ul class="center" style="margin: auto">
      <li v-for="qualification in qualifications" :key="qualification.id">
        <h5 class="tall noline left">
          {{ qualification.name }}: {{ qualification.date }}
        </h5>
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
