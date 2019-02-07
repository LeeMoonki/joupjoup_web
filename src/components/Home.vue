<template>
<div>
    <Layout>
        <div slot="title">HELLO JOUP!</div>
        <div slot="subtitle">줍줍에서 다양한 모바일 화면들을<br>만나보아요!</div>
        <div slot="content">
            <h1>good hello world</h1>
        </div>
    </Layout>
</div>
</template>

<script>
import SideNavLayout from './layouts/SideNavLayout.vue'

export default {
    components: { Layout: SideNavLayout }
}
</script>

<style>

</style>
