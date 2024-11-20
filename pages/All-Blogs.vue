<script setup lang="ts">
useSeoMeta({
	title: 'All Blogs | Blogger'
})
</script>

<template>
	<section class="p-10 w-full h-full">
		<h1 class="font-bold  text-center text-title text-4xl mb-10">
			All Blogs | Blogger
		</h1>
		<UiCard class="w-full h-[400px] flex flex-col gap-4 p-5">
			<div class="flex items-center justify-between">
				<UiCardTitle class="text-center">
					Game Blog
				</UiCardTitle>
				<div>
					By:User Name
				</div>
			</div>
			<UiCardContent class="w-full flex gap-10 items-center">
				<NuxtImg src="/logo-virus.webp" class="w-1/2 h-[250px]" alt="" />
				<div class="">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur voluptatem voluptatum maxime natus
					alias architecto, in fugit, quae ipsam quos a aliquid commodi hic quisquam ea veritatis libero ab?
				</div>
			</UiCardContent>
		</UiCard>
	</section>
</template>


<style scoped></style>