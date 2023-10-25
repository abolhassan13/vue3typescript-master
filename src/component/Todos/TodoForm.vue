<template>
  <form @submit.prevent="handeleSubmit" class="addTodo">
    <input v-model="newTask" placeholder="Add new Todo" />
    <button @click="handeleSubmit" :class="tem">{{ t("Add") }}</button>
  </form>
</template>

<script setup lang="ts">
import { defineEmits, ref } from "vue";
import { useI18n } from "vue-i18n";

let tem: string | null;
tem = localStorage.getItem("thems");

const { t } = useI18n({
  inheritLocale: true,
  useScope: "local",
});

const newTask = ref<string>("");
const emit = defineEmits<{
  (e: "add-Task", newTask: string): void;
}>();

function handeleSubmit(): void {
  if (newTask.value.length > 0) {
    emit("add-Task", newTask.value);
    newTask.value = "";
  }
}
</script>

<style scoped>
form {
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
}
form button {
  background: #20b4e5;
  padding: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
form input {
  border: 0;
  padding: 10px;
  border-radius: 6px;
  color: #555;
  font-size: 1em;
}
.addTodo {
  display: inline-flex;
}
.addTodo input {
  border-radius: 10px;
}
</style>
