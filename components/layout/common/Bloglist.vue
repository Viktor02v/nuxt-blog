<script setup lang="ts">
import { useBloggerQuery } from '@/components/blogger/useBloggerQuery'
const { data: blogs, isLoading, error } = useBloggerQuery()
</script>

<template>
	<section>
		<div v-if="isLoading">
			Loading blogs...
		</div>

		<div v-else-if="error">
			An error occurred while fetching blogs: {{ error.message }}
		</div>

		<div v-else>
		<div v-for="blog in blogs" :key="blog.id" class="mb-5">
			<LayoutCommonBlogcard :blog="blog"/>
		</div>
	</div>
	</section>
</template>



<style scoped>
@keyframes show {
	from {
		transform: scale(0.5) translateY(-30px);
		opacity: 0.4;
	}

	to {
		transform: scale(1) translateY(0);
		opacity: 1;
	}
}

.animation {
	animation: show 0.3s ease-in-out;
}
</style>