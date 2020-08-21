<template>
  <div class="home">
    <div class="animation-box">
      <span class="ani-bird"></span>
      <span class="ani-coin"></span>
    </div>
    <p class="text-info margin_lr_10">
      <span class="home-add-icon">{{adderss}}</span>
      <span>{{cardID}}</span>
    </p>
    <ul class="home-content">
      <li 
      class="home-content-item" 
      @click="choose(index)"
      :class="{'item-active': index === state.activeIndex}"
      v-for="(item, index) in cardItems" 
      :key="item.num+index">
        <p class="item_num">
          <span>{{item.num}}</span>
          <span>{{item.label}}</span>
        </p>
        <p class="item_money">金额:<span>{{item.num*10}}</span>￥</p>
        <p class="item_button"><button>立即购买</button></p>
      </li>
       <li 
      class="home-content-item input-item" 
      @click="choose(index)"
      :class="{'item-active': index === state.activeIndex}"
      :key="6">
        <p class="text_normal"><span>自定义张数</span></p>
        <p>(<input type="text" placeholder="输入张数">)</p>
        <p class="item_button"><button>立即购买</button></p>
      </li>
    </ul>
    <p class="margin_lr_10 button_bottom">
      <button @click="autoChoose" class="button-active">抽一抽今日运气张数</button>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive} from 'vue'
import { sleep, randomNum } from '../utils/idnex'
export default {
  setup() {
    const state = reactive({
      cardItems: [ // 商品卡片列表
        {label: '张', num: 1},
        {label: '张', num: 2},
        {label: '张', num: 5},
        {label: '张', num: 8},
        {label: '张', num: 10},
      ],
      activeIndex: 0, // 当前选中索引
      adderss: '徐汇万科中心店自提点', // 设备地址
      cardID: 'S123456465', // 设备编号
    })
    // 点击购买
    function buy () {
     // this.$router.push('/about')
    }
    // 点击自动选择
    async function autoChoose () {
      let n = 15
      while(n > 1) {
        let tempNum = randomNum(state.cardItems.length)
        state.activeIndex = tempNum
        await sleep(100)
        n--
      }
    }
    // 点击选择
    function choose (index) {
      state.activeIndex = index
    }
    return {
      ...state, state, buy, autoChoose, choose
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../style/base');
@bannerHeight: 228px;
.home {
  position: relative;
  box-sizing: border-box;
 // margin-top: -30px;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px 0;
  margin-top: @bannerHeight;
  // 动画区域
  .animation-box {
    position: absolute;
    text-align: center;
    overflow: hidden;
    left: 0;
    right: 0;
    top: -@bannerHeight;
    height: 73px;
    z-index: 2;
    span {
      display: inline-block;
      height: 100%;
      width: 100%;
    }
    .ani-bird {
      background-image: url('../assets/image/home_bird.png');
      background-repeat: no-repeat;
      background-position: center 8px;
      background-size: 55%;
     // animation: fly 1s infinite;
    }
    .animate {
      transition: center 10px;
    }
    .ani-coin {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: url('../assets/image/home_coin.png') center top no-repeat;
      background-repeat: no-repeat;
      background-position: center 35px;
      background-size: 55%;
      animation: coin-fly 0.8s infinite;
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: -@bannerHeight;
    left: 0;
    right: 0;
    height: 248px;
    background: url('../assets/image/home_bg.png') top center no-repeat;
    background-size: 100% auto;
    z-index: -1;
  }
  .text-info {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    .home-add-icon{
      background: url('../assets/image/home_address.png') left center no-repeat;
      background-size: 12px auto;
      padding-left: 18px;
    }
  }
  .home-content {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-left: 5px;
    .home-content-item {
      padding-top: 8px;
      margin: 5px;
      width: calc(33% - 10px);
      text-align: center;
      transition: border 0.2s ease-in-out;
      border: solid @orange 5px;
      border-radius: @radusNormal;
      margin-bottom: 10px;
      box-shadow: 0px 8px 4px #ccc;
      .item_num {
        span {
          font-weight: 700;
          display: inline-block;
          &:first-child {
            font-size: @textLarge*2.3;
            color: @themeRed;
          }
          &:last-child {
            font-size: @textSmall;
            padding-left: 3px;
          }
        }
      }
      .item_money {
        padding: 0  0 5px 0;
        span {
          font-size: @textLarge;
        }
        font-size: @textNormal;
        font-weight: 700;
      }
      .item_button {
        padding: 5px;
        button {
          width: 100%;
          color: #fff;
          background: @themeRed;
          border-radius: @radusLarge;
          padding: 2px 0;
        }
      }
    }
    .item-active {
      border: solid @themeRed 5px;
    }
  }
  .input-item {
    p {
      overflow: hidden;
      &:first-child {
        font-weight: 700;
        padding-top: 28px;
      //  padding-bottom: 10px;
      }
    }
    input {
      padding-bottom: 10px;
      width: 60px;
      box-sizing: border-box;
      padding: 10px 0;
    }
  }
  .button_bottom {
    padding-top: 15px;
        button {
          background: @themeRed;
          border-radius: @radusNormal;
        }
      }
}
@keyframes fly {
  from {
    background-size: 55%;
  } to {
    background-size: 56%;
  }
}
@keyframes coin-fly {
  0% {
   // background-postion: center 35px;
  //  background-size: 45%;
  } 
  50% {
     background-position: center 10px;
   //  background-size: 55%;
  }
  100% {
    background-position: center 35px;
 //   background-size: 55%;
  }
}
</style>
