<template>
  <header>
    <h3>{{ t("TODO list") }}</h3>
  </header>
  <TodoForm @add-Task="addTodo" />
  <div v-for="task of tasks" :key="task.id" class="task-list">
    <TodoDetail :task="task" @delete-Task="deleteTodo" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import TodoDetail from "../component/Todos/TodoDetail.vue";
import TodoForm from "../component/Todos/TodoForm.vue";

const { t } = useI18n({
  inheritLocale: true,
  useScope: "local",
});

interface task {
  title: string;
  id: number;
}
let tasks = ref([
  {
    title: "Learning typescript",
    id: 2,
  },
  {
    title: "Doing workout",
    id: 3,
  },
  {
    title: "Watching One Peice",
    id: 4,
  },
]);

function addTodo(payload: string) {
  tasks.value.push({
    title: payload,
    id: Math.floor(Math.random() * 10000),
  });
}

function deleteTodo(payload: task) {
  tasks.value = tasks.value.filter((task) => payload.id !== task.id);
}
</script>

<style scoped>
header {
  text-align: center;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
header h1 {
  margin: 0;
  font-size: 2em;
  padding-top: 25px;
  margin-left: 15px;
  color: #777;
  transform: rotate(2deg);
}
.task-list {
  max-width: 640px;
  margin: 20px auto;
}
</style>
