<template>
  <li v-for="item in items">
    {{ item.message }}
  </li>
  <p>------------------------------------</p>
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
  <p>------------------------------------</p>
  <li v-for="{ message } in items">
    {{ message }}
  </li>
  <p>------------------------------------</p>
  <!-- 有 index 索引时 -->
  <li v-for="({ message }, index) in items">
    {{ message }} {{ index }}
  </li>
  <p>------------------------------------</p>

  <li v-for="item in items">
    <ul>
      <li v-for="childItem in item.children">
        {{ item.message }} {{ childItem }}
      </li>
    </ul>

  </li>
  <p>------------------------------------</p>
  <div v-for="item of items">{{ item.message }}</div>
  <p>------------------------------------</p>
  <ul>
    <li v-for="value in myObject">
      {{ value }}
    </li>
  </ul>
  <p>------------------------------------</p>
  <ul>
    <li v-for="key in myObject">
      {{ key }}
    </li>
  </ul>
  <p>------------------------------------</p>
  <ul>
    <li v-for="(value, key) in myObject">
      {{ key }}: {{ value }}
    </li>
  </ul>
  <p>------------------------------------</p>
  <ul>
    <li v-for="(value, key,index) in myObject" :key="index">
     {{index}}. {{ key }}: {{ value }}
    </li>
  </ul>
  <p>------------------------------------</p>
  <span v-for="n in 10">{{ n }}|</span>



  <ul>
    <template v-for="item in items">
      <li>{{ item.message }}</li>
      <li class="divider" role="presentation">qqqq</li>
    </template>
  </ul>

<!--<p>此写法报错推荐下面的写法</p>-->
<!--  <li v-for="todo in todos" v-if="!todo.isComplete">-->
<!--      {{ todo.name }}-->
<!--  </li>-->
  <p>------------------------------------</p>
  <template v-for="todo in todos" :key="todo.name">
    <li v-if="!todo.isComplete">
      {{ todo.name }}
    </li>
  </template>
  <p>--------------------------v-for--------------------</p>
</template>


<script>
export default {
  name: "MyList",
  data() {
    return {
      parentMessage: 'Parent',
      items: [
        {message: 'Foo', children: ['a', 'b', 'c']},
        {message: 'Bar',children:['d', 'e', 'f']}
      ],
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },
      todos:[
          {name:'a',isComplete:false},
          {name:'b',isComplete:true},
          {name:'c',isComplete:false},
          {name:'d',isComplete:true},
          {name:'e',isComplete:false},
          {name:'f',isComplete:true},
      ]
    }
  }
}
</script>
