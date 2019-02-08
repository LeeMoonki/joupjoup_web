<template>
<div>
    <Layout>
        <div slot="title">HELLO JOUP!</div>
        <div slot="subtitle">줍줍에서 다양한 모바일 화면들을<br>만나보아요!</div>
        <div slot="content">
        </div>
    </Layout>
</div>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue'

export default {
    components: { Layout: MainLayout }
}
</script>

<style>

</style>