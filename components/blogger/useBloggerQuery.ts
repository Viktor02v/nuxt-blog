import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_BLOGS, DB_ID } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import type { BlogCard } from "./blogger.types";


export function useBloggerQuery() {
	return useQuery({
		queryKey: ['blogs'],
		queryFn: async () => {
			const response = await DB.listDocuments(DB_ID, COLLECTION_BLOGS);
			return response.documents as unknown as BlogCard[];
		},
		select(data) {
			const blogs = data as unknown as BlogCard[];
			return blogs;
		},
	});
}