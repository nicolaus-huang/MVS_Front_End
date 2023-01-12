import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Library_GLB from "./views/Library_GLB.vue";
import Library_PLY from "./views/Library_PLY.vue";
import JSC_GLB from "./views/JSC_GLB.vue";
import JSC_PLY from "./views/JSC_PLY.vue";
import GLB_Footer from "./layout/GLB_Footer.vue"
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/library_glb",
      name: "library_glb",
      components: {
        default: Library_GLB,
        header: MainNavbar,
        footer: GLB_Footer
      },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: "/jsc_glb",
      name: "jsc_glb",
      components: {
        default: JSC_GLB,
        header: MainNavbar,
        footer: GLB_Footer
      },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: "/library_ply",
      name: "library_ply",
      components: {
        default: Library_PLY,
        header: MainNavbar,
        footer: GLB_Footer
      },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: "/jsc_ply",
      name: "jsc_ply",
      components: {
        default: JSC_PLY,
        header: MainNavbar,
        footer: GLB_Footer
      },
      props: {
        header: { colorOnScroll: 400 },
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: 'history'
});
