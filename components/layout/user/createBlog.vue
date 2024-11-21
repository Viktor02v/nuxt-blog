<script setup lang="ts">
import { useMutation } from "@tanstack/vue-query";
import { v4 as uuid } from 'uuid';
import { COLLECTION_BLOGS, DB_ID } from "@/app.constants";
import type { BlogCard } from "../../blogger/blogger.types";

const isOpenForm = ref<boolean>(false)

interface BlogForm extends Pick<BlogCard, 'title' | 'about' | 'foto1_url' | 'description1' | 'foto2_url' | 'description2'> { }

const props = defineProps({
	refetch: {
		type: Function,
	}
})
</script>

<template>
	<section class="text-center mb-2">
		<button @click="isOpenForm = !isOpenForm" class="tansition-all opacity-50 hover:opacity-100 hover:text-black">
			<Icon v-if="isOpenForm" class="text-title" name="line-md:arrow-up" size="60" />
			<Icon v-if="!isOpenForm" class="text-title" name="icons8:plus" size="70" />
		</button>

		<form>

		</form>
	</section>
</template>

<style scoped>
</style>