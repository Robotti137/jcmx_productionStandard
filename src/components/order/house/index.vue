<template>
  <div>
    <div class="filter-container">
      <HouseAdd />
      <HouseSearch />
    </div>
    <HouseUpdate />
    <HouseList />
    <HousePage />
  </div>
</template>

<script>
const HouseAdd = () => import("./HouseAdd");
const HouseList = () => import("./HouseList");
const HouseUpdate = () => import("./HouseUpdate");
const HousePage = () => import("./HousePage");
const HouseSearch = () => import("./HouseSearch");
export default {
  components: {
    HouseAdd,
    HouseList,
    HouseUpdate,
    HousePage,
    HouseSearch
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
