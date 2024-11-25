import { useMutation } from "@tanstack/vue-query";
import { v4 as uuid } from "uuid";
import { DB_ID, COLLECTION_COMMENTS } from "@/app.constants";
import { DB } from "~/lib/appwrite";

export function useCreateComment({ refetch }: { refetch: () => void }, blogId: string) {
const commentRef = ref<string>();

const { mutate } = useMutation({
   mutationKey: ["add comments", commentRef.value],
   mutationFn: () =>
      DB.createDocument(DB_ID, COLLECTION_COMMENTS, uuid(), {
      text: commentRef.value,
      blog: blogId,
      }),
   onSuccess: () => {
      refetch();
      commentRef.value = "";
   },
});

  //   func to reuse it
const writeComment = () => {
   if (!commentRef.value) return;
   mutate();
};
return { writeComment, commentRef };
}