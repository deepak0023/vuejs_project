<template>
  <div class="task">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ task.title }}</h3>
      <div class="icons">
        <span @click="deleteTask" class="material-icons">delete</span>
        <span class="material-icons">edit</span>
        <span class="material-icons tick">done</span>
      </div>
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
      uri: "http://localhost:3000/tasks/" + this.task.id,
    };
  },
  methods: {
    deleteTask() {
      console.log("Came here");
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.task.id))
        .catch((err) => console.log(err));
    },
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
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
</style>
