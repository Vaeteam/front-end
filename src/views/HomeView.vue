<script setup lang="ts">
    import ListPost from "../components/ListPost.vue";
    import PostFilter from "../components/PostFilter.vue";
</script>

<template>
    <section class="pb-0 py-sm-5">
        <div class="container">
            <div class="row">
                <ListPost/>
                <PostFilter/>
            </div>
        </div>
    </section>
</template>
