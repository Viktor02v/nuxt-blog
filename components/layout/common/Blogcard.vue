<script setup lang="ts">
import type { BlogCard } from '~/components/blogger/blogger.types';
import { formatDate } from '@/components/blogger/formatDate'

const props = defineProps<{
	blog: BlogCard;
}>();

</script>

<template>
	<UiCard class="w-full animation flex flex-col gap-4 p-5">
		<div class="flex w-full  items-center justify-between">
			<UiCardTitle class="w-full">
				<div class="w-1/3 p-1 overflow-x-auto whitespace-nowrap">
					<p>
						{{ props.blog.title }}
					</p>
				</div>
			</UiCardTitle>

			<div class="pr-6">
				<div class="flex text-[#d48484] rounded-full w-[150px] justify-center bg-white items-center gap-2">
					<p class="font-light">by:</p>
					<span> {{ props.blog.creator.name }}</span>
				</div>
			</div>
		</div>

		<UiCardContent class="w-full flex gap-6 items-start">
			<NuxtImg :src="props.blog.foto1_url" class="min-w-1/2 h-[250px] border-4 border-colorSidebar  rounded"
				alt="" />

			<div class="flex text-[#d48484] bg-white w-[47.5rem] h-[15.5rem] rounded p-2 flex-col gap-1">
				<p class="font-light">Description:</p>
				<span>{{ props.blog.about }}</span>
			</div>
		</UiCardContent>

		<div class="pl-6 flex items-center justify-between">
			<UiCardFooter class="flex text-[#d48484] rounded-full w-[280px] justify-center bg-white items-center gap-2">
				<p class="text-[1.3rem] font-light">Created:</p>
				<span class="text-[1.5rem]"> {{ formatDate(props.blog.$createdAt) }}</span>
			</UiCardFooter>

			<div class="pr-6">
				<NuxtLink :to="`/blogs/blog/${blog.$id}`">
					<UiButton
						class="text-[#d48484] text-[1.8rem] flex rounded-full w-[150px] justify-center hover:bg-[#EDEBEB] bg-white items-center gap-2"
						type="button">
						View
						<Icon name="line-md:arrow-right" class="text-[#d48484]"/>
					</UiButton>
				</NuxtLink>
			</div>
		</div>
	</UiCard>
</template>

<style scoped></style>
