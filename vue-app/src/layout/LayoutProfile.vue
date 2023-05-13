<script setup lang="ts">
	import UserDetailInformation from '@/components/UserDetailInformation.vue';
	import UserExtraInformation from '@/components/UserExtraInformation.vue';
	import CourseList from '@/components/CourseList.vue';
	import ReviewList from '@/components/ReviewList.vue';
</script>

<template>
    <UserDetailInformation></UserDetailInformation>
	<UserExtraInformation></UserExtraInformation>
	<UserExtraInformation></UserExtraInformation>
	<CourseList></CourseList>
	<ReviewList></ReviewList>
</template>