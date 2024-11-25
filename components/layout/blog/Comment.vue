<script setup lang="ts">
import { formatDate } from '@/components/blogger/formatDate'
const props = defineProps({
	comments: Array,
	default: ''
})
</script>

<template>
	<ul class="">
		<li v-for="comment in props.comments || []" :key="comment.$id"
			class="mb-2 rounded flex p-2 gap-3 border border-2 border-sidebarBg hover:border-colorSidebar">
			<Icon name="ic:outline-comment" class="text-colorSidebar" />

			<p class="w-[840px] px-3 text-white break-words rounded bg-sidebarBg whitespace-normal">{{ comment.text }}</p>

			<p class="self-end text-white rounded p-1 bg-sidebarBg text-[1.4rem]">{{ formatDate(comment.$createdAt) }}</p>
		</li>
	</ul>
</template>

<style scoped></style>