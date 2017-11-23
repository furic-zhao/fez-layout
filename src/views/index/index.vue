<template>
  <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
    <router-view></router-view>
  </transition>
</template>
<script>
export default {
  name: 'index'
}
</script>
