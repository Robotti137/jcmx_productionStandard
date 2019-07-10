<template>
  <div style="height:100%;" id="gallery-container">
    <div class="gallery-header">
      <GalleryAdd />
      <GalleryFilter />
    </div>
    <GalleryList />
  </div>
</template>

<script>
const GalleryAdd = () => import("./GalleryAdd");
const GalleryFilter = () => import("./GalleryFilter");
const GalleryList = () => import("./GalleryList");
export default {
  components: {
    GalleryAdd,
    GalleryFilter,
    GalleryList
  }
};
</script>

<style scoped>
.gallery-header {
  display: flex;
  justify-content: space-between;
  padding: 10px 22px 15px;
  border-bottom: 1px dashed #8d8787;
}
</style>
