<template>
  <div class="home">
    <FilterNav :current="current" @filterChange="current = $event" />
    <div v-if="tasks.length">
      <div v-for="task in filteredTasks" :key="task.id">
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
import FilterNav from "../components/FilterNav.vue";

export default {
  name: "HomeView",
  components: { SingleTask, FilterNav },
  data() {
    return {
      tasks: [],
      current: "all",
    };
  },
  mounted() {
    fetch("https://mock-server-6iau.onrender.com/tasks")
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
  computed: {
    filteredTasks() {
      if (this.current === "completed") {
        return this.tasks.filter((task) => task.complete);
      }
      if (this.current === "ongoing") {
        return this.tasks.filter((task) => !task.complete);
      }
      return this.tasks;
    },
  },
};
</script>
