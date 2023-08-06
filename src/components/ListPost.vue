<script setup lang="ts">
    import Post from "./Post.vue";
    import PostService from "@/service/post.service";

    let items = PostService.getPage(0);
</script>
<template>
    <div class="col-xl-9 col-xxl-8">
        <!-- Course list START -->
        <div class="row g-4">
            <Post v-for="item in items"
            :post=item
            ></Post>
        </div>
    </div>
</template>
