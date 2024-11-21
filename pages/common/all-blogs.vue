<script setup lang="ts">
useSeoMeta({
	title: 'All Blogs | Blogger'
})
</script>

<template>
	<main class="p-10 w-full h-full">
		<h1 class="font-bold  text-center text-title text-4xl mb-10">
			All Blogs | Blogger
		</h1>
		<LayoutCommonBloglist :refetch="refetch" />
	</main>
</template>


<style scoped></style>