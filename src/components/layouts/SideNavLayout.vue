<template>
<div>
    <div id="container">
        <div class="layout-sn__bg">
            <img src="../../assets/imgs/joup-logo.svg"
                 class="layout-sn__logo">
            <div class="layout-sn__tit-wrapper">
                <div class="layout-sn__title font__roboto">
                    <slot name="title"></slot>
                </div>
                <div class="layout-sn__subtitle font__sans">
                    <slot name="subtitle"></slot>
                </div>
            </div>
            <div class="layout-sn__content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.layout-sn__content {
    position:absolute;
    top:0;
    right:0;
    width:732px;
    height:100%;
    border-radius:10px 0 0 10px;
    background-color:#fff; 
}
.layout-sn__bg {
    position:relative;
    overflow:hidden;
    flex-direction:row-reverse;
    width:100%;
    height:1024px;
    background-image:url('../../assets/imgs/back.png'); 
}
.layout-sn__logo {
    position:absolute;
    top:200px;
    left:80px;
    width:140px;
    height:139px;
    object-fit:contain;
}
.layout-sn__tit-wrapper {
    position:absolute;
    top:402px;
    left:80px;
}
.layout-sn__title {
    max-width:548px;
    font-size:60px;
    font-weight:900;
    letter-spacing:14px;
    color:#fff;
}
.layout-sn__subtitle {
    margin-top:20px;
    font-size:20px;
    letter-spacing:2px;
    line-height:1.4;
    color:#fff;
}
</style>
