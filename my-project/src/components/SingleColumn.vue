<template>
  <div class="columnFlexBox">
    <div class="whiteRow"></div>
    <div class="grayRow"></div>
    <div class="whiteRow">
      <p class="pStyle">dfdf</p>
      <p class="pStyle">dfdf</p>
    </div>
    <div class="grayRow">
      <span
        style="float: right"
        :class="[
          selected ? 'off-btn' : 'off-btn2',
          selected ? 'off-bac' : 'off1',
        ]"
        @click="switchStyle"
      >
      </span>
    </div>
    <div class="whiteRow">
      <div class="singleBlock"></div>
      <div class="singleBlock"></div>
      <div class="singleBlock"></div>
      <div class="singleBlock"></div>
      <div class="singleBlock"></div>
    </div>
    <!-- v-for遍历测试 -->
    <div class="checkBoxS">
      <ul v-for="(item, index) in checkBoxList" :key="index">
        <li><input type="checkbox" />{{ item.status }}</li>
        <button @click="delSingleBox(index)">删除</button>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleColumn',
  data () {
    return {
      selected: false,
      checkBoxList: [
        { id: 1, status: 'true1' },
        { id: 2, status: 'false2' },
        { id: 3, status: 'true3' },
        { id: 4, status: 'false4' }
      ]
    }
  },
  methods: {
    switchStyle () {
      this.selected = ~this.selected
    },
    delSingleBox (index) {
      this.checkBoxList.splice(index, 1)
      console.log(this.checkBoxList)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overlay article {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -200px 0 0 -200px;
  width: 400px;
  height: 400px;
}
span.off-btn {
  width: 42px;
  height: 22px;
  border-radius: 22px;
}
span.off-btn2 {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: blue;
  display: inline-block;
}
span.off-bac {
  background: red;
}
span.off1 {
  margin: 1px 0 1px 1px;
}
span.off-bac2 {
  background: #23c88b;
}
span.off2 {
  float: right;
  margin: 1px 1px 1px 0;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.columnFlexBox {
  display: flex;
  flex-direction: column;
  min-width: 200px;
  justify-content: center;
}
.whiteRow {
  display: flex;
  background-color: white;
  height: 50px;
  width: 100%;
  margin: 0 0 0 0;
  justify-content: center;
  flex-wrap: wrap;
}
.grayRow {
  display: flex;
  background-color: gray;
  height: 50px;
  width: 100%;
  justify-content: center;
}
.whiteRow .pStyle {
  display: flex;
  background-color: greenyellow;
  align-self: center;
}

.columnFlexBox .whiteRow > div {
  height: 100%;
  background-color: salmon;
  justify-content: center;
  flex: 1;
  border: 1px solid #ddd;
}
</style>
