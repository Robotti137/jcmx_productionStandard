<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
html,
body,
#app {
  height: 100%;
}
body,
p {
  margin: 0;
}
ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
.round-input input.el-input__inner {
  border-radius:15px;
}

.message-case {
  top: 50px !important;
  left: 50% !important;
}
</style>
