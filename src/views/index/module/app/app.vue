<template>
  <div class="wrapper fixed">
    <vue-progress-bar></vue-progress-bar>
    <layout-header></layout-header>
    <layout-side-menu></layout-side-menu>
    <div class="content-wrapper" :class="{ slideCollapse: sidebar.collapsed,mobileSide:device.isMobile}">
      <fez-scrollbar tag="div" wrapClass="content-scrollbar">
        <section class="content">
          <fez-breadcrumb separator="/">
            <template v-for="child in currentMenus">
              <fez-breadcrumb-item :to="{ path: child.href }">{{child.name}}</fez-breadcrumb-item>
            </template>
          </fez-breadcrumb>
          <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
            <router-view></router-view>
          </transition>
          <layout-footer></layout-footer>
        </section>
      </fez-scrollbar>
    </div>
  </div>
</template>
<script>
import {
  sideMenu as layoutSideMenu,
  header as layoutHeader,
  footer as layoutFooter
} from '../../layout';

import { mapGetters, mapActions, mapMutations } from 'vuex';
import types from "../../store/mutation-types";

export default {
  name: 'app',
  components: {
    layoutSideMenu,
    layoutFooter,
    layoutHeader,
  },
  computed: {
    ...mapGetters({
      sidebar: 'sidebar',
      device: 'device',
      currentMenus: 'currentMenus',
    }),

  },
  data: function() {
    return {
      active: true,
      headerFixed: true,
      breadcrumb: [],
    }
  },
  methods: {
    ...mapMutations({
      toggleDevice: types.TOGGLE_DEVICE,
      toggleSidebar: types.TOGGLE_SIDEBAR,
      toggleSidebarShow: types.TOGGLE_SIDEBAR_SHOW,
    }),
    ...mapActions({
      changeCurrentMenu: 'changeCurrentMenu' // 映射 this.changeCurrentMenu() 为 this.$store.dispatch('changeCurrentMenu')
    })
  },
  watch: {
    '$route': function(to, from) {}
  },
  beforeMount() {
    const { body } = document
    const WIDTH = 784
    const handler = () => {
      if (!document.hidden) {
        let rect = body.getBoundingClientRect()
        let isMobile = rect.width < WIDTH
        this.toggleDevice(isMobile);
        if (isMobile) {
          this.toggleSidebarShow(false);
          this.toggleSidebar(false);
        } else {
          this.toggleSidebarShow(true);
        }
      }
    }
    document.addEventListener('visibilitychange', handler)
    window.addEventListener('DOMContentLoaded', handler)
    window.addEventListener('resize', handler)
  },
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      //        if (to.meta.progress !== undefined) {
      //          let meta = to.meta.progress
      //          // parse meta tags
      //          this.$Progress.parseMeta(meta)
      //        }
      this.$store.dispatch('changeCurrentMenu', to);
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      //        console.log(JSON.stringify())
      this.$Progress.finish()
    })

    //      this.$router.push('/activePublic');
  }
}

</script>
