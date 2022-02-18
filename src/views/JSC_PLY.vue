<template>
  <div
    class="potree_container"
    style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; "
  >
    <div
      id="potree_render_area"
      style="background-image: url('/lib-source/libs/potree/resources/images/background.jpg');"
    ></div>
    <div id="potree_sidebar_container"></div>
    <link
      rel="stylesheet"
      type="text/css"
      href="lib-source/libs/potree/potree.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="lib-source/libs/jquery-ui/jquery-ui.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="lib-source/libs/openlayers3/ol.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="lib-source/libs/spectrum/spectrum.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="lib-source/libs/jstree/themes/mixed/style.css"
    />
  </div>
</template>

<script>
export default {
  mounted() {
    flagofele = 1;
    window.viewer = new Potree.Viewer(
      document.getElementById("potree_render_area")
    );
    viewer.setEDLEnabled(true);
    viewer.setFOV(60);
    viewer.setPointBudget(2_000_000);
    document.title = "";
    viewer.setEDLEnabled(false);
    viewer.setBackground("gradient"); // ["skybox", "gradient", "black", "white"];
    viewer.setDescription(``);
    viewer.loadSettingsFromURL();
    viewer.setDescription(
      "<h2>电子楼<h2/><p>您可以在此测量距离,高度,角度<p/><p>窗户数目:186<br/>最长长度:60m 最宽宽度:30m 最高高度:29m<p/>"
    );
    // viewer.setDescription(
    //   "<h2>电子楼<h2/><p>窗户数目:186<br/>最长长度:60m 最宽宽度:38m 最高高度:29m<p/>"
    // );
    <a
      href="https://www.creative-tim.com/product/vue-material-kit"
      target="_blank"
    >
      Vue Material Kit
    </a>;
    viewer.loadGUI(() => {
      viewer.setLanguage("en");
      $("#menu_appearance")
        .next()
        .show();
      $("#menu_tools")
        .next()
        .show();
      $("#menu_clipping")
        .next()
        .show();
      viewer.toggleSidebar();
    });

    Potree.loadPointCloud(
      "lib-source/pointclouds/electricHouse/cloud.js",
      "electricHouse",
      (e) => {
        let pointcloud = e.pointcloud;
        let material = pointcloud.material;
        viewer.scene.addPointCloud(pointcloud);
        //material.activeAttributeName = "rgba"; //[rgba, intensity, classification, ...]
        material.size = 1;
        material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
        material.shape = Potree.PointShape.SQUARE;
        viewer.fitToScreen();
      }
    );
  },
};
</script>
<style scoped></style>
