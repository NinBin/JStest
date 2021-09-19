<template>
    <div id="mixinApp">
        {{name}}
        <BaseTest/>
    </div>
</template>

<script>
import { myMixin } from '../mixin/myMixin.js'
import BaseTest from './BaseTest.vue'
export default {
  name: 'BaseTest2',
  mixins: [myMixin],
  components: {
    BaseTest
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
