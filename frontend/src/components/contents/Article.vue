<template>
  <div class="vertical">
    <h3 class="venti left"><b-icon-chat-right-text-fill /> Article</h3>
    <ul v-for="article in articles" :key="article.title">
      <li>
        <a class="link" :href="article.link" target="_blank" rel="noopener">{{
          article.title
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: ["articles"],
};
</script>
