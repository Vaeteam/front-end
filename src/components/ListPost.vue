<script setup lang="ts">
    import { ref, onMounted, watchEffect } from 'vue';
    import Post from "./Post.vue";
    import { filterStore } from "@/stores/fiter"


    const store = filterStore();
    let posts = ref<any>([]);
    const fetchMoreData = async () => {
        const newPosts = await store.fetchPost();
        posts.value = [...posts.value, ...newPosts];
    };
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        if (scrollY + windowHeight >= documentHeight) {
            fetchMoreData();
        }
    };

    onMounted(async () => {
        posts.value = await store.fetchPost();
        window.addEventListener('scroll', handleScroll);
    });

    watchEffect(() => {
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>
<template>
    <div class="col-9">
        <div class="row g-4">
            <Post v-for="post in posts"
                :postDetail=post.post_detail
                :teachingProvince=post.teaching_province
                :teachingDistrict=post.teaching_district
                :teachingWard=post.teaching_ward
                :teachers=post.teachers
                :subjects=post.subjects
                :rangeTimes=post.range_times
            ></Post>
        </div>
    </div>
</template>
