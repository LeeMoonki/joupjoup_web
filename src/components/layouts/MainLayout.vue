<template>
<div>
    <div id="container">
        <div class="layout-main__bg">
            <img src="../../assets/imgs/joup-logo.svg"
                 class="layout-main__logo">
            <div class="layout-main__tit-wrapper">
                <div class="layout-main__title font__roboto" :class="$mq">
                    <slot name="title"></slot>
                </div>
                <div class="layout-main__subtitle font__sans" :class="$mq">
                    <slot name="subtitle"></slot>
                </div>
            </div>
            <div class="layout-main__content">
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
.layout-main__content {
    position:absolute;
    top:0;
    right:0;
    width:50.83%;
    max-width:732px;
    height:100%;
    border-radius:10px 0 0 10px;
    background-color:#fff; 
}
.layout-main__bg {
    position:relative;
    overflow:hidden;
    flex-direction:row-reverse;
    width:100%;
    height:100%;
    background-image:url('../../assets/imgs/back.png'); 
}
.layout-main__logo {
    position:absolute;
    top:19.5%;
    left:5.6%;
    width:140px;
    height:140px;
    object-fit:cover;
}
.layout-main__tit-wrapper {
    position:absolute;
    width:100%;
    top:39.3%;
    left:5.6%;
}
.layout-main__title {
    width:38.06%;
    max-width:548px;
    font-size:60px;
    font-weight:900;
    letter-spacing:14px;
    color:#fff;
}
.layout-main__title.tablet {
    font-size:20px;
}
.layout-main__subtitle {
    margin-top:20px;
    font-size:20px;
    letter-spacing:2px;
    line-height:1.4;
    color:#fff;
}
.layout-main__subtitle.tablet {
    font-size:10px;
}
</style>
