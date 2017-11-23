<template>
  <fez-submenu :index="item.href" v-if="item.children && item.children.length>0" class="fezlay-menu-sub">
    <template slot="title"><i :class="item.icon"></i><span>{{item.name}}</span></template>
    <template v-for="child in item.children">
      <sub-menu v-if="child.children && child.children.length>0" :param="child"></sub-menu>
      <fez-menu-item :index="child.href" v-else><i :class="child.icon"></i><span>{{child.name}}</span></fez-menu-item>
    </template>
  </fez-submenu>
  <fez-menu-item :index="item.href" v-else class="fezlay-menu-each"><i :class="item.icon"></i><span>{{item.name}}</span></fez-menu-item>
</template>
<script>
import subMenu from "./subMenu.vue"

export default {
  name: 'subMenu',
  props: ['param'],
  data: function() {
    return { item: this.param }
  },
  components: {
    subMenu
  }
}

</script>
