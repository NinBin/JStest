<template>
  <div id="father" class="father">
    <div>box1</div>
    <div>box2</div>
    <div>box3</div>
    <span v-once>Message: {{ msg }}</span>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <ul id="example-1">
      <li>1</li>
      <li>2</li>
    </ul>
    <ul id="example-1">
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>
    <!-- `greet` 是在下面定义的方法名 -->
    <!-- <div id="example-2">
        <button @click="greet">Greet</button>
    </div> -->

    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ bindData }}</p>
    <br />
    <textarea v-model="bindData" placeholder="add multiple lines"></textarea>
    <!--复选框绑定v-model-->
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span>
    <div id="example-5">
      <select v-model="selected">
        <option
          v-for="option in options"
          v-bind:key="option.text"
          v-bind:value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>

    <custom-input v-model="searchText"></custom-input>

    <div id="example-1">
      <button @click="show = !show">Toggle render</button>
      <transition name="slide-fade">
        <p v-if="show">hello</p>
      </transition>
    </div>

    <div id="example-2">
      <button @click="show = !show">Toggle show</button>
      <transition name="bounce">
        <p v-if="show">
          Lo rem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          facilisis enim libero, at lacinia diam fermentum id. Pellentesque
          habitant morbi tristique senectus et netus.
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseTest',
  data () {
    return {
      show: true,
      searchText: ' ',
      data: [
        { type: '66P' },
        { type: '760P' },
        { type: '(含16G系统优盘)660P' },
        { type: '(含16G系统优化盘)760P' }
      ],
      active: '',
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      checkedNames: [],
      bindData: 'v-model test',
      msg: 'this is BaseTest',
      items: [{ message: 'Foo' }, { message: 'Bar' }],
      object: {
        title: 'How to dolist in vue',
        author: 'jackon',
        publishedDate: '2021.6.14'
      }
    }
  },
  methods: {
    // greet:function(event){
    //     // `this` 在方法里指向当前 Vue 实例
    //     alert('Hello ' + this.name + '!')
    //     // `event` 是原生 DOM 事件
    //     if (event) {
    //         alert(event.target.tagName)
    //     }
    // } ,

    oncheck (name) {
      console.log(name)
      this.active = name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type = "text/css" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
body {
  width: 600px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#father {
  min-width: 600px;
  background: #42b983;
  border: 1px solid silver;
  align-content: center;
}

#father div {
  padding: 10px;
  margin: 15px;
  border: 2px, dashed, red;
  background-color: #fcd568;
}

.active {
  float: left;
  margin-left: 10px;
  padding: 10px;
  background: #efc531;
  margin-bottom: 10px;
  border-radius: 4px;
  font-size: 14px;
}
.Classification {
  float: left;
  margin-left: 10px;
  padding: 10px;
  background: #f7f7f7;
  margin-bottom: 10px;
  border-radius: 4px;
  font-size: 14px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
