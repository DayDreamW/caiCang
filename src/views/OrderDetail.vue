<template>
    <div class="order-wrap">
        <ul class="process-node">
            <li 
            v-for="(item, index) in processes" 
            :key="item.label+index">
            <div>
                 <p :class="{'active': curIndex == index}">{{index+1}}</p>
                 <p>{{item.label}}</p>
            </div>
            </li>
        </ul>
        <div class="order-detail-wrap">
            <div class="order-detail" :class="{'anim': true}">
                <h3><span>￥</span>10.00</h3>
                <div class="order_detail_content">
                    <p>订单编号：{{curProcess.id}}</p>
                    <p>下单时间: {{curProcess.time}}</p>
                    <p>支付方式：微信支付</p>
                </div>
            </div>
        </div>
        <p class="process_tip margin_lr_20">已完成<span>{{state.completeNum}}/{{state.orderNum}}</span></p>
        <div class="button_content margin_lr_20">
            <button class="button-active">点我兑奖</button>
            <p><span>温馨提示: </span>点击兑奖即可实时兑奖到账</p>
        </div>
    </div>
</template>
<script>
import { reactive, computed } from 'vue'
export default {
    setup() {
        const state = reactive({
        orders: [{id: '7875454544545', time: '2020.07.29 15:10:11'}], // 订单
        processes: [{label: '支付完成'}, {label: '出票中'},{label: '出票完成'}], // 订单状态
        curIndex: 0,//当前执行订单
        completeNum: 0,// 已完成订单
        orderNum: computed(() => state.orders.length), // 订单总数
        curProcess: computed(() => state.orders[state.curIndex])
        })
        return {
            state, ...state
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../style/base.less');
.order-wrap {
    background-size: 100% 40px;
    .process-node {
        display: flex;
        justify-content: space-between;
        background: @themeRed;
        text-align: center;
        color: #fff;
        padding: 60px 20px 60px 20px;
        position: relative;
        li {
            z-index: 3;
        }
        &::before {
            position: absolute;
            content: '';
            left: 45px;
            right: 45px;
            height: 2px;
            background: #fff;
            top: 72px;
            z-index: 0;
            }
        p {
            z-index: 3;
            &:first-child{
            display: inline-block;
            box-sizing: content-box;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            border-radius: 50%;
            background: #fff;
            color: @themeRed;
            border: solid @themeRed 3px;
            }
        }
        .active {
                background-color: #ffda51!important;
            }
    }
    .order-detail-wrap {
        height: 300px;
        position: relative;
        overflow: hidden;
        margin-top: -30px;
        &::before {
                position: absolute;
                content: '';
                background: url('../assets/image/detail_bar.png') center top no-repeat;
                background-size:contain;
                top: 0;
                left: 5px;
                right: 5px;
                height: 40px;
                z-index: 9;
             }
    }
    .order-detail {
        position: relative;
        background: url('../assets/image/detail_bg.png') center center no-repeat;
        background-size: 100% auto;
        margin: 0 20px;
        z-index: 3;
        padding-bottom: 10px;
        margin-top: 0px;
        h3 {
            text-align: center;
            line-height: 60px;
        }
        .order_detail_content {
            padding: 30px;
            line-height: 30px;
        }
    }
    .anim {
        animation: toast-card 3s ease-in-out 0s;
    }
    .process_tip {
        text-align:right;

    }
    .button_content {
        p {
            padding: 10px 0;
        }

    }
}
@keyframes toast-card {
    from {
        margin-top: -205px;
    } to {
        margin-top: 0px;
    }
}

</style>