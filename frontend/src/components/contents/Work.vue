<template>
  <div class="vertical">
    <div>
      <h3 class="venti left"><b-icon-columns-gap /> Works</h3>
      <b-container>
        <b-row class="justify-content-md-center">
          <div v-for="work in works" :key="work.title">
            <b-col v-if="work.link_active">
              <b-card
                :img-src="work.image"
                :img-alt="work.title"
                img-top
                style="max-width: 240px"
                class="mb-2 mt-2"
              >
                <b-card-title class="grande">
                  <a v-if="work.link_active" class="link" :href="work.link">{{
                    work.title
                  }}</a></b-card-title
                >
                <b-card-text class="mt-2">
                  {{ work.body }}
                </b-card-text>
              </b-card>
            </b-col>
          </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  props: ["works"],
};
</script>
