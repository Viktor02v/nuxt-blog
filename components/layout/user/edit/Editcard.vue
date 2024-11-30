<script setup lang="ts">
import type { BlogCard } from '~/components/blogger/blogger.types';
import { formatDate } from '@/components/blogger/formatDate'

const props = defineProps<{
	blog: BlogCard;
}>();

</script>

<template>
	<UiCard class="w-full animation flex flex-col gap-4 p-5">
		<div class="flex w-full flex-wrap  md:flex-nowrap items-center justify-center md:justify-between">
			<UiCardTitle class="md:w-full mb-2 md:mb-0">
				<div class="w-1/1 md:w-1/3 flex p-1 overflow-x-auto whitespace-nowrap">
					<p class=" bg-white rounded px-4 py-2 ">
						{{ props.blog.title }}
					</p>
				</div>
			</UiCardTitle>

			<div class="mb:pr-6">
				<div class="flex text-[#d48484] rounded-full w-[150px] justify-center bg-white items-center gap-2">
					<p class="font-light text-[1.2rem]">by:</p>
					<span class="text-[1.5rem]"> {{ props.blog.creator.name }}</span>
				</div>
			</div>
		</div>

		<UiCardContent class="w-full flex flex-wrap md:flex-nowrap justify-center md:justify-normal gap-6 items-start">

			<NuxtImg src="/Blogger.jpg" class="min-w-1/2 h-[200px] md:h-[250px] rounded" alt="" />

			<div class="flex text-[#d48484] bg-white w-[100rem] md:h-[15.5rem] rounded p-2 flex-col gap-1">
				<p class="font-light self-center">Description:</p>
				<span class="text-[1.2rem] md:text-[1.8rem]">{{ props.blog.about }}</span>
			</div>
		</UiCardContent>

		<div class="pl-2 md:pl-6 flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between">
			<UiCardFooter class="flex text-[#d48484] rounded-full mb-5 px-2 md:mb-0 md:w-[280px] justify-center bg-white items-center gap-2">
				<p class="text-[1.2rem] font-light">Created:</p>
				<span class="text-[1.2rem] md:text-[1.5rem]"> {{ formatDate(props.blog.$createdAt) }}</span>
			</UiCardFooter>

			<div class="md:pr-6">
				<NuxtLink :to="`/editing/edit/${blog.$id}`">
					<UiButton
						class="text-[#d48484] text-[1.8rem] flex rounded-full w-[150px] justify-center hover:bg-[#EDEBEB] bg-white items-center gap-2"
						type="button">
						<p class="text-[1.2rem]">Edit</p>
						<Icon name="line-md:edit-filled" size="20" class="text-[#d48484]" />
					</UiButton>
				</NuxtLink>
			</div>
		</div>
	</UiCard>
</template>

<style scoped>
</style>
