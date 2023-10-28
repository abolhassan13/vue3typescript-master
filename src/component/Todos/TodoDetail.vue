<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icon">
      <i class="material-icons" @click="deleteTask">delete</i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
interface task {
  title: string;
  id: number;
}
const props = defineProps<{
  task: task;
}>();
const emit = defineEmits<{
  (e: "delete-Task", task: task): void;
}>();

function deleteTask(): void {
  emit("delete-Task", props.task);
}
</script>
<style scoped>
.task {
  padding: 6px 20px;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task h3,
.task .icons {
  display: inline-block;
}
.task .icons {
  text-align: right;
}
.task i {
  font-size: 1.4em;
  margin-left: 6px;
  cursor: pointer;
  color: #bbb;
}
.task i:hover {
  color: #ff005d;
}
</style>
