<template>
  <div :class="{ linewrp: changestyle == true }" class="TodoWrapper">
    <div
      v-for="item of this.todos"
      :key="item.id"
      :class="{ line: changestyle == true }"
      class="Todo"
      :id="item.id"
    >
      <sup>{{ item.date }}</sup>
      <h2>{{ item.title }}</h2>
      <p>{{ item.desc }}</p>
      <ul>
        <li v-for="i of item.tasks" :key="i.id">
          <!-- {{item.tasks.inputValue}} -->
          <label for="#">{{ i.inputValue }}</label> <input type="checkbox" />
        </li>
      </ul>
      <div class="button-wrp">
        <button :id="item.id" @click="checkItem()">check</button>
        <button style="margin: 0px 20px;">delete</button>
        <button>edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { todos } from "../store/index.js";

export default {
  props: ["changestyle"],
  name: "TodoItem",
  data() {
    return {
      todos: todos,
    };
  },
  methods: {
    checkItem(){
        // for(let i of todos){
        //   if(i.id == event.target.id){
        //     console.log(i);
        //   }
        // }
      let filtered = this.todos.filter(item => item.id != event.target.id)
      this.todos = filtered
      

      this.$emit("checkPlus")
    },

  },
};
</script>

<style></style>
