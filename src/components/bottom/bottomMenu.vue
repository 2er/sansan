<template>
  <div class="L_menu">
    <ul class="L_ul">
      <li class="L_li"><img src="../../assets/images/bottom_icon_home.png" class="L_menuimg"><div>首页</div></li>
      <li class="L_li"><img src="../../assets/images/bottom_icon_dingdan.png" class="L_menuimg"><div>订单</div></li>
      <li class="L_li"><img src="../../assets/images/bottom_icon_me.png" class="L_menuimg"><div>我的</div></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'bottomMenu',
  data () {
    return {

    }
  },
  props: ['fatherComponent']
}
</script>

<style lang="less">
</style>
