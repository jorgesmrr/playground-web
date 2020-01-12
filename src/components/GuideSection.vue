<template>
  <div>
    <h2>{{title}}</h2>
    <slot />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Section",

  props: {
    title: String
  }
});
</script>