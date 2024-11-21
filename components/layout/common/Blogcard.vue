<script setup lang="ts">
import type { BlogCard } from '~/components/blogger/blogger.types';
import dayjs from 'dayjs'
const props = defineProps<{
	blog: BlogCard;
}>();
const formatDate = (date: string) => dayjs(date).format('DD MM YYYY');
</script>

<template>
	<UiCard class="w-full animation flex flex-col gap-4 p-5">
		<div class="flex items-center justify-between">
			<UiCardTitle class="text-center">
				{{ props.blog.title }}
			</UiCardTitle>
			<div>
				By: {{ props.blog.creator.name }}
			</div>
		</div>
		<UiCardContent class="w-full flex gap-10 items-start">
			<NuxtImg :src="props.blog.foto1_url" class="w-1/2 h-[250px] rounded" alt="" />
			<div class="flex flex-col gap-3">
				<h2 class="">Description:</h2>
				<p>{{ props.blog.about }}</p>
			</div>
		</UiCardContent>
		<UiCardFooter>
			Created: {{ formatDate(blog.$createdAt) }}
		</UiCardFooter>
	</UiCard>
</template>

<style scoped></style>