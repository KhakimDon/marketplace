<template>
  <div class="popup">
    <form name="add" action="#">
      <span @click="$emit('close')" class="popup-close">&times;</span>
      <input name="title" v-model="title" placeholder="Название" type="text" /> <br />
      <br />
      <input name="desc" v-model="desc" placeholder="Описание" type="text" /> <br />
      <br />
      <div class="input-wrapper">
        <input
        v-for="item of this.inputs"
        :key="item.id"
        placeholder="Задачи"
        name="task"
          v-model="item.inputValue"
          type="text"
        />
      </div>
      <br />
      <button @click.prevent="addtask">добавить задачу</button> <br />
      <br />
      <button type="submit" @click.prevent="addTodo">click</button>
    </form>
  </div>
</template>

<script>
import { todos } from "../store/index.js";
export default {
  name: "Popup",
  data() {
    return {
      inputs: [
        {
          inputValue: "",
        },
      ],
      todos: todos,
      obj: new Object(),
      title: "",
      desc: "",
      tasks: this.inputs,
      date: `${new Date().getDate()}.${
        new Date().getMonth() + 1
      }.${new Date().getFullYear()}`,
    };
  },
  methods: {
    // formSubmit(){
    //   // event.preventDefault()
    //   let form = document.forms.add
    //   console.log(form);
    //   let object = {}
    //   let fm = new FormData(form)

    //   fm.forEach((value,key) => {
    //     object.id = Math.random().toString().substr(2, 6)
    //     object.tasks = []
    //     object[key] = value
    //   })

    //   console.log(object);
    // },
    addTodo() {
      this.obj.id = Math.random().toString().substr(2, 6);
      this.obj.title = this.title;
      this.obj.desc = this.desc;
      this.obj.tasks = this.inputs;
      this.obj.date = this.date;
      todos.push(this.obj);
      this.obj = {};

      this.$emit("close");
    },
    addtask() {
      this.inputs.push({
        inputValue: "",
      });
    },
  },
};
</script>

<style></style>
