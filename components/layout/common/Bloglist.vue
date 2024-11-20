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
			<UiCard class="w-full animation flex flex-col gap-4 p-5">
				<div class="flex items-center justify-between">
					<UiCardTitle class="text-center">
						{{ blog.title }}
					</UiCardTitle>
					<div>
						By: {{ blog.creator.name }}
					</div>
				</div>
				<UiCardContent class="w-full flex gap-10 items-start">
					<NuxtImg :src="blog.foto1_url" class="w-1/2 h-[250px] rounded" alt="" />
					<div class="">
						{{ blog.about }}
					</div>
				</UiCardContent>
				<UiCardFooter>
					Created: {{ blog.$createdAt }}
				</UiCardFooter>
			</UiCard>
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