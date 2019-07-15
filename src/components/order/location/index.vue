<template>
  <div>
    <div class="filter-container">
      <LocationAdd />
      <LocationSearch />
    </div>
    <LocationUpdate />
    <LocationList />
    <LocationPage />
  </div>
</template>

<script>
const LocationAdd = () => import("./LocationAdd");
const LocationList = () => import("./LocationList");
const LocationUpdate = () => import("./LocationUpdate");
const LocationPage = () => import("./LocationPage");
const LocationSearch = () => import("./LocationSearch");
export default {
  components: {
    LocationAdd,
    LocationList,
    LocationUpdate,
    LocationPage,
    LocationSearch
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
