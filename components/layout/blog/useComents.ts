import { useQuery } from "@tanstack/vue-query";
import { DB } from "@/lib/appwrite";
import { Query } from "appwrite";
import { COLLECTION_COMMENTS, DB_ID } from "~/app.constants";

export function useComments(blogId: string){
return useQuery({
   queryKey: ["comments", blogId],
   queryFn: async () => {
      try {
        // Fetch all comments for the given blog ID
      const response = await DB.listDocuments(DB_ID, COLLECTION_COMMENTS, [
         Query.equal("blog", blogId),
      ]);
      console.log("Response from DB.listDocuments:", response); 

      const sortedComments = response.documents.sort((a, b) => {
         const aDate = new Date(a.$createdAt).getTime();
         const bDate = new Date(b.$createdAt).getTime();
         return bDate - aDate; 
      });

      return sortedComments; 
      } catch (error) {
      console.error("Error fetching comments:", error);
      throw error;
      }
   },
   retry: false,
});
}
