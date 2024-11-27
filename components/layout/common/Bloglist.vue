<script setup lang="ts">

import { useBloggerQuery } from '@/components/blogger/useBloggerQuery'
const { data: blogs, isLoading, error } = useBloggerQuery()
</script>

<template>
	<section class="w-full h-full">
		<div v-if="isLoading" class="wrapper">
			<Icon name="eos-icons:bubble-loading" size="300" class="text-colorSidebar" />
		</div>

		<div v-else-if="error">
			An error occurred while fetching blogs: {{ error.message }}
		</div>

		<div v-else>
			<div v-for="blog in blogs" :key="blog.$id" class="mb-5">
				<LayoutCommonBlogcard :blog="blog" />
			</div>
		</div>

		<div v-if="blogs?.length === 0" class="w-full h-full flex items-center justify-center">
			<div class="w-[600px] flex justify-center animation bg-sidebarBg rounded p-10">
				<div class="flex justify-center">
					<div class="bg-white flex flex-col text-colorSidebar rounded p-5">
						<p class="border-b pb-2 border-colorSidebar">There are no blogs available now.</p>
						<p>Go on and create one right <NuxtLink to="/user/create-blog" class="underline">now</NuxtLink></p>
					</div>
				</div>
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
	animation: show 0.6s ease-in-out;
}

.wrapper {
	@apply flex items-center justify-center w-full h-full
}
</style>