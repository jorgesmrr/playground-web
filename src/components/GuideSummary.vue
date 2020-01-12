<template>
  <ul class="p-4" style="width: 250px">
    <slot />
  </ul>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Summary"
});
</script>