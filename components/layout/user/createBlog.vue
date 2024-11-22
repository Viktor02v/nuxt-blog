<script setup lang="ts">
import { useMutation } from "@tanstack/vue-query";
import { v4 as uuid } from 'uuid';
import { COLLECTION_BLOGS, DB_ID, STORAGE_ID } from "@/app.constants";
import { DB } from "~/lib/appwrite";
import { useAuthStore } from "@/store/auth.store"; // Import the auth store
import { storage } from "@/lib/appwrite"
import type { BlogCard } from "~/components/blogger/blogger.types";

const isOpenForm = ref<boolean>(false);

interface BlogForm extends Pick<BlogCard, 'title' | 'about' | 'foto1_url' | 'description1' | 'foto2_url' | 'description2' | 'creator'> { }


interface InputFileEvent extends Event {
	target: HTMLInputElement;
}

const props = defineProps({
	refetch: {
		type: Function,
	}
})

const { handleSubmit, defineField, handleReset, setFieldValue, setValues, values } = useForm<BlogForm>();

const [title, titleAttrs] = defineField('title');
const [about, aboutAttrs] = defineField('about');
const [description1, description1Attrs] = defineField('description1');
const [description2, description2Attrs] = defineField('description2');

// Access the current user's data from the auth store
const authStore = useAuthStore();

// Function to get the current user
const getCurrentUser = () => {
	// You already have the user data in the store
	return authStore.user;
};

const { mutate, isPending } = useMutation({
	mutationKey: ['create a new blog'],
	mutationFn: async (data: BlogForm) => {
		const user = getCurrentUser();
		const creator = user ? { name: user.name, email: user.email } : null; // Assign the creator information from the store

		// Prepare the form data for submission
		const formData = {
			...data, // Include all form fields
			creator, // Add creator data from the current user
		};

		// Send the data to the DB (Appwrite or other backend)
		return DB.createDocument(DB_ID, COLLECTION_BLOGS, uuid(), formData);
	},
	onSuccess() {
		props.refetch && props.refetch();
		handleReset();
	}
});

const onSubmit = handleSubmit(values => {
	mutate(values)
	isOpenForm.value = !isOpenForm.value
});

const { mutate: uploadImage, isPending: isUploadImagePending } = useMutation({
	mutationKey: ["uploadImage"],
	mutationFn: (file: File) => storage.createFile(STORAGE_ID, uuid(), file),
	onSuccess(data) {
		const response = storage.getFileDownload(STORAGE_ID, data.$id);

		setFieldValue("foto1_url", response);
	},
});

function handleFileChange(event: InputFileEvent) {
	const file = event.target.files?.[0];
	if (file) {
		uploadImage(file);
	}
}

const { mutate: uploadImage2, isPending: isUploadImagePending2 } = useMutation({
	mutationKey: ["uploadImage2"],
	mutationFn: (file: File) => storage.createFile(STORAGE_ID, uuid(), file),
	onSuccess(data) {
		const response = storage.getFileDownload(STORAGE_ID, data.$id);

		setFieldValue("foto2_url", response);
	},
});

function handleFileChange2(event: InputFileEvent) {
	const file = event.target.files?.[0];
	if (file) {
		uploadImage2(file);
	}
}
</script>

<template>
	<section class="text-center mb-2">
		<button @click="isOpenForm = !isOpenForm" class="transition-all opacity-50 hover:opacity-100 hover:text-black">
			<Icon v-if="isOpenForm" class="text-title" name="line-md:arrow-up" size="60" />
			<Icon v-if="!isOpenForm" class="text-title" name="icons8:plus" size="70" />
		</button>

		<form v-if="isOpenForm" @submit="onSubmit" class="form">
			<UiInput v-model="title" v-bind="titleAttrs" placeholder="Title" type="text" />
			<UiInput v-model="about" v-bind="aboutAttrs" placeholder="About" type="text" />
			<UiInput @change="handleFileChange" :disabled="isUploadImagePending" placeholder="Foto #1" type="file" />
			<UiTextarea v-model="description1" v-bind="description1Attrs" placeholder="Description #1" type="text" />
			<UiInput @change="handleFileChange2" :disabled="isUploadImagePending2" placeholder="Foto #2" type="file" />
			<UiTextarea v-model="description2" v-bind="description2Attrs" placeholder="Description #2" type="text" />

			<button :disabled="isPending">
				{{ isPending ? 'Loading...' : 'Add' }}
			</button>
		</form>
	</section>
</template>

<style scoped></style>
