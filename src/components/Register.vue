<template>
    <Layout>
        <div slot="title">Hello World</div>
        <div slot="subtitle">Hi</div>
        <div slot="content">
            Im conten
        </div>
    </Layout>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue'

export default {
    components: { Layout: MainLayout }
}
</script>

<style>

</style>
