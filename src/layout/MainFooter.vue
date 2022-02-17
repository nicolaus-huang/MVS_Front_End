<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://github.com/Huang-Shijie-SDUWH/MVS_Front_End/blob/main/LICENSE">
              Licenses
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, made with
        <a
          href="https://www.creative-tim.com/product/vue-material-kit"
          target="_blank"
          >Vue Material Kit</a
        >
        by SDU MVS Team 2
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
