<template>

<header>
  <h3>{{t('TODO list')}}</h3>
</header>
<form 
@submit.prevent="handeleSubmit" 
class="addTodo">
  <input v-model="newTask" placeholder="Add new Todo" />
  <button @click="handeleSubmit" :class="tem">{{t('Add')}}</button>
</form>

<div v-for="task of tasks" :key="task.id" class="task-list">
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icon">
          <i
          class="material-icons"
          @click="deleteTask(task.id)"
          >delete</i>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from "vue-i18n"

let tem : string|null
tem = localStorage.getItem("thems")

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local'
})

let tasks = ref([
{
"title": "Learning typescript",
"id": 2
},
{
"title": "doing workout",
"id": 3
},
{
"title": "Watching One Peice",
"id": 4
}
])
const newTask = ref('')

function handeleSubmit() {
if (newTask.value.length > 0) {
tasks.value.push({
title: newTask.value,
id: Math.floor(Math.random() * 10000)
});
newTask.value = '';
}}

function deleteTask(id: number) {
tasks.value = tasks.value.filter((task) => id !== task.id)
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
.addTodo{
  display: inline-flex;
  
}
.addTodo input{
  border-radius: 10px;
}

.task-list {
  max-width: 640px;
  margin: 20px auto;
}
.task {
  padding: 6px 20px;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task h3, .task .icons {
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