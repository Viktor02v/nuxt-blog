import { useQuery } from "@tanstack/vue-query";
import { DB } from "@/lib/appwrite";
import {Query}from "appwrite";
import { COLLECTION_COMMENTS, DB_ID } from "~/app.constants";

// Fetch comments for a specific blog
export function useComments(blogId: string) {
	return useQuery({
		queryKey: ["comments", blogId],
		queryFn: async () => {
			try {
				// Fetch all comments for the given blog ID
				const response = await DB.listDocuments(DB_ID, COLLECTION_COMMENTS, [
					Query.equal("blog", blogId),
				]);
				console.log("Response from DB.listDocuments:", response); // Debug log
				return response.documents; // Return the documents array
			} catch (error) {
				console.error("Error fetching comments:", error); // Log errors
				throw error;
			}
		},
		retry: false, 
	});
}
