<template>
  <div>
    <div class="filter-container">
      <OrderAdd />
      <OrderSearch />
    </div>
    <OrderList />
    <OrderPage />
    <OrderUpdate />
  </div>
</template>

<script>
const OrderAdd = () => import("./OrderAdd");
const OrderList = () => import("./OrderList");
const OrderUpdate = () => import("./OrderUpdate");
const OrderPage = () => import("./OrderPage");
const OrderSearch = () => import("./OrderSearch");
export default {
  components: {
    OrderAdd,
    OrderList,
    OrderUpdate,
    OrderPage,
    OrderSearch
  }
};
</script>

<style scoped>
.filter-container {
  display: flex;
  justify-content: space-between;
  padding: 10px 22px 15px;
  border-bottom: 1px dashed #8d8787;
}
</style>
