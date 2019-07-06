<template>
  <div>
    <UserFilter />
    <UserList />
    <UserPage />
  </div>
</template>

<script>
const UserList = () => import("./UserList");
const UserPage = () => import("./UserPage");
const UserFilter = () => import("./UserFilter");
export default {
  components: {
    UserList,
    UserPage,
    UserFilter
  }
};
</script>

<style>
</style>
