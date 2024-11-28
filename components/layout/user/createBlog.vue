<script setup lang="ts">
import { useMutation } from "@tanstack/vue-query";
import { v4 as uuid } from 'uuid';
import { COLLECTION_BLOGS, DB_ID, STORAGE_ID } from "@/app.constants";
import { DB } from "~/lib/appwrite";
import { useAuthStore } from "@/store/auth.store";
import { storage } from "@/lib/appwrite"
import type { BlogCard } from "@/components/blogger/blogger.types";

const authStore = useAuthStore();

const isOpenForm = ref<boolean>(false);

const router = useRouter()

const props = defineProps({
	refetch: {
		type: Function,
	}
})

interface BlogForm extends Pick<BlogCard, 'title' | 'about' | 'foto1_url' | 'description1' | 'foto2_url' | 'description2' | 'creator'> { }

interface InputFileEvent extends Event {
	target: HTMLInputElement;
}

const { handleSubmit, defineField, handleReset, setFieldValue, setValues, values } = useForm<BlogForm>();

const [title, titleAttrs] = defineField('title');
const [about, aboutAttrs] = defineField('about');
const [description1, description1Attrs] = defineField('description1');
const [description2, description2Attrs] = defineField('description2');

const getCurrentUser = () => {
	return authStore.user;
};

const { mutate, isPending } = useMutation({
	mutationKey: ['create a new blog'],
	mutationFn: async (data: BlogForm) => {
		const user = getCurrentUser();
		const creator = user ? { name: user.name, email: user.email, id: user.id } : null;

		const formData = {
			...data,
			creator,
		};

		return DB.createDocument(DB_ID, COLLECTION_BLOGS, uuid(), formData);
	},
	onSuccess() {
		props.refetch && props.refetch();
		handleReset();
	}
});


const { mutate: uploadImage, isPending: isUploadImagePending } = useMutation({
	mutationKey: ["uploadImage"],
	mutationFn: (payload: { file: File; field: keyof BlogForm }) =>
		storage.createFile(STORAGE_ID, uuid(), payload.file),
	onSuccess(data, { field }) {
		const response = storage.getFileDownload(STORAGE_ID, data.$id);
		setFieldValue(field, response); // Dynamically set the correct field
	},
});

function handleFileChange(event: InputFileEvent, field: keyof BlogForm) {
	const file = event.target.files?.[0];
	if (file) {
		uploadImage({ file, field }); // Pass the file and field to the mutation
	}
}

const onSubmit = handleSubmit(values => {
	mutate(values)
	isOpenForm.value = !isOpenForm.value
	alert("Blog was succesfully created")
	router.push('/blogs')
});
</script>

<template>
	<section class="flex flex-col gap-3">
		<button @click="isOpenForm = !isOpenForm" class="transition-all opacity-50 hover:opacity-100 hover:text-black">
			<Icon v-if="isOpenForm" class="text-title" name="line-md:arrow-up" size="60" />
			<Icon v-if="!isOpenForm" class="text-title" name="icons8:plus" size="70" />
		</button>

		<form v-if="isOpenForm" @submit="onSubmit"
			class="animation flex flex-col w-full gap-3 bg-white rounded p-5 border border-sidebarBg">
			<UiInput class="input" v-model="title" v-bind="titleAttrs" placeholder="Title" type="text" />
			<UiInput class="input" v-model="about" v-bind="aboutAttrs" placeholder="About" type="text" />
			<img v-if="values.foto1_url || isUploadImagePending" :src="values.foto1_url" alt="" width="50" height="50"
				class="rounded-full my-4" />
			<UiInput class="input" @change="handleFileChange($event, 'foto1_url')" :disabled="isUploadImagePending"
				placeholder="Foto #1" type="file" />
			<UiTextarea class="input" v-model="description1" v-bind="description1Attrs" placeholder="Description #1"
				type="text" />
			<img v-if="values.foto2_url || isUploadImagePending" :src="values.foto2_url" alt="" width="50" height="50"
				class="rounded-full my-4" />
			<UiInput class="input" @change="handleFileChange($event, 'foto2_url')" :disabled="isUploadImagePending"
				placeholder="Foto #2" type="file" />
			<UiTextarea class="input" v-model="description2" v-bind="description2Attrs" placeholder="Description #2"
				type="text" />

			<div class="flex justify-center">
				<button :disabled="isPending" class=" text-white py-2 px-3 hover:bg-[#f1b4b4] transition-all rounded text-[1.3rem] bg-sidebarBg">
					{{ isPending ? 'Loading...' : 'Create' }}
				</button>
			</div>
		</form>
	</section>
</template>

<style scoped>
@keyframes show {
	from {
		transform: translateY(-35px);
		opacity: 0.4;
	}

	to {
		transform: translateY(0);
		opacity: 1;
	}
}

.animation {
	animation: show 0.3s ease-in-out;
}

.input {
	@apply border border-sidebarBg
}
</style>
