<template>
  <li class="px-2 py-2 my-1 rounded hover:bg-gray-200 cursor-pointer">{{title}}</li>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "GuideSummaryItem",

  props: {
    title: String
  }
});
</script>