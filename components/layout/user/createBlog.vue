<script setup lang="ts">
import { useMutation } from "@tanstack/vue-query";
import { v4 as uuid } from 'uuid';
import { COLLECTION_BLOGS, DB_ID } from "@/app.constants";
import { DB } from "~/lib/appwrite";
import { useAuthStore } from "@/store/auth.store"; // Import the auth store
import {storage} from "@/lib/appwrite"

const isOpenForm = ref<boolean>(false);

interface BlogForm extends Pick<BlogCard, 'title' | 'about' | 'foto1_url' | 'description1' | 'foto2_url' | 'description2' | 'creator'> { }

const props = defineProps({
	refetch: {
		type: Function,
	}
})

const { handleSubmit, defineField, handleReset, setFieldValue, setValues, values } = useForm<BlogForm>();

const [title, titleAttrs] = defineField('title');
const [about, aboutAttrs] = defineField('about');
const [foto1_url, foto1_urlAttrs] = defineField('foto1_url');
const [description1, description1Attrs] = defineField('description1');
const [foto2_url, foto2_urlAttrs] = defineField('foto2_url');
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
	mutate(values);
});
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
			<UiInput v-model="foto1_url" v-bind="foto1_urlAttrs" placeholder="Foto #1" type="file" />
			<UiTextarea v-model="description1" v-bind="description1Attrs" placeholder="Description #1" type="text" />
			<UiInput v-model="foto2_url" v-bind="foto2_urlAttrs" placeholder="Foto #2" type="file" />
			<UiTextarea v-model="description2" v-bind="description2Attrs" placeholder="Description #2" type="text" />

			<button :disabled="isPending">
				{{ isPending ? 'Loading...' : 'Add' }}
			</button>
		</form>
	</section>
</template>

<style scoped></style>
