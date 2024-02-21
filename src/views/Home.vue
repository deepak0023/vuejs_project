<template>
  <div class="home">
    <div v-if="tasks.length">
      <div v-for="task in tasks" :key="task.id">
        <SingleTask
          :task="task"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleTask from "../components/SingleTask.vue";

export default {
  name: "HomeView",
  components: { SingleTask },
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.tasks = data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    handleDelete(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id;
      });
    },
    handleComplete(id) {
      let t = this.tasks.find((task) => {
        return task.id === id;
      });
      t.complete = !t.complete;
    },
  },
};
</script>
