<template>
  <div class="home_container">
    <input type="text" id="Linp" value="0" style="display: none">
    <!--style="display: none"-->
    <!--<banner father-component="home"></banner>-->
    <img v-for="item in banners" src="{{item.pic}}"/>
    <!--2-->
    <div class="L_Specialty">
      <div class="L_Sone L_left">
        <div class="L_Sbody L_right L_mbottom" @click="getBanners">
          <table class="L_table">
            <tr><td class="L_Tfont">特产推荐</td></tr>
            <tr><td class="L_Timg"><img src="../../assets/images/home_icon_techan.png" class="L_icon"></td></tr>
            <tr><td class="L_Thao">好店集中营</td></tr>
          </table>
        </div>
        <div class="L_Sbodyt L_right L_radius">
          <table class="L_table">
            <tr>
              <td class="L_TimgD l_cy"><img src="../../assets/images/home_icon_canyin.png" class="L_icon1"></td>
              <td class="L_Timg l_fd">
                <table class="l_tab">
                  <tr class="L_top"><td class="L_Tfont">餐饮预订</td></tr>
                  <tr><td class="L_Thao">饭店一应俱全</td></tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="L_Sone L_right">
        <div class="L_Sbodyt L_left L_mbottom L_radius" style="background: #feb762">
          <table class="L_table">
            <tr>
              <td class="L_TimgD l_cy"><img src="../../assets/images/home_icon_menpiao.png" class="L_icon1"></td>
              <td class="L_Timg l_fd">
                <table class="l_tab">
                  <tr class="L_top"><td class="L_Tfont">门票预订</td></tr>
                  <tr><td class="L_Thao">好玩的都在这里</td></tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
        <div class="L_Sbody L_left" style="background: #729eed">
          <table class="L_table">
            <tr><td class="L_Tfont">住宿预订</td></tr>
            <tr><td class="L_Timg"><img src="../../assets/images/home_icon_zhusu.png" class="L_icon"></td></tr>
            <tr><td class="L_Thao">感受不一样的民宿</td></tr>
          </table>
        </div>
      </div>
    </div>
    <div class="L_line"></div>
    <!--3-->
    <div class="L_information">
      <div class="L_leftimg L_left"><img src="../../assets/images/home_img_left.png" class="img1 L_right"></div>
      <div class="L_conterp">热门资讯</div>
      <div class="L_leftimg L_right"><img src="../../assets/images/home_img_right.png" class="img2"></div>
    </div>
    <!--4-->
    <div class="L_lunbo" id="L_lunbo">
      <div class="L_lb" id="L_lb" >
        <!--<div class="l_limg"><img src="../../assets/images/img/ss_29.jpg" class="shouye"> </div>-->
        <div class="l_limg" id="l_limg">
          <img src="../../assets/images/img/ss_29.jpg" class="shouye">
          <div class="l_p">1上泗安村第3届舞龙节火热开启！快来感受地道的民俗活动吧!</div>
        </div>

        <div class="l_limg">
          <img src="../../assets/images/img/ss_02.jpg" class="shouye">
          <div class="l_p">2上泗安村第3届舞龙节火热开启！快来感受地道的民俗活动吧!</div>
        </div>

        <div class="l_limg">
          <img src="../../assets/images/img/ss_33.jpg" class="shouye">
          <div class="l_p">3上泗安村第3届舞龙节火热开启！快来感受地道的民俗活动吧!</div>
        </div>

        <div class="l_limg">
          <img src="../../assets/images/img/ss_02.jpg" class="shouye">
          <div class="l_p">4上泗安村第3届舞龙节火热开启！快来感受地道的民俗活动吧!</div>
        </div>

        <div class="l_limg">
          <img src="../../assets/images/img/ss_29.jpg" class="shouye">
          <div class="l_p">1上泗安村第3届舞龙节火热开启！快来感受地道的民俗活动吧!</div>
        </div>

      </div>

    </div>
    <!--5-->
    <div class="L_line"></div>
    <div class="L_information">
      <div class="L_leftimg L_left"><img src="../../assets/images/home_img_left.png" class="img1 L_right"></div>
      <div class="L_conterp">热门推荐</div>
      <div class="L_leftimg L_right"><img src="../../assets/images/home_img_right.png" class="img2"></div>
    </div>
    <!--6-->
    <div>
      <div class="L_list" style="border-top:1px solid #ededed">
        <div class="l_list1">
          <div class="L_listimg L_left"><img src="../../assets/images/img/ss_33.jpg" class="shouye1"> </div>
          <div class="L_listr L_right">
            <div class="l_ta tahead">
              <div class="l_tap">绿山野图特产</div>
              <div class="triangle-topright"><img src="../../assets/images/home_list_img_gouwu.png" class="triangle-img"></div>
            </div>
            <div class="l_ta">
              <div class="quan">券</div>
              <div class="ka">卡</div>
            </div>
            <div class="l_ta1"></div>
            <div class="l_ta">
              <!--<span class="Price">￥<span style="font-size:4vw;">30</span><span style="color:#696969;">起</span></span> -->
              <span class="distance">距您1.2km</span></div>
          </div>
        </div>
      </div>

      <!--6-->
      <div class="L_list">
        <div class="l_list1">
          <div class="L_listimg L_left"><img src="../../assets/images/img/ss_33-04.jpg" class="shouye1"> </div>
          <div class="L_listr L_right">
            <div class="l_ta tahead">
              <div class="l_tap">上泗古法凉皮店</div>
              <div class="triangle-topright"><img src="../../assets/images/home_list_img_canyin.png" class="triangle-img"></div>
            </div>
            <div class="l_ta">
              <div class="quan">券</div>
              <div class="ka">卡</div>
            </div>
            <div class="l_ta1"></div>
            <div class="l_ta"><span class="Price">￥<span style="font-size:5vw;">30</span><span style="color:#999;" class="qi">起</span></span> <span class="distance">距您1.5km</span></div>
          </div>
        </div>
      </div>

      <!--6-->
      <div class="L_list">
        <div class="l_list1">
          <div class="L_listimg L_left"><img src="../../assets/images/img/ss_33-05.jpg" class="shouye1"> </div>
          <div class="L_listr L_right">
            <div class="l_ta tahead">
              <div class="l_tap">上泗乡村</div>
              <div class="triangle-topright"><img src="../../assets/images/home_list_img_zhusu.png" class="triangle-img"></div>
            </div>
            <div class="l_ta">
              <div class="quan">券</div>
              <div class="ka">卡</div>
            </div>
            <div class="l_ta1"></div>
            <div class="l_ta"><span class="Price">￥<span style="font-size:5vw;">200</span><span style="color:#999;" class="qi">起</span></span> <span class="distance">距您3.2km</span></div>
          </div>
        </div>
      </div>
      <!--6-->
      <div class="L_list" style="border: 0px;" >
        <div class="l_list1">
          <div class="L_listimg L_left"><img src="../../assets/images/img/ss_33-06.jpg" class="shouye1"> </div>
          <div class="L_listr L_right">
            <div class="l_ta tahead">
              <div class="l_tap">上泗慢漂流</div>
              <div class="triangle-topright"><img src="../../assets/images/home_list_img_menpiao.png" class="triangle-img"></div>
            </div>
            <div class="l_ta">
              <div class="quan">券</div>
              <div class="ka">卡</div>
            </div>
            <div class="l_ta1"></div>
            <div class="l_ta"><span class="Price">￥<span style="font-size:5vw;">160</span><span style="color:#999;" class="qi">起</span></span> <span class="distance">距您0.2km</span></div>
          </div>
        </div>
      </div>
    </div>
    <div style="height:70px;"></div>
    <bottom-menu father-component="home"></bottom-menu>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import '../../style/common.css'
// import banner from '../../components/common/banner'
import bottomMenu from '../../components/bottom/bottomMenu'
export default {
  name: 'home',
  data () {
    return {
      banners: [
        {'pic': 'http://192.168.2.167:9000/img/busi_banner/1522378713670.png'}
      ]
    }
  },
  components: {
    // banner,
    bottomMenu
  },
  computed: mapState({
    banners: state => state.banners
  }),
  methods: {
    ...mapActions([
      'getBanners'
    ])
  }
}
</script>

<style lang="less" scoped>
</style>
