<script setup lang="ts">
import { useMutation } from "@tanstack/vue-query";
import { v4 as uuid } from 'uuid';
import { COLLECTION_BLOGS, DB_ID } from "@/app.constants";
import type { BlogCard } from "../../blogger/blogger.types";
import { DB } from "~/lib/appwrite";

const isOpenForm = ref<boolean>(false)

interface BlogForm extends Pick<BlogCard, 'title' | 'about' | 'foto1_url' | 'description1' | 'foto2_url' | 'description2'> { }

const props = defineProps({
	refetch: {
		type: Function,
	}
})

const { handleSubmit, defineField, handleReset } = useForm<BlogForm>()

const [title, titleAttrs] = defineField('title')
const [about, aboutAttrs] = defineField('about')
const [foto1_url, foto1_urlAttrs] = defineField('foto1_url')
const [description1, description1Attrs] = defineField('description1')
const [foto2_url, foto2_urlAttrs] = defineField('foto2_url')
const [description2, description2Attrs] = defineField('description2')

const { mutate, isPending } = useMutation({
	mutationKey: ['create a new blog'],
	mutationFn: (data: BlogForm) => DB.createDocument(DB_ID, COLLECTION_BLOGS, uuid(), data),
	onSuccess() {
		props.refetch && props.refetch()
		handleReset()
	}
})

const onSubmit = handleSubmit(values =>{
	mutate(values)
})
</script>

<template>
	<section class="text-center mb-2">
		<button @click="isOpenForm = !isOpenForm" class="tansition-all opacity-50 hover:opacity-100 hover:text-black">
			<Icon v-if="isOpenForm" class="text-title" name="line-md:arrow-up" size="60" />
			<Icon v-if="!isOpenForm" class="text-title" name="icons8:plus" size="70" />
		</button>

		<form v-if="isOpenForm" @submit="onSubmit" class="form">
			<UiInput />
		</form>
	</section>
</template>

<style scoped></style>