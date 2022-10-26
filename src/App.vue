<template>
  <div id="app">
    <Header :sendCounter="this.counter" @plitka="plitka" @line="line" @popup="showPoup"/>
    <TodoItem @checkPlus="counter++" :changestyle="changestyle" />
    <transition name="fade">
      <Popup @close="close" v-if="show"/>
    </transition>
  </div>
</template>

<script>
import "../public/styles/style.css";
import Header from "./components/Header.vue";
import TodoItem from "./components/TodoItem.vue";
import Popup from "./components/Popup.vue";

export default {
  name: "App",
  components: {
    Header,
    TodoItem,
    Popup,
  },
  data() {
    return {
      counter: 0,
      show: false,
      changestyle: false,
    };
  },
  methods: {
    showPoup() {
      this.show = true
    },
    close(){
      this.show = false
    },
    plitka(){
      this.changestyle = false,
      console.log(('plitka'));
    },
    line(){
      this.changestyle = true,
      console.log(('line'));
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
