<template>
    <Dialogw v-if="false">
        <div class="dialog_wrap">
            <h3>{{title}}</h3>
            <ul>
                <li v-for="(item, index) in infos" :key="item+index">
                    <p>{{index+1}}{{item}}</p>
                </li>
            </ul>
            <small>
                {{tips}}
            </small>
        </div>
    </Dialogw>
</template>
<script>
import Dialogw from './Dialog'
export default {
    name: 'tipDialog',
    components: {Dialogw},
    props: {
        title: {
            type: String,
            default: '支付成功未出票'
        },
        infos:{
            type: Array,
            default: () => {
                return [
                    '您可联系店铺主人进行出票咨询',
                    '退款时间为工作日3-5天，请您耐心等待，感谢您对我们的支持'
                ]
            }
        },
        tips: {
            type: String,
            default: '微信账单可查询退款进度'
        } 
    },
    setup() {
        return {
          //  ...props
        }
    }
}
</script>
<style lang="less" scoped>
.dialog_wrap {
    padding: 10px 10px 30px 10px;
    h3 {
        text-align: center;
        padding-bottom: 10px;
    }

    p {
        line-height: 22
        px;
    }
}
</style>