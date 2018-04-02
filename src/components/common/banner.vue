<template>
  <div class="L_headimg" id="L_headimg">
    <img src="../../assets/images/img/ss_02.jpg" class="shouyen" style="display: block">
    <img src="../../assets/images/img/ss_29.jpg" class="shouyen">
    <img src="../../assets/images/img/ss_02.jpg" class="shouyen">
    <img src="../../assets/images/img/ss_29.jpg" class="shouyen">
    <!--<img v-for="item in banners" src="{{item.img}}" class="shouyen"/>-->
    <ul>
      <li style="background: #ffffff"></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'banner',
  data () {
    return {

    }
  },
  props: ['fatherComponent'],
  computed: mapState([
    banners
  ])
}
</script>

<style scoped>

</style>
