<template>
  <div>
    <OrderSearch />
    <OrderList />
    <OrderPage />
    <OrderUpdate />
  </div>
</template>

<script>
const OrderList = () => import("./OrderList");
const OrderUpdate = () => import("./OrderUpdate");
const OrderPage = () => import("./OrderPage");
const OrderSearch = () => import("./OrderSearch");
export default {
  components: {
    OrderList,
    OrderUpdate,
    OrderPage,
    OrderSearch
  }
};
</script>

<style>
</style>
