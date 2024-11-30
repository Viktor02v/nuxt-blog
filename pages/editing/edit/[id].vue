<script setup lang="ts">
import { useBlog } from "@/components/layout/blog/useBlog";
import { formatDate } from '@/components/blogger/formatDate';
import { useDeleteBlog } from '@/components/layout/user/edit/useDeleteBlog';

useSeoMeta({
	title: `Blog | Blogger`,
});
const route = useRoute();
const blogId = route.params.id as string;

const { blog, aboutWords, isLoading, isError, error } = useBlog(blogId);

const blogTitle = computed(() => blog?.value?.title ?? "Untitled");
const creatorName = computed(() => blog?.value?.creator?.name ?? "Anonymous");
const blogFoto1 = computed(() => blog?.value?.foto1_url ?? "Anonymous");
const description1 = computed(() => blog?.value?.description1 ?? "Anonymous");
const blogFoto2 = computed(() => blog?.value?.foto2_url ?? "Anonymous");
const description2 = computed(() => blog?.value?.description2 ?? "Anonymous");
const $created = computed(() => blog.value?.$createdAt ?? "Anonymous");

// Deletion Logic
const { mutate: deleteBlog } = useDeleteBlog();

const handleDelete = () => {
	const router = useRouter();

	if (confirm('Are you sure you want to delete this blog?')) {
		deleteBlog(blogId, {
			onError: (error) => alert(`Failed to delete: ${error.message}`),
			onSuccess: () => {
				alert('Blog deleted successfully!')
				router.push('/blogs')
			}
		});
	}
};
</script>

<template>
	<main class="p-10 w-full h-full">
		<div class="wrapper" v-if="isLoading">
			<Icon name="eos-icons:bubble-loading" size="300" class="text-colorSidebar" />
		</div>
		<div v-else>
			<section id="blog-info" class="flex mb-20 flex-wrap md:flex-nowrap w-full items-start gap-5 md:gap-0 justify-center md:justify-between">
				<h1 class="font-bold bg-white p-1 rounded text-center text-title md:text-4xl">
					Blogger | {{ blogTitle }}
				</h1>

				<LayoutBlogCreatorInfo :name="creatorName" />
			</section>

			<section id="about" class="w-full flex flex-col mb-10 items-center">
				<div class="font-bold text-title ">
					<div class="w-full flex justify-center">
						<h2 class="md:text-4xl mb-3 bg-white p-2 rounded  text-center">Categories:</h2>
					</div>

					<LayoutBlogAboutWidget v-if="aboutWords" :about-words="aboutWords" />
					<div v-else>Something went wrong</div>
				</div>
			</section>

			<section id="blog" class="w-full animation bg-white p-5 border rounded border-sidebarBg">
				<div class="mb-10">
					<div class="font-bold bg-sidebarBg p-1 rounded text-center text-white text-4xl">
						{{ blogTitle }}
					</div>
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

				<div class="font-bold flex items-center justify-between bg-sidebarBg p-1 rounded text-white md:text-4xl">
					<p class="text-[1rem]">{{ formatDate($created) }}</p>
					<UiButton @click="handleDelete" class="ml-auto bg-red-500 border-2 border-white hover:bg-red-600">
						Delete
					</UiButton>
				</div>
			</section>
		</div>

		<!-- Error Message -->
		<div v-if="isError" class="text-red-500 font-bold mt-4">
			{{ error?.message ?? "An error occurred." }}
		</div>
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

.wrapper {
	@apply flex items-center justify-center w-full h-full;
}
</style>
