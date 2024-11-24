import { ref, watchEffect } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { DB } from "~/lib/appwrite";
import { COLLECTION_BLOGS, DB_ID } from "~/app.constants";
import type { BlogCard } from "~/components/blogger/blogger.types";

export function useBlog(blogId: string) {
	const aboutWords = ref<string[]>([]);

	const { data: blog, isSuccess, isLoading, isError } = useQuery<BlogCard[]>({
		queryKey: ["get blog", blogId],
		queryFn: () => DB.getDocument(DB_ID, COLLECTION_BLOGS, blogId),
	});

	watchEffect(() => {
		if (isSuccess && blog?.value) {
			const sanitizedAbout = blog.value.about.replace(/[.,!?]/g, "");
			aboutWords.value = sanitizedAbout
				.split(/\s+/)
				.filter((word) => word.trim() !== "")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
		}
	});

	return {
		blog,
		aboutWords,
		isLoading,
		isError,
	};
}
