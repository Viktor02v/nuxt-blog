<script setup lang="ts">
import { formatDate, formatTime } from '@/components/blogger/formatDate'


const authStore = useAuthStore()
const props = defineProps({
	comments: Array,
	default: ''
})
</script>

<template>
	<ul class="">
		<li v-for="comment in props.comments || []" :key="comment.$id" class="mb-10">
			<div class="flex mb-1">
				<div class="flex items-center gap-1 p-1 rounded text-colorSidebar border border-sidebarBg bg-white">
					<span class="text-[1.2rem] font-light">
						by:
					</span>
					<p class="text-[1.3rem]">{{ authStore.user.name }}</p>
				</div>
			</div>
			<div class="mb-2 rounded flex p-2 justify-around border border-2 border-sidebarBg hover:border-colorSidebar">
				<Icon name="ic:outline-comment" class="text-colorSidebar" />

				<p class="w-[840px] px-3 text-white break-words rounded bg-sidebarBg whitespace-normal">{{ comment.text }}
				</p>

				<div class="self-end text-white flex flex-col items-center  rounded p-1 bg-sidebarBg">
					<span class="font-light  text-[1.1rem]">{{ formatTime(comment.$createdAt) }}</span>
					<p class=" text-[1.3rem]">{{ formatDate(comment.$createdAt) }}
					</p>
				</div>
			</div>
		</li>
	</ul>
</template>

<style scoped></style>