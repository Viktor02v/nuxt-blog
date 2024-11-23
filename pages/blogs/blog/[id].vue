<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_BLOGS, DB_ID } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import type { BlogCard } from "~/components/blogger/blogger.types";
import { errorMessages } from "vue/compiler-sfc";


useSeoMeta({
	title: 'Blog | Blogger'
})

const route = useRoute();
const blogId = route.params.id as string

const { data: blog, isSuccess, isLoading, isError } = useQuery({
	queryKey: ['get blog', blogId],
	queryFn: () => DB.getDocument(DB_ID, COLLECTION_BLOGS, blogId)
})


</script>

<template>
	<main class="p-10 w-full h-full">
		<h1 class="font-bold  text-center text-title text-4xl mb-10">
			{{ blog?.title }}	| Blogger
		</h1>

		<div v-if="isLoading">Is Loading</div>
		<div>
			<img :src="blog?.foto1_url" alt="">
			{{ blog?.description1 }}
			<img :src="blog?.foto2_url" alt="">
			{{ blog?.description2 }}
			{{ blog?.creator.name }}
			{{ blog?.creator.email }}
		</div>
		<div v-if="isError">{{ errorMessages }}</div>
	</main>
</template>


<style scoped></style>