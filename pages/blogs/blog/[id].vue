<script setup lang="ts">
import { useBlog } from "@/components/layout/blog/useBlog";


useSeoMeta({
	title: "Blog | Blogger",
});

const route = useRoute();
const blogId = route.params.id as string;

const { blog, aboutWords, isLoading, isError } = useBlog(blogId);

const blogTitle = computed(() => blog?.value?.title ?? "Untitled");
const creatorName = computed(() => blog?.value?.creator?.name ?? "Anonymous");
</script>

<template>
	<main class="p-10 w-full h-full">
		<div v-if="isLoading">Is Loading...</div>
		<section v-else class="flex mb-20 w-full items-start justify-between">
			<h1 class="font-bold bg-white p-1 rounded text-center text-title text-4xl">
				Blogger | {{ blogTitle }}
			</h1>

			<LayoutBlogCreatorInfo :name="creatorName" />
		</section>

		<section id="about" class="w-full flex flex-col items-center">
			<div class="font-bold text-title ">
				<div class="w-full flex justify-center">
					<h2 class="text-4xl mb-3 bg-white p-2 rounded  text-center">About:</h2>
				</div>

				<LayoutBlogAboutWidget v-if="aboutWords" :about-words="aboutWords" />
				<div v-else>Something went wrong</div>
			</div>
		</section>
		<div v-if="isError">{{ errorMessages }}</div>
	</main>
</template>

<style scoped></style>