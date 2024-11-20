<script setup lang="ts">
import { useBloggerQuery } from '@/components/blogger/useBloggerQuery'

useSeoMeta({
	title: 'All Blogs | Blogger'
})
const { data: blogs, isLoading, error } = useBloggerQuery()
</script>

<template>
	<section class="p-10 w-full h-full">
		<h1 class="font-bold  text-center text-title text-4xl mb-10">
			All Blogs | Blogger
		</h1>
		<BlogList v-for="blog in blogs" :key="blog.id" class="">
			<UiCard class="w-full animation flex flex-col gap-4 p-5">
				<div class="flex items-center justify-between">
					<UiCardTitle class="text-center">
						{{ blog.title }}
					</UiCardTitle>
					<div>
						By: {{ blog.creator.name }}
					</div>
				</div>
				<UiCardContent class="w-full flex gap-10 items-center">
					<NuxtImg :src="blog.foto1_url" class="w-1/2 h-[250px] rounded" alt="" />
					<div class="">
						{{ blog.about }}
					</div>
				</UiCardContent>
				<UiCardFooter>
					Created: {{ blog.$createdAt }}
				</UiCardFooter>
			</UiCard>
		</BlogList>
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