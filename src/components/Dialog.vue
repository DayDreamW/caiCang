<template>
    <div class="dialog-wrap">
        <div class="dialog-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="less">
    .dialog-wrap {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 99;
        background: rgba(0, 0, 0, 0.6);
        .dialog-content {
            position: absolute;
            border-radius: 0.1rem;
            background: #fff;
            padding: 0.2rem 0 0 0;
            top: 50%;
            width: 80%;
            left: 10%;
            transform: translateY(-50%);

        }
    }
</style>