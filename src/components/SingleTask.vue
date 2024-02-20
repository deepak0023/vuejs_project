<template>
  <div class="task">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ task.title }}</h3>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ task.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      showDetails: false,
    };
  },
};
</script>

<style scoped>
.task {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
</style>
