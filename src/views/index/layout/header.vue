<style scoped>
  .admin-hello{
    display: inline-block;
    padding: 15px;
  }
</style>
<template>
  <header class="main-header animated" :class="{closeLogo:sidebar.collapsed,mobileLogo:device.isMobile}">
    <a href="#" class="logo">
      <span class="logo-lg">
        <i class="fa fa-optin-monster"></i>
        <b>FEZLayout</b>
      </span>
    </a>
    <nav class="navbar">
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button" @click.stop.prevent="toggleMenu(!sidebar.collapsed,device.isMobile)">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <div class="navbar-custom-menu">
        <span class="admin-hello">欢迎使用FEZ Layout</span>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import types from "../store/mutation-types"

export default {
  data() {
    return {}
  },
  computed: mapGetters({
    sidebar: 'sidebar',
    device: 'device',
  }),
  methods: {
    toggleMenu(collapsed, isMobile) {
      if (isMobile) {
        this.toggleSidebarShow();
      } else {
        this.toggleSidebar();
      }
    },
    ...mapMutations({
      toggleSidebar: types.TOGGLE_SIDEBAR,
      toggleSidebarShow: types.TOGGLE_SIDEBAR_SHOW,
    }),
  },
  created() {

  },
  mounted() {
    // document.addEventListener('click', this.autoHide, false)
  },
  destroyed() {
    // document.removeEventListener('click', this.autoHide, false)
  }
}

</script>
