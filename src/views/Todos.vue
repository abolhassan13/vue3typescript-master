<template>
  <header>
    <h3>{{ t("TODO list") }}</h3>
  </header>
  <TodoForm @add-Task="addTodo" />
  <div v-for="task of store.state.tasks" :key="task.id" class="task-list">
    <TodoDetail :task="task" @delete-Task="deleteTodo" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import TodoDetail from "../component/Todos/TodoDetail.vue";
import TodoForm from "../component/Todos/TodoForm.vue";
import { todoStore } from '@/store/TodoStore'

let store = todoStore

const { t } = useI18n({
  inheritLocale: true,
  useScope: "local",
});

interface task {
  title: string;
  id: number;
}
function addTodo(payload: string):void {
  store.dispatch('addTodo', payload)
}
function deleteTodo(payload: task):void {
  store.dispatch('deleteTodo', payload)
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
