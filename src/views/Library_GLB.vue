<template>
  <div class="threejs-wrapper">
    <div id="container" />
    <dat-gui
      closeText="Close controls"
      openText="Open controls"
      closePosition="bottom"
      style="display: absolute; top: 80vh"
    >
      <dat-folder label="Model">
        <dat-boolean v-model="SizeInfo.visible" label="Show Size" />
        <dat-boolean
          v-if="controls != null"
          v-model="controls.autoRotate"
          label="autoRotate"
        />
      </dat-folder>
    </dat-gui>
  </div>
</template>

<style lang="scss" scoped>
.threejs-wrapper {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: absolute;
}
</style>

<script>
import {
  AmbientLight,
  Box3,
  DirectionalLight,
  HemisphereLight,
  PMREMGenerator,
  PerspectiveCamera,
  Scene,
  UnsignedByteType,
  Vector3,
  WebGLRenderer,
  sRGBEncoding,
  Group,
  Box3Helper,
  LineBasicMaterial,
  
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
// import SpriteText from 'three-spritetext';

var gltf_loader = new GLTFLoader();
var dracoloader = new DRACOLoader();
dracoloader.setDecoderPath("/draco");
gltf_loader.setDRACOLoader(dracoloader);

export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg-1.png"),
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/huangshijie.png"),
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/zhangtongyu.png"),
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/daidanyang.jpg"),
    },
    teamImg4: {
      type: String,
      default: require("@/assets/img/faces/luoyuxuan.png"),
    },
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      defaultCamera: null,
      renderer: null,
      SizeInfo: new Group(),
      controls: null,
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  name: "ThreeTest",
  methods: {
    init: function () {
      window.addEventListener("resize", this.onWindowResize, false);
      let container = document.getElementById("container");

      this.scene = new Scene();
      this.defaultCamera = new PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        0.01,
        10
      );
      this.defaultCamera.position.x = -6245.887544155799;
      this.defaultCamera.position.y = 46266.621339280144;
      this.defaultCamera.position.z = 92979.76647954945;

      this.scene.add(this.defaultCamera);

      this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.physicallyCorrectLights = true;
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.outputEncoding = sRGBEncoding;
      this.renderer.textureEncoding = sRGBEncoding;
      this.controls = new OrbitControls(
        this.defaultCamera,
        this.renderer.domElement
      );
      //   this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = 2;
      this.controls.screenSpacePanning = true;

      let that = this;
      gltf_loader.load("/models/图书馆.glb", function (gltf) {
        const scene = gltf.scene || gltf.scenes[0];
        const clips = gltf.animations || [];

        const box = new Box3().setFromObject(scene);
        const size = box.getSize(new Vector3()).length();
        const center = box.getCenter(new Vector3());

        scene.position.x -= scene.position.x - center.x;
        scene.position.y -= scene.position.y - center.y;
        scene.position.z -= scene.position.z - center.z;
        scene.position.y -= 20000;
        that.controls.maxDistance = size * 10;
        that.defaultCamera.near = size / 100;
        that.defaultCamera.far = size * 100;
        that.defaultCamera.updateProjectionMatrix();

        //a bug of threejs , see https://discourse.threejs.org/t/ambient-light-and-gltf-models-not-working-results-in-black-model/7428/3
        scene.traverse((o) => {
          if (o.isMesh) {
            const asArray = Array.isArray(o.material)
              ? o.material
              : [o.material];
            asArray.forEach((mat) => (mat.metalness = 0));
          }
        });
        that.scene.add(scene);
        var box2 = new Box3().setFromObject(scene);
        const { min, max } = box2;
        let zl = Math.abs(max.z - min.z);
        let xl = Math.abs(max.x - min.x);
        let yl = Math.abs(max.y - min.y);
        const material = new LineBasicMaterial({ color: "orange" });
        let origin = new Vector3(
          center.x - (1 / 2) * xl,
          3000,
          center.z - (1 / 2) * zl
        );
        let xd = new Vector3(
          center.x + (1 / 2) * xl,
          3000,
          center.z - (1 / 2) * zl
        );
        let yd = new Vector3(
          center.x - (1 / 2) * xl,
          3000,
          center.z + (1 / 2) * zl
        );
        let zd = new Vector3(
          center.x - (1 / 2) * xl,
          center.y + yl,
          center.z - (1 / 2) * zl
        );
        const font_loader = new FontLoader();

        font_loader.load( '/fonts/helvetiker_regular.typeface.json', function ( font ) {

          let xd_text = new TextGeometry( '200m', {
            font: font,
            size: 3000,
            height: 5,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
            bevelSegments: 5
          } );
          let yd_text = new TextGeometry( '115m', {
            font: font,
            size: 3000,
            height: 5,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
            bevelSegments: 5
          } );
          let zd_text = new TextGeometry( '65m', {
            font: font,
            size: 3000,
            height: 5,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
            bevelSegments: 5
          } );
          let material2 = new LineBasicMaterial();
          var xMesh = new THREE.Mesh(xd_text, material2);
          var yMesh = new THREE.Mesh(yd_text, material2);
          var zMesh = new THREE.Mesh(zd_text, material2);
          xMesh.position.x = center.x;
          xMesh.position.y = xd.y + 1000;
          xMesh.position.z = -xd.z;
          yMesh.position.x = yd.x;
          yMesh.position.y = yd.y / 2 + 2000;
          yMesh.position.z = center.z;
          zMesh.position.x = zd.x;
          zMesh.position.y = yl / 2;
          zMesh.position.z = -zd.z;
          that.SizeInfo.add(xMesh);
          that.SizeInfo.add(yMesh);
          that.SizeInfo.add(zMesh);
        } );
        const helper = new Box3Helper(box2, "orange");
        that.SizeInfo.add(helper);

        that.SizeInfo.visible = false;

        that.scene.add(that.SizeInfo);
      });

      const hemiLight = new HemisphereLight();
      const light1 = new AmbientLight(0xffffff, 0.3);
      const light2 = new DirectionalLight(0xffffff, 0.8 * Math.PI);

      light2.position.set(0.5, 0, 0.866); // ~60º
      this.defaultCamera.add(hemiLight);
      this.defaultCamera.add(light1);
      this.defaultCamera.add(light2);

      this.pmremGenerator = new PMREMGenerator(this.renderer);
      this.pmremGenerator.compileEquirectangularShader();
      var rgbe_loader = new RGBELoader();

      rgbe_loader
        .setDataType(UnsignedByteType)
        .load("/environment/venice_sunset_1k.hdr", function (texture) {
          var envMap = that.pmremGenerator.fromEquirectangular(texture).texture;

          that.scene.environment = envMap;

          texture.dispose();
          that.pmremGenerator.dispose();
        });

      container.appendChild(this.renderer.domElement);
    },
    onWindowResize: function () {
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      this.defaultCamera.aspect = window.innerWidth / window.innerHeight;
      this.defaultCamera.updateProjectionMatrix();
    },
    animate: function () {
      requestAnimationFrame(this.animate);
      this.renderer.autoclear = true;
      this.controls.update();
      this.renderer.render(this.scene, this.defaultCamera);
    },
    switchPanel: function (index) {
      console.log(index);
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
};
</script>
<style scoped>
#container {
  height: 100%;
  width: 100%;
  background: rgb(128, 128, 128);
  background: radial-gradient(
    circle,
    rgba(128, 128, 128, 1) 20%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>
>
