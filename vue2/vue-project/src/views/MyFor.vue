<template>
  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="E.g. Feed the cat"
    />
    <button>Add</button>
  </form>
  <ul>
    <myItem />
<!--    <myItem-->
<!--        v-for="(todo, index) in todos"-->
<!--        :key="todo.id"-->
<!--        :title="todo.title"-->
<!--        @remove="todos.splice(index, 1)"-->
<!--    ></myItem>-->
  </ul>

  <div>
    <counter />
    <counter />
    <counter />
    <counter />
    <counter />
  </div>
</template>


<script>
import myItem from "@/components/MyItem.vue";
import counter   from "@/components/counter.vue";
export default {
  components: { myItem ,
    counter},
  data() {
    return {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    }
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
}
</script>

