<template>
<div>
    <div id="container">
        <div id="sidenav" class="font__sans">
            <img src="../../assets/imgs/joup-logo.svg" class="layout-sn__logo">
            <div class="layout-sn__nav-wrapper">
                <ul>
                    <li class="list-nav">
                        <div class="list-title txt-white--bold">화면별</div>
                        <ul class="layout-sn__sub-nav">
                            <li class="list-nav">
                                <div class="list-title txt-orange--bold">전체</div>
                            </li>
                            <li class="list-nav">
                                <div class="list-title txt-gray">로그인</div>
                            </li>
                            <li class="list-nav">
                                <div class="list-title txt-gray">회원가입</div>
                            </li>
                            <li class="list-nav">
                                <div class="list-title txt-gray">검색</div>
                            </li>
                            <li class="list-nav">
                                <div class="list-title txt-gray">빈화면</div>
                            </li>
                            <li class="list-nav">
                                <div class="list-title txt-gray">햄버거 메뉴</div>
                            </li>
                            <li class="list-nav">
                                <div class="list-title txt-gray">메인</div>
                            </li>
                            <li class="list-nav">
                                <div class="list-title txt-gray">상품상세</div>
                            </li>
                            <li class="list-nav">
                                <div class="list-title txt-gray">장바구니</div>
                            </li>
                            <li class="list-nav">
                                <div class="list-title txt-gray">음성인식</div>
                            </li>
                            <li class="list-nav">
                                <div class="list-title txt-gray">마이페이지</div>
                            </li>
                            <li class="list-nav">
                                <div class="list-title txt-gray">주문서</div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="layout-sn__content">
            <slot name="content"></slot>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
    #sidenav {
        position:fixed;
        overflow-y:scroll;
        left:0;
        top:0;
        bottom:0;
        width:280px;
        background-color:#101010;
    }
    .layout-sn__logo {
        position:absolute;
        top:40px;
        left:40px;
        width:120px;
        height:119px;
    }
    .layout-sn__nav-wrapper {
        position:absolute;
        top:218px;
        left:0;
    }
    .layout-sn__sub-nav {
        margin-top:25px;
    }
    .layout-sn__sub-nav > li:nth-child(n+2) {
        margin-top:20px;
    }
    .layout-sn__content {
        margin-left:280px;
    }
</style>