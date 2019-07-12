<template>
  <div>
    <OrderList />
  </div>
</template>

<script>
const OrderList = () => import("./OrderList");
export default {
  components: {
    OrderList
  }
};
</script>

<style>
</style>
