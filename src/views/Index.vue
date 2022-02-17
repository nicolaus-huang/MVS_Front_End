<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="
              md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100
            "
          >
            <h1 class="title">
              SDU
              <p />
              3D Reconstruction Project
            </h1>
            <h4>
              A project aiming to reconstruct the buildings of our university.
              <p />
              Made by students of Team 2 in Data Science and Artificial
              Intelligence Class of Shandong University Weihai.
            </h4>
            <br />
            <md-button
              href=""
              class="md-success md-lg"
              target="_blank"
              style="{'color':'red'}"
              ><i class="fas fa-play"></i> Watch video</md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-white">
        <div class="container">
          <div class="md-layout">
            <div
              class="
                md-layout-item md-size-66 md-xsmall-size-100
                mx-auto
                text-center
              "
            >
              <h2 class="title text-center">Models Overview</h2>
              <h5 class="description">
                For more details, click the "MODELS" tab on the right top of
                this website
              </h5>
            </div>
          </div>
          <div id="navigation-pills">
            <div class="md-layout">
              <div class="md-layout-item md-size-50 md-small-size-100">
                <div class="title">
                  <h3>Library</h3>
                </div>
                <div class="title">
                  <h3>
                    <small
                      >Shandong University Weihai Library was founded in 1987
                      and the new library was completed in 2003. The main
                      building of the new library has 12 floors and a total
                      construction area of 20,000 square meters. There are more
                      than 2,000 reading seats and nearly 1,000 information
                      retrieval points.</small
                    >
                  </h3>
                </div>
                <tabs
                  :tab-name="['Library GLB', 'Library PLY']"
                  :tab-icon="['dashboard', 'cloud']"
                  plain
                  flex-column
                  nav-pills-icons
                  color-button="success"
                  v-on:tabclicked="switchPanel"
                >
                  <!-- here you can add your content for tab-content -->
                  <template slot="tab-pane-1">
                    <div class="threejs-wrapper">
                      <div id="container" />
                    </div>
                  </template>
                  <template slot="tab-pane-2">
                    The PLY file is too big to load in this page, please click
                    <a href="/library_ply" target="_blank">here </a>
                    to view the point cloud.
                  </template>
                </tabs>
              </div>
              <div class="md-layout-item md-size-50 md-small-size-100">
                <div class="title">
                  <h3>JOINT SCIENCE COLLEGE</h3>
                </div>
                <div class="title">
                  <h3>
                    <small
                      >SDU-ANU JOINT SCIENCE COLLEGE is a Sino-foreign
                      cooperative educational institution approved by the
                      Ministry of Education to provide undergraduate level
                      academic education. The two sides of the Joint College of
                      Science are Shandong University and the Australian
                      National University.</small
                    >
                  </h3>
                </div>
                <tabs
                  :tab-name="['JSC GLB', 'JSC PLY']"
                  :tab-icon="['dashboard', 'cloud']"
                  plain
                  flex-column
                  nav-pills-icons
                  color-button="success"
                >
                  <!-- here you can add your content for tab-content -->
                  <template slot="tab-pane-1">
                    <div class="threejs-wrapper">
                      <div id="container2" />
                    </div>
                  </template>
                  <template slot="tab-pane-2">
                    The PLY file is too big to load in this page, please click
                    <a href="/jsc_ply" target="_blank">here </a>
                    to view the point cloud.
                  </template>
                </tabs>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="
                md-layout-item md-size-66 md-xsmall-size-100
                mx-auto
                text-center
              "
            >
              <h2 class="title text-center">Tech Stack</h2>
              <h5 class="description">
                Photographs of the library and JOINT SCIENCE COLLEGE were
                collected with a drone, and the collected photographs were later
                reconstructed in three dimensions using deep learning methods.
                Now, we repainted the white film of the building based on the
                generated point cloud, and presented it on this website mainly
                using various JavaScript frameworks such as Vue.js, Three.js,
                etc.
              </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div
                    class="icon icon-info"
                    style="
                       {
                        color: grey;
                      }
                    "
                  >
                    <i class="fa-solid fa-3"></i>
                  </div>
                  <h4 class="info-title">Three.js</h4>
                  <p>
                    Three.js is a cross-browser JavaScript library and
                    application programming interface used to create and display
                    animated 3D computer graphics in a web browser using WebGL.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <i class="fa-brands fa-vuejs"></i>
                  </div>
                  <h4 class="info-title">Vue.js</h4>
                  <p>
                    Vue.js is an open-source model–view–viewmodel front end
                    JavaScript framework for building user interfaces and
                    single-page applications. It was created by Evan You, and is
                    maintained by him and the rest of the active core team
                    members.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <i class="fa-solid fa-tree"></i>
                  </div>
                  <h4 class="info-title">Potree</h4>
                  <p>
                    Potree is a free open-source WebGL based point cloud
                    renderer for large point clouds. It is based on the TU Wien
                    Scanopy project and research projects Harvest4D, GCD
                    Doctoral College and Superhumans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section text-center">
        <div class="container">
          <h2 class="title">Team Members</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg1"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Shijie Huang
                      <br />
                      <small class="card-description text-muted"
                        >Web Constructor</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Reconstructing our campus is definitely an interesting
                        job. As we ran around campus, collecting photos in the
                        middle of a snowstorm, we joke that a white patch is
                        better for reconstruction. We experienced a lot and grew
                        a lot during this project. After experiencing the
                        internship life in Huawei, I cherish more the quiet life
                        in my college days. As a team leader, it is a joy to
                        find that there is nothing for me to bother for running
                        this project, and I am very greatful for working with
                        such great teammates. I hope you enjoy our work.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://github.com/Huang-Shijie-SDUWH"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-github"></i>
                      </md-button>
                      <md-button
                        href="https://orcid.org/0000-0002-8957-0952"
                        class="md-just-icon md-simple"
                      >
                        <i class="fa-brands fa-orcid"></i>
                      </md-button>
                      <md-button
                        href="mailto:201900830110@mail.sdu.edu.cn"
                        class="md-just-icon md-simple"
                      >
                        <i class="fa-solid fa-at"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg2"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Tongyu Zhang
                      <br />
                      <small class="card-description text-muted"
                        >Web Constructor</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        It's my privilege to cooperate with my teammates.The
                        process of thinking and solving problems is very
                        interesting.I learnd the basic knowledge of deep
                        learning and understood the realization of cutting edge
                        technology such as object detection.I've grown a lot.The
                        moment the project was completed, I had a great sense of
                        achievement.Sometimes I can not help admiring the
                        project.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://space.bilibili.com/438049087?spm_id_from=333.1007.0.0"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-bilibili"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg3"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Danyang Dai
                      <br />
                      <small class="card-description text-muted"
                        >Deep Learning Engineer</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Rebuilding the campus landmark library through
                        two-dimensional RGB images is undoubtedly an interesting
                        and difficult project. I focus on the implementation of
                        point cloud reconstruction. The point cloud
                        reconstruction using traditional methods has a
                        relatively complete system, but the point cloud
                        reconstruction using deep learning method is still in
                        the exploratory stage. The project task is complicated,
                        thanks to the reasonable arrangement of the group
                        leader, as well as the joint efforts of all partners,
                        the final result is satisfactory. You can see the
                        library and the electronics building in this web.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://github.com/dawn-dai"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-github"></i>
                      </md-button>
                      <md-button
                        href="mailto:201900830013@mail.sdu.edu.cn"
                        class="md-just-icon md-simple"
                      >
                        <i class="fa-solid fa-at"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg4"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Yuxuan Luo
                      <br />
                      <small class="card-description text-muted"
                        >Model Designer</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        I learned a lot of new knowledge and consolidated and
                        expanded a lot of knowledge I learned in the whole
                        project, from how to control uav aerial photography to
                        collect image data, to data set processing, and then to
                        redrawing white models on the appearance of buildings
                        and making display videos. In this project, we have
                        invested no small effort, hope to bring you some
                        enlightenment.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://github.com/JeffSkull/Jeff-Skull"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-github"></i>
                      </md-button>
                      <md-button
                        href="mailto:201900810146@mail.sdu.edu.cn"
                        class="md-just-icon md-simple"
                      >
                        <i class="fa-solid fa-at"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
.threejs-wrapper {
  border-radius: 11.8px;
  overflow: hidden;
  height: 300px;
  width: 380px;
}
</style>

<script>
import { Tabs } from "@/components";
import {
  AmbientLight,
  AxesHelper,
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
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

var gltf_loader = new GLTFLoader();
var dracoloader = new DRACOLoader();
dracoloader.setDecoderPath("/draco");
gltf_loader.setDRACOLoader(dracoloader);

export default {
  components: {
    Tabs,
  },
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
      scenes: null,
      renderers: null,
      meshs: null,
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
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = 2;
      this.controls.screenSpacePanning = true;
      // this.controls.addEventListener( "change", event => {
      //     console.log( that.controls.object.position.x, that.controls.object.position.y, that.controls.object.position.z );
      //     console.log( that.defaultCamera.position );

      // });

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

        // that.defaultCamera.position.copy(center);
        // that.defaultCamera.position.x += size / 2.0;
        // that.defaultCamera.position.y += size / 5.0;
        // that.defaultCamera.position.z += size / 2.0;
        const lookat = center;
        // lookat.x = -100;
        // that.defaultCamera.lookAt(lookat);

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
    init2: function () {
      let container2 = document.getElementById("container2");

      this.scene2 = new Scene();
      this.defaultCamera2 = new PerspectiveCamera(
        70,
        container2.clientWidth / container2.clientHeight,
        0.01,
        10
      );
      this.defaultCamera2.position.x = -0.1547718783615504;
      this.defaultCamera2.position.y = 3.1610557980424883;
      this.defaultCamera2.position.z = 8.774042890371717;

      this.scene2.add(this.defaultCamera2);

      this.renderer2 = new WebGLRenderer({ antialias: true, alpha: true });
      this.renderer2.setSize(container2.clientWidth, container2.clientHeight);
      this.renderer2.physicallyCorrectLights = true;
      this.renderer2.setPixelRatio(window.devicePixelRatio);
      this.renderer2.outputEncoding = sRGBEncoding;
      this.renderer2.textureEncoding = sRGBEncoding;
      this.controls2 = new OrbitControls(
        this.defaultCamera2,
        this.renderer2.domElement
      );
      this.controls2.autoRotate = true;
      this.controls2.autoRotateSpeed = 2;
      this.controls2.screenSpacePanning = true;
      // this.controls2.addEventListener( "change", event => {
      //     console.log( that.controls2.object.position.x, that.controls2.object.position.y, that.controls2.object.position.z );
      // });

      let that = this;
      gltf_loader.load("/models/电子楼.glb", function (gltf) {
        const scene = gltf.scene || gltf.scenes[0];
        const clips = gltf.animations || [];

        const box = new Box3().setFromObject(scene);
        const size = box.getSize(new Vector3()).length();
        const center = box.getCenter(new Vector3());

        scene.position.x += scene.position.x - center.x;
        scene.position.y += scene.position.y - center.y;
        scene.position.z += scene.position.z - center.z;
        that.controls2.maxDistance = size * 10;
        that.defaultCamera2.near = size / 100;
        that.defaultCamera2.far = size * 100;
        that.defaultCamera2.updateProjectionMatrix();

        // that.defaultCamera2.position.copy(center);
        // that.defaultCamera2.position.x += size / 2.0;
        // that.defaultCamera2.position.y += size / 5.0;
        // that.defaultCamera2.position.z += size / 2.0;
        const looktat = center;

        that.defaultCamera2.lookAt(center);

        //a bug of threejs , see https://discourse.threejs.org/t/ambient-light-and-gltf-models-not-working-results-in-black-model/7428/3
        scene.traverse((o) => {
          if (o.isMesh) {
            const asArray = Array.isArray(o.material)
              ? o.material
              : [o.material];
            asArray.forEach((mat) => (mat.metalness = 0));
          }
        });
        that.scene2.add(scene);
      });

      const hemiLight = new HemisphereLight();
      const light1 = new AmbientLight(0xffffff, 0.3);
      const light2 = new DirectionalLight(0xffffff, 0.8 * Math.PI);

      light2.position.set(0.5, 0, 0.866); // ~60º
      // this.defaultCamera2.add(hemiLight);
      this.defaultCamera2.add(light1);
      // this.defaultCamera2.add( light2 );

      this.pmremGenerator2 = new PMREMGenerator(this.renderer2);
      this.pmremGenerator2.compileEquirectangularShader();
      var rgbe_loader2 = new RGBELoader();

      rgbe_loader2
        .setDataType(UnsignedByteType)
        .load("/environment/venice_sunset_1k.hdr", function (texture2) {
          var envMap2 =
            that.pmremGenerator2.fromEquirectangular(texture2).texture;

          that.scene2.environment = envMap2;

          texture2.dispose();
          that.pmremGenerator2.dispose();
        });

      container2.appendChild(this.renderer2.domElement);
    },
    animate: function () {
      requestAnimationFrame(this.animate);
      this.renderer.autoclear = true;
      this.renderer2.autoclear = true;
      this.controls.update();
      this.controls2.update();
      this.renderer.render(this.scene, this.defaultCamera);
      this.renderer2.render(this.scene2, this.defaultCamera2);
    },
    switchPanel: function (index) {
      console.log(index);
    },
  },
  mounted() {
    this.init();
    this.init2();
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
#container2 {
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
