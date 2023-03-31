<script setup lang="ts">
import { reactive } from "vue";
import { Task } from "../models/Task";
import TaskList from "../components/TaskList.vue";

import TaskAdd from '../components/TaskAdd.vue'


const tasks: Task[] = reactive([
  {
    id: 1,
    title: "起きる",
    done: false,
  },
  {
    id: 2,
    title: "着替える",
    done: false,
  },
]);

// taskを検索し、フラグを更新する。
const addTask = (newTaskTitle: string) => {
  let newTask: Task = {
    id: Date.now(),
    title: newTaskTitle,
    done: false,
  };
  tasks.push(newTask);
};

// taskを検索し、フラグを更新する。
const doneTask = (id: number) => {
  let task = tasks.find((t) => t.id === id);
  if (task !== undefined) {
    task.done = !task.done;
  }
};

// taskを削除する。
const deleteTask = (id: number) => {
  tasks.forEach((task, index) => {
    if (task.id == id) tasks.splice(index, 1);
  });
};
</script>

<template>
<div>

  <h1 class="mt-4">Todo List</h1>
  <div class="row">
    <div class="col-xl-6 col-md-6">
      <TaskAdd @add="(newTaskTitle) => addTask(newTaskTitle)"></TaskAdd>
      <TaskList :tasks="tasks" @delete="(id) => deleteTask(id)" @done="(id) => doneTask(id)"></TaskList>
    </div>
  </div>
</div>
</template>
