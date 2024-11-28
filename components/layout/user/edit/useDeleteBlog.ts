import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { COLLECTION_BLOGS, DB_ID } from '~/app.constants';
import { DB } from '~/lib/appwrite';

export function useDeleteBlog() {
 const queryClient = useQueryClient();

const mutation = useMutation({
   mutationFn: async (blogId: string) => {
      if (!blogId) throw new Error('Blog ID is required for deletion.');
      await DB.deleteDocument(DB_ID, COLLECTION_BLOGS, blogId);
   },
   onSuccess: () => {
      queryClient.invalidateQueries(['blogs']);
   },
   onError: (error) => {
      console.error('Error deleting blog:', error);
      throw error; 
   },
});

return mutation;
}
