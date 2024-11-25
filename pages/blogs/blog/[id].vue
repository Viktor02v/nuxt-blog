<script setup lang="ts">
import { useBlog } from "@/components/layout/blog/useBlog";
import { useComments } from "@/components/layout/blog/useComents";
import { useCreateComment } from "@/components/layout/blog/useCreateComments";
import { formatDate } from '@/components/blogger/formatDate'


useSeoMeta({
	title: `Blog | Blogger`,
});


const route = useRoute();
const blogId = route.params.id as string;

const { blog, aboutWords, isLoading, isError } = useBlog(blogId);

const blogTitle = computed(() => blog?.value?.title ?? "Untitled");
const creatorName = computed(() => blog?.value?.creator?.name ?? "Anonymous");
const blogFoto1 = computed(() => blog?.value?.foto1_url ?? "Anonymous");
const description1 = computed(() => blog?.value?.description1 ?? "Anonymous");
const blogFoto2 = computed(() => blog?.value?.foto2_url ?? "Anonymous");
const description2 = computed(() => blog?.value?.description2 ?? "Anonymous");
const $created = computed(() => blog.value?.$createdAt ?? "Anonymous");

// Comments Logic
const { data: comments, isLoading: isLoadingComments, refetch, isError: isErrorCommetns } = useComments(blogId);

const { commentRef, writeComment } = useCreateComment({ refetch }, blogId);
</script>

<template>
	<main class="p-10 w-full h-full">
		<div v-if="isLoading">Is Loading...</div>
		<section id="blog-info" v-else class="flex mb-20 w-full items-start justify-between">
			<h1 class="font-bold bg-white p-1 rounded text-center text-title text-4xl">
				Blogger | {{ blogTitle }}
			</h1>

			<LayoutBlogCreatorInfo :name="creatorName" />
		</section>

		<section id="about" class="w-full flex flex-col mb-10 items-center">
			<div class="font-bold text-title ">
				<div class="w-full flex justify-center">
					<h2 class="text-4xl mb-3 bg-white p-2 rounded  text-center">About:</h2>
				</div>

				<LayoutBlogAboutWidget v-if="aboutWords" :about-words="aboutWords" />
				<div v-else>Something went wrong</div>
			</div>
		</section>

		<section id="blog" class="w-full animation bg-white p-5 border rounded border-sidebarBg">
			<div class="mb-10">
				<div class="font-bold bg-sidebarBg p-1 rounded text-center text-white text-4xl">{{ blogTitle }}</div>
			</div>

			<LayoutBlogSimpleContentBlock>
				<template #image>
					<img v-if="blogFoto1" :src="blogFoto1" class="w-full text-center" alt="Blog Image" />
				</template>

				<template #description>
					{{ description1 }}
				</template>
			</LayoutBlogSimpleContentBlock>

			<LayoutBlogSimpleContentBlock>
				<template #image>
					<img v-if="blogFoto2" :src="blogFoto2" class="w-full" alt="Blog Image" />
				</template>

				<template #description>
					{{ description2 }}
				</template>
			</LayoutBlogSimpleContentBlock>

			<div class="font-bold bg-sidebarBg p-1 rounded text-center text-white text-4xl">{{ formatDate($created) }}
			</div>
		</section>

		<section id="comments" class="mt-10 w-full p-5 bg-white rounded">
			<h2 class="font-bold bg-white p-1 rounded text-center text-title text-4xl mb-3">Comments</h2>

			<div class="flex items-center gap-5 mb-5">

				<UiInput v-model="commentRef" @keyup.enter="writeComment" placeholder="Write a comment..."
					class="border-2 placeholder-colorSidebar hover:border-colorSidebar transition-all border-sidebarBg bg-white p-5" />

				<button @click="writeComment" class="border border-sidebarBg hover:bg-colorSidebar transition-all  px-8 text-xl py-2 bg-sidebarBg text-[24px] rounded text-white">
					Add
				</button>
			</div>

			<div class="">
				<div v-if="isLoadingComments">Comments are loading</div>
				<div v-else-if="isErrorCommetns">There has been an erro while loading coments</div>
				<LayoutBlogComment v-else :comments=comments />
			</div>

		</section>
		<div v-if="isError">{{ errorMessages }}</div>
	</main>
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